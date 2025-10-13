import { Component, inject } from '@angular/core';
import { DegreeService } from '../degree.service';
import { Degree } from '../degree';
import { DegreeCard } from '../degree-card/degree-card';
@Component({
  selector: 'app-degrees',
  imports: [DegreeCard],
  templateUrl: './degrees.html',
  styleUrl: './degrees.css',
})
export class Degrees {
  degreeService: DegreeService = inject(DegreeService);
  degrees: Degree[] = [];

  constructor() {
    this.degrees = this.degreeService.degrees;
  }
}
