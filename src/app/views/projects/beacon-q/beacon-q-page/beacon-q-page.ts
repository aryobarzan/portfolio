import { Component, inject, input } from '@angular/core';
import { Project } from '../../../../core/services/project/project';
import { ProjectService } from '../../../../core/services/project/project.service';
import { ProjectPage } from '../../common/project-page/project-page';

@Component({
  selector: 'app-beacon-q',
  imports: [ProjectPage],
  templateUrl: './beacon-q-page.html',
  styleUrl: './beacon-q-page.css',
})
export class BeaconQPage {
  project: Project;
  projectsService = inject(ProjectService);

  constructor() {
    this.project = this.projectsService.projects.find(
      (project) => project.title === 'BEACON Q',
    ) as Project;
  }
}
