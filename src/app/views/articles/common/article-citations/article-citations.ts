import { Component, input } from '@angular/core';
import { ArticleCitation } from '../../../../core/services/article/article';

@Component({
  selector: 'app-article-citations',
  templateUrl: './article-citations.html',
  styleUrl: './article-citations.css',
})
export class ArticleCitations {
  citations = input.required<ArticleCitation[]>();

  protected linkFor(citation: ArticleCitation): string | null {
    if (citation.url) return citation.url;
    return citation.doi ? `https://doi.org/${citation.doi}` : null;
  }

  protected linkLabel(citation: ArticleCitation): string {
    return citation.doi ? `DOI: ${citation.doi}` : 'OPEN';
  }
}
