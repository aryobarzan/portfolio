# Portfolio

The source code for my portfolio website.
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

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
