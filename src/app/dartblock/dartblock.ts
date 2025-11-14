import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactBar } from '../contact-bar/contact-bar';

@Component({
  selector: 'app-dartblock',
  imports: [RouterLink, RouterOutlet, ContactBar],
  templateUrl: './dartblock.html',
  styleUrl: './dartblock.css',
})
export class Dartblock {
  showScrollToTop = false;
  // This property helps us to know when to hide the circular loading indicator for our iframe.
  isLoading: boolean = true;

  onIframeLoad(): void {
    this.isLoading = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollToTop = window.scrollY > 100;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
