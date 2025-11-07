import { Component, Input } from '@angular/core';
import { SpokenLanguage, SpokenLanguageProficiencyLabels } from '../spoken-language';
@Component({
  selector: 'app-spoken-language-card',
  imports: [],
  templateUrl: './spoken-language-card.html',
  styleUrl: './spoken-language-card.css',
})
export class SpokenLanguageCard {
  @Input({ required: true }) spokenLanguage!: SpokenLanguage;
  SpokenLanguageProficiencyLabels = SpokenLanguageProficiencyLabels;
}
