import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLinks } from './project-links';

describe('ProjectLinks', () => {
  let component: ProjectLinks;
  let fixture: ComponentFixture<ProjectLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectLinks],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectLinks);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('links', []);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
