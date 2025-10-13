export interface Publication {
  authors: string;
  title: string;
  proceedings: string;
  publisher?: string;
  year: number;
  pages?: string;
  abstract: string;
  links: PublicationLink[];
}

export interface PublicationLink {
  url: string;
  name: string;
  type: 'DOI' | 'PDF' | 'Other';
}
