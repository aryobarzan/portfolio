import { Injectable } from '@angular/core';
import { WorkExperience } from './work-experience';
@Injectable({
  providedIn: 'root',
})
export class WorkExperienceService {
  readonly workExperiences: WorkExperience[] = [
    {
      title: 'Doctoral Researcher',
      description:
        'Developed the new quiz platform "BEACON Q", with advanced features such as adaptive difficulty, review recommendations, recall analysis and various gamification elements. Also developed the new block-based programming framework "DartBlock" which adopts a user interface and experience design tailored for mobile devices, alongside support for quiz integration through automatic program evaluation and difficulty adjustment.',
      startDate: '2021-10-01',
      endDate: '2025-09-30',
      company: 'University of Luxembourg',
      technologies: [
        'Dart',
        'Flutter',
        'JavaScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Firebase',
        'Python',
        'PM2',
        'nginx',
      ],
      responsibilities: [
        'Frontend development: mobile and desktop application "BEACON Q" using cross-platform Flutter framework.',
        'Backend development: RESTful API using Node.js, Express.js, and MongoDB.',
        'Deployment: server hosting on Ubuntu VM with PM2 and nginx, alongside automatic logging and periodic backups.',
        'Publishing: app deployment to the Play Store and App Store, as well as creation of standalone executable with signing for macOS.',
        'Data collection: design of case studies and surveys for students across 6 semesters at University of Luxembourg.',
        'Data analysis: statistical analysis and visualization of collected data using Python.',
        'LLM integration: prototyping of OpenAI GPT for the generation of quiz questions and explanatory resources for lecture topics.',
        'Research: writing of academic papers using LaTeX.',
        'Labs: setting up weekly exercise sheets for programming courses and supervising lab sessions.',
        'Student projects: setting up graded group projects for students and evaluating their work.',
        'Teaching: taking over certain lectures, as well as assisting in the creation of a new course on backend software development (JavaScript, TypeScript, Node.js, MongoDB, GraphQL).',
        'Thesis supervision: supervising 12 Bachelor students and 3 Master students for their final theses.',
      ],
      achievements: [
        'Developed the advanced quiz platform "BEACON Q".',
        'Developed the novel block-based programming framework "DartBlock" for mobile devices.',
        'Collected and analyzed data from over 100 students.',
        'Published 4 peer-reviewed conference papers, with an additional one as the second author.',
      ],
    },
    {
      title: 'Student Job',
      description:
        'Developed a cross-platform version of the mobile quiz application "Yactul" for iOS and Android using Xamarin.Forms and Flutter.',
      startDate: '2018-03-01',
      endDate: '2021-01-01',
      company: 'University of Luxembourg',
      technologies: ['C#', 'Xamarin.Forms', 'Dart', 'Flutter'],
      responsibilities: [
        'Frontend development: rewriting native Android app "Yactul" using cross-platform Xamarin.Forms and later Flutter framework.',
        'Publishing: app deployment to Google Play Store and Apple App Store.',
        'Research: writing of academic paper using LaTeX.',
      ],
      achievements: [
        'Developed and published the new version of "Yactul" to the Play Store and App Store.',
        'Published 1 peer-reviewed conference paper, winning the "Best Paper" award.',
      ],
    },
  ];
}
