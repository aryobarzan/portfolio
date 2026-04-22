import { Component, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, timer } from 'rxjs';
import { SkillCategories } from '../skill-categories/skill-categories';

@Component({
  selector: 'app-bio-header',
  imports: [SkillCategories],
  templateUrl: './bio-header.html',
  styleUrl: './bio-header.css',
})
export class BioHeader {
  // Simulated latency signal that updates every 2 seconds with a random value between 0 and 100.
  // - timer(0, 2000) creates an observable that emits a value immediately and then every 2 seconds
  // - pipe(...) allows us to transform the emitted values using operators
  // - map(() => Math.floor(Math.random() * 100)) transforms each emitted value into a random number between 0 and 100
  // - toSignal(...) converts the observable into a signal that can be used in the template and which requires no manual subscription management
  latency: Signal<number> = toSignal(
    timer(0, 2000).pipe(map(() => Math.floor(Math.random() * 100))),
    { initialValue: 40 },
  );
}
