import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkExperience } from '../../../core/services/work-experience/work-experience';

import { WorkExperienceCard } from './work-experience-card';

describe('WorkExperienceCard', () => {
  let component: WorkExperienceCard;
  let fixture: ComponentFixture<WorkExperienceCard>;

  const mockWorkExperience: WorkExperience = {
    title: 'Software Engineer',
    icon: 'assets/images/icon.svg',
    highlighted: false,
    description: 'Test description',
    startDate: '2021-01-01',
    company: 'Test Company',
    technologies: ['TypeScript'],
    responsibilities: ['Building things'],
    achievements: ['Shipped things'],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkExperienceCard],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkExperienceCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('workExperience', mockWorkExperience);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
