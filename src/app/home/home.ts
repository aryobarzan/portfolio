import { Component } from '@angular/core';
import { BioHeader } from '../bio-header/bio-header';
import { Projects } from "../projects/projects";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [BioHeader, Projects, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  isActive(path: string): boolean {
    return window.location.hash === path;
  }
}
