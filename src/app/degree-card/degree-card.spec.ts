import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeCard } from './degree-card';

describe('DegreeCard', () => {
  let component: DegreeCard;
  let fixture: ComponentFixture<DegreeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DegreeCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DegreeCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
