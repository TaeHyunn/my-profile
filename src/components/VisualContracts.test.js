import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

const stylesDirectory = join(process.cwd(), 'src/styles');
const readStyle = (name) => readFileSync(join(stylesDirectory, name), 'utf8');
const readIndex = () => readFileSync(join(process.cwd(), 'index.html'), 'utf8');

describe('visual system contracts', () => {
  it('uses a single-column light resume layout with mobile and print support', () => {
    const base = readStyle('base.css');
    const sections = readStyle('sections.css');
    const print = readStyle('print.css');
    const index = readIndex();

    expect(base).not.toContain('[data-theme="dark"]');
    expect(index).not.toContain('profile-theme');
    expect(base).toMatch(/--content:\s*920px/);
    expect(base).toContain('prefers-reduced-motion');
    expect(sections).toContain('@media (max-width: 767px)');
    expect(sections).not.toContain('.system-visual');
    expect(print).toContain('@media print');
    expect(print).toMatch(/\[data-print-resume\][^{]*\{[^}]*display:\s*none/s);
  });
});
