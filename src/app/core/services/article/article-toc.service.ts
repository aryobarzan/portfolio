import { DestroyRef, ElementRef, Injectable, inject, signal } from '@angular/core';

export interface ArticleTocEntry {
  id: string;
  title: string;
}

/**
 * Scoped (not root-provided) per article page — see ArticlePage's `providers`.
 * Sections register themselves for the table of contents; the body element is
 * registered separately so word count + scroll progress can be derived from it.
 */
@Injectable()
export class ArticleTocService {
  private readonly destroyRef = inject(DestroyRef);

  private readonly _sections = signal<ArticleTocEntry[]>([]);
  readonly sections = this._sections.asReadonly();

  private readonly _wordCount = signal(0);
  readonly wordCount = this._wordCount.asReadonly();

  private readonly _progress = signal(0);
  readonly progress = this._progress.asReadonly();

  private readonly _activeId = signal<string | null>(null);
  readonly activeId = this._activeId.asReadonly();

  private bodyEl: HTMLElement | null = null;
  private readonly onScroll = () => {
    this.updateProgress();
    this.updateActiveSection();
  };

  registerSection(entry: ArticleTocEntry): void {
    this._sections.update((sections) => [...sections, entry]);
  }

  unregisterSection(id: string): void {
    this._sections.update((sections) => sections.filter((section) => section.id !== id));
  }

  registerBody(el: ElementRef<HTMLElement>): void {
    this.bodyEl = el.nativeElement;

    const recompute = () => {
      this._wordCount.set(this.countWords(this.bodyEl?.textContent ?? ''));
      this.onScroll();
    };
    recompute();

    // The article body's height can change after this point — markdown is rendered
    // asynchronously and images load in — so we watch for both instead of measuring once.
    const resizeObserver = new ResizeObserver(() => this.onScroll());
    resizeObserver.observe(this.bodyEl);

    const mutationObserver = new MutationObserver(recompute);
    mutationObserver.observe(this.bodyEl, { childList: true, subtree: true, characterData: true });

    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onScroll);

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('resize', this.onScroll);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    });
  }

  setActiveSection(id: string): void {
    this._activeId.set(id);
  }

  // The active section is the last one whose heading has scrolled up to (or past) the
  // sticky-navbar offset; at the very bottom of the page the last section wins, since it
  // may be too short to ever reach that offset.
  private updateActiveSection(): void {
    const sections = this._sections();
    if (sections.length === 0) return;

    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) {
      this._activeId.set(sections[sections.length - 1].id);
      return;
    }

    let active: string | null = null;
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el && el.getBoundingClientRect().top <= 140) {
        active = section.id;
      }
    }
    this._activeId.set(active);
  }

  private countWords(text: string): number {
    const matches = text.trim().match(/\S+/g);
    return matches ? matches.length : 0;
  }

  private updateProgress(): void {
    if (!this.bodyEl) return;
    const rect = this.bodyEl.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    if (total <= 0) {
      this._progress.set(rect.top <= 0 ? 1 : 0);
      return;
    }
    const scrolled = -rect.top;
    this._progress.set(Math.min(1, Math.max(0, scrolled / total)));
  }
}
