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
      images: [],
    },
    {
      title: 'Photo Classifier',
      id: '28-PC-65',
      detailRoute: '/projects/photo-classifier',
      shortDescription: 'Profile editor with photo classification.',
      description: `Photo Classifier is an experimental project to work with a microservice-based architecture. The backend is composed of several services, including a core FastAPI REST server, a separate FastAPI server handling image classification tasks, an S3 object store (Garage) for storing user profile images and a PostgreSQL database to store user data.
      The entire backend is containerized for easy deployment via Docker. The frontend is built using Angular, which features pages for user authentication, profile editing and user management via an admin view.`,
      keywords: ['Angular', 'FastAPI'],
      technologies: [
        { name: 'TypeScript', isLanguage: true },
        { name: 'Angular', isLanguage: false },
        { name: 'Python', isLanguage: true },
        { name: 'FastAPI', isLanguage: false },
        { name: 'Garage (S3 object store)', isLanguage: false },
        { name: 'PostgreSQL', isLanguage: false },
        { name: 'Docker', isLanguage: false },
        { name: 'ML Models', isLanguage: false },
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
          value: 'open_source',
        },
      ],
      year: 2026,
      iconURL: 'assets/images/photo-classifier.jpg',
      links: [
        {
          name: 'GitHub (Frontend)',
          type: 'GitHub',
          url: 'https://github.com/aryobarzan/photo-classification-angular',
          isExternal: true,
        },
        {
          name: 'GitHub (Backend)',
          type: 'GitHub',
          url: 'https://github.com/aryobarzan/photo_classification-fastapi',
          isExternal: true,
        },
      ],
      images: [],
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
      images: [],
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
      images: [],
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
      images: [
        {
          imagePath: 'assets/projects/sketchnoting/image_1.jpg',
          caption: 'Handwritten note with sketch recognition',
          alt: 'Example handwritten note on iPad with sketch recognition',
        },
        {
          imagePath: 'assets/projects/sketchnoting/image_2.jpg',
          caption: 'PDF document imported into Sketchnoting',
          alt: 'PDF document imported into Sketchnoting',
        },
        {
          imagePath: 'assets/projects/sketchnoting/image_3.jpg',
          caption: 'Related web resources for note based on semantic annotation',
          alt: 'Related web resources for note based on semantic annotation',
        },
        {
          imagePath: 'assets/projects/sketchnoting/image_4.jpg',
          caption: 'Semantic search based on related web resources of note',
          alt: 'Semantic search based on related web resources of note',
        },
        {
          imagePath: 'assets/projects/sketchnoting/image_5.jpg',
          caption: 'Question-answering as part of the search results',
          alt: 'Question-answering as part of the search results',
        },
        {
          imagePath: 'assets/projects/sketchnoting/image_6.jpg',
          caption: 'Force-directed graph visualization for visual search',
          alt: 'Force-directed graph visualization for visual search',
        },
        {
          imagePath: 'assets/projects/sketchnoting/image_7.jpg',
          caption: 'Viewing related notes based on semantic similarity',
          alt: 'Viewing related notes based on semantic similarity',
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
      images: [],
    },
    {
      title: 'Kitty (Discord Bot)',
      id: '89-KD-45',
      detailRoute: '/projects/kitty-bot',
      shortDescription: 'Discord bot for moderation.',
      description: `"Kitty" is a mature, multi-purpose Discord bot. Its features include extensive logging, user customization and moderation.
      Its MusicBrainz API integration enables a music profile feature, allowing users to highlight their favorite songs for a given artist, resulting in a banner rendered by the bot.`,
      keywords: ['Java'],
      technologies: [
        { name: 'Java', isLanguage: true },
        { name: 'sqlite', isLanguage: false },
      ],
      specifications: [
        {
          key: 'release',
          value: '2018',
        },
        {
          key: 'type',
          value: 'bot',
        },
        {
          key: 'access',
          value: 'open_source',
        },
      ],
      year: 2018,
      iconURL: 'assets/images/kitty-bot.jpg',
      links: [
        {
          name: 'GitHub',
          type: 'GitHub',
          url: 'https://github.com/aryobarzan/kitty-discord-bot',
          isExternal: true,
        },
      ],
      images: [],
    },
  ];
}
