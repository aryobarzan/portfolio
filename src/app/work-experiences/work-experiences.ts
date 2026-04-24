import { Component, inject } from '@angular/core';
import { WorkExperienceService } from '../work-experience.service';
import { WorkExperience } from '../work-experience';
import { WorkExperienceCard } from '../work-experience-card/work-experience-card';
import { DegreeService } from '../degree.service';
import { Degree } from '../degree';
import { DegreeCard } from '../degree-card/degree-card';
@Component({
  selector: 'app-work-experiences',
  imports: [WorkExperienceCard, DegreeCard],
  templateUrl: './work-experiences.html',
  styleUrl: './work-experiences.css',
})
export class WorkExperiences {
  workExperienceService: WorkExperienceService = inject(WorkExperienceService);
  workExperiences: WorkExperience[] = [];
  degreeService: DegreeService = inject(DegreeService);
  degrees: Degree[] = [];

  constructor() {
    this.workExperiences = this.workExperienceService.workExperiences;
    this.degrees = this.degreeService.degrees;
  }
}
