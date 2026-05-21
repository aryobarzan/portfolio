import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fedil26 } from './fedil26';

describe('Fedil26', () => {
  let component: Fedil26;
  let fixture: ComponentFixture<Fedil26>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fedil26],
    }).compileComponents();

    fixture = TestBed.createComponent(Fedil26);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
