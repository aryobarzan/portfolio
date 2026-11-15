import { Component, inject } from '@angular/core';
import { Project } from '../../../../core/services/project/project';
import { ProjectService } from '../../../../core/services/project/project.service';
import { ProjectHeader } from '../../common/project-header/project-header';
import { ProjectTechnologies } from '../../common/project-technologies/project-technologies';
import { ProjectFeatureMatrix } from '../../common/project-feature-matrix/project-feature-matrix';

@Component({
  imports: [ProjectHeader, ProjectTechnologies, ProjectFeatureMatrix],
  selector: 'app-hope4rosiorii-page',
  styleUrl: './hope4rosiorii-page.css',
  templateUrl: './hope4rosiorii-page.html',
})
export class Hope4rosioriiPage {
  project: Project;
  projectsService = inject(ProjectService);

  constructor() {
    this.project = this.projectsService.projects.find(
      (project) => project.title === 'Hope 4 Rosiorii',
    ) as Project;
  }
}
