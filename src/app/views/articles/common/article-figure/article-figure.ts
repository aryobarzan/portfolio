import { Component, HostListener, input, signal } from '@angular/core';
import { CloudinaryPipe } from '../../../../core/pipes/cloudinary.pipe';

@Component({
  selector: 'app-article-figure',
  templateUrl: './article-figure.html',
  styleUrl: './article-figure.css',
  imports: [CloudinaryPipe],
})
export class ArticleFigure {
  src = input.required<string>();
  alt = input.required<string>();
  caption = input<string>();
  /** Shows a small thumbnail that opens a larger version in an overlay when tapped. */
  expandable = input(false);
  /** Intrinsic size of the image; lets the browser reserve its space before it loads (avoids layout shift). */
  width = input<number>();
  height = input<number>();

  // Small images are shown as a thumbnail, so there is no point downloading the full-size version.
  protected get thumbWidth(): number {
    return this.expandable() ? 480 : 1200;
  }

  protected readonly isOpen = signal(false);

  open(): void {
    this.isOpen.set(true);
  }

  @HostListener('document:keydown.escape')
  close(): void {
    this.isOpen.set(false);
  }
}
