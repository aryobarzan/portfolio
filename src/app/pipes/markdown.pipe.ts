import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

@Pipe({
  name: 'markdown',
  standalone: true,
})
export class MarkdownPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  async transform(value: string | null | undefined): Promise<SafeHtml> {
    if (!value) return '';
    // Convert markdown to HTML
    const raw = await marked.parse(value);
    // Sanitize the HTML to avoid XSS
    const clean = DOMPurify.sanitize(raw);
    // Mark as safe for Angular binding
    return this.sanitizer.bypassSecurityTrustHtml(clean);
  }
}
