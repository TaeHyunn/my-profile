<script setup>
defineProps({
  projects: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section id="projects" class="resume-section projects-section" aria-labelledby="projects-title">
    <h2 id="projects-title">주요 프로젝트</h2>
    <div class="project-list">
      <article v-for="project in projects" :key="project.id" class="project-record" data-project>
        <div class="project-period">
          <time>{{ project.period }}</time>
          <span>{{ project.product }}</span>
        </div>
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p class="record-summary">{{ project.summary }}</p>
          <ul class="plain-list">
            <li v-for="item in project.contributions" :key="item">{{ item }}</li>
          </ul>
          <p class="technology-line">
            <strong>사용 기술</strong>
            <span>{{ project.technologies.join(', ') }}</span>
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
