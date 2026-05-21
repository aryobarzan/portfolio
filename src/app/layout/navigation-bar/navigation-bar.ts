import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.css',
})
export class NavigationBar {
  readonly items: NavigationBarItem[] = [
    { label: 'HOME', icon: 'home', route: '/home' },
    { label: 'PROJECTS', icon: 'person', route: '/projects' },
    { label: 'EXPERIENCE', icon: 'settings', route: '/experience' },
    { label: 'PUBLICATIONS', icon: 'settings', route: '/publications' },
  ];
}

export interface NavigationBarItem {
  label: string;
  icon: string;
  route: string;
}
