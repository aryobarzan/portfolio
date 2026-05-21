import { Component, input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MarkdownPipe } from '../../../../core/pipes/markdown.pipe';

@Component({
  selector: 'app-project-header',
  imports: [MarkdownPipe, AsyncPipe],
  templateUrl: './project-header.html',
  styleUrl: './project-header.css',
})
export class ProjectHeader {
  id = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
}
