import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fedil26Card } from './fedil26-card';

describe('Fedil26Card', () => {
  let component: Fedil26Card;
  let fixture: ComponentFixture<Fedil26Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fedil26Card],
    }).compileComponents();

    fixture = TestBed.createComponent(Fedil26Card);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
