import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHeader } from './project-header';

describe('ProjectHeader', () => {
  let component: ProjectHeader;
  let fixture: ComponentFixture<ProjectHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectHeader);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', 'test-id');
    fixture.componentRef.setInput('title', 'Test title');
    fixture.componentRef.setInput('description', 'Test description');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
