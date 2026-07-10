# Developer Resume Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a Korean Vue portfolio for frontend engineer 조태현 using verified work from three SMCOM-INC products.

**Architecture:** A static Vue 3 and Vite single-page site renders structured resume data through focused section components. CSS variables provide one coherent light or dark page theme, Intersection Observer adds reduced-motion-safe reveals, and GitHub Actions deploys the built site to the `/my-profile/` GitHub Pages path.

**Tech Stack:** Vue 3.5.39, Vite 8.1.4, `@vitejs/plugin-vue` 6.0.7, `@phosphor-icons/vue` 2.2.1, Vitest 4.1.10, Vue Test Utils 2.4.11, jsdom 29.1.1, ESLint 10.6.0, eslint-plugin-vue 10.9.2, native CSS.

## Global Constraints

- The site is Korean-only and targets Vue-focused frontend roles.
- The page uses cold off-white, charcoal, neutral gray, and one cobalt-blue accent.
- `DESIGN_VARIANCE: 6`, `MOTION_INTENSITY: 4`, `VISUAL_DENSITY: 4`.
- Never expose private repository links, internal code, or internal product screenshots.
- Do not invent revenue, user, performance, or contribution-count metrics.
- Include automatic login, commerce/store integration, non-exit and entry/exit history, and entry/exit synchronization contributions.
- The full page follows one active theme at a time and supports system light/dark preference.
- Use zero em-dash or en-dash characters in visible page copy.
- Honor `prefers-reduced-motion`, provide keyboard focus states, and meet WCAG AA contrast.
- Print output must read as a conventional resume.
- Deploy from `TaeHyunn/my-profile` to `https://taehyunn.github.io/my-profile/`.

## Planned File Map

- `package.json`: scripts and pinned dependencies.
- `vite.config.js`: Vue plugin, Vitest config, and GitHub Pages base.
- `eslint.config.js`: Vue and browser lint rules.
- `index.html`: SEO, theme bootstrap, and app mount.
- `src/main.js`: application entry.
- `src/App.vue`: page composition only.
- `src/data/resume.js`: all resume content and navigation data.
- `src/data/resume.test.js`: content integrity and privacy guards.
- `src/components/SiteHeader.vue`: desktop and mobile navigation, theme toggle.
- `src/components/HeroSection.vue`: positioning statement, CTA, portrait fallback.
- `src/components/ExperienceSection.vue`: employer and work scope.
- `src/components/ProjectCaseStudies.vue`: three evidence-based project stories.
- `src/components/ContributionTimeline.vue`: grouped contribution periods.
- `src/components/SkillsSection.vue`: contextual skill groups.
- `src/components/EducationSection.vue`: education and certification.
- `src/components/ContactSection.vue`: email and GitHub contact.
- `src/components/RevealOnScroll.vue`: accessible one-time reveal behavior.
- `src/components/ThemeToggle.vue`: system-aware theme persistence.
- `src/components/AppSections.test.js`: semantic rendering and interactions.
- `src/styles/base.css`: tokens, typography, reset, focus, global layout.
- `src/styles/sections.css`: section-specific responsive composition.
- `src/styles/print.css`: print resume layout.
- `src/components/VisualContracts.test.js`: CSS theme, breakpoint, motion, and print contracts.
- `src/assets/profile-portrait.webp`: optimized GitHub profile portrait.
- `src/assets/portfolio-system.webp`: generated abstract product-system visual.
- `public/og-cover.webp`: social sharing image.
- `.github/workflows/deploy.yml`: build and Pages deployment.
- `src/delivery.test.js`: Pages workflow and Vite base-path contract.
- `README.md`: local development, content editing, and deployment notes.

---

### Task 1: Scaffold the tested Vue application

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `eslint.config.js`
- Create: `index.html`
- Create: `src/main.js`
- Create: `src/App.vue`
- Create: `src/App.test.js`

**Interfaces:**
- Consumes: Node 26 and npm 11 from the workspace.
- Produces: `npm run dev`, `npm run test`, `npm run lint`, and `npm run build`; Vue mount at `#app`.

- [ ] **Step 1: Write the failing application smoke test**

```js
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import App from './App.vue';

describe('App', () => {
  it('renders the resume landmark', () => {
    const wrapper = mount(App);
    expect(wrapper.get('main').attributes('id')).toBe('main-content');
  });
});
```

- [ ] **Step 2: Run the test and verify the missing scaffold failure**

Run: `npm test -- --run src/App.test.js`
Expected: FAIL because `package.json` and `src/App.vue` do not exist.

