import { Component } from '@angular/core';
import { Project } from '../project';
import { ProjectsService } from '../projects.service';
import { inject } from '@angular/core';
import { ProjectCard } from "../project-card/project-card";
@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projectsService: ProjectsService = inject(ProjectsService);
  projects: Project[] = []
  constructor() {
    this.projects = this.projectsService.projects
  }
}
