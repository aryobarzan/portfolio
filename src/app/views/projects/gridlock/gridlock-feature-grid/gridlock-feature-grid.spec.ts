import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridlockFeatureGrid } from './gridlock-feature-grid';

describe('GridlockFeatureGrid', () => {
  let component: GridlockFeatureGrid;
  let fixture: ComponentFixture<GridlockFeatureGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridlockFeatureGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(GridlockFeatureGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render feature tiles', () => {
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
