import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

const stylesDirectory = join(process.cwd(), 'src/styles');
const readStyle = (name) => readFileSync(join(stylesDirectory, name), 'utf8');

describe('visual system contracts', () => {
  it('supports dark mode, mobile layouts, reduced motion, and printing', () => {
    const base = readStyle('base.css');
    const sections = readStyle('sections.css');
    const print = readStyle('print.css');

    expect(base).toContain('[data-theme="dark"]');
    expect(base).toContain('prefers-reduced-motion');
    expect(sections).toContain('@media (max-width: 767px)');
    expect(sections).toMatch(/\.hero-section h1\s*{[^}]*text-wrap:\s*pretty/s);
    expect(print).toContain('@media print');
  });
});
