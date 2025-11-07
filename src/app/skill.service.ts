import { Injectable } from '@angular/core';
import { SkillCategory } from './skill-category';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  readonly skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      skills: [
        {
          name: 'Dart',
          url: 'https://dart.dev',
        },
        {
          name: 'Python',
          url: 'https://www.python.org/',
        },
        {
          name: 'Java',
          url: 'https://www.java.com/en/',
        },
        {
          name: 'Swift',
          url: 'https://www.swift.org/',
        },
        {
          name: 'JavaScript',
          url: 'https://web.dev/learn/javascript/welcome',
        },
        {
          name: 'TypeScript',
          url: 'https://www.typescriptlang.org/',
        },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        {
          name: 'Flutter',
          url: 'https://flutter.dev/',
        },
        {
          name: 'UIKit',
          url: 'https://developer.apple.com/documentation/uikit',
        },
        {
          name: 'Angular',
          url: 'https://angular.dev/',
        },
      ],
    },
    {
      title: 'Backend',
      skills: [
        {
          name: 'Node.js',
          url: 'https://nodejs.org/',
        },
        {
          name: 'Firebase',
          url: 'https://firebase.google.com/',
        },
        {
          name: 'FastAPI',
          url: 'https://fastapi.tiangolo.com/',
        },
      ],
    },
    {
      title: 'Databases',
      skills: [
        {
          name: 'MongoDB',
          url: 'https://www.mongodb.com/',
        },
      ],
    },
    {
      title: 'Data Analysis & Visualization',
      skills: [
        {
          name: 'Pandas',
          url: 'https://pandas.pydata.org/',
        },
        {
          name: 'SciPy',
          url: 'https://scipy.org/',
        },
        {
          name: 'NumPy',
          url: 'https://numpy.org/',
        },
        {
          name: 'Matplotlib',
          url: 'https://matplotlib.org/',
        },
        {
          name: 'Seaborn',
          url: 'https://seaborn.pydata.org/',
        },
        {
          name: 'Plotly',
          url: 'https://plotly.com/python/',
        },
      ],
    },

    {
      title: 'CD/CI & DevOps',
      skills: [
        {
          name: 'Git',
          url: 'https://git-scm.com/',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/',
        },
        {
          name: 'GitHub Actions',
          url: 'https://docs.github.com/en/actions',
        },
        {
          name: 'PM2',
          url: 'https://pm2.io/',
        },
        {
          name: 'Docker',
          url: 'https://www.docker.com/',
        },
      ],
    },
  ];
}
