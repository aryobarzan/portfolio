import { Component, Input } from '@angular/core';
import { ExperienceCard } from '../shared/experience-card/experience-card';
import { Degree } from '../../../core/services/degree/degree';

@Component({
  selector: 'app-degree-card',
  imports: [ExperienceCard],
  templateUrl: './degree-card.html',
  styleUrl: './degree-card.css',
})
export class DegreeCard {
  @Input({ required: true }) degree!: Degree;
}
