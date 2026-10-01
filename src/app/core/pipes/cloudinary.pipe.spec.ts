import { CloudinaryPipe } from './cloudinary.pipe';

describe('CloudinaryPipe', () => {
  const pipe = new CloudinaryPipe();
  const url = 'https://res.cloudinary.com/demo/image/upload/v123/folder/pic.png';

  it('adds automatic format and quality', () => {
    expect(pipe.transform(url)).toBe(
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/v123/folder/pic.png',
    );
  });

  it('adds a width when given', () => {
    expect(pipe.transform(url, 800)).toBe(
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_800/v123/folder/pic.png',
    );
  });

  it('leaves non-Cloudinary and already-transformed URLs unchanged', () => {
    const other = 'https://example.com/pic.png';
    const done = 'https://res.cloudinary.com/demo/image/upload/f_auto/v123/pic.png';
    expect(pipe.transform(other, 800)).toBe(other);
    expect(pipe.transform(done, 800)).toBe(done);
  });
});
