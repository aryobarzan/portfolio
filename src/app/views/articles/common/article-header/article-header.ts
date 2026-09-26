import { AsyncPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MarkdownPipe } from '../../../../core/pipes/markdown.pipe';
import { Article } from '../../../../core/services/article/article';
import { Project } from '../../../../core/services/project/project';

@Component({
  selector: 'app-article-header',
  imports: [MarkdownPipe, AsyncPipe, RouterLink],
  templateUrl: './article-header.html',
  styleUrl: './article-header.css',
})
export class ArticleHeader {
  article = input.required<Article>();
  relatedProject = input<Project>();
}
