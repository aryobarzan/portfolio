import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { ProjectService } from '../../../core/services/project/project.service';
import { Project } from '../../../core/services/project/project';
@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage {
  projectService: ProjectService = inject(ProjectService);
  projects: Project[] = [];

  constructor() {
    this.projects = this.projectService.projects;
  }

  getAnimationStyle(index: number): { [key: string]: string } {
    // Have the project cards animate sequentially based on their indices.
    return {
      'animation-delay': `${(index + 1) * 100}ms`,
    };
  }
}
