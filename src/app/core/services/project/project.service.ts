import { Injectable } from '@angular/core';
import { Project, ProjectFeature } from './project';
const hope4rosioriiFeatures: ProjectFeature[] = [
  {
    title: 'Sanity (CMS)',
    description:
      'Dynamic content such as dogs and donation updates are integrated via the content management system Sanity.io. The volunteers of the dog rescue can add, modify and delete dynamic data via the Sanity dashboard.',
    imagePath: 'assets/projects/hope4rosiorii/animals.webp',
    icon: 'grid_view',
  },
  {
    title: 'Form Validation',
    description:
      'The multi-step adoption form includes validation via both React Hook Form and Zod. To reduce spam, e.g., via automated bots, the form includes an invisible field to catch such cases and prevent submissions.',
    imagePath: 'assets/projects/hope4rosiorii/adopt-elli.webp',
    icon: 'check_box',
  },
  {
    title: 'Tests',
    description:
      'A thorough set of tests, including unit tests via Vitest to verify logic such as dog filters, form schemas, server actions, proxies, translations, and so on. End-to-end tests are integrated using Playwright, which simulate things like filling out forms, using filters, opening pages in every supported language and scanning each page for accessibility issues.',
    imagePath: 'assets/projects/hope4rosiorii/vitest.webp',
    icon: 'rule',
  },
  {
    title: 'Localization',
    description:
      'The static content is fully translated to four languages (English, Luxembourgish, German, French) and integrated via next-intl. Dynamic content fetched from Sanity also supports localization, with fallback to Luxembourgish for content not-translated by the volunteers.',
    imagePath: 'assets/projects/hope4rosiorii/donate-lb.webp',
    icon: 'translate',
  },
  {
    title: 'Caching',
    description:
      'Server-side caching for the dynamic content fetched from Sanity, in each supported language. To prevent stale content, a revalidation webhook is used to stay up-to-date with content changes via the Sanity dashboard by volunteers.',
    imagePath: 'assets/projects/hope4rosiorii/animal-elli.webp',
    icon: 'cached',
  },
  {
    title: 'Dynamic Layout',
    description:
      'The website layout adapts to the screen size. Examples include the navigation bar collapsing into a menu on mobile, and grid-based layouts collapsing into a column-view on smaller screens.',
    imagePath: 'assets/projects/hope4rosiorii/mobile-home.webp',
    icon: 'mobile',
  },
  {
    title: 'Mail',
    description:
      'Form submissions lead to emails being sent to the email address of the dog rescue association. This is enabled via Gmail SMTP using nodemailer.',
    imagePath: 'assets/projects/hope4rosiorii/contact.webp',
    icon: 'mail',
  },
  {
    title: 'Preview Card',
    description:
      "When filling out the adoption or contact form, a preview card of the relevant dog is shown on the side to keep an overview of the main characteristics of the animal. Technically this is enabled by the animal's name being passed as a route parameter.",
    imagePath: 'assets/projects/hope4rosiorii/adopt-elli.webp',
    icon: 'preview',
  },
  {
    title: 'Playful Design',
    description:
      'The sole starting point for the project was the existing pink logo of the association, from which the color scheme was created. A playful design was adopted, with dog-related iconography such as paw prints throughout the website, blob-shaped image avatars and eyebrow headings which speak to the visitor. The UI takes into account general guidelines which improve readability and signal importance of elements, such as filled versus outlined buttons, differently colored blocks to distinguish sections of a given page, reactive states for interactive elements, e.g., hover, inactive and active states for buttons, as well as accessibility considerations such as alt image labels, HTML semantic tags and metadata descriptors for each page and important elements of pages.',
    imagePath: 'assets/projects/hope4rosiorii/home-cropped.webp',
    icon: 'pets',
  },
];

