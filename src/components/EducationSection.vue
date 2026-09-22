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
  <section id="education" class="resume-section education-section" aria-labelledby="education-title">
    <h2 id="education-title">학력 및 자격</h2>
    <div class="education-list">
      <article>
        <p class="item-label">학력</p>
        <div>
          <h3>{{ education.school }}</h3>
          <p>{{ education.major }} · {{ education.detail }}</p>
        </div>
      </article>
      <article v-for="item in certifications" :key="item.name">
        <p class="item-label">자격</p>
        <div>
          <h3>{{ item.name }}</h3>
          <time>{{ item.acquired }} 취득</time>
        </div>
      </article>
    </div>
  </section>
</template>
