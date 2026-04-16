import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ThemeService } from './theme.service';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
  constructor(private themeService: ThemeService) {
    // The ThemeService constructor now handles initial setup based on system preference and listens for changes.
  }
}
