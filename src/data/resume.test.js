import { describe, expect, it } from 'vitest';

import { resumeData } from './resume.js';

describe('resumeData', () => {
  it('contains the required verified contributions', () => {
    const copy = JSON.stringify(resumeData);

    [
      '자동로그인',
      '상가',
      '미출차',
      '입출차 동기화',
      'WebSocket',
      '소방 자가점검',
      '안면인식',
      '다중 이미지',
    ].forEach((term) => expect(copy).toContain(term));
  });

  it('does not expose private repository URLs or placeholder copy', () => {
    const copy = JSON.stringify(resumeData);

    expect(copy).not.toContain('github.com/SMCOM-INC');
    expect(copy).not.toMatch(/TBD|TODO|Lorem|—|–/);
  });

  it('defines six newest-first career records and public contact details', () => {
    expect(resumeData.projects).toHaveLength(6);
    expect(resumeData.projects.map(({ order }) => order)).toEqual([6, 5, 4, 3, 2, 1]);
    expect(resumeData.projects.map(({ period }) => period)).toEqual([
      '2026.04 - 08',
      '2026.04 - 06',
      '2026.02 - 04',
      '2025.12 - 2026.03',
      '2025.09 - 2026.02',
      '2025.03 - 09',
    ]);
    expect(resumeData.profile.email).toBe('xogus998@naver.com');
    expect(resumeData.profile.github).toBe('https://github.com/TaeHyunn');
  });
});
