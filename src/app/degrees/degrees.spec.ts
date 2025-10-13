import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Degrees } from './degrees';

describe('Degrees', () => {
  let component: Degrees;
  let fixture: ComponentFixture<Degrees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Degrees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Degrees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
