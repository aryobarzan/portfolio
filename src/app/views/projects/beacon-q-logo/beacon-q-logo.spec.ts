import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaconQLogo } from './beacon-q-logo';

describe('BeaconQLogo', () => {
  let component: BeaconQLogo;
  let fixture: ComponentFixture<BeaconQLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeaconQLogo],
    }).compileComponents();

    fixture = TestBed.createComponent(BeaconQLogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
