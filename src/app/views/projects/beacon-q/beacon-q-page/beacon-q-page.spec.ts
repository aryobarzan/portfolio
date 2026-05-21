import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaconQPage } from './beacon-q-page';

describe('BeaconQ', () => {
  let component: BeaconQPage;
  let fixture: ComponentFixture<BeaconQPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeaconQPage],
    }).compileComponents();

    fixture = TestBed.createComponent(BeaconQPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
