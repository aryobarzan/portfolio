export interface Article {
  id: string;
  title: string;
  slug: string;
  detailRoute: string;
  /** Short teaser, shown below the title and on the article's card in the list. */
  summary: string;
  /** Optional abstract, shown in the header below the summary, in a dimmer color. Markdown. */
  abstract?: string;
  tags: string[];
  author: string;
  affiliation?: string;
  publishedDate: string;
  /** Optional id of an associated Project (see ProjectService) to cross-link from the header. */
  relatedProjectId?: string;
  coverImage?: string;
  /** Rendered as a "Citations" section at the bottom of the article. */
  citations?: ArticleCitation[];
}

export interface ArticleCitation {
  /** Venue/publication name, shown as the citation's heading. */
  venue: string;
  /** The formatted reference text. */
  text: string;
  /** links to https://doi.org/<doi> unless `url` is set. */
  doi?: string;
  url?: string;
  /** Renders the link as a filled button instead of the default text button. */
  primary?: boolean;
}
