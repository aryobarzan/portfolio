import { Component } from '@angular/core';
import { BioHeader } from '../bio-header/bio-header';
import { Projects } from '../projects/projects';
import { Publications } from '../publications/publications';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactBar } from '../contact-bar/contact-bar';
import { Education } from '../education/education';
import { ScrollObserver } from '../scroll-observer';
import { NgClass } from '@angular/common';
import { signal } from '@angular/core';
import { SkillCategories } from '../skill-categories/skill-categories';
import { WorkExperiences } from '../work-experiences/work-experiences';

@Component({
  selector: 'app-home',
  imports: [
    BioHeader,
    Projects,
    RouterLink,
    Publications,
    ContactBar,
    Education,
    SkillCategories,
    RouterOutlet,
    ScrollObserver,
    NgClass,
    SkillCategories,
    WorkExperiences,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  navigationTabs = [
    { fragment: 'about', label: 'About' },
    { fragment: 'projects', label: 'Projects' },
    { fragment: 'education', label: 'Education' },
    { fragment: 'experience', label: 'Experience' },
    { fragment: 'skills', label: 'Skills' },
    { fragment: 'publications', label: 'Publications' },
  ];

  activeFragment = signal<string>('about');

  isActive(path: string): boolean {
    return window.location.hash === path;
  }

  onSectionChange(sectionId: string): void {
    this.activeFragment.set(sectionId);
  }

  // for skip-link
  skipToMain(event: Event) {
    event.preventDefault();
    const main = document.getElementById('main');
    if (main) {
      main.focus();
      // show fragment #main in URL:
      history.replaceState(null, '', '#main');
    }
  }
}
