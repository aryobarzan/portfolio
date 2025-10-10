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
  type: 'GitHub' | 'App Store' | 'Play Store' | 'Website' | 'Other';
  url: string;
}