const gridlockFeatures: ProjectFeature[] = [
  {
    title: 'Layouts',
    description:
      'Create the room layout with the individual seats, including variable seat sizes and spacing.',
    imagePath: 'assets/projects/gridlock/feature-layouts.webp',
    icon: 'grid_view',
  },
  {
    title: 'Multi-Phase Timers',
    description:
      'Create multi-phase timers, e.g., "Reading Time", "Writing Time" and "Review Time".',
    imagePath: 'assets/projects/gridlock/feature-timers.webp',
    icon: 'timer',
  },
  {
    title: 'Constraints',
    description:
      'Set up detailed constraints which should be taken into account by the GridLock engine when automatically assigning students to seats, such as minimum spacing, placement preferences (e.g., front row), and student pair restrictions.',
    imagePath: 'assets/projects/gridlock/feature-constraints.webp',
    icon: 'rule',
  },
  {
    title: 'Instructions',
    description:
      'Display instructions to the students, with support for Markdown formatting, or enable common instruction shortcuts, such as "ID required" or "Closed Book".',
    imagePath: 'assets/projects/gridlock/feature-instructions.webp',
    icon: 'article',
  },
  {
    title: 'Students',
    description:
      'Manually add students or import them from a file (JSON, CSV) and have their details automatically parsed.',
    imagePath: 'assets/projects/gridlock/feature-students.webp',
    icon: 'person_add',
  },
  {
    title: 'Present',
    description:
      'Project the seating arrangement, instructions and timer to a separate window utilizing a larger display style, perfect for big classrooms.',
    imagePath: 'assets/projects/gridlock/feature-present.webp',
    icon: 'tv_displays',
  },
  {
    title: 'Attendance',
    description:
      "Keep track of each student's attendance to the exam by logging different events, including 'Present', 'Late', 'Hand-in', 'Bathroom Break' and custom incidents.",
    imagePath: 'assets/projects/gridlock/feature-attendance.webp',
    icon: 'check_alert',
  },
  {
    title: 'Audit',
    description:
      "Follow every change to your file via a dedicated 'Audit' tab and a corresponding search field.",
    imagePath: 'assets/projects/gridlock/feature-audit.webp',
    icon: 'search',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  readonly projects: Project[] = [
    {
      title: 'Hope 4 Rosiorii',
      id: '26-HR-44',
      detailRoute: '/projects/hope4rosiorii',
      shortDescription: 'Dog rescue website. (volunteer project)',
      description: `A volunteer project for the non-profit association 'Hope 4 Rosiorii', which is a dog rescue bringing dogs from Romania to Luxembourg for adoption. The website includes a dynamic list of available dogs, a multi-step adoption form, an about page with the list of volunteers, a contact form and a donation page with updates from the team.`,
      keywords: ['Next.js', 'Sanity'],
      technologies: [
        { name: 'TypeScript', isLanguage: true },
        { name: 'Next.js', isLanguage: false },
        { name: 'next-intl', isLanguage: false },
        { name: 'Sanity (CMS)', isLanguage: false },
        { name: 'React Hook Form', isLanguage: false },
        { name: 'Zod', isLanguage: false },
        { name: 'nodemailer', isLanguage: false },
        { name: 'Vitest', isLanguage: false },
        { name: 'Playwright', isLanguage: false },
        { name: 'Vercel', isLanguage: false },
      ],
      specifications: [
        {
          key: 'release',
          value: '2026',
        },
        {
          key: 'type',
          value: 'website',
        },
      ],
      year: 2026,
      iconURL: 'assets/images/hope4rosiorii.webp',
      links: [
        {
          name: 'Preview',
          type: 'Website',
          url: 'https://hope4rosiorii.vercel.app/',
          isExternal: true,
        },
        {
          name: 'GitHub',
          type: 'GitHub',
          url: 'https://github.com/aryobarzan/hope4rosiorii',
          isExternal: true,
        },
      ],
      images: [],
      features: hope4rosioriiFeatures,
    },
    {
      title: 'GridLock',
      id: '97-GL-35',
      detailRoute: '/projects/gridlock',
      shortDescription: 'Exam seating arranger.',
      description: `GridLock enables teachers to automatically set up seating charts for their exam sessions based on various types of constraints. On top of its assignment engine, it also supports multi-phase timers, on-screen instructions, detailed attendance tracking and auditing.  
      To facilitate setup, teachers can import their student lists from JSON or CSV files. Finally, to aid students at the start of the exam, their assigned seat can be highlighted for greater clarity.`,
      keywords: ['SwiftUI', 'Local LLM'],
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
          value: 'app_store',
        },
      ],
      year: 2026,
      iconURL: 'assets/images/gridlock.jpg',
      links: [
        {
          name: 'App Store',
          type: 'App Store',
          url: 'https://apps.apple.com/app/gridlock-exam-manager/id6770634545',
          isExternal: true,
        },
      ],
      images: [],
      features: gridlockFeatures,
    },
    {
      title: 'Photo Classifier',
      id: '28-PC-65',
      detailRoute: '/projects/photo-classifier',
      shortDescription: 'Profile editor with photo classification.',
      description: `Photo Classifier is an experimental project to work with a microservice-based architecture. The backend is composed of several services, including a core FastAPI REST server, a separate FastAPI server handling image classification tasks, an S3 object store (Garage) for storing user profile images and a PostgreSQL database to store user data.
      The entire backend is containerized for easy deployment via Docker. The frontend was built twice using both Next.js and Angular, featuring pages for user authentication, profile editing and user management via an admin view.`,
      keywords: ['Next.js', 'Angular', 'FastAPI', 'Docker'],
      technologies: [
        { name: 'TypeScript', isLanguage: true },
        { name: 'Next.js', isLanguage: false },
        { name: 'React', isLanguage: false },
        { name: 'Angular', isLanguage: false },
        { name: 'Tailwind CSS', isLanguage: false },
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
          name: 'GitHub (Frontend - Next.js)',
          type: 'GitHub',
          url: 'https://github.com/aryobarzan/photo-classification-nextjs',
          isExternal: true,
        },
        {
          name: 'GitHub (Frontend - Angular)',
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
      keywords: ['Flutter', 'Node.js', 'Docker'],
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
      iconURL: 'assets/images/beaconq.webp',
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
