import { Component, input } from '@angular/core';
import { Project, ProjectLink } from '../project';
import { RouterLink } from '@angular/router';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, NgComponentOutlet],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  project = input.required<Project>();
  index = input.required<number>();

  getLinks(isExternal: boolean): ProjectLink[] {
    return this.project().links
      ? this.project().links!.filter((link) => link.isExternal === isExternal)
      : [];
  }

  iconForLink(link?: ProjectLink): string | undefined {
    if (link) {
      if (link.type == 'GitHub') {
        const darkModeOn =
          window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (darkModeOn) {
          return 'assets/images/icon_github_invertocat_white.webp';
        } else {
          return 'assets/images/icon_github_invertocat.svg';
        }
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
