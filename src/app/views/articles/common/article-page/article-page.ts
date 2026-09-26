import { Component, computed, inject, input } from '@angular/core';
import { Article } from '../../../../core/services/article/article';
import { ArticleTocService } from '../../../../core/services/article/article-toc.service';
import { ProjectService } from '../../../../core/services/project/project.service';
import { ArticleBody } from '../article-body/article-body';
import { ArticleCitations } from '../article-citations/article-citations';
import { ArticleHeader } from '../article-header/article-header';
import { ArticleSection } from '../article-section/article-section';
import { ArticleReadingStats } from '../article-reading-stats/article-reading-stats';
import { ArticleToc } from '../article-toc/article-toc';

@Component({
  selector: 'app-article-page',
  imports: [
    ArticleHeader,
    ArticleToc,
    ArticleReadingStats,
    ArticleBody,
    ArticleSection,
    ArticleCitations,
  ],
  providers: [ArticleTocService],
  templateUrl: './article-page.html',
  styleUrl: './article-page.css',
})
export class ArticlePage {
  article = input.required<Article>();

  private readonly projectService = inject(ProjectService);

  protected readonly relatedProject = computed(() => {
    const id = this.article().relatedProjectId;
    return id ? this.projectService.projects.find((project) => project.id === id) : undefined;
  });
}
