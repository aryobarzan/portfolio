import { Component, inject } from '@angular/core';
import { WorkExperienceService } from '../work-experience.service';
import { WorkExperience } from '../work-experience';
import { WorkExperienceCard } from '../work-experience-card/work-experience-card';
@Component({
  selector: 'app-work-experiences',
  imports: [WorkExperienceCard],
  templateUrl: './work-experiences.html',
  styleUrl: './work-experiences.css',
})
export class WorkExperiences {
  workExperienceService: WorkExperienceService = inject(WorkExperienceService);
  workExperiences: WorkExperience[] = [];

  constructor() {
    this.workExperiences = this.workExperienceService.workExperiences;
  }
}
