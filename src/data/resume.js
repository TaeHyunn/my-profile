export const resumeData = {
  navigation: [
    { label: '소개', href: '#intro' },
    { label: '경력', href: '#experience' },
    { label: '프로젝트', href: '#projects' },
    { label: '기술', href: '#skills' },
    { label: '학력', href: '#education' },
  ],
  profile: {
    name: '조태현',
    englishName: 'Tad',
    role: 'Vue 중심 프론트엔드 엔지니어',
    headline: '현장의 복잡한 흐름을 안정적인 화면으로 바꿉니다.',
    introduction:
      '관리자, 입주민, 경비원이 매일 사용하는 제품을 Vue로 구현하고 운영해 왔습니다.',
    email: 'xogus998@naver.com',
    github: 'https://github.com/TaeHyunn',
    githubLabel: 'TaeHyunn',
    avatarAlt: '프론트엔드 엔지니어 조태현 프로필',
  },
  experience: {
    company: '샘물정보통신',
    role: '프론트엔드 개발자',
    period: '2025.03 - 현재',
    summary:
      '스마트 아파트 플랫폼의 관리자웹, 입주민앱, 경비원웹을 개발하고 운영합니다.',
    focus: [
      '복잡한 현장 업무를 오류에 강한 화면 흐름으로 설계',
      '모바일 웹뷰와 네이티브 기능을 연결하는 사용자 경험 구현',
      '공통 패턴 정리와 배포 자동화로 운영 안정성 개선',
    ],
  },
  projects: [
    {
      id: 'admin',
      index: 'A',
      title: '아파트먼트 관리자웹',
      audience: '관리사무소와 최고관리자용 운영 도구',
      summary:
        '주차, 이사예약, 공지, 문의처럼 조건과 예외가 많은 관리 업무를 안정적인 Vue 화면으로 구현했습니다.',
      featured: '미출차와 입출차 운영 흐름을 처음부터 끝까지 연결',
      contributions: [
        '기존 입출차 데이터를 기반으로 미출차 내역 화면과 API 흐름 구현',
        '미출차 내역에서 입출차 생성, 출차 처리, 삭제 후 이동과 유효성 검증 개선',
        '입출차와 미출차 조회 및 삭제에 로딩과 중복 클릭 방지 상태 적용',
        '입출차 동기화의 주차 서비스별 분기 오류 수정',
        '재전송 대상이 없을 때 동기화 버튼 상태를 안전하게 제어',
        '이사예약 시간대 중복, 입주 기간, 예약금 조건 검증과 중복 요청 방지',
        '전체 공지와 문의 기능 구현, 검색 조건 복원과 XSS 예외 방어',
        '오래된 폼과 Mutation 패턴을 공통 버튼 및 폼 구조로 리팩토링',
      ],
      technologies: ['Vue 3', 'TanStack Query', 'VeeValidate', 'Zod', 'Pinia'],
    },
    {
      id: 'resident',
      index: 'R',
      title: '아파트먼트 입주민앱',
      audience: '입주민용 모바일 웹뷰 서비스',
      summary:
        '인증부터 생활 편의, 관리비, 커뮤니티까지 모바일 환경의 전체 사용자 흐름을 다뤘습니다.',
      featured: '웹과 네이티브 사이의 인증 및 장치 흐름을 안정화',
      contributions: [
        'VueUse useStorage와 Pinia로 자동로그인 및 인증 상태 구조 구현',
        '로그인, 로그아웃, 토큰 재발급, 보류 요청과 Axios 흐름 개선',
        '커머스 인증 토큰 API와 Query를 구현하고 상가 서비스 진입 흐름 연결',
        '네이티브 카메라와 연동한 안면인식 등록 및 iOS 뒤로가기 처리',
        '소방 자가점검의 작성, 서명, 제출, 내역, 상세 전체 흐름 구현',
        '관리비 차트와 조회 화면 구현, 중복 API 호출과 캐시 정책 개선',
        '댓글과 답글의 다중 이미지 등록, 수정, 삭제와 업로드 진행 상태 구현',
      ],
      technologies: [
        'Vue 3',
        'VueUse',
        'Pinia',
        'TanStack Query',
        'ApexCharts',
        'WebView Bridge',
      ],
    },
    {
      id: 'guard',
      index: 'G',
      title: '아파트먼트 경비원웹',
      audience: '경비원용 차량 출입 및 현장 설정 도구',
      summary:
        '차량 출입과 장비 설정처럼 즉시성과 오류 복구가 중요한 현장 기능을 구현했습니다.',
      featured: '현장 장비와 운영 상태를 빠르게 판단할 수 있는 화면 구성',
      contributions: [
        'LPR, 입차 정책, 방문증 키오스크 설정 화면과 API 연동',
        '미정산 차량, 상가 유형, 출차 게이트 관련 운영 흐름 개선',
        '블랙리스트 차량 입차 시 음성 알림 기능 구현',
        '원격 음원 오류 시 로컬 음원으로 대체하는 재생 흐름 구성',
        '이미지 URL 처리를 공통 컴포저블로 분리',
        'GitHub Actions 기반 개발 배포와 브라우저 갱신 자동화',
      ],
      technologies: ['Vue 3', 'TanStack Query', 'Howler', 'Vite', 'GitHub Actions'],
    },
  ],
  timeline: [
    {
      period: '2025.03 - 04',
      title: '주차 운영 흐름 확장',
      description: '미출차 연동, 입출차 생성, 조회와 삭제 상태를 구현했습니다.',
    },
    {
      period: '2025.06 - 10',
      title: '인증과 서비스 연결',
      description: '자동로그인 구조를 정리하고 상가 커머스 진입과 배포 흐름을 연결했습니다.',
    },
    {
      period: '2025.12 - 2026.01',
      title: '데이터 경험과 공통 구조 개선',
      description: '관리비 시각화, 캐시 정책, 공통 폼과 Mutation 패턴을 개선했습니다.',
    },
    {
      period: '2026.02 - 04',
      title: '생활 안전과 네이티브 기능 구현',
      description: '소방 자가점검과 안면인식 등록의 전체 사용자 흐름을 구현했습니다.',
    },
    {
      period: '2026.05 - 06',
      title: '운영 안정성과 미디어 기능 강화',
      description: '다중 이미지, 이사예약 검증, 검색 복원과 예외 방어를 개선했습니다.',
    },
  ],
  skillGroups: [
    {
      title: '프론트엔드 기반',
      description: '컴포넌트와 상태의 경계를 나누고 유지보수 가능한 화면을 만듭니다.',
      skills: ['Vue 3', 'Composition API', 'Vue Router', 'Pinia', 'VueUse', 'Vite'],
    },
    {
      title: '데이터와 폼',
      description: '서버 상태, 검증, 비동기 오류를 사용자 흐름 안에서 처리합니다.',
      skills: ['TanStack Vue Query', 'Axios', 'VeeValidate', 'Zod', 'ApexCharts'],
    },
    {
      title: '모바일과 UI',
      description: '웹뷰와 네이티브 인터페이스의 차이를 고려해 모바일 경험을 다듬습니다.',
      skills: ['Tailwind CSS', 'Responsive UI', 'WebView Bridge', 'Image Upload'],
    },
    {
      title: '품질과 운영',
      description: '일관된 코드와 반복 가능한 배포 과정으로 운영 리스크를 줄입니다.',
      skills: ['ESLint', 'Prettier', 'Husky', 'Sentry', 'GitHub Actions'],
    },
  ],
  education: {
    school: '한라대학교',
    major: '컴퓨터공학과',
    detail: '4년제 졸업',
  },
  certifications: [
    {
      name: '정보처리기사',
      acquired: '2021.06',
    },
  ],
};
