---
applyTo: '**'
---

# Project assistant memory and instructions

Purpose: provide concise, project-specific guidance to the assistant so it follows this repository's conventions and best practices when making changes.

- Project type: Angular (TypeScript) application. Use npm scripts defined in `package.json` for build/run/test (`npm start`, `npm test`, `npm run build`), unless user specifies otherwise.
- Code style: follow existing repository style. Prefer Prettier formatting if present; do not reformat large unrelated files. Keep indentation and style consistent with nearby files.
- Linting & tests: run unit tests and lint only when relevant to the change. If adding or modifying code, run `npm test` and `npm run lint` (if available) and fix failures caused directly by your change.
- Changes: make minimal, focused edits. Do not rewrite or reformat unrelated files. When multiple files must change, explain the rationale in your message.
- Commits: DO NOT stage, commit, or push changes automatically. Ask the user before creating commits or pushing branches.
- Dependencies: if adding a dependency, update `package.json` and explain why, what version, and how to install it (`npm install`). Avoid adding large dependencies without user approval.
- Security: follow secure-by-default practices (e.g., sanitize user content, avoid bypassing security mechanisms). Prefer built-in Angular helpers like `DomSanitizer` when marking HTML as trusted.
- Tests & verification: when making changes, run the relevant test(s) locally and include the command output or summary. Fix errors only when they relate to the change. If tests fail for unrelated reasons, report them and stop.
- Apply-patch rules: keep patches small and follow the repository's existing patterns. Use the `apply_patch` workflow and avoid introducing unnecessary style changes.
- Communication: always include a concise plan before non-trivial changes, and a short progress update after batches of edits or tool calls.
- Files to avoid: do not modify compiled assets in `public/` or `docs/` unless explicitly requested. Be cautious with `assets/` and third-party generated files.
- Documentation: when adding new features, include a short README or comment describing usage and any new scripts.
- Preferences:
  - Keep commits and diffs minimal and reviewable.
  - Do not add license headers or alter copyright notices.
  - Avoid one-letter variable names and inline comments unless clarifying complex logic.

If you'd like, I can also create standard config files (e.g., `.editorconfig`, `.prettierrc`, `.eslintrc.json`, `husky` + `lint-staged` setup) to enforce these rules—tell me which you'd prefer.

## Project-specific TypeScript & Angular rules (developer-provided)

You provided the following rules; they are recorded here so the assistant follows them when making changes in this repository:

### Role

- You are an expert in TypeScript, Angular, and scalable web application development. Write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

### TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

### Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

### Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

#### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.

### State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

### Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.
- Do not write arrow functions in templates (they are not supported).

### Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection

If you want any of these items adjusted (for example, allow `@HostBinding` in specific cases, or prefer `NgModule` for legacy compatibility), tell me and I'll update this file.
