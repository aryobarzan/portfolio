import { Component, inject } from '@angular/core';
import { ArticleTocService } from '../../../../core/services/article/article-toc.service';

@Component({
  selector: 'app-article-toc',
  templateUrl: './article-toc.html',
  styleUrl: './article-toc.css',
})
export class ArticleToc {
  protected readonly toc = inject(ArticleTocService);

  // A bare `#id` href resolves against <base href="/">, i.e. to `/#id`, dropping the current path.
  hrefFor(id: string): string {
    return `${location.pathname}${location.search}#${id}`;
  }

  scrollTo(event: Event, id: string): void {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.toc.setActiveSection(id);
    history.replaceState(history.state, '', this.hrefFor(id));
  }
}
