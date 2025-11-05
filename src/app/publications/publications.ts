import { Component, inject } from '@angular/core';
import { Publication } from '../publication';
import { PublicationService } from '../publication.service';
import { PublicationCard } from '../publication-card/publication-card';

@Component({
  selector: 'app-publications',
  imports: [PublicationCard],
  templateUrl: './publications.html',
  styleUrl: './publications.scss',
})
export class Publications {
  publicationService: PublicationService = inject(PublicationService);
  publications: Publication[] = [];
  projectNames: string[] = [];
  activeProjectFilters: string[] = [];

  constructor() {
    this.publications = this.publicationService.publications;
    this.projectNames = [
      ...new Set(this.publications.map((publication) => publication.relatedProjects ?? []).flat()),
    ];
  }

  isProjectFilterActive(projectName: string): boolean {
    return this.activeProjectFilters.includes(projectName);
  }

  toggleProjectFilter(projectName: string) {
    if (this.activeProjectFilters.includes(projectName)) {
      const index = this.activeProjectFilters.indexOf(projectName);
      if (index > -1) {
        this.activeProjectFilters.splice(index, 1);
      }
    } else {
      this.activeProjectFilters.push(projectName);
    }
  }

  getFilteredPublications(): Publication[] {
    if (this.activeProjectFilters.length == 0) {
      return this.publications;
    } else {
      var filteredPublications = [];
      for (let publication of this.publications) {
        if (publication.relatedProjects) {
          let intersection = publication.relatedProjects.filter((relatedProject) =>
            this.activeProjectFilters.includes(relatedProject)
          );
          if (intersection.length == this.activeProjectFilters.length) {
            filteredPublications.push(publication);
          }
        }
      }
      return filteredPublications;
    }
  }
}