- [ ] **Step 3: Add pinned package metadata and minimal Vue files**

```json
{
  "name": "taehyun-developer-profile",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "test": "vitest",
    "lint": "eslint .",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@phosphor-icons/vue": "2.2.1",
    "vue": "3.5.39"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "6.0.7",
    "@vue/test-utils": "2.4.11",
    "eslint": "10.6.0",
    "eslint-plugin-vue": "10.9.2",
    "jsdom": "29.1.1",
    "vite": "8.1.4",
    "vitest": "4.1.10"
  }
}
```

Create `App.vue` with `<main id="main-content"></main>`, mount it from `main.js`, configure the Vue plugin with `base: '/my-profile/'`, and configure Vitest with `environment: 'jsdom'`.

- [ ] **Step 4: Install and verify the scaffold**

Run: `npm install && npm test -- --run src/App.test.js && npm run lint && npm run build`
Expected: one passing test, zero lint errors, and `dist/index.html` created.

- [ ] **Step 5: Commit the scaffold**

```bash
git add package.json package-lock.json vite.config.js eslint.config.js index.html src/main.js src/App.vue src/App.test.js
git commit -m "build: scaffold Vue resume site"
```

### Task 2: Encode verified resume content

**Files:**
- Create: `src/data/resume.js`
- Create: `src/data/resume.test.js`

**Interfaces:**
- Consumes: approved design spec.
- Produces: named export `resumeData` with `profile`, `experience`, `projects`, `timeline`, `skillGroups`, `education`, and `certifications`.

- [ ] **Step 1: Write failing content integrity tests**

```js
import { describe, expect, it } from 'vitest';
import { resumeData } from './resume';

describe('resumeData', () => {
  it('contains the required verified contributions', () => {
    const copy = JSON.stringify(resumeData);
    ['자동로그인', '상가', '미출차', '입출차 동기화'].forEach((term) => {
      expect(copy).toContain(term);
    });
  });

  it('does not expose private repository URLs or placeholder copy', () => {
    const copy = JSON.stringify(resumeData);
    expect(copy).not.toContain('github.com/SMCOM-INC');
    expect(copy).not.toMatch(/TBD|TODO|Lorem|—|–/);
  });
});
```

- [ ] **Step 2: Verify tests fail before the data module exists**

Run: `npm test -- --run src/data/resume.test.js`
Expected: FAIL with module resolution error for `./resume`.

- [ ] **Step 3: Implement the approved structured content**

Create `resumeData` with the exact profile facts and the three project contribution lists from the design spec. Use `period: '2025.03 - 현재'`, `email: 'xogus998@naver.com'`, and `github: 'https://github.com/TaeHyunn'`.

- [ ] **Step 4: Run content tests**

Run: `npm test -- --run src/data/resume.test.js`
Expected: both tests PASS.

- [ ] **Step 5: Commit verified content**

```bash
git add src/data/resume.js src/data/resume.test.js
git commit -m "feat: add verified resume content"
```

### Task 3: Build semantic resume sections

**Files:**
- Create: `src/components/HeroSection.vue`
- Create: `src/components/ExperienceSection.vue`
- Create: `src/components/ProjectCaseStudies.vue`
- Create: `src/components/ContributionTimeline.vue`
- Create: `src/components/SkillsSection.vue`
- Create: `src/components/EducationSection.vue`
- Create: `src/components/ContactSection.vue`
- Create: `src/components/AppSections.test.js`
- Modify: `src/App.vue`

**Interfaces:**
- Consumes: `resumeData`.
- Produces: sections with IDs `intro`, `experience`, `projects`, `skills`, `education`, and `contact`; one page-level `h1`.

- [ ] **Step 1: Write failing semantic rendering tests**

