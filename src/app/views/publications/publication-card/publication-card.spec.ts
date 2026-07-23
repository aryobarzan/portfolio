import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Publication } from '../../../core/services/publication/publication';

import { PublicationCard } from './publication-card';

describe('PublicationCard', () => {
  let component: PublicationCard;
  let fixture: ComponentFixture<PublicationCard>;

  const mockPublication: Publication = {
    authors: 'Test Author',
    title: 'Test Publication',
    proceedings: 'Test Proceedings',
    year: 2024,
    abstract: 'Test abstract',
    links: [],
    isBestPaper: false,
    doi: '10.0000/test',
    keywords: ['test'],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicationCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicationCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('index', 0);
    fixture.componentRef.setInput('publication', mockPublication);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
