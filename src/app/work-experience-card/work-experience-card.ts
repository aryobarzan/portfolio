import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { WorkExperience } from '../work-experience';
@Component({
  selector: 'app-work-experience-card',
  imports: [DatePipe],
  templateUrl: './work-experience-card.html',
  styleUrl: './work-experience-card.css',
})
export class WorkExperienceCard {
  @Input({ required: true }) workExperience!: WorkExperience;
}
