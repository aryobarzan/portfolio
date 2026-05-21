import { Component, inject } from '@angular/core';
import { DegreeCard } from '../degree-card/degree-card';
import { DegreeService } from '../../../core/services/degree/degree.service';
import { Degree } from '../../../core/services/degree/degree';

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
