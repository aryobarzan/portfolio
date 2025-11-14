import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-bar',
  imports: [],
  templateUrl: './contact-bar.html',
  styleUrl: './contact-bar.css',
})
export class ContactBar {
  getGitHubIcon(): string | undefined {
    const darkModeOn =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (darkModeOn) {
      return 'assets/images/icon_github_invertocat_white.webp';
    } else {
      return 'assets/images/icon_github_invertocat.svg';
    }
  }

  getLinkedInIcon(): string | undefined {
    const darkModeOn =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (darkModeOn) {
      return 'assets/images/icon_linkedin_bug_white.webp';
    } else {
      return 'assets/images/icon_linkedin_bug_black.webp';
    }
  }
}
