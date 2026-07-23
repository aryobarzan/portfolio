import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLockPrivacyPolicyPage } from './privacy-policy';

describe('GridLockPrivacyPolicyPage', () => {
  let component: GridLockPrivacyPolicyPage;
  let fixture: ComponentFixture<GridLockPrivacyPolicyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridLockPrivacyPolicyPage],
    }).compileComponents();

    fixture = TestBed.createComponent(GridLockPrivacyPolicyPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
