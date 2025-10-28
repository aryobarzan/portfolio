import { Component } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { inject } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projectService: ProjectService = inject(ProjectService);
  projects: Project[] = [];

  constructor() {
    this.projects = this.projectService.projects;
  }

  getAnimationStyle(index: number): { [key: string]: string } {
    return {
      'animation-delay': `${(index + 1) * 100}ms`,
    };
  }
}
