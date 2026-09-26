import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  readonly articles: Article[] = [
    {
      id: 'BQ-UX-01',
      title: 'The Study Button Problem: A BEACON Q UI/UX Case Study',
      slug: 'beacon-q-study-button',
      detailRoute: '/articles/beacon-q-study-button',
      summary:
        'A study button that followed every icon-and-color convention still left roughly 90% of the learning material unviewed. Five prototypes and a full semester of classroom data later, the fix had nothing to do with icons, color, or position.',
      abstract:
        'BEACON Q is a self-paced learning app for higher education. It incorporates an adaptive difficulty system and review recommendations based on spaced-repetition, along with extensive feedback and learning resources.',
      tags: ['UX / UI', 'Case Study', 'Mobile'],
      author: 'Aryobarzan Atashpendar',
      publishedDate: '2026-09-26',
      relatedProjectId: '53-BQ-26',
      citations: [
        {
          venue:
            'University of Luxembourg [Faculty of Science, Technology and Medicine], Esch-sur-Alzette, Luxembourg, 2025',
          text: `A. ATASHPENDAR. "BEACON Q: Encouraging Regular Self-Testing via a Personalized and Gamified Quiz App." Unpublished doctoral thesis, Unilu - University of Luxembourg [Faculty of Science, Technology and Medicine], Esch-sur-Alzette, Luxembourg, 2025.
Jury: Jury: S. ROTHKUGEL (Promotor), D. ZAMPUNIERIS (Promotor), R. REUTER (Promotor), S. FRYSINGER (Promotor), and S. PAEK (Promotor).`,
          url: 'https://hdl.handle.net/10993/65895',
          primary: true,
        },
      ],
    },
  ];
}
