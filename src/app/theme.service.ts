// src/app/theme.service.ts
import { Injectable, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme = new BehaviorSubject<string>('light-theme');
  public theme$ = this.currentTheme.asObservable();

  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.loadInitialTheme();
  }

  private loadInitialTheme(): void {
    // // Check for a saved user preference first
    // const savedTheme = localStorage.getItem('theme');
    // if (savedTheme) {
    //   this.setTheme(savedTheme);
    //   return;
    // }

    // If no preference is saved, detect the system theme
    const darkModeOn =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = darkModeOn ? 'dark-theme' : 'light-theme';
    this.setTheme(initialTheme);

    // Listen for system theme changes and update the theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const newTheme = e.matches ? 'dark-theme' : 'light-theme';
      this.setTheme(newTheme);
    });
  }

  public setTheme(theme: string): void {
    const body = this.document.body;
    this.renderer.removeClass(body, this.currentTheme.value);
    this.renderer.addClass(body, theme);
    localStorage.setItem('theme', theme); // This persists the user's *explicit* choice
    this.currentTheme.next(theme);
  }

  public toggleTheme(): void {
    const newTheme = this.currentTheme.value === 'dark-theme' ? 'light-theme' : 'dark-theme';
    this.setTheme(newTheme);
  }
}
