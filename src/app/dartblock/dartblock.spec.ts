import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dartblock } from './dartblock';

describe('Dartblock', () => {
  let component: Dartblock;
  let fixture: ComponentFixture<Dartblock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dartblock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dartblock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
