import { Component, inject } from '@angular/core';
import { Project } from '../../../../core/services/project/project';
import { ProjectService } from '../../../../core/services/project/project.service';
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
