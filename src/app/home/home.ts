import { Component, inject } from '@angular/core';
import { BioHeader } from '../bio-header/bio-header';
import { Projects } from '../projects/projects';
import { Publications } from '../publications/publications';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactBar } from '../contact-bar/contact-bar';
import { Degrees } from '../degrees/degrees';
import { Skills } from '../skills/skills';
import { ScrollObserver } from '../scroll-observer';
import { NgClass } from '@angular/common';
import { signal } from '@angular/core';

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
    ScrollObserver,
    NgClass,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  activeFragment = signal<string>('about');

  isActive(path: string): boolean {
    return window.location.hash === path;
  }

  onSectionChange(sectionId: string): void {
    this.activeFragment.set(sectionId);
  }
}
