import { Component } from '@angular/core';

@Component({
  selector: 'app-article-callout-row',
  template: `<div class="article-callout-row"><ng-content></ng-content></div>`,
  styleUrl: './article-callout-row.css',
})
export class ArticleCalloutRow {}
