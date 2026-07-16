<script setup>
defineProps({
  projects: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section id="projects" class="projects-section" aria-labelledby="projects-title">
    <header class="section-heading">
      <h2 id="projects-title">서로 다른 사용자를 위한 하나의 제품군</h2>
      <p>커밋과 변경 파일로 확인된 기여만 프로젝트 사례로 정리했습니다.</p>
    </header>

    <div class="system-visual" aria-label="관리자, 입주민, 경비원 제품 연결 구조">
      <div class="system-core">
        <span>공통 기술 기반</span>
        <strong>Vue 3</strong>
        <p>하나의 기술 기반에서 사용자별 업무 흐름을 다르게 설계했습니다.</p>
      </div>
      <ol class="system-tracks">
        <li class="system-track">
          <span class="track-index">01</span>
          <div>
            <small>관리</small>
            <strong>관리자웹</strong>
          </div>
          <p>조건과 예외가 많은 운영 업무를 정확한 화면 흐름으로 연결</p>
        </li>
        <li class="system-track">
          <span class="track-index">02</span>
          <div>
            <small>생활</small>
            <strong>입주민앱</strong>
          </div>
          <p>인증과 네이티브 기능을 자연스러운 모바일 경험으로 연결</p>
        </li>
        <li class="system-track">
          <span class="track-index">03</span>
          <div>
            <small>현장</small>
            <strong>경비원웹</strong>
          </div>
          <p>차량 출입과 장비 상태를 빠르게 판단하고 대응하도록 구성</p>
        </li>
      </ol>
    </div>

    <div class="project-list">
      <article
        v-for="project in projects"
        :key="project.id"
        class="project-case"
        :class="`project-${project.id}`"
        data-project
      >
        <div class="project-summary">
          <span class="project-index" aria-hidden="true">{{ project.index }}</span>
          <p class="project-audience">{{ project.audience }}</p>
          <h3>{{ project.title }}</h3>
          <p>{{ project.summary }}</p>
          <strong class="project-featured">{{ project.featured }}</strong>
        </div>
        <div class="project-evidence">
          <ul class="technology-list" aria-label="사용 기술">
            <li v-for="technology in project.technologies" :key="technology">
              {{ technology }}
            </li>
          </ul>
          <details>
            <summary>기여 내용 전체 보기</summary>
            <ul class="contribution-list">
              <li v-for="item in project.contributions" :key="item">{{ item }}</li>
            </ul>
          </details>
        </div>
      </article>
    </div>
  </section>
</template>
