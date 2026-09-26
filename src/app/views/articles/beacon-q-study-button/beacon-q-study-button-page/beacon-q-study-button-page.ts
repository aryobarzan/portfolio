import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Article } from '../../../../core/services/article/article';
import { ArticleService } from '../../../../core/services/article/article.service';
import { MarkdownPipe } from '../../../../core/pipes/markdown.pipe';
import { ArticleFigure } from '../../common/article-figure/article-figure';
import { ArticlePage } from '../../common/article-page/article-page';
import { ArticleSection } from '../../common/article-section/article-section';
import { ArticleCallout } from '../../common/article-callout/article-callout';
import { ArticleCalloutRow } from '../../common/article-callout-row/article-callout-row';

@Component({
  selector: 'app-beacon-q-study-button-article',
  imports: [
    ArticlePage,
    ArticleSection,
    ArticleFigure,
    MarkdownPipe,
    AsyncPipe,
    ArticleCallout,
    ArticleCalloutRow,
  ],
  templateUrl: './beacon-q-study-button-page.html',
  styleUrl: './beacon-q-study-button-page.css',
})
export class BeaconQStudyButtonPage {
  private readonly articleService = inject(ArticleService);

  article: Article = this.articleService.articles.find(
    (article) => article.slug === 'beacon-q-study-button',
  ) as Article;

  private readonly imageBase = 'https://res.cloudinary.com/jnv7oicy/image/upload';

  readonly images = {
    v1: `${this.imageBase}/v1790418705/Screenshot_20240314-213225.png`,
    v2: `${this.imageBase}/v1790380252/Screenshot_20240308-081619.png`,
    v3: `${this.imageBase}/v1790418706/Screenshot_2024-05-31_at_22.38.48.png`,
    v4: `${this.imageBase}/v1790418706/Screenshot_2024-05-31_at_22.35.56.png`,
    v5: `${this.imageBase}/v1790418705/Screenshot_20241105-223745.png`,
    results: `${this.imageBase}/v1790418705/Screenshot_2026-09-26_121159.png`,
  };

  // Joined with two trailing spaces + newline (markdown hard break) so editors can't strip them.
  readonly overviewMarkdown = [
    '**Role:** Solo developer — built the entire platform, including UX/UI design, prototyping, and data analysis.',
    '**Timeline:** Under a year to first working prototype, tested with students; a new version shipped each subsequent semester over 3 years.',
    '**Tools:** Pen and paper, Figma, Flutter.',
  ].join('  \n');

  readonly contextMarkdown = `At its core, BEACON Q acts as a self-testing app for students, thanks to its replayable quizzes and adaptive difficulty algorithm. Its premise rests on the testing effect: the idea that testing a learner on a set of concepts improves their long-term retention more than simply restudying the material.

Testing alone, however, isn't enough: learners still need to study the material at least once, or restudy it after repeated quiz failures.

To address this, I built learning material directly into the app, hoping to encourage studying alongside self-testing so students wouldn't need to fall back on separate lecture notes.

This learning material is available throughout the app, including on dedicated lecture pages. Students aren't required to play quizzes to access it — they can study topics independently before attempting the testing activities.

One scenario matters most for additional studying: right after a student answers a question incorrectly. In that moment, it's not enough to just show the correct answer and prevent them from encoding wrong information — I also wanted to prompt them to briefly review the relevant learning material before moving on. This matters even more because BEACON Q automatically re-schedules activities within the same play session: if a student answers question X incorrectly, they may see another attempt at that same question after a short gap.`;

  readonly challengeMarkdown = `The play page is a dense view with an extensive set of information on display, both when answering and when reviewing the correction. The core UX/UI challenge came down to one question:

- Where should the learning material live on this page?

I judged any solution against two criteria:

- **Non-intrusive**: the testing experience needed to remain the student's main focus.
  - The components needed to answer the question — the question itself, supplementary images, etc. — couldn't be pushed aside.
  - The correction of the student's answer needed to stay front and center, since encoding the correct information is the priority.
- **Available**: the relevant learning material needed to be easy to reach.
  - Students shouldn't have to leave the play session and navigate to a separate page to access learning resources.
  - When reviewing learning material within the play page, students shouldn't lose their original context — the question and their answer needed to stay at least partially visible as a reminder of what prompted the review.`;

  readonly problemMarkdown = `The obvious solution seemed simple: place a small, dedicated button somewhere on the play page that fetches and displays the relevant learning material for that question.

That's the approach I shipped first (V1) — and the problem became clear after a full semester of use: study rates were exceptionally low. In one university class, students logged only 321 total views across all learning resources in the app. With an average class size of 50 students, and roughly 12 lectures × 5 topics = 60 topics available per student over the semester, 321 views works out to about 6.4 views per student — barely 10% of the material available to them.`;

