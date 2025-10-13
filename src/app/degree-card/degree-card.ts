import { Component, Input } from '@angular/core';
import { Degree } from '../degree';

@Component({
  selector: 'app-degree-card',
  imports: [],
  templateUrl: './degree-card.html',
  styleUrl: './degree-card.css',
})
export class DegreeCard {
  @Input({ required: true }) degree!: Degree;
}
