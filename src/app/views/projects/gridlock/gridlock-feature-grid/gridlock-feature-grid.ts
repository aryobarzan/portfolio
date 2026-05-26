import { Component, HostListener, inject, signal } from '@angular/core';
import { GridlockService, GridLockFeature } from '../core/gridlock-service';

@Component({
  selector: 'app-gridlock-feature-grid',
  imports: [],
  templateUrl: './gridlock-feature-grid.html',
  styleUrl: './gridlock-feature-grid.css',
})
export class GridlockFeatureGrid {
  private gridlockService = inject(GridlockService);

  readonly features: GridLockFeature[] = this.gridlockService.features;

  expandedIndex: number | null = null;

  /** Tracks the currently selected image for the fullscreen lightbox overlay. */
  readonly selectedImageForOverlay = signal<GridLockFeature | null>(null);

  expandFeature(index: number): void {
    this.expandedIndex = index;
  }

  collapseFeature(): void {
    this.expandedIndex = null;
  }

  /** Opens the image in a fullscreen lightbox overlay. */
  openImageOverlay(feature: GridLockFeature): void {
    this.selectedImageForOverlay.set(feature);
  }

  /** Closes the image lightbox overlay. */
  closeImageOverlay(): void {
    this.selectedImageForOverlay.set(null);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeImageOverlay();
  }
}
