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
      year: 2025,
      iconURL: 'assets/images/beaconq.jpg',
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
    {
      title: 'DartBlock',
      description: 'Block-based programming framework.',
      technologies: ['Flutter', 'Dart'],
      year: 2023,
      iconURL: 'assets/images/dartblock.jpg',
      links: [
        {
          name: 'GitHub',
          type: 'GitHub',
          url: 'https://play.google.com/store/apps/details?id=lu.uni.coast.beacon_q_app',
        },
      ],
    },
    {
      title: 'Sketchnoting',
      description: 'Note-taking app for iPad, with semantic annotations and search.',
      technologies: ['Swift', 'UIKit'],
      year: 2021,
      iconURL: 'assets/images/sketchnoting.jpg',
      links: [
        {
          name: 'GitHub',
          type: 'GitHub',
          url: 'https://play.google.com/store/apps/details?id=lu.uni.coast.beacon_q_app',
        },
      ],
    },
    {
      title: 'Yactul',
      description: 'Quiz app for mobile, with spaced repetition and integrated learning material.',
      technologies: ['Xamarin', 'C#', 'Flutter', 'Dart'],
      year: 2019,
      iconURL: 'assets/images/yactul.jpg',
      links: [
        {
          name: 'App Store',
          type: 'App Store',
          url: 'https://apps.apple.com/us/app/yactul/id1435998187',
        },
      ],
    },
  ];
}
