export interface Project {
  title: string;
  id: string;
  description: string;
  shortDescription: string;
  detailRoute: string;
  year: number;
  technologies?: ProjectTechnology[];
  keywords: string[];
  links?: ProjectLink[];
  iconURL?: string;
}

export interface ProjectTechnology {
  name: string;
  isLanguage: boolean;
}

export interface ProjectLink {
  name: string;
  type: 'Details' | 'GitHub' | 'App Store' | 'Play Store' | 'Website' | 'pub.dev' | 'Other';
  url: string;
  isExternal: boolean;
}
