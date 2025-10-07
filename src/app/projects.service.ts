import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  readonly projects: Project[] = [
    {
      title: 'BEACON Q',
      description: 'Mobile quiz app.',
      technologies: ["Flutter", "Dart", "MongoDB", "Node.js", "Express", "Firebase Messaging"],
      year: 2023,
      playStoreLink: "https://play.google.com/store/apps/details?id=lu.uni.coast.beacon_q_app",
      appStoreLink: "https://apps.apple.com/us/app/beacon-q/id1643852992",
    }]
}
