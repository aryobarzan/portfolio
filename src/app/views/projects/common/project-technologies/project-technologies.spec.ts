import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTechnologies } from './project-technologies';

describe('ProjectTechnologies', () => {
  let component: ProjectTechnologies;
  let fixture: ComponentFixture<ProjectTechnologies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTechnologies],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectTechnologies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
