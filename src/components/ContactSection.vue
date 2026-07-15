<script setup>
defineProps({
  profile: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <footer id="contact" class="contact-section" aria-labelledby="contact-title">
    <div>
      <h2 id="contact-title">함께 일할 기회를 기다립니다.</h2>
      <p>Vue 기반 제품을 오래 운영하며 더 나은 흐름을 만드는 일에 관심이 있습니다.</p>
    </div>
    <div class="contact-links">
      <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
      <a :href="profile.github" target="_blank" rel="noopener noreferrer">
        GitHub {{ profile.githubLabel }}
      </a>
    </div>
    <p class="copyright">© 2026 {{ profile.name }}</p>
  </footer>
</template>
