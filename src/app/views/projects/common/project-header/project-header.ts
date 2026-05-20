import { Component, input } from '@angular/core';
import { MarkdownPipe } from '../../../../pipes/markdown.pipe';
import { AsyncPipe } from '@angular/common';

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
