import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFeatureMatrix } from './project-feature-matrix';
import { ProjectFeature } from '../../../../core/services/project/project';

describe('ProjectFeatureMatrix', () => {
  let component: ProjectFeatureMatrix;
  let fixture: ComponentFixture<ProjectFeatureMatrix>;

  const features: ProjectFeature[] = [
    { title: 'Feature A', description: 'Desc A', imagePath: 'a.webp', icon: 'star' },
    { title: 'Feature B', description: 'Desc B', imagePath: 'b.webp', icon: 'bolt' },
    { title: 'Feature C', description: 'Desc C', imagePath: 'c.webp', icon: 'grid_view' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectFeatureMatrix],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectFeatureMatrix);
    component = fixture.componentInstance;
    component.features = features;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render feature tiles', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const tiles = compiled.querySelectorAll('.feature-tile');
    expect(tiles.length).toBe(component.features.length);
  });

  it('should expand a feature on click', () => {
    component.expandFeature(0);
    expect(component.expandedIndex).toBe(0);
  });

  it('should collapse expanded feature', () => {
    component.expandFeature(2);
    expect(component.expandedIndex).toBe(2);
    component.collapseFeature();
    expect(component.expandedIndex).toBeNull();
  });
});
