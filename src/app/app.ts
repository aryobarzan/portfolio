import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ThemeService } from './core/other/theme.service';
import { NavigationBar } from './layout/navigation-bar/navigation-bar';
import { FilmGrainOverlay } from './layout/film-grain-overlay/film-grain-overlay';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NavigationBar, FilmGrainOverlay],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
  constructor(private themeService: ThemeService) {
    // The ThemeService constructor now handles initial setup based on system preference and listens for changes.
  }
}
