import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridlockPage } from './gridlock-page';

describe('GridlockPage', () => {
  let component: GridlockPage;
  let fixture: ComponentFixture<GridlockPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridlockPage],
    }).compileComponents();

    fixture = TestBed.createComponent(GridlockPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
