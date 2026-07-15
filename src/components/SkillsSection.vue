<script setup>
defineProps({
  groups: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section id="skills" class="skills-section" aria-labelledby="skills-title">
    <header class="section-heading">
      <h2 id="skills-title">기술은 사용 맥락으로 설명합니다.</h2>
    </header>
    <div class="skill-groups">
      <article v-for="group in groups" :key="group.title" class="skill-group">
        <h3>{{ group.title }}</h3>
        <p>{{ group.description }}</p>
        <ul>
          <li v-for="skill in group.skills" :key="skill">{{ skill }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>
