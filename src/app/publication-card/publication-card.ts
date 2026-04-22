import { Component, input } from '@angular/core';
import { Publication } from '../publication';

@Component({
  selector: 'app-publication-card',
  imports: [],
  templateUrl: './publication-card.html',
  styleUrl: './publication-card.css',
})
export class PublicationCard {
  index = input.required<number>();
  publication = input.required<Publication>();
  showAbstract: boolean = false;

  onToggleAbstract() {
    this.showAbstract = !this.showAbstract;
  }
}
