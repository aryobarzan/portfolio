import { Injectable } from '@angular/core';
import { SkillCategory } from './skill-category';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  readonly skillCategories: SkillCategory[] = [
    {
      title: 'LANGUAGES',
      skills: [
        {
          name: 'Dart',
          url: 'https://dart.dev',
          level: 'high',
        },
        {
          name: 'Python',
          url: 'https://www.python.org/',
          level: 'high',
        },
        {
          name: 'Java',
          url: 'https://www.java.com/en/',
          level: 'med',
        },
        {
          name: 'Swift',
          url: 'https://www.swift.org/',
          level: 'med',
        },
        {
          name: 'JavaScript',
          url: 'https://web.dev/learn/javascript/welcome',
          level: 'med',
        },
        {
          name: 'TypeScript',
          url: 'https://www.typescriptlang.org/',
          level: 'med',
        },
      ],
    },
    {
      title: 'FRONTEND',
      skills: [
        {
          name: 'Flutter',
          url: 'https://flutter.dev/',
          level: 'high',
        },
        {
          name: 'SwiftUI',
          url: 'https://developer.apple.com/documentation/swiftui',
          level: 'med',
        },
        {
          name: 'Angular',
          url: 'https://angular.dev/',
          level: 'med',
        },
      ],
    },
    {
      title: 'BACKEND',
      skills: [
        {
          name: 'Node.js',
          url: 'https://nodejs.org/',
          level: 'high',
        },
        {
          name: 'Firebase',
          url: 'https://firebase.google.com/',
          level: 'med',
        },
        {
          name: 'FastAPI',
          url: 'https://fastapi.tiangolo.com/',
          level: 'low',
        },
      ],
    },
    {
      title: 'DATABASES',
      skills: [
        {
          name: 'MongoDB',
          url: 'https://www.mongodb.com/',
          level: 'high',
        },
        {
          name: 'PostgreSQL',
          url: 'https://www.postgresql.org/',
          level: 'low',
        },
      ],
    },
    {
      title: 'DATA ANALYSIS',
      skills: [
        {
          name: 'Pandas',
          url: 'https://pandas.pydata.org/',
          level: 'med',
        },
        {
          name: 'SciPy',
          url: 'https://scipy.org/',
          level: 'med',
        },
        {
          name: 'NumPy',
          url: 'https://numpy.org/',
          level: 'med',
        },
        {
          name: 'Matplotlib',
          url: 'https://matplotlib.org/',
          level: 'med',
        },
        {
          name: 'Seaborn',
          url: 'https://seaborn.pydata.org/',
          level: 'med',
        },
        {
          name: 'Plotly',
          url: 'https://plotly.com/python/',
          level: 'med',
        },
      ],
    },

    {
      title: 'CD/CI & DEVOPS',
      skills: [
        {
          name: 'Git',
          url: 'https://git-scm.com/',
          level: 'high',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/',
          level: 'high',
        },
        {
          name: 'GitHub Actions',
          url: 'https://docs.github.com/en/actions',
          level: 'low',
        },
        {
          name: 'PM2',
          url: 'https://pm2.io/',
          level: 'low',
        },
        {
          name: 'Docker',
          url: 'https://www.docker.com/',
          level: 'low',
        },
      ],
    },
  ];
}
