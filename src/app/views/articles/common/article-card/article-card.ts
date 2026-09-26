import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../../../core/services/article/article';

@Component({
  selector: 'app-article-card',
  imports: [RouterLink],
  templateUrl: './article-card.html',
  styleUrl: './article-card.css',
})
export class ArticleCard {
  article = input.required<Article>();
  index = input.required<number>();
}
