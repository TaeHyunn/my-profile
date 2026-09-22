# 채용 지원용 이력서 사이트 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 기존 포트폴리오형 Vue 사이트를 원티드 PDF와 유사한 한국어 문서형 이력서로 전환한다.

**Architecture:** `resume.js`가 검증된 이력서 데이터를 제공하고, Vue 섹션 컴포넌트는 소개·경력·프로젝트·기술·학력만 렌더링한다. 화면과 인쇄는 동일한 DOM을 공유하고 CSS 미디어 쿼리로 출력만 최적화한다.

**Tech Stack:** Vue 3, Vite, Vitest, Vue Test Utils, CSS

**Spec:** `docs/superpowers/specs/2026-07-10-developer-resume-site-design.md`

## Global Constraints

- 한국어만 사용한다.
- 사진과 다크모드를 제거한다.
- 검증된 커밋 근거를 넘는 수치나 성과를 만들지 않는다.
- 모바일과 A4 인쇄에서 가독성을 유지한다.
- 새로운 런타임 의존성을 추가하지 않는다.

---

### Task 1: 이력서 데이터와 문서 구조

**Files:** `src/data/resume.js`, `src/App.vue`, `src/components/AppSections.test.js`, `src/data/resume.test.js`

**Interfaces:** 검증한 커밋 이력을 받아 `resumeData.profile`, `experience`, `projects`, `skillGroups`를 제공한다.

- [ ] 문서형 섹션, 최신순 프로젝트, 필수 기여 내용에 대한 실패 테스트를 작성한다.
- [ ] 대상 테스트에서 기대한 실패를 확인한다.
- [ ] 데이터와 App 조합을 최소 변경해 테스트를 통과시킨다.
- [ ] 대상 테스트를 다시 실행해 통과를 확인한다.

### Task 2: 헤더·소개·경력·PDF 저장 동작

**Files:** `src/components/SiteHeader.vue`, `HeroSection.vue`, `ExperienceSection.vue`, `ProjectCaseStudies.vue`, `Interactions.test.js`

**Interfaces:** Task 1의 데이터를 받아 `data-print-resume` 버튼과 `window.print()` 동작, 문서형 경력 DOM을 제공한다.

- [ ] 사진·테마 토글 부재와 PDF 저장 호출을 검증하는 실패 테스트를 작성한다.
- [ ] 대상 테스트에서 기대한 실패를 확인한다.
- [ ] 최소한의 Vue 템플릿과 이벤트를 구현한다.
- [ ] 대상 테스트를 다시 실행해 통과를 확인한다.

### Task 3: 문서형 시각 체계와 인쇄

**Files:** `src/styles/base.css`, `src/styles/sections.css`, `src/styles/print.css`, `src/components/VisualContracts.test.js`

**Interfaces:** Task 2의 DOM을 최대 920px 단일 칼럼, 모바일, A4 인쇄 레이아웃으로 표현한다.

- [ ] 단일 칼럼·인쇄 버튼 숨김·다크모드 제거를 검증하는 실패 테스트를 작성한다.
- [ ] 대상 테스트에서 기대한 실패를 확인한다.
- [ ] CSS를 문서형 레이아웃으로 교체한다.
- [ ] 대상 테스트를 다시 실행해 통과를 확인한다.

### Task 4: 전체 검증과 배포

**Files:** `README.md` (필요한 경우에만)

**Interfaces:** 완성된 이력서 사이트를 테스트·린트·빌드가 통과한 배포 가능 산출물로 만든다.

- [ ] `npm test -- --run`, `npm run lint`, `npm run build`를 실행한다.
- [ ] 데스크톱·모바일·인쇄 화면을 브라우저에서 시각 검수한다.
- [ ] 변경을 커밋하고 `main`에 반영한 뒤 GitHub Pages 배포를 확인한다.
