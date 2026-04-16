import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ContactBar } from '../contact-bar/contact-bar';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, ContactBar],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  readonly items: SidebarItem[] = [
    { label: 'HOME', icon: 'home', route: '/home' },
    { label: 'PROJECTS', icon: 'person', route: '/projects' },
    { label: 'EDUCATION', icon: 'settings', route: '/education' },
    { label: 'EXPERIENCE', icon: 'settings', route: '/experience' },
    { label: 'SKILLS', icon: 'settings', route: '/skills' },
    { label: 'PUBLICATIONS', icon: 'settings', route: '/publications' },
  ];

  isOpen = true;

  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }
}

export interface SidebarItem {
  label: string;
  icon: string;
  route: string;
}
