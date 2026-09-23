import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Certificate } from '../../../core/services/certificate/certificate';
import { CertificateCard } from './certificate-card';

describe('CertificateCard', () => {
  let component: CertificateCard;
  let fixture: ComponentFixture<CertificateCard>;

  const mockCertificate: Certificate = {
    title: 'Test Certificate',
    issuer: 'Test Issuer',
    link: 'https://example.com/certificate',
    year: 2021,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('certificate', mockCertificate);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
