import { Component, inject } from '@angular/core';
import { ProjectService } from '../../../../project.service';
import { Project } from '../../../../project';
import { ProjectPage } from '../../common/project-page/project-page';

@Component({
  selector: 'app-gridlock-page',
  imports: [ProjectPage],
  templateUrl: './gridlock-page.html',
  styleUrl: './gridlock-page.css',
})
export class GridlockPage {
  project: Project;
  projectsService = inject(ProjectService);

  constructor() {
    this.project = this.projectsService.projects.find(
      (project) => project.title === 'GridLock',
    ) as Project;
  }
}
