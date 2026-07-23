import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  SpokenLanguage,
  SpokenLanguageProficiency,
} from '../../../core/services/spoken-language/spoken-language';

import { SpokenLanguageCard } from './spoken-language-card';

describe('SpokenLanguageCard', () => {
  let component: SpokenLanguageCard;
  let fixture: ComponentFixture<SpokenLanguageCard>;

  const mockSpokenLanguage: SpokenLanguage = {
    name: 'English',
    proficiency: SpokenLanguageProficiency.C1,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpokenLanguageCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SpokenLanguageCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('spokenLanguage', mockSpokenLanguage);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
