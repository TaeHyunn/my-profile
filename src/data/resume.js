export const resumeData = {
  navigation: [
    { label: '소개', href: '#intro' },
    { label: '경력', href: '#experience' },
    { label: '주요 프로젝트', href: '#projects' },
    { label: '기술', href: '#skills' },
    { label: '학력', href: '#education' },
  ],
  profile: {
    name: '조태현',
    role: 'Vue 프론트엔드 개발자',
    headline: '사용자의 실제 업무 흐름을 이해하고, 오래 운영할 수 있는 화면을 만듭니다.',
    introduction:
      '스마트 아파트 플랫폼의 관리자웹, 입주민앱, 경비원웹을 Vue로 개발하고 운영해 왔습니다. 인증, 서버 상태, 폼 검증, 모바일 웹뷰와 실시간 통신처럼 제품의 경계를 잇는 문제를 주로 해결했습니다.',
    email: 'xogus998@naver.com',
    github: 'https://github.com/TaeHyunn',
    githubLabel: 'github.com/TaeHyunn',
  },
  experience: {
    company: '샘물정보통신',
    role: '프론트엔드 개발자',
    period: '2025.03 - 현재',
    summary:
      '관리사무소, 입주민, 경비원이 사용하는 스마트 아파트 제품군을 개발하고 운영합니다.',
    focus: [
      'Vue 3 기반 관리자웹, 모바일 웹뷰, 현장 운영웹의 기능 개발과 유지보수',
      'TanStack Query, Pinia, Axios를 활용한 서버 상태와 인증 흐름 설계',
      'VeeValidate와 Zod 기반 복합 폼 검증 및 중복 요청과 오류 상태 방어',
      'WebView Bridge, WebSocket, GitHub Actions를 통한 네이티브 연동과 운영 자동화',
    ],
  },
  projects: [
    {
      id: 'operations-foundation',
      order: 6,
      period: '2026.04 - 08',
      product: '관리자웹 · 공통 기반',
      title: '운영 화면의 안정성과 공통 개발 구조 개선',
      summary:
        '반복되는 운영 오류를 줄이고 변경에 대응하기 쉬운 폼과 데이터 처리 구조로 정리했습니다.',
      contributions: [
        '입주·이사예약의 기간, 시간 중복, 예약금 조건을 Zod로 검증하고 API 오류를 화면 필드에 연결',
        '공지 첨부·썸네일, 월별 엑셀, 인쇄 호환성, 검색 조건 복원과 XSS 예외 방어를 개선',
        'Mutation 훅이 성공·오류·캐시 무효화를 직접 관리하도록 정리하고 VeeValidate useForm 패턴을 표준화',
      ],
      technologies: ['Vue 3', 'TanStack Query', 'VeeValidate', 'Zod', 'Pinia'],
    },
    {
      id: 'native-media',
      order: 5,
      period: '2026.04 - 06',
      product: '입주민앱 · 관리자웹',
      title: '안면인식 등록과 다중 이미지 사용자 흐름 구현',
      summary:
        '모바일 웹뷰와 네이티브 장치 사이의 차이를 흡수하고, 이미지가 포함된 커뮤니티 기능을 안정화했습니다.',
      contributions: [
        '안내, 촬영, 등록, 목록, 상세, 수정, 완료와 실패로 이어지는 안면인식 전체 화면 흐름 구현',
        '네이티브 카메라, Base64 데이터, iOS 응답 형식과 네이티브 뒤로가기를 WebView Bridge로 연동',
        '댓글·답글 다중 이미지의 업로드 진행률, 수정·삭제, 뷰어·다운로드를 공통 composable로 구성',
      ],
      technologies: ['Vue 3', 'WebView Bridge', 'TanStack Query', 'Multipart'],
    },
    {
      id: 'fire-inspection',
      order: 4,
      period: '2026.02 - 04',
      product: '입주민앱',
      title: '소방 자가점검 전 과정 구현',
      summary:
        '입주민이 모바일에서 점검을 시작하고 제출 결과를 다시 확인할 수 있는 연속된 업무 흐름을 만들었습니다.',
      contributions: [
        '점검 시작, 문항 작성, 서명, 제출, 완료, 내역과 상세 화면 및 API 연동',
        '점검 상태에 따른 라우팅, 도움말, 뒤로가기 동작을 정리해 이탈과 중복 제출을 방지',
      ],
      technologies: ['Vue 3', 'Vue Router', 'TanStack Query', 'Signature'],
    },
    {
      id: 'management-fee',
      order: 3,
      period: '2025.12 - 2026.03',
      product: '입주민앱',
      title: '관리비 데이터 시각화와 조회 상태 개선',
      summary:
        '청구 데이터의 비교 기준을 화면에 명확히 보여주고, 세대 전환 시 잘못된 데이터가 남지 않도록 상태를 정리했습니다.',
      contributions: [
        '청구월, 전월 비교, 동일 평형 평균 에너지 사용량을 ApexCharts 기반 차트로 구현',
        '아파트 전환 시 조회 상태를 동기화하고 조건부 API, 캐시 초기화와 중복 호출 제거로 데이터 정합성 개선',
      ],
      technologies: ['Vue 3', 'ApexCharts', 'TanStack Query', 'Pinia'],
    },
    {
      id: 'commerce-parking',
      order: 2,
      period: '2025.09 - 2026.02',
      product: '입주민앱 · 상가앱 · 경비원웹',
      title: '상가 서비스 인증과 차량 운영 흐름 연결',
      summary:
        '입주민앱에서 상가 서비스로 이동하는 인증 흐름과 현장에서 확인하는 상가 차량 정보를 연결했습니다.',
      contributions: [
        '커머스 인증 토큰 API와 Query를 구현하고 인증된 상태로 상가 서비스에 진입하도록 구성',
        '상가 차량 등록·상세·방문 목적과 조건부 노출을 구현하고 미정산 출차 이벤트를 WebSocket으로 표시',
        '차량, 게이트, 입출차 시각과 미정산 시간을 한 화면에서 판단할 수 있도록 현장 정보를 구성',
      ],
      technologies: ['Vue 3', 'TanStack Query', 'WebSocket', 'Axios'],
    },
    {
      id: 'parking-auth-realtime',
      order: 1,
      period: '2025.03 - 09',
      product: '관리자웹 · 입주민앱 · 경비원웹',
      title: '주차 운영, 자동로그인과 현장 대응 기능 구축',
      summary:
        '입출차 예외 처리부터 앱 인증, 경비실 알림까지 초기 핵심 운영 흐름을 제품별로 구현했습니다.',
      contributions: [
        '미출차 내역 조회·상세·삭제, 입출차 수동 생성과 LPR 선택, 입출차 동기화·재전송 상태를 구현',
        'VueUse와 Pinia로 자동로그인을 구성하고 Axios 토큰 재발급, 요청 큐·재시도와 반복 요청 방지 처리',
        'LPR·입차 정책·방문증 키오스크 설정, 블랙리스트 음성 알림과 원격 음원 실패 시 로컬 대체 구현',
        'GitHub Actions 기반 현장 배포와 WebSocket을 이용한 브라우저 자동 갱신 흐름 구성',
      ],
      technologies: ['Vue 3', 'Pinia', 'VueUse', 'Axios', 'GitHub Actions'],
    },
  ],
  skillGroups: [
    {
      title: '프론트엔드',
      skills: ['Vue 3', 'Composition API', 'Vue Router', 'Pinia', 'VueUse', 'Vite'],
    },
    {
      title: '데이터 · 폼',
      skills: ['TanStack Vue Query', 'Axios', 'VeeValidate', 'Zod', 'ApexCharts'],
    },
    {
      title: '제품 연동',
      skills: ['WebView Bridge', 'WebSocket', 'Multipart Upload', 'Responsive UI'],
    },
    {
      title: '품질 · 운영',
      skills: ['ESLint', 'Prettier', 'Husky', 'Sentry', 'GitHub Actions'],
    },
  ],
  education: {
    school: '한라대학교',
    major: '컴퓨터공학과',
    detail: '4년제 졸업',
  },
  certifications: [{ name: '정보처리기사', acquired: '2021.06' }],
};
