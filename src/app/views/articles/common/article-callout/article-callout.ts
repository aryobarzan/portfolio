import { Component, input } from '@angular/core';

export type ArticleCalloutTone = 'primary' | 'danger' | 'warn';

@Component({
  selector: 'app-article-callout',
  templateUrl: './article-callout.html',
  styleUrl: './article-callout.css',
})
export class ArticleCallout {
  title = input.required<string>();
  icon = input<string>();
  tone = input<ArticleCalloutTone>('primary');
}
