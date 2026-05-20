import { Component, input } from '@angular/core';
import { ProjectTechnology } from '../../../../project';

@Component({
  selector: 'app-project-technologies',
  imports: [],
  templateUrl: './project-technologies.html',
  styleUrl: './project-technologies.css',
})
export class ProjectTechnologies {
  technologies = input.required<ProjectTechnology[]>();
}
