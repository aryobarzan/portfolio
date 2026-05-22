import { Component, input } from '@angular/core';
import { Project } from '../../../../core/services/project/project';
import { ProjectHeader } from '../project-header/project-header';
import { ProjectTechnologies } from '../project-technologies/project-technologies';
import { ProjectSpecifications } from '../project-specifications/project-specifications';
import { ProjectLinks } from '../project-links/project-links';
import { ProjectImagesCarousel } from '../project-images-carousel/project-images-carousel';

@Component({
  selector: 'app-project-page',
  imports: [
    ProjectHeader,
    ProjectTechnologies,
    ProjectSpecifications,
    ProjectLinks,
    ProjectImagesCarousel,
  ],
  templateUrl: './project-page.html',
  styleUrl: './project-page.css',
})
export class ProjectPage {
  project = input.required<Project>();
}
