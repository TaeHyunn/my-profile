<script setup>
import { PhMoon, PhSun } from '@phosphor-icons/vue';
import { computed, ref } from 'vue';

const storageKey = 'profile-theme';

const getPreferredTheme = () => {
  const savedTheme = window.localStorage.getItem(storageKey);
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const theme = ref(getPreferredTheme());

const applyTheme = (nextTheme) => {
  theme.value = nextTheme;
  document.documentElement.dataset.theme = nextTheme;
  window.localStorage.setItem(storageKey, nextTheme);
};

applyTheme(theme.value);

const nextThemeLabel = computed(() =>
  theme.value === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환',
);

const toggleTheme = () => {
  applyTheme(theme.value === 'dark' ? 'light' : 'dark');
};
</script>

<template>
  <button
    class="icon-button theme-toggle"
    type="button"
    :aria-label="nextThemeLabel"
    :title="nextThemeLabel"
    @click="toggleTheme"
  >
    <PhSun v-if="theme === 'dark'" :size="19" weight="regular" />
    <PhMoon v-else :size="19" weight="regular" />
  </button>
</template>
