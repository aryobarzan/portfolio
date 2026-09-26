import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { ArticleTocService } from '../../../../core/services/article/article-toc.service';

@Component({
  selector: 'app-article-body',
  template: `<ng-content></ng-content>`,
  styleUrl: './article-body.css',
})
export class ArticleBody implements AfterViewInit {
  private readonly toc = inject(ArticleTocService, { optional: true });
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  ngAfterViewInit(): void {
    this.toc?.registerBody(this.elementRef);
  }
}
