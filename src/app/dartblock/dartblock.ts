import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactBar } from '../contact-bar/contact-bar';

// declare var _flutter: any;

@Component({
  selector: 'app-dartblock',
  imports: [RouterLink, RouterOutlet, ContactBar],
  templateUrl: './dartblock.html',
  styleUrl: './dartblock.css',
})
export class Dartblock {
  // This property helps us to know when to hide the circular loading indicator for our iframe.
  isLoading: boolean = true;

  onIframeLoad(): void {
    this.isLoading = false;
  }
}