```js
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import App from '../App.vue';

describe('resume sections', () => {
  const wrapper = mount(App);

  it('renders exactly one h1 and all main sections', () => {
    expect(wrapper.findAll('h1')).toHaveLength(1);
    ['intro', 'experience', 'projects', 'skills', 'education', 'contact'].forEach((id) => {
      expect(wrapper.find(`#${id}`).exists()).toBe(true);
    });
  });

  it('renders the three product case studies', () => {
    expect(wrapper.text()).toContain('관리자웹');
    expect(wrapper.text()).toContain('입주민앱');
    expect(wrapper.text()).toContain('경비원웹');
  });
});
```

- [ ] **Step 2: Run and verify missing section failures**

Run: `npm test -- --run src/components/AppSections.test.js`
Expected: FAIL because the section components are absent.

- [ ] **Step 3: Implement focused presentational components**

Each component accepts only the relevant data through `defineProps`, uses semantic `section`, `article`, `time`, `ul`, and heading elements, and avoids internal API calls. `App.vue` imports `resumeData` and composes all sections in document order.

- [ ] **Step 4: Run component and content tests**

Run: `npm test -- --run src/components/AppSections.test.js src/data/resume.test.js`
Expected: four tests PASS.

- [ ] **Step 5: Commit semantic sections**

```bash
git add src/App.vue src/components src/data
git commit -m "feat: build resume content sections"
```

### Task 4: Add navigation, theme, and accessible motion

**Files:**
- Create: `src/components/SiteHeader.vue`
- Create: `src/components/ThemeToggle.vue`
- Create: `src/components/RevealOnScroll.vue`
- Create: `src/components/Interactions.test.js`
- Modify: `src/App.vue`

**Interfaces:**
- Consumes: `resumeData.navigation` and wrapped slot content.
- Produces: `data-theme` on `document.documentElement`, persisted key `profile-theme`, mobile menu state, and `.is-visible` reveal class.

- [ ] **Step 1: Write failing interaction tests**

```js
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';
import ThemeToggle from './ThemeToggle.vue';

