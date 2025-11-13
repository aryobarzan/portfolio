import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceCard } from './work-experience-card';

describe('WorkExperienceCard', () => {
  let component: WorkExperienceCard;
  let fixture: ComponentFixture<WorkExperienceCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkExperienceCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
