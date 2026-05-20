import { Component, inject } from '@angular/core';
import { ProjectService } from '../../../../project.service';
import { Project } from '../../../../project';
import { ProjectPage } from '../../common/project-page/project-page';

@Component({
  selector: 'app-dartblock-page',
  imports: [ProjectPage],
  templateUrl: './dartblock-page.html',
  styleUrl: './dartblock-page.css',
})
export class DartblockPage {
  project: Project;
  projectsService = inject(ProjectService);

  constructor() {
    this.project = this.projectsService.projects.find(
      (project) => project.title === 'DartBlock',
    ) as Project;
  }
}
