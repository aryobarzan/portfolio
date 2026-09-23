import { Service } from '@angular/core';
import { Certificate } from './certificate';

@Service()
export class CertificateService {
  readonly certificates: Certificate[] = [
    {
      title: 'Docker Foundations Professional',
      issuer: 'Docker, Inc.',
      link: 'https://www.linkedin.com/learning/certificates/a8439142611401bf8f77205bf9ad5d63f68afaa4f7e5f6062723e009c22bce7b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BkEqwPc8dSwS7jdPFKrehTQ%3D%3D',
      year: 2026,
    },
    {
      title: 'Fundamentals of UI/UX Design',
      issuer: 'Microsoft',
      link: 'https://www.coursera.org/account/accomplishments/verify/CUE4IQ7JI1KZ',
      year: 2026,
    },
    {
      title: 'Technical Support Fundamentals',
      issuer: 'Google',
      link: 'https://www.coursera.org/account/accomplishments/verify/BVNP3EEZEGCA',
      year: 2026,
    },
  ];
}
