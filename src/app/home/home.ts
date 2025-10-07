import { Component } from '@angular/core';
import { BioHeader } from '../bio-header/bio-header';
import { Projects } from "../projects/projects";

@Component({
  selector: 'app-home',
  imports: [BioHeader, Projects],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  isActive(path: string): boolean {
    console.log(window.location);
    return window.location.hash === path;
  }
}