describe('ThemeToggle', () => {
  beforeEach(() => localStorage.clear());

  it('toggles and persists the page theme', async () => {
    const wrapper = mount(ThemeToggle);
    await wrapper.get('button').trigger('click');
    expect(['light', 'dark']).toContain(document.documentElement.dataset.theme);
    expect(localStorage.getItem('profile-theme')).toBe(document.documentElement.dataset.theme);
  });
});
```

- [ ] **Step 2: Run and verify the missing component failure**

Run: `npm test -- --run src/components/Interactions.test.js`
Expected: FAIL because `ThemeToggle.vue` does not exist.

- [ ] **Step 3: Implement interactions without scroll listeners**

`ThemeToggle` reads persisted preference, falls back to `matchMedia('(prefers-color-scheme: dark)')`, and toggles the whole page. `RevealOnScroll` uses one `IntersectionObserver`, immediately reveals when reduced motion is requested, and disconnects during unmount. `SiteHeader` closes the mobile menu after anchor selection.

- [ ] **Step 4: Run interaction tests and lint**

Run: `npm test -- --run src/components/Interactions.test.js && npm run lint`
Expected: tests PASS and lint reports zero errors.

- [ ] **Step 5: Commit interactions**

```bash
git add src/App.vue src/components/SiteHeader.vue src/components/ThemeToggle.vue src/components/RevealOnScroll.vue src/components/Interactions.test.js
git commit -m "feat: add accessible navigation and theme"
```

### Task 5: Create and integrate the visual system

**Files:**
- Create: `src/styles/base.css`
- Create: `src/styles/sections.css`
- Create: `src/styles/print.css`
- Create: `src/components/VisualContracts.test.js`
- Create: `src/assets/profile-portrait.webp`
- Create: `src/assets/portfolio-system.webp`
- Create: `public/og-cover.webp`
- Modify: `src/main.js`
- Modify: `src/components/HeroSection.vue`
- Modify: `src/components/ProjectCaseStudies.vue`
- Modify: `index.html`

**Interfaces:**
- Consumes: approved cold-neutral palette, public GitHub avatar, and image-generation output.
- Produces: responsive light/dark UI, portrait fallback, print layout, and social preview metadata.

- [ ] **Step 1: Add a failing visual contract test**

```js
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('visual contracts', () => {
  it('contains reduced-motion, dark-theme, mobile, and print rules', () => {
    const css = ['base.css', 'sections.css', 'print.css']
      .map((file) => readFileSync(new URL(`../styles/${file}`, import.meta.url), 'utf8'))
      .join('\n');
    expect(css).toContain('prefers-reduced-motion');
    expect(css).toContain('[data-theme="dark"]');
    expect(css).toContain('@media (max-width: 767px)');
    expect(css).toContain('@media print');
  });
});
```

- [ ] **Step 2: Run and verify missing stylesheet failure**

Run: `npm test -- --run src/components/VisualContracts.test.js`
Expected: FAIL because the style files do not exist.

- [ ] **Step 3: Generate and optimize visual assets**

Use the `imagegen` skill to create one horizontal cold-neutral abstract visual representing three connected product surfaces, with no text, logos, screenshots, or fake UI. Download the public GitHub avatar, convert both assets to WebP, and create a 1200x630 OG composition from the generated visual and approved copy.

- [ ] **Step 4: Implement the complete CSS system and asset fallbacks**

Define semantic variables for surface, text, muted text, line, accent, focus, and shadow. Implement the asymmetric hero, non-repeating section layouts, project visual, responsive one-column collapse below 768px, reduced motion, focus-visible states, and print rules. Add image `width`, `height`, `loading`, and error fallback behavior.

- [ ] **Step 5: Verify visual contracts, full tests, lint, and build**

Run: `npm test -- --run && npm run lint && npm run build`
Expected: all tests PASS, zero lint errors, and production assets emitted under `dist/`.

- [ ] **Step 6: Commit the visual system**

```bash
git add index.html public src
git commit -m "feat: apply portfolio visual system"
```

### Task 6: Add GitHub Pages delivery and project documentation

**Files:**
- Create: `.github/workflows/deploy.yml`
- Create: `README.md`
- Create: `src/delivery.test.js`
- Modify: `vite.config.js`

**Interfaces:**
- Consumes: npm scripts and Vite build output.
- Produces: GitHub Pages artifact from `dist`, documented local workflow, and content-editing instructions.

- [ ] **Step 1: Write a failing delivery contract test**

```js
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('delivery', () => {
  it('deploys dist to GitHub Pages and uses the repository base path', () => {
    const workflow = readFileSync('.github/workflows/deploy.yml', 'utf8');
    const vite = readFileSync('vite.config.js', 'utf8');
    expect(workflow).toContain('actions/deploy-pages');
    expect(workflow).toContain('path: ./dist');
    expect(vite).toContain("base: '/my-profile/'");
  });
});
```

- [ ] **Step 2: Run and verify missing workflow failure**

Run: `npm test -- --run src/delivery.test.js`
Expected: FAIL because `.github/workflows/deploy.yml` does not exist.

- [ ] **Step 3: Implement Pages workflow and README**

Use `actions/checkout@v4`, `actions/setup-node@v4` with Node 22 and npm cache, `actions/configure-pages@v5`, `actions/upload-pages-artifact@v3` with `./dist`, and `actions/deploy-pages@v4`. README commands are `npm install`, `npm run dev`, `npm test -- --run`, `npm run lint`, and `npm run build`.

- [ ] **Step 4: Run full automated verification**

Run: `npm test -- --run && npm run lint && npm run build`
Expected: all tests PASS, zero lint errors, and a successful production build.

- [ ] **Step 5: Commit delivery configuration**

```bash
git add .github/workflows/deploy.yml README.md vite.config.js src/delivery.test.js
git commit -m "ci: deploy resume site to GitHub Pages"
```

### Task 7: Browser QA, repository publication, and deployment verification

**Files:**
- Modify only when QA reveals a specific defect.

**Interfaces:**
- Consumes: local production build and personal GitHub account.
- Produces: verified responsive site, `TaeHyunn/my-profile` remote, pushed `main`, and a reachable Pages URL.

- [ ] **Step 1: Run the final verification suite**

Run: `npm test -- --run && npm run lint && npm run build && git diff --check`
Expected: all commands exit 0.

- [ ] **Step 2: Test the production build in the in-app browser**

Run: `npm run preview -- --host 127.0.0.1`
Expected: preview server starts. Verify 390x844, 768x1024, 1280x800, and 1440x900; light and dark; reduced motion; keyboard navigation; broken portrait fallback; print preview; no console errors or horizontal overflow.

- [ ] **Step 3: Run the design pre-flight audit**

Confirm one accent, one radius system, one page theme, one desktop navigation line, no duplicated CTA intent, no em-dash or en-dash characters, one `h1`, hero fits 800px-tall laptop viewport, mobile sections collapse explicitly, and all visible copy is grammatically sound.

- [ ] **Step 4: Publish the repository**

```bash
gh repo create TaeHyunn/my-profile --public --source=. --remote=origin --push
```

Expected: repository is created or, if already present, set `origin` to `https://github.com/TaeHyunn/my-profile.git` and push `main`.

- [ ] **Step 5: Enable and verify Pages**

Use GitHub repository settings or API to select GitHub Actions as the Pages source, watch the deploy workflow, and verify `https://taehyunn.github.io/my-profile/` returns the built site.

- [ ] **Step 6: Record a final QA fix only when files changed**

```bash
git status --short
```

Expected: when QA found no defects, the worktree has no tracked changes and no commit is created. When QA found a defect, stage only each tracked path shown by this command, commit with `fix: resolve final portfolio QA issues`, rerun Step 1, and push `main`.
