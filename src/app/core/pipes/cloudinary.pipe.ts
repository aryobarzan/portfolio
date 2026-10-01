import { Pipe, PipeTransform } from '@angular/core';

const UPLOAD_SEGMENT = '/image/upload/';

/**
 * Adds automatic format (AVIF/WebP/JPEG depending on the browser) and quality to a Cloudinary
 * image URL, and optionally caps its width. This only rewrites the URL: Cloudinary generates each
 * derived image once, on first request, and then serves it from its CDN cache.
 * URLs that aren't Cloudinary uploads, or already carry f_auto, are returned unchanged.
 */
@Pipe({
  name: 'cloudinary',
  standalone: true,
})
export class CloudinaryPipe implements PipeTransform {
  transform(url: string, width?: number): string {
    const index = url.indexOf(UPLOAD_SEGMENT);
    if (index === -1 || url.includes('f_auto')) return url;

    const transformations = ['f_auto', 'q_auto', ...(width ? [`w_${width}`] : [])].join(',');
    const insertAt = index + UPLOAD_SEGMENT.length;
    return `${url.slice(0, insertAt)}${transformations}/${url.slice(insertAt)}`;
  }
}
