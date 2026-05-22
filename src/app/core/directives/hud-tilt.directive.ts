import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appHudTilt]',
  standalone: true,
  // Applied on the host element of this attribute directive
  host: {
    // transform ensures the element gets its own GPU layer
    '[style.will-change]': '"transform"',
    '[style.transition]': 'transitionStyle',
  },
})
export class HudTiltDirective implements AfterViewInit, OnDestroy {
  // max rotation
  @Input() tiltIntensity = 1;

  // lower = more distortion
  @Input() tiltPerspective = 1000;

  // duration of smoothing transition
  @Input() tiltDuration = '0.1s';

  protected get transitionStyle() {
    return `transform ${this.tiltDuration} ease-out`;
  }

  private readonly el = inject(ElementRef<HTMLElement>);

  // Pending rotation values written by mousemove, read by rAF
  private pendingRotateX = 0;
  private pendingRotateY = 0;

  // 0 means no frame is scheduled; non-zero = frame ID to cancel
  private requestedAnimationFrameId = 0;

  ngAfterViewInit() {
    // Set perspective on the parent so the 3D transform is rendered correctly.
    // Perspective must live on the PARENT of the transformed element — if it
    // were on the element itself, the effect would be self-referential and flat.
    const parent = this.el.nativeElement.parentElement;
    if (parent) {
      parent.style.perspective = `${this.tiltPerspective}px`;
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();

    // Normalise cursor position to 0–1 within the element
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    // Map to rotation: centre (0.5) = 0°, edges = ±tiltIntensity
    this.pendingRotateX = (0.5 - y) * this.tiltIntensity; // positive = tilt top toward viewer
    this.pendingRotateY = (x - 0.5) * this.tiltIntensity; // positive = tilt right toward viewer

    // Skip scheduling if a frame is already queued. This is an optimization, as the mouse movement can exceed the 60FPS rendered by the browser
    if (this.requestedAnimationFrameId) return;

    this.requestedAnimationFrameId = requestAnimationFrame(() => {
      this.el.nativeElement.style.transform = `rotateX(${this.pendingRotateX}deg) rotateY(${this.pendingRotateY}deg)`;
      this.requestedAnimationFrameId = 0;
    });
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // Cancel any in-flight frame so a stale rotation isn't written after reset
    cancelAnimationFrame(this.requestedAnimationFrameId);
    this.requestedAnimationFrameId = 0;
    this.el.nativeElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.requestedAnimationFrameId);
  }
}
