import { Type } from '@angular/core';

export interface Project {
  title: string;
  id: string;
  description: string;
  shortDescription: string;
  detailRoute: string;
  year: number;
  technologies?: ProjectTechnology[];
  specifications: ProjectSpecification[];
  keywords: string[];
  links?: ProjectLink[];
  iconURL?: string;
  logoComponent?: Type<unknown>;
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

export interface ProjectSpecification {
  key: string;
  value: string;
}
