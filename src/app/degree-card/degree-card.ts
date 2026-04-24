import { Component, Input } from '@angular/core';
import { Degree } from '../degree';
import { ExperienceCard } from '../experience-card/experience-card';

@Component({
  selector: 'app-degree-card',
  imports: [ExperienceCard],
  templateUrl: './degree-card.html',
  styleUrl: './degree-card.css',
})
export class DegreeCard {
  @Input({ required: true }) degree!: Degree;
}
