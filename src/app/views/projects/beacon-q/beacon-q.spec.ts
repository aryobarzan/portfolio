import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaconQ } from './beacon-q';

describe('BeaconQ', () => {
  let component: BeaconQ;
  let fixture: ComponentFixture<BeaconQ>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeaconQ],
    }).compileComponents();

    fixture = TestBed.createComponent(BeaconQ);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
