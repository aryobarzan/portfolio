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

  constructor() {
    this.publications = this.publicationService.publications;
  }
}
