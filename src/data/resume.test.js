import { describe, expect, it } from 'vitest';

import { resumeData } from './resume.js';

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

  it('defines three project case studies and public contact details', () => {
    expect(resumeData.projects).toHaveLength(3);
    expect(resumeData.profile.email).toBe('xogus998@naver.com');
    expect(resumeData.profile.github).toBe('https://github.com/TaeHyunn');
  });
});
