import { ChangeDetectionStrategy, Component } from '@angular/core';
// inspiration: https://stackoverflow.com/a/79938394/11249322
@Component({
  selector: 'app-film-grain-overlay',
  standalone: true,
  templateUrl: './film-grain-overlay.html',
  styleUrl: './film-grain-overlay.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmGrainOverlay {}
