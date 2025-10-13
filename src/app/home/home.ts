import { Component } from '@angular/core';
import { BioHeader } from '../bio-header/bio-header';
import { Projects } from '../projects/projects';
import { Publications } from '../publications/publications';
import { RouterLink } from '@angular/router';
import { ContactBar } from '../contact-bar/contact-bar';
import { Degrees } from '../degrees/degrees';

@Component({
  selector: 'app-home',
  imports: [BioHeader, Projects, RouterLink, Publications, ContactBar, Degrees],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  isActive(path: string): boolean {
    return window.location.hash === path;
  }
}
