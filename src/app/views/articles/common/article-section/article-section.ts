import { Component, DestroyRef, OnInit, inject, input, signal } from '@angular/core';
import { ArticleTocService } from '../../../../core/services/article/article-toc.service';

@Component({
  selector: 'app-article-section',
  templateUrl: './article-section.html',
  styleUrl: './article-section.css',
})
export class ArticleSection implements OnInit {
  title = input.required<string>();
  id = input<string>();

  protected readonly copied = signal(false);
  protected sectionId = '';

  private readonly toc = inject(ArticleTocService, { optional: true });
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.sectionId = this.id() ?? slugify(this.title());
    this.toc?.registerSection({ id: this.sectionId, title: this.title() });
    this.destroyRef.onDestroy(() => this.toc?.unregisterSection(this.sectionId));
  }

  copyLink(): void {
    const url = `${location.origin}${location.pathname}#${this.sectionId}`;
    navigator.clipboard.writeText(url).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 1500);
    });
  }
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
