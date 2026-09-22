<script setup>
defineProps({
  groups: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section id="skills" class="resume-section skills-section" aria-labelledby="skills-title">
    <h2 id="skills-title">기술</h2>
    <dl class="skill-list">
      <div v-for="group in groups" :key="group.title">
        <dt>{{ group.title }}</dt>
        <dd>{{ group.skills.join(', ') }}</dd>
      </div>
    </dl>
  </section>
</template>
