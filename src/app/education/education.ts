import { Component } from '@angular/core';
import { Degrees } from '../degrees/degrees';
import { SpokenLanguages } from '../languages/spoken-languages';

@Component({
  selector: 'app-education',
  imports: [Degrees, SpokenLanguages],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {}
