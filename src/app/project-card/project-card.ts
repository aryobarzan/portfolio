import { Component, Input } from '@angular/core';
import { Project, ProjectLink } from '../project';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input({ required: true }) project!: Project;

  iconForLink(link?: ProjectLink): string | undefined {
    if (link) {
      if (link.type == 'GitHub') {
        return 'assets/images/icon_github_invertocat.svg';
      } else if (link.type == 'pub.dev') {
        return 'assets/images/icon_dart.svg';
      } else if (link.type == 'App Store') {
        return 'assets/images/icon_app_store.svg';
      } else if (link.type == 'Play Store') {
        return 'assets/images/icon_play_store.svg';
      }
    }
    return;
  }
}
