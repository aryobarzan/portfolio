import { Component, input } from '@angular/core';
import { ProjectLink } from '../../../../project';

@Component({
  selector: 'app-project-links',
  imports: [],
  templateUrl: './project-links.html',
  styleUrl: './project-links.css',
})
export class ProjectLinks {
  links = input.required<ProjectLink[]>();
}
