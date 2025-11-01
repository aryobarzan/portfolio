export interface Project {
  title: string;
  description: string;
  year: number;
  technologies?: string[];
  links?: ProjectLink[];
  iconURL?: string;
}

export interface ProjectLink {
  name: string;
  type: 'Details' | 'GitHub' | 'App Store' | 'Play Store' | 'Website' | 'pub.dev' | 'Other';
  url: string;
  isExternal: boolean;
}
