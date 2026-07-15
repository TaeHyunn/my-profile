<script setup>
defineProps({
  education: {
    type: Object,
    required: true,
  },
  certifications: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section
    id="education"
    class="education-section"
    aria-labelledby="education-title"
  >
    <h2 id="education-title">배움의 기반</h2>
    <div class="education-grid">
      <article>
        <p>학력</p>
        <h3>{{ education.school }}</h3>
        <p>{{ education.major }} · {{ education.detail }}</p>
      </article>
      <article v-for="item in certifications" :key="item.name">
        <p>자격</p>
        <h3>{{ item.name }}</h3>
        <time>{{ item.acquired }} 취득</time>
      </article>
    </div>
  </section>
</template>
