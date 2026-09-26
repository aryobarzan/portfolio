import { DecimalPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ArticleTocService } from '../../../../core/services/article/article-toc.service';

@Component({
  selector: 'app-article-reading-stats',
  imports: [DecimalPipe],
  templateUrl: './article-reading-stats.html',
  styleUrl: './article-reading-stats.css',
})
export class ArticleReadingStats {
  protected readonly toc = inject(ArticleTocService);
}
