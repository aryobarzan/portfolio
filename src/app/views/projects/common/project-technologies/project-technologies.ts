import { Component, input } from '@angular/core';
import { ProjectTechnology } from '../../../../core/services/project/project';

@Component({
  selector: 'app-project-technologies',
  imports: [],
  templateUrl: './project-technologies.html',
  styleUrl: './project-technologies.css',
})
export class ProjectTechnologies {
  technologies = input.required<ProjectTechnology[]>();
}
