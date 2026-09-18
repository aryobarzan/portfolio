// jsdom does not implement window.matchMedia; ThemeService relies on it to detect
// the OS color-scheme preference, so tests need a stub to avoid a TypeError.
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = (query: string): MediaQueryList =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList;
}

// Node itself now defines a global `localStorage` accessor (gated behind
// --localstorage-file), which resolves to undefined. Vitest's jsdom environment sees that
// Node already "owns" this global and skips overriding it, so `window.localStorage` (window
// is aliased to globalThis here) inherits Node's broken version instead of jsdom's working
// one. Point it at the real jsdom-backed Storage instead, exposed via `globalThis.jsdom`.
const jsdomWindow = (globalThis as unknown as { jsdom?: { window: Window } }).jsdom?.window;
if (jsdomWindow) {
  Object.defineProperty(globalThis, 'localStorage', {
    get: () => jsdomWindow.localStorage,
    configurable: true,
  });
}
