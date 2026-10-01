# Portfolio

The source code for my portfolio website.
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Profiling

To test the production performance, build and serve the production build locally:

```bash
npx ng build --base-href "/"
npx http-server docs -p 8080 --proxy http://localhost:8080? -c-1
```

- The build writes to `docs/`, the tracked GitHub Pages output, so don't commit it unintentionally.
- `-c-1` disables server-side caching, so you never profile a stale bundle.
- `--proxy` falls back to `index.html` for unknown paths, so deep links like `/articles` work in this single-page app.

Profile in an Incognito window with "Disable cache" ticked in DevTools (Network tab), and optionally enable network ('slow 4G') and CPU throttling (Performance tab > settings cog).

## Testing

Unit tests run on [Vitest](https://vitest.dev/):

```bash
ng test
```

Tests execute in Node using a `jsdom` DOM environment rather than a real browser.

## Public

The production build is hosted on a public repository using GitHub Pages: https://github.com/aryobarzan/aryobarzan

## CI/CD

Two GitHub Actions workflows:

- **[`ci.yml`](.github/workflows/ci.yml)** — runs on every pull request and on pushes to `master`. Installs dependencies, runs `ng test`, runs `ng build`. **Continuous Integration (CI)**: it catches a broken test or build before code gets merged.

- **[`deploy.yml`](.github/workflows/deploy.yml)** — runs on pushes to `production`. Repeats the same install/test/build steps and only if those pass, copies the freshly built `docs/` folder into the public `aryobarzan/aryobarzan` repo, which GitHub Pages serves. **Continous deployment (CD)**: it publishes a new build.
