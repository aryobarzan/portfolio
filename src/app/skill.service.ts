import { Injectable } from '@angular/core';
import { SkillCategory } from './skill-category';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  readonly skillCategories: SkillCategory[] = [
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
        {
          name: 'MySQL',
          url: 'https://www.mysql.com/',
        },
      ],
    },
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
