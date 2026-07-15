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
