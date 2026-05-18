import { Component } from '@angular/core';

@Component({
  selector: 'app-gridlock-logo',
  imports: [],
  templateUrl: './gridlock-logo.html',
  styleUrl: './gridlock-logo.css',
})
export class GridlockLogo {
  // Map coordinates out directly to feed CSS variables cleanly
  cells = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    row: Math.floor(i / 4), // Values: 0, 1, 2, 3
    col: i % 4, // Values: 0, 1, 2, 3
  }));
}
