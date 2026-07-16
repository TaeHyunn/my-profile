<script setup>
import profileAvatar from '@/assets/profile-avatar.jpg';

defineProps({
  profile: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section id="intro" class="hero-section" aria-labelledby="hero-title">
    <div class="hero-copy">
      <p class="hero-role">{{ profile.role }}</p>
      <h1 id="hero-title">{{ profile.headline }}</h1>
      <p class="hero-introduction">{{ profile.introduction }}</p>
      <div class="hero-actions" aria-label="주요 링크">
        <a class="button button-primary" href="#experience">경력 보기</a>
        <a class="button button-secondary" :href="`mailto:${profile.email}`">
          이메일
        </a>
      </div>
    </div>
    <div class="hero-identity" aria-label="프로필 정보">
      <div class="portrait-frame">
        <img
          :src="profileAvatar"
          :alt="profile.avatarAlt"
          width="460"
          height="460"
        />
        <span aria-hidden="true">JT</span>
      </div>
      <div class="identity-caption">
        <strong>{{ profile.name }}</strong>
        <span>{{ profile.englishName }}</span>
      </div>
    </div>
  </section>
</template>
