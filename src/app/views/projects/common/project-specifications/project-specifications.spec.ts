import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSpecifications } from './project-specifications';

describe('ProjectSpecifications', () => {
  let component: ProjectSpecifications;
  let fixture: ComponentFixture<ProjectSpecifications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectSpecifications],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectSpecifications);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('specifications', []);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
