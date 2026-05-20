import { Component, inject, input } from '@angular/core';
import { ProjectPage } from '../common/project-page/project-page';
import { Project } from '../../../project';
import { ProjectService } from '../../../project.service';

@Component({
  selector: 'app-beacon-q',
  imports: [ProjectPage],
  templateUrl: './beacon-q.html',
  styleUrl: './beacon-q.css',
})
export class BeaconQ {
  project: Project;
  projectsService = inject(ProjectService);

  constructor() {
    this.project = this.projectsService.projects.find(
      (project) => project.title === 'BEACON Q',
    ) as Project;
  }
}
