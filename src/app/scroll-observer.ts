import {
  Directive,
  EventEmitter,
  Output,
  ElementRef,
  OnInit,
  OnDestroy,
  Input,
} from '@angular/core';
// Attribute directive: modify behavior of HTML element it is applied to
@Directive({
  selector: '[appScrollObserver]',
  standalone: true,
})
// This directive helps to observe whenever the user scrolls through a given page and certain <section> elements are reached based on their "id" attribute.
export class ScrollObserver implements OnInit, OnDestroy {
  @Input() threshold: number = 0.0;

  // Emit the id of the section that has been intersected, i.e., scrolled to/past.
  @Output() sectionChange = new EventEmitter<string>();
  // A standard browser API not specific to Angular.
  private observer!: IntersectionObserver;
  // "el" gives us access to the HTML element this directive is applied to.
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    let options = {
      root: null,
      // '-90%' affects the 'bottom' property of the full viewport.
      // Essentially, if the height of the viewport is 100%, then we shrink it bottom-up (negative value for "bottom") to a 10% viewport.
      // This provides a pseudo "line" which acts as the detection cut-off.
      rootMargin: '0px 0px -90% 0px',
      // Because of our line detection approach, we go for a low threshold.
      threshold: this.threshold,
    };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.sectionChange.emit(entry.target.id);
        }
      });
    }, options);

    // "nativeElement" is necessary due to InteractionObserver requiring the raw DOM element.
    // "querySelectorAll" retrieves every HTML element within the parent "el" element matching the given selector pattern.
    // Here, we check HTML elements of type "section" which have a specified value for their "id" attribute.
    const sections = this.el.nativeElement.querySelectorAll('section[id]');
    // We observe each section within the parent "el" element.
    sections.forEach((section: Element) => {
      this.observer.observe(section);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
