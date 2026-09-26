import { Component, inject } from '@angular/core';
import { Article } from '../../../core/services/article/article';
import { ArticleService } from '../../../core/services/article/article.service';
import { ArticleCard } from '../common/article-card/article-card';

@Component({
  selector: 'app-articles',
  imports: [ArticleCard],
  templateUrl: './articles-page.html',
  styleUrl: './articles-page.css',
})
export class ArticlesPage {
  articleService: ArticleService = inject(ArticleService);
  articles: Article[] = [];

  constructor() {
    this.articles = this.articleService.articles;
  }

  getAnimationStyle(index: number): { [key: string]: string } {
    // Have the article cards animate sequentially based on their indices.
    return {
      'animation-delay': `${(index + 1) * 100}ms`,
    };
  }
}
