import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Degree } from '../../../core/services/degree/degree';

import { DegreeCard } from './degree-card';

describe('DegreeCard', () => {
  let component: DegreeCard;
  let fixture: ComponentFixture<DegreeCard>;

  const mockDegree: Degree = {
    title: 'BSc Computer Science',
    institution: 'Test University',
    start: '2018',
    end: '2021',
    thesis: 'Test thesis',
    topics: ['Algorithms'],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DegreeCard],
    }).compileComponents();

    fixture = TestBed.createComponent(DegreeCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('degree', mockDegree);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