  readonly v1Markdown = `**V1** — I placed an icon-only button in the top toolbar of the play page:

- I used the familiar "read more" symbol from the Google Material icon set.
- I styled it as a filled Material IconButton, giving it more visual weight than the default no-background style.
- I disabled it during the answer phase, since I wanted students to attempt the question from memory first, before falling back on the learning resources.
- I added a "Study..." tooltip, shown on long-press.

This design had several drawbacks:

- The "read more" symbol didn't clearly convey the button's function to all users.
- I'd placed the study button next to mostly low- or no-interaction elements in the top toolbar: the exit ('x') button that ends the entire play session, and the quiz timer and progress indicator, which are purely informational.
- Elements at the top of the screen are harder to reach for mobile users, especially on larger devices.
- Nothing on the play page — including the study button — conveyed which topic it linked to.
- The numerous "Learn More" banners on the answer choices (which let students view short explainers for correct and incorrect answers) competed for the same attention.`;

  readonly v2Markdown = `**V2** — I relocated the study button:

- I replaced the icon-only button with an outlined button with a label, clearly indicating the "Study" functionality.
- I moved it to the bottom of the screen, next to the larger floating action button (FAB) for continuing/finishing the play session, to make it easier to reach.
- I hid it entirely during the answer phase, rather than showing a disabled state, to keep the UI cleaner and keep students focused on answering.
- This version still didn't convey which topics students could study, since it remained a single, universal button.`;

  readonly v3Markdown = `**V3** — I moved the study button again, still at the bottom of the screen:

- I changed it from an outlined button to a mini FAB, placed above the larger continue/finish FAB.
- I used the app's tertiary Material color to visually distinguish it from the "Submit" (primary) and "Continue/Finish" (secondary) FABs.
- I dropped the label to save space, which reintroduced V1's original problem of unclear function.
- Like V2, this version still didn't surface topic titles to the student.`;

  readonly v4Markdown = `**V4** - Similar to V3, but I adjusted the FAB's display:

- I replaced the icon-only mini FAB with an extended FAB containing both an icon and a label ("Study").
- Instead of the tertiary color, I used the primary color to match its functionality with the "Learn More" banners, where both cases refer to studying.
- The added label conveys the functionality better and the larger sizing gives it more prominence, though it starts to clash with the main FAB's importance and still does not surface the topic titles.

I shipped V1 to production; I shelved V2, V3 and V4 during prototyping in favor of the final design, V5.`;

  readonly v5Markdown = `**V5** — I designed this version to solve the topic-title problem directly:

- Instead of a single universal study button, I showed each topic associated with the quiz activity as its own separate button.
- I used outlined buttons labeled with the topic title, dropping icons to save space.
- I kept the accessibility gains from V2 and V3 by placing these buttons at the bottom of the screen.
- To handle a variable number of topics, I used a horizontal scrolling strip. Even with 5+ topics, the row stays within a single line of screen space, and its horizontal scroll doesn't interfere with the page's vertical scroll, since the entire bottom container is pinned in place.`;

  readonly resultsIntroMarkdown = `To measure the impact of this redesign, I compared topic views by source between the initial version (V1) and the final one (V5), as shown in Figure 1.`;

  readonly resultsMarkdown = `As noted above, total topic resource views for Programming 2 ('24) — P2 '24, the second-semester "Programming 2" course at the University of Luxembourg, taught in Swift — were only 321 under V1. After introducing V5, views jumped to 1,977 in Programming 1 ('24) — P1 '24, the first-semester "Programming 1" course, taught in Java — and 1,562 in Programming 2 ('25). P2 '25 is the more directly comparable data point, since it shares the same course material and a similar average class size to P2 '24, my original V1 baseline.

Broken down by source, the play page became the single most popular place for students to study topics under V5 — a source that had generated negligible views under V1.`;

  readonly conclusionMarkdown = `BEACON Q aims to be an all-in-one platform for students' self-paced learning, combining testing and studying in one place. To encourage more contextualized studying right after a quiz question, I redesigned the play page's UI to put the right information front and center, within easy reach, without cluttering the interface — and the resulting jump in play-page-driven study views suggests the redesign delivered on that goal.

More broadly, this project is why I treat in-the-wild usage data as a design input, not just a launch metric. V1 looked reasonable on paper — it followed familiar icon conventions and sat in a plausible spot in the toolbar — but it took a full semester of real classroom use to show that "reasonable" wasn't the same as "used." And the fix that actually moved the numbers wasn't icon clarity, color, or position, which is where V2 and V3 spent their effort — it was surfacing the specific topic behind each button. I carried that same build–measure–iterate discipline through every subsequent version of BEACON Q over the following three years of semesters.`;
}
