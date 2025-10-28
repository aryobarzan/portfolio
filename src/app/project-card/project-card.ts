import { Component, Input } from '@angular/core';
import { Project } from '../project';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input({ required: true }) project!: Project;
}
