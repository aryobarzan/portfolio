import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleTocService } from '../../../../core/services/article/article-toc.service';
import { ArticleToc } from './article-toc';

describe('ArticleToc', () => {
  let fixture: ComponentFixture<ArticleToc>;
  let toc: ArticleTocService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleToc],
      providers: [ArticleTocService],
    }).compileComponents();

    history.replaceState(null, '', '/articles/some-article');
    toc = TestBed.inject(ArticleTocService);
    toc.registerSection({ id: 'context', title: 'Context' });
    fixture = TestBed.createComponent(ArticleToc);
    await fixture.whenStable();
  });

  it('numbers entries and links them relative to the current path', () => {
    const link = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(link.textContent).toContain('01');
    expect(link.getAttribute('href')).toBe('/articles/some-article#context');
  });

  it('keeps the current path when an entry is tapped', () => {
    const link = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    link.click();
    expect(location.pathname).toBe('/articles/some-article');
    expect(location.hash).toBe('#context');
    expect(toc.activeId()).toBe('context');
  });
});
