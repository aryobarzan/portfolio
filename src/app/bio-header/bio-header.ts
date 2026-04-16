import { Component } from '@angular/core';
import { MarkdownPipe } from '../pipes/markdown.pipe';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-bio-header',
  imports: [MarkdownPipe, AsyncPipe],
  templateUrl: './bio-header.html',
  styleUrl: './bio-header.css',
})
export class BioHeader {
  readonly biography: string = `Hi! I'm a **full-stack developer**, primarily focused on mobile platforms, though I have also delved into web app development.    
  \\
  I'm interested in keeping up with the latest tech, including popular frameworks such as **Flutter**, **Node.js**, **FastAPI** and **MongoDB**.  
  My practical experience stretches along the entire app pipeline, including: UI/UX and technical design, frontend (mobile, desktop, web) and backend (API server, database) development, testing, documentation, hosting, automatic logging and backups, publishing (app stores, signed executables).  
  \\
  My recent projects were an advanced quiz platform (**BEACON Q**) and a new block-based programming framework (**DartBlock**), both of which were researched and developed as part of my PhD. I'm always eager and quick to learn to work with other frameworks and languages as needed.`;
}
