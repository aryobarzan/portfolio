import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Project } from '../../../core/services/project/project';

import { ProjectCard } from './project-card';

describe('ProjectCard', () => {
  let component: ProjectCard;
  let fixture: ComponentFixture<ProjectCard>;

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
      imports: [ProjectCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('project', mockProject);
    fixture.componentRef.setInput('index', 0);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
