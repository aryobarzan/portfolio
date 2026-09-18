import { Component, HostListener, Input, signal } from '@angular/core';
import { ProjectFeature } from '../../../../core/services/project/project';

@Component({
  selector: 'app-project-feature-matrix',
  imports: [],
  templateUrl: './project-feature-matrix.html',
  styleUrl: './project-feature-matrix.css',
})
export class ProjectFeatureMatrix {
  @Input() features: ProjectFeature[] = [];
  @Input() title = 'FEATURE_MATRIX';

  expandedIndex: number | null = null;

  /** Tracks the currently selected image for the fullscreen lightbox overlay. */
  readonly selectedImageForOverlay = signal<ProjectFeature | null>(null);

  expandFeature(index: number): void {
    this.expandedIndex = index;
  }

  collapseFeature(): void {
    this.expandedIndex = null;
  }

  /** Opens the image in a fullscreen lightbox overlay. */
  openImageOverlay(feature: ProjectFeature): void {
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
