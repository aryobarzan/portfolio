import { Component, inject } from '@angular/core';
import { ProjectService } from '../../../../core/services/project/project.service';
import { Project } from '../../../../core/services/project/project';
import { ProjectHeader } from '../../common/project-header/project-header';
import { ProjectTechnologies } from '../../common/project-technologies/project-technologies';
import { GridlockFeatureGrid } from '../gridlock-feature-grid/gridlock-feature-grid';

@Component({
  selector: 'app-gridlock-page',
  imports: [ProjectHeader, ProjectTechnologies, GridlockFeatureGrid],
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
