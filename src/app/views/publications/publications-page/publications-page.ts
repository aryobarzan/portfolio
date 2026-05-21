import { Component, inject } from '@angular/core';
import { PublicationCard } from '../publication-card/publication-card';
import { PublicationService } from '../../../core/services/publication/publication.service';
import { Publication } from '../../../core/services/publication/publication';

@Component({
  selector: 'app-publications',
  imports: [PublicationCard],
  templateUrl: './publications-page.html',
  styleUrl: './publications-page.css',
})
export class PublicationsPage {
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
            this.activeProjectFilters.includes(relatedProject),
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
