import { Component, Input } from '@angular/core';
import { ExperienceCard } from '../shared/experience-card/experience-card';
import { Certificate } from '../../../core/services/certificate/certificate';

@Component({
  imports: [ExperienceCard],
  selector: 'app-certificate-card',
  styleUrl: './certificate-card.css',
  templateUrl: './certificate-card.html',
})
export class CertificateCard {
  @Input({ required: true }) certificate!: Certificate;
}
