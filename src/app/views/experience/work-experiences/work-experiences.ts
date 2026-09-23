import { Component, inject } from '@angular/core';
import { WorkExperienceService } from '../../../core/services/work-experience/work-experience.service';
import { WorkExperience } from '../../../core/services/work-experience/work-experience';
import { DegreeCard } from '../degree-card/degree-card';
import { WorkExperienceCard } from '../work-experience-card/work-experience-card';
import { DegreeService } from '../../../core/services/degree/degree.service';
import { Degree } from '../../../core/services/degree/degree';
import { CertificateService } from '../../../core/services/certificate/certificate.service';
import { Certificate } from '../../../core/services/certificate/certificate';
import { CertificateCard } from '../certificate-card/certificate-card';

@Component({
  selector: 'app-work-experiences',
  imports: [WorkExperienceCard, DegreeCard, CertificateCard],
  templateUrl: './work-experiences.html',
  styleUrl: './work-experiences.css',
})
export class WorkExperiences {
  workExperienceService: WorkExperienceService = inject(WorkExperienceService);
  workExperiences: WorkExperience[] = [];
  certificateService: CertificateService = inject(CertificateService);
  certificates: Certificate[] = [];
  degreeService: DegreeService = inject(DegreeService);
  degrees: Degree[] = [];

  constructor() {
    this.workExperiences = this.workExperienceService.workExperiences;
    this.certificates = this.certificateService.certificates;
    this.degrees = this.degreeService.degrees;
  }
}
