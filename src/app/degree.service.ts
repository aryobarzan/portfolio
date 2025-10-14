import { Injectable } from '@angular/core';
import { Degree } from './degree';

@Injectable({
  providedIn: 'root',
})
export class DegreeService {
  readonly degrees: Degree[] = [
    {
      title: 'PhD in Computer Science',
      institution: 'University of Luxembourg',
      start: '2021',
      end: '2025',
      thesis: 'BEACON Q: Encouraging Regular Self-Testing via a Personalized and Gamified Quiz App',
    },
    {
      title: 'Master in Information and Computer Science',
      institution: 'University of Luxembourg',
      start: '2019',
      end: '2021',
      thesis: 'Reimagining semantic search through word embeddings and machine learning',
    },
    {
      title: 'Bachelor in Computer Science (prof.)',
      institution: 'University of Luxembourg',
      start: '2016',
      end: '2019',
      thesis: 'Enhanced digital note-taking through machine learning and semantic annotation',
    },
  ];
}

// BEST PAPER AWARD
// FONT
