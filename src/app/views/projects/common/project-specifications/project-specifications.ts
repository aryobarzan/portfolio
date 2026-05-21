import { Component, input } from '@angular/core';
import { ProjectSpecification } from '../../../../core/services/project/project';

@Component({
  selector: 'app-project-specifications',
  imports: [],
  templateUrl: './project-specifications.html',
  styleUrl: './project-specifications.css',
})
export class ProjectSpecifications {
  specifications = input.required<ProjectSpecification[]>();
  icon = input<string>();
}
