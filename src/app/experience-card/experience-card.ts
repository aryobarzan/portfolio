import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  imports: [DatePipe],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.css',
})
export class ExperienceCard {
  icon = input.required<string>();
  highlighted = input.required<boolean>();
  title = input.required<string>();
  subtitle = input.required<string>();
  startDate = input.required<string>();
  endDate = input<string>();
  completionTitle = input<string>('COMPLETED');

  isRecent(): boolean {
    if (this.endDate() === undefined) {
      return true; // Ongoing experience is considered recent
    }
    const currentDate = new Date();
    const end = new Date(this.endDate()!);
    return currentDate > end && currentDate.getFullYear() - end.getFullYear() < 2;
  }

  isCompleted(): boolean {
    if (!this.endDate()) {
      return false; // Ongoing experience is not completed
    }
    const currentDate = new Date();
    const end = new Date(this.endDate()!);
    return currentDate > end;
  }
}
