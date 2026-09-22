<script setup>
defineProps({
  profile: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section id="intro" class="hero-section" aria-labelledby="hero-title">
    <p class="hero-role">{{ profile.role }}</p>
    <h1 id="hero-title">{{ profile.name }}</h1>
    <p class="hero-headline">{{ profile.headline }}</p>
    <p class="hero-introduction">{{ profile.introduction }}</p>
    <address class="profile-links">
      <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
      <a :href="profile.github" target="_blank" rel="noopener noreferrer">
        {{ profile.githubLabel }}
      </a>
    </address>
  </section>
</template>
