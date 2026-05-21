import { Component, inject } from '@angular/core';
import { SpokenLanguageService } from '../../../core/services/spoken-language/spoken-language.service';
import { SpokenLanguage } from '../../../core/services/spoken-language/spoken-language';
import { SpokenLanguageCard } from '../spoken-language-card/spoken-language-card';

@Component({
  selector: 'app-languages',
  imports: [SpokenLanguageCard],
  templateUrl: './spoken-languages-container.html',
  styleUrl: './spoken-languages-container.css',
})
export class SpokenLanguagesContainer {
  spokenlanguageService: SpokenLanguageService = inject(SpokenLanguageService);
  spokenLanguages: SpokenLanguage[] = [];

  constructor() {
    this.spokenLanguages = this.spokenlanguageService.spokenLanguages;
  }
}
