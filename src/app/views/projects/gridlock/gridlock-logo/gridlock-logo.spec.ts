import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridlockLogo } from './gridlock-logo';

describe('GridlockLogo', () => {
  let component: GridlockLogo;
  let fixture: ComponentFixture<GridlockLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridlockLogo],
    }).compileComponents();

    fixture = TestBed.createComponent(GridlockLogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
