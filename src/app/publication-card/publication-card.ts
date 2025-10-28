import { Component, Input } from '@angular/core';
import { Publication } from '../publication';

@Component({
  selector: 'app-publication-card',
  imports: [],
  templateUrl: './publication-card.html',
  styleUrl: './publication-card.scss',
})
export class PublicationCard {
  @Input({ required: true }) publication!: Publication;
  showAbstract: boolean = false;

  onToggleAbstract() {
    this.showAbstract = !this.showAbstract;
  }
}
