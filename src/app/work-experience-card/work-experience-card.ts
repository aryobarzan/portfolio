import { Component, Input } from '@angular/core';
import { WorkExperience } from '../work-experience';
import { ExperienceCard } from '../experience-card/experience-card';

@Component({
  selector: 'app-work-experience-card',
  imports: [ExperienceCard],
  templateUrl: './work-experience-card.html',
  styleUrl: './work-experience-card.css',
})
export class WorkExperienceCard {
  @Input({ required: true }) workExperience!: WorkExperience;
}
