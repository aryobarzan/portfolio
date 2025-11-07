import { Component, inject } from '@angular/core';
import { SpokenLanguageService } from '../spoken-language.service';
import { SpokenLanguage } from '../spoken-language';
import { SpokenLanguageCard } from '../spoken-language-card/spoken-language-card';
@Component({
  selector: 'app-languages',
  imports: [SpokenLanguageCard],
  templateUrl: './spoken-languages.html',
  styleUrl: './spoken-languages.css',
})
export class SpokenLanguages {
  spokenlanguageService: SpokenLanguageService = inject(SpokenLanguageService);
  spokenLanguages: SpokenLanguage[] = [];

  constructor() {
    this.spokenLanguages = this.spokenlanguageService.spokenLanguages;
  }
}
