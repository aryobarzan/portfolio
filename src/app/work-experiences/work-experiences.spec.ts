import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperiences } from './work-experiences';

describe('WorkExperiences', () => {
  let component: WorkExperiences;
  let fixture: ComponentFixture<WorkExperiences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkExperiences]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperiences);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
