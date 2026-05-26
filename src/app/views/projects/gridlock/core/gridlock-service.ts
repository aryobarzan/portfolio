import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GridlockService {
  readonly features: GridLockFeature[] = [
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
}

export interface GridLockFeature {
  title: string;
  description: string;
  imagePath: string;
  icon: string;
}
