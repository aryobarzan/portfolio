import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
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

  protected readonly isMenuOpen = signal(false);
  private readonly el = inject(ElementRef);

  toggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  // Close when the user clicks anywhere outside the navbar
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.isMenuOpen.set(false);
    }
  }
}

export interface NavigationBarItem {
  label: string;
  icon: string;
  route: string;
}
