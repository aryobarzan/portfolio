import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Dartblock } from './dartblock';

describe('Dartblock', () => {
  let component: Dartblock;
  let fixture: ComponentFixture<Dartblock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dartblock],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Dartblock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
