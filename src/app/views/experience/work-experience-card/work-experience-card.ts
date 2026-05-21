import { Component, Input } from '@angular/core';
import { ExperienceCard } from '../shared/experience-card/experience-card';
import { WorkExperience } from '../../../core/services/work-experience/work-experience';

@Component({
  selector: 'app-work-experience-card',
  imports: [ExperienceCard],
  templateUrl: './work-experience-card.html',
  styleUrl: './work-experience-card.css',
})
export class WorkExperienceCard {
  @Input({ required: true }) workExperience!: WorkExperience;
}
