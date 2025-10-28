import { Component, inject } from '@angular/core';
import { BioHeader } from '../bio-header/bio-header';
import { Projects } from '../projects/projects';
import { Publications } from '../publications/publications';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactBar } from '../contact-bar/contact-bar';
import { Degrees } from '../degrees/degrees';
import { Skills } from '../skills/skills';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common'; // For [ngClass]

@Component({
  selector: 'app-home',
  imports: [
    BioHeader,
    Projects,
    RouterLink,
    Publications,
    ContactBar,
    Degrees,
    Skills,
    RouterOutlet,
    CommonModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  isActive(path: string): boolean {
    return window.location.hash === path;
  }
  // Use the inject() function to get the ActivatedRoute instance
  route = inject(ActivatedRoute);

  // Use toSignal to convert the fragment observable into a signal
  // The value will be null if no fragment is present
  activeFragment = toSignal(this.route.fragment, { initialValue: null });
}
