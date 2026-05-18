import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-beacon-q-logo',
  imports: [],
  templateUrl: './beacon-q-logo.html',
  styleUrl: './beacon-q-logo.css',
})
export class BeaconQLogo {
  @Input() size = 50;
}
