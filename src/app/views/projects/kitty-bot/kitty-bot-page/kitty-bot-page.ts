import { Component, inject } from '@angular/core';
import { ProjectPage } from '../../common/project-page/project-page';
import { Project } from '../../../../core/services/project/project';
import { ProjectService } from '../../../../core/services/project/project.service';

@Component({
  selector: 'app-kitty-bot-page',
  imports: [ProjectPage],
  templateUrl: './kitty-bot-page.html',
  styleUrl: './kitty-bot-page.css',
})
export class KittyBotPage {
  project: Project;
  projectsService = inject(ProjectService);

  constructor() {
    this.project = this.projectsService.projects.find(
      (project) => project.title === 'Kitty (Discord Bot)',
    ) as Project;
  }
}
