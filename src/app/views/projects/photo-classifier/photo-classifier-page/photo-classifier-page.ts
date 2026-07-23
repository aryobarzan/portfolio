import { Component, inject } from '@angular/core';
import { Project } from '../../../../core/services/project/project';
import { ProjectService } from '../../../../core/services/project/project.service';
import { ProjectPage } from '../../common/project-page/project-page';

@Component({
  selector: 'app-photo-classifier-page',
  imports: [ProjectPage],
  templateUrl: './photo-classifier-page.html',
  styleUrl: './photo-classifier-page.css',
})
export class PhotoClassifierPage {
  project: Project;
  projectsService = inject(ProjectService);

  constructor() {
    this.project = this.projectsService.projects.find(
      (project) => project.title === 'Photo Classifier',
    ) as Project;
  }
}
