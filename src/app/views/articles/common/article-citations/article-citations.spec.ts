import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleCitations } from './article-citations';

describe('ArticleCitations', () => {
  let fixture: ComponentFixture<ArticleCitations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ArticleCitations] }).compileComponents();
    fixture = TestBed.createComponent(ArticleCitations);
    fixture.componentRef.setInput('citations', [
      { venue: 'Venue A', text: 'First.', doi: '10.1/abc', primary: true },
      { venue: 'Venue B', text: 'Second.', url: 'https://example.com/paper' },
      { venue: 'Venue C', text: 'No link.' },
    ]);
    await fixture.whenStable();
  });

  it('links to the DOI, honours a url override, and omits the link when neither is set', () => {
    const links = fixture.nativeElement.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>;
    expect(links.length).toBe(2);
    expect(links[0].getAttribute('href')).toBe('https://doi.org/10.1/abc');
    expect(links[0].textContent).toContain('DOI: 10.1/abc');
    expect(links[1].getAttribute('href')).toBe('https://example.com/paper');
  });

  it('uses a filled button only for primary citations', () => {
    const links = fixture.nativeElement.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>;
    expect(links[0].classList).toContain('traxus-button');
    expect(links[1].classList).toContain('traxus-text-button');
  });

  it('numbers citations', () => {
    const tags = fixture.nativeElement.querySelectorAll('.citation-tag');
    expect(tags[0].textContent).toContain('CIT_01');
    expect(tags[2].textContent).toContain('CIT_03');
  });
});
