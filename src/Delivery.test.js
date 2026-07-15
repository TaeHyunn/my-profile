import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

const readProjectFile = (path) =>
  readFileSync(join(process.cwd(), path), 'utf8');

describe('delivery setup', () => {
  it('builds for the repository subpath', () => {
    const viteConfig = readProjectFile('vite.config.js');

    expect(viteConfig).toContain("base: '/my-profile/'");
    expect(viteConfig).toContain("'.worktrees/**'");
  });

  it('verifies and deploys the site with GitHub Pages', () => {
    const workflow = readProjectFile('.github/workflows/deploy.yml');

    expect(workflow).toContain('npm test -- --run');
    expect(workflow).toContain('npm run lint');
    expect(workflow).toContain('npm run build');
    expect(workflow).toContain('actions/deploy-pages@v4');
  });

  it('documents local development and the public site', () => {
    const readme = readProjectFile('README.md');

    expect(readme).toContain('npm run dev');
    expect(readme).toContain('https://taehyunn.github.io/my-profile/');
  });
});
