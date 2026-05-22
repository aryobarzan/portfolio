import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectImagesCarousel } from './project-images-carousel';

describe('ProjectImagesCarousel', () => {
  let component: ProjectImagesCarousel;
  let fixture: ComponentFixture<ProjectImagesCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectImagesCarousel],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectImagesCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
