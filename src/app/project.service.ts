import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  readonly projects: Project[] = [
    {
      title: 'BEACON Q',
      description: `Mobile quiz app for self-paced learning. 
      Features adaptive difficulty, review recommendations based on spaced-repetition, 
      recall analysis, and extensive gamification elements. Supports coding questions via the block-based framework 'DartBlock'. Used at University of Luxembourg.`,
      technologies: [
        { name: 'Dart', isLanguage: true },
        { name: 'Flutter', isLanguage: false },
        { name: 'Node.js', isLanguage: false },
        { name: 'MongoDB', isLanguage: false },
        { name: 'Firebase', isLanguage: false },
        { name: 'PM2', isLanguage: false },
        { name: 'ChatGPT', isLanguage: false },
      ],
      year: 2025,
      iconURL: 'assets/images/beaconq.jpg',
      links: [
        {
          name: 'Play Store',
          type: 'Play Store',
          url: 'https://play.google.com/store/apps/details?id=lu.uni.coast.beacon_q_app',
          isExternal: true,
        },
        {
          name: 'App Store',
          type: 'App Store',
          url: 'https://apps.apple.com/us/app/beacon-q/id1643852992',
          isExternal: true,
        },
      ],
    },
    {
      title: 'DartBlock',
      description: `Block-based programming framework for mobile. 
        Enables coding via drag-and-drop of visual coding blocks. 
        Supports quiz-related features like automatic code validation and difficulty adjustment, 
        as well as advanced concepts such as exception-throwing and asynchronous programming.`,
      technologies: [
        { name: 'Dart', isLanguage: true },
        { name: 'Flutter', isLanguage: false },
      ],
      year: 2023,
      iconURL: 'assets/images/dartblock.jpg',
      links: [
        {
          name: 'Demo',
          type: 'Details',
          url: '/dartblock',
          isExternal: false,
        },
        {
          name: 'pub.dev',
          type: 'pub.dev',
          url: 'https://pub.dev/packages/dartblock_code',
          isExternal: true,
        },
        {
          name: 'GitHub',
          type: 'GitHub',
          url: 'https://github.com/aryobarzan/dartblock',
          isExternal: true,
        },
      ],
    },
    {
      title: 'Sketchnoting',
      description: `Note-taking app for iPad. 
      Supports handwritten text and sketch recognition. 
      Automatically annotates notes with semantically relevant web resources. 
      Integrates a multi-faceted search, combining lexical, semantic and visual 
      (sketch-based) capabilities, as well as automatic question-answering and 
      visual search visualization using a force-directed graph.`,
      technologies: [
        { name: 'Swift', isLanguage: true },
        { name: 'UIKit', isLanguage: false },
        { name: 'Google ML Kit', isLanguage: false },
      ],
      year: 2021,
      iconURL: 'assets/images/sketchnoting.jpg',
      links: [
        {
          name: 'GitHub',
          type: 'GitHub',
          url: 'https://github.com/aryobarzan/Sketchnoting',
          isExternal: true,
        },
      ],
    },
    {
      title: 'Yactul',
      description:
        'Quiz app for mobile. Includes multiple question types and a spaced-repetition based coaching (endless) mode. Integrates multimedia lecture and web resources for enhanced learning.',
      technologies: [
        { name: 'C#', isLanguage: true },
        { name: 'Xamarin.Forms', isLanguage: false },
        { name: 'Dart', isLanguage: true },
        { name: 'Flutter', isLanguage: false },
      ],
      year: 2019,
      iconURL: 'assets/images/yactul.jpg',
      links: [
        {
          name: 'App Store',
          type: 'App Store',
          url: 'https://apps.apple.com/us/app/yactul/id1435998187',
          isExternal: true,
        },
      ],
    },
  ];
}
