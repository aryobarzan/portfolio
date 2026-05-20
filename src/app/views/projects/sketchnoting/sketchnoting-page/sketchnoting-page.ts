import { Component, inject } from '@angular/core';
import { Project } from '../../../../project';
import { ProjectService } from '../../../../project.service';
import { ProjectPage } from '../../common/project-page/project-page';

@Component({
  selector: 'app-sketchnoting-page',
  imports: [ProjectPage],
  templateUrl: './sketchnoting-page.html',
  styleUrl: './sketchnoting-page.css',
})
export class SketchnotingPage {
  project: Project;
  projectsService = inject(ProjectService);

  constructor() {
    this.project = this.projectsService.projects.find(
      (project) => project.title === 'Sketchnoting',
    ) as Project;
  }
}
