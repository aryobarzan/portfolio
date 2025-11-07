import { Component, inject } from '@angular/core';
import { BioHeader } from '../bio-header/bio-header';
import { Projects } from '../projects/projects';
import { Publications } from '../publications/publications';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactBar } from '../contact-bar/contact-bar';
import { Education } from '../education/education';
import { ScrollObserver } from '../scroll-observer';
import { NgClass } from '@angular/common';
import { signal } from '@angular/core';
import { Skills } from '../skills/skills';

@Component({
  selector: 'app-home',
  imports: [
    BioHeader,
    Projects,
    RouterLink,
    Publications,
    ContactBar,
    Education,
    Skills,
    RouterOutlet,
    ScrollObserver,
    NgClass,
    Skills,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
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
