import { Component, input } from '@angular/core';
import { Project } from '../../../../project';
import { ProjectHeader } from '../project-header/project-header';
import { ProjectTechnologies } from '../project-technologies/project-technologies';
import { ProjectSpecifications } from '../project-specifications/project-specifications';
import { ProjectLinks } from '../project-links/project-links';

@Component({
  selector: 'app-project-page',
  imports: [ProjectHeader, ProjectTechnologies, ProjectSpecifications, ProjectLinks],
  templateUrl: './project-page.html',
  styleUrl: './project-page.css',
})
export class ProjectPage {
  project = input.required<Project>();
}
