import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-dartblock',
  templateUrl: './dartblock.html',
  styleUrl: './dartblock.css',
})
export class Dartblock {
  showScrollToTop = false;
  // This property helps us to know when to hide the circular loading indicator for our iframe.
  // It must be a signal: the app is zoneless, so a plain field set from the native
  // `flutter-first-frame` listener below would never trigger a re-render.
  protected readonly isLoading = signal(true);

  // The iframe's `load` event fires once its HTML and bootstrap script are in, long before the
  // Flutter engine has downloaded the wasm and drawn anything, so we wait for Flutter's own
  // `flutter-first-frame` event instead (the iframe is same-origin, so we can listen on it).
  onIframeLoad(event: Event): void {
    const frameWindow = (event.target as HTMLIFrameElement).contentWindow;
    if (!frameWindow) {
      this.isLoading.set(false);
      return;
    }
    frameWindow.addEventListener(
      'flutter-first-frame',
      () => {
        this.isLoading.set(false);
      },
      { once: true },
    );
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
