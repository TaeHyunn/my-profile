<script setup>
defineProps({
  experience: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section id="experience" class="resume-section" aria-labelledby="experience-title">
    <h2 id="experience-title">경력</h2>
    <article class="experience-record">
      <div class="record-heading">
        <div>
          <h3>{{ experience.company }}</h3>
          <p>{{ experience.role }}</p>
        </div>
        <time>{{ experience.period }}</time>
      </div>
      <p class="record-summary">{{ experience.summary }}</p>
      <ul class="plain-list">
        <li v-for="item in experience.focus" :key="item">{{ item }}</li>
      </ul>
    </article>
  </section>
</template>
