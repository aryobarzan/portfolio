import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  readonly projects: Project[] = [
    {
      title: 'BEACON Q',
      description: 'Personalized and gamified mobile quiz app.',
      technologies: ['Flutter', 'Dart', 'MongoDB', 'Node.js', 'Express', 'Firebase Messaging'],
      year: 2023,
      links: [
        {
          name: 'Play Store',
          type: 'Play Store',
          url: 'https://play.google.com/store/apps/details?id=lu.uni.coast.beacon_q_app',
        },
        {
          name: 'App Store',
          type: 'App Store',
          url: 'https://apps.apple.com/us/app/beacon-q/id1643852992',
        },
      ],
    },
  ];
}
