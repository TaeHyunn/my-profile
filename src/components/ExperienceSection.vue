<script setup>
defineProps({
  experience: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section
    id="experience"
    class="experience-section"
    aria-labelledby="experience-title"
  >
    <header class="section-heading">
      <h2 id="experience-title">실무에서 제품을 끝까지 다룹니다.</h2>
      <p>{{ experience.summary }}</p>
    </header>
    <article class="experience-record">
      <div class="experience-meta">
        <p class="company-name">{{ experience.company }}</p>
        <p>{{ experience.role }}</p>
        <time>{{ experience.period }}</time>
      </div>
      <ul class="experience-focus">
        <li v-for="item in experience.focus" :key="item">{{ item }}</li>
      </ul>
    </article>
  </section>
</template>
