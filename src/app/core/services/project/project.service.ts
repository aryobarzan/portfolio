import { Injectable } from '@angular/core';
import { Project } from './project';
import { GridlockLogo } from '../../../views/projects/gridlock/gridlock-logo/gridlock-logo';
import { BeaconQLogo } from '../../../views/projects/beacon-q/beacon-q-logo/beacon-q-logo';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  readonly projects: Project[] = [
    {
      title: 'GridLock',
      id: '97-GL-35',
      detailRoute: '/projects/gridlock',
      shortDescription: 'Exam seating arranger.',
      description: `GridLock enables teachers to automatically set up seating charts for their exam sessions based on various types of constraints. On top of its assignment engine, it also supports multi-phase timers, on-screen instructions, detailed attendance tracking and auditing.  
      To facilitate setup, teachers can import their student lists from JSON or CSV files. Finally, to aid students at the start of the exam, their assigned seat can be highlighted for greater clarity.`,
      keywords: ['SwiftUI'],
      technologies: [
        { name: 'Swift', isLanguage: true },
        { name: 'SwiftUI', isLanguage: false },
      ],
      specifications: [
        {
          key: 'release',
          value: '2026',
        },
        {
          key: 'type',
          value: 'app',
        },
        {
          key: 'access',
          value: 'mac_app_store',
        },
      ],
      year: 2026,
      iconURL: 'assets/images/gridlock.jpg',
      logoComponent: GridlockLogo,
      links: [
        {
          name: 'App Store',
          type: 'App Store',
          url: 'https://apps.apple.com/app/gridlock-exam-manager/id6770634545',
          isExternal: true,
        },
      ],
    },
    {
      title: 'BEACON Q',
      id: '53-BQ-26',
      detailRoute: '/projects/beaconq',
      shortDescription: 'Quiz platform for self-paced learning.',
      description: `BEACON Q is a feature-packed quiz platform for self-paced learning. Its core functionality includes an adaptive difficulty system for its activities, review recommendations based on spaced-repetition, and recall analysis for exam preparation.  
      To encourage regular self-testing, the platform integrates an set of gamification elements, including a bespoke "patron" system which offers a more personal experience.  
      In addition to multiple-choice questions, the DartBlock framework enables the inclusion of block-based coding questions in BEACON Q.`,
      keywords: ['Flutter', 'Node.js'],
      technologies: [
        { name: 'Dart', isLanguage: true },
        { name: 'Flutter', isLanguage: false },
        { name: 'TypeScript', isLanguage: true },
        { name: 'Node.js', isLanguage: false },
        { name: 'MongoDB', isLanguage: false },
        { name: 'Firebase', isLanguage: false },
        { name: 'Docker', isLanguage: false },
        { name: 'PM2', isLanguage: false },
        { name: 'OpenAI GPT', isLanguage: false },
      ],
      year: 2025,
      logoComponent: BeaconQLogo,
      specifications: [
        {
          key: 'release',
          value: '2022',
        },
        {
          key: 'last_updated',
          value: '2026',
        },
        {
          key: 'type',
          value: 'app',
        },
        {
          key: 'access',
          value: 'app_stores',
        },
      ],
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
        {
          name: 'GitHub',
          type: 'GitHub',
          url: 'https://github.com/aryobarzan/beaconq-backend-node',
          isExternal: true,
        },
      ],
    },
    {
      title: 'DartBlock',
      id: '03-DB-11',
      detailRoute: '/projects/dartblock',
      shortDescription: 'Block-based programming framework for mobile.',
      description: `DartBlock is a block-based programming framework, with a mobile-first UI. It offers basic building blocks, including variables, conditionals and loops, as well as custom functions with support for recursion.  
      Targeting older learners, its execution engine is designed with exception-throwing in mind.  
      Additionally, to aid with the inclusion of DartBlock in quiz-related settings, the framework features automatic code evaluation and difficulty adjustment.`,
      keywords: ['Flutter'],
      technologies: [
        { name: 'Dart', isLanguage: true },
        { name: 'Flutter', isLanguage: false },
      ],
      year: 2023,
      specifications: [
        {
          key: 'release',
          value: '2023',
        },
        {
          key: 'last_updated',
          value: '2026',
        },
        {
          key: 'type',
          value: 'framework',
        },
        {
          key: 'access',
          value: 'open_source',
        },
      ],
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
      id: '96-SKN-01',
      detailRoute: '/projects/sketchnoting',
      shortDescription: 'Note-taking app for iPad, with semantic annotations.',
      description: `Sketchnoting is a note-taking app for iPad. Supporting both handwritten text and sketch recognition, it also automatically annotates the content of the notes with semantically relevant web resources.  
      Furthermore, its multi-faceted search combines lexical, semantic and visual capabilities, as well as automatic question-answering and search result visualization using a force-directed graph.`,
      keywords: ['UIKit'],
      technologies: [
        { name: 'Swift', isLanguage: true },
        { name: 'UIKit', isLanguage: false },
        { name: 'Google ML Kit', isLanguage: false },
      ],
      year: 2021,
      specifications: [
        {
          key: 'release',
          value: '2021',
        },
        {
          key: 'type',
          value: 'app',
        },
        {
          key: 'access',
          value: 'open_source',
        },
      ],
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
      id: '76-YCT-64',
      detailRoute: '/projects/yactul',
      shortDescription: 'Offline quiz app for self-paced learning.',
      description: `Yactul is a lightweight, offline-only quiz app for mobile. It supports multiple question types and a coaching mode based on spaced-repetition, while also integrating multimedia lecture and web resources for enhanced learning.  
        Originally developed for iOS and Android using the cross-platform framework Xamarin.Forms, it was later ported to the Flutter framework.`,
      keywords: ['Xamarin.Forms'],
      technologies: [
        { name: 'C#', isLanguage: true },
        { name: 'Xamarin.Forms', isLanguage: false },
        { name: 'Dart', isLanguage: true },
        { name: 'Flutter', isLanguage: false },
      ],
      year: 2019,
      specifications: [
        {
          key: 'release',
          value: '2019',
        },
        {
          key: 'last_updated',
          value: '2024',
        },
        {
          key: 'type',
          value: 'app',
        },
        {
          key: 'access',
          value: 'ios_app_store',
        },
      ],
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
