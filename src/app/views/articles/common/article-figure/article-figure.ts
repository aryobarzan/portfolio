import { Component, HostListener, input, signal } from '@angular/core';

@Component({
  selector: 'app-article-figure',
  templateUrl: './article-figure.html',
  styleUrl: './article-figure.css',
})
export class ArticleFigure {
  src = input.required<string>();
  alt = input.required<string>();
  caption = input<string>();
  /** Shows a small thumbnail that opens a larger version in an overlay when tapped. */
  expandable = input(false);

  protected readonly isOpen = signal(false);

  open(): void {
    this.isOpen.set(true);
  }

  @HostListener('document:keydown.escape')
  close(): void {
    this.isOpen.set(false);
  }
}
