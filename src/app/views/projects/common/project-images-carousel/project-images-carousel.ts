import { ChangeDetectionStrategy, Component, HostListener, Input, signal } from '@angular/core';
import { ProjectImage } from '../../../../core/services/project/project';

@Component({
  selector: 'app-project-images-carousel',
  standalone: true,
  imports: [],
  templateUrl: './project-images-carousel.html',
  styleUrl: './project-images-carousel.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectImagesCarousel {
  @Input() images: ProjectImage[] = [];

  protected readonly selectedImage = signal<ProjectImage | null>(null);

  select(image: ProjectImage) {
    this.selectedImage.set(image);
  }

  close() {
    this.selectedImage.set(null);
  }

  onWheel(event: WheelEvent, el: HTMLElement) {
    // Map vertical scroll to horizontal so a regular mouse wheel works without Shift
    if (event.deltaY !== 0) {
      event.preventDefault();
      el.scrollLeft += event.deltaY;
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.close();
  }
}
