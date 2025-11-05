export interface Project {
  title: string;
  description: string;
  year: number;
  technologies?: ProjectTechnology[];
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
