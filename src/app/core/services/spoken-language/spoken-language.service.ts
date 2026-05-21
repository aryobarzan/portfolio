import { Injectable } from '@angular/core';
import { SpokenLanguage, SpokenLanguageProficiency } from './spoken-language';
@Injectable({
  providedIn: 'root',
})
export class SpokenLanguageService {
  readonly spokenLanguages: SpokenLanguage[] = [
    { name: 'Persian', proficiency: SpokenLanguageProficiency.F },
    { name: 'English', proficiency: SpokenLanguageProficiency.C2 },
    { name: 'Luxembourgish', proficiency: SpokenLanguageProficiency.C2 },
    { name: 'French', proficiency: SpokenLanguageProficiency.C2 },
    { name: 'German', proficiency: SpokenLanguageProficiency.C1 },
  ];
}
