import { Component, inject } from '@angular/core';
import { Project } from '../../../../project';
import { ProjectService } from '../../../../project.service';
import { ProjectPage } from '../../common/project-page/project-page';

@Component({
  selector: 'app-yactul-page',
  imports: [ProjectPage],
  templateUrl: './yactul-page.html',
  styleUrl: './yactul-page.css',
})
export class YactulPage {
  project: Project;
  projectsService = inject(ProjectService);

  constructor() {
    this.project = this.projectsService.projects.find(
      (project) => project.title === 'Yactul',
    ) as Project;
  }
}
