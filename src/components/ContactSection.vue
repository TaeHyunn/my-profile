<script setup>
defineProps({
  profile: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <footer id="contact" class="contact-section" aria-label="연락처">
    <p>{{ profile.name }} · {{ profile.role }}</p>
    <div>
      <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
      <a :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  </footer>
</template>
