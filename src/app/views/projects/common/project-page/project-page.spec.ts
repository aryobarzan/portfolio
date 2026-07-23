import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Project } from '../../../../core/services/project/project';

import { ProjectPage } from './project-page';

describe('ProjectPage', () => {
  let component: ProjectPage;
  let fixture: ComponentFixture<ProjectPage>;

  const mockProject: Project = {
    title: 'Test Project',
    id: 'test-id',
    description: 'Test description',
    shortDescription: 'Short description',
    detailRoute: '/projects/test',
    year: 2024,
    specifications: [],
    keywords: [],
    images: [],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectPage);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('project', mockProject);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
