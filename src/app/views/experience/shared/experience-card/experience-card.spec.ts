import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCard } from './experience-card';

describe('ExperienceCard', () => {
  let component: ExperienceCard;
  let fixture: ComponentFixture<ExperienceCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('icon', 'assets/images/icon.svg');
    fixture.componentRef.setInput('highlighted', false);
    fixture.componentRef.setInput('title', 'Test title');
    fixture.componentRef.setInput('subtitle', 'Test subtitle');
    fixture.componentRef.setInput('startDate', '2021-01-01');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
