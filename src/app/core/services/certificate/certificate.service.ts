import { Service } from '@angular/core';
import { Certificate } from './certificate';

@Service()
export class CertificateService {
  readonly certificates: Certificate[] = [
    {
      title: 'Docker Foundations Professional',
      issuer: 'Docker, Inc.',
      link: 'https://www.linkedin.com/learning/certificates/a8439142611401bf8f77205bf9ad5d63f68afaa4f7e5f6062723e009c22bce7b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BExEZjx7%2FQu6x9C3nXxCMcw%3D%3D',
      year: 2026,
    },
    {
      title: 'Fundamentals of UI/UX Design',
      issuer: 'Microsoft',
      link: 'https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Fverify%2FCUE4IQ7JI1KZ&urlhash=b02P&mt=I25DAbUoLlMfBwBgZz03qCBy6-_ZsMOm2e5hezkuWp-X1NWXk1QmDrH_Np9p9KqY4JBn3PnssziH8E3GGbJV7zJ5zGk&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BExEZjx7%2FQu6x9C3nXxCMcw%3D%3D',
      year: 2026,
    },
    {
      title: 'Technical Support Fundamentals',
      issuer: 'Google',
      link: 'https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Fverify%2FBVNP3EEZEGCA&urlhash=410C&mt=5p4TsmJOrhaW6cDFYKRJeojWC-yzNj1544uZykVmAdYS6qhVQhxI_QxlTCx9Sc1RDLeaJpsmRsOg4vQQYV3Nj4R7qOA&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BExEZjx7%2FQu6x9C3nXxCMcw%3D%3D',
      year: 2026,
    },
  ];
}
