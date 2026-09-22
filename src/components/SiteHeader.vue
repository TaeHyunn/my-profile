<script setup>
import { PhList, PhPrinter, PhX } from '@phosphor-icons/vue';
import { ref } from 'vue';

defineProps({
  navigation: {
    type: Array,
    required: true,
  },
});

const menuOpen = ref(false);
const closeMenu = () => {
  menuOpen.value = false;
};
const printResume = () => window.print();
</script>

<template>
  <header class="site-header">
    <a class="site-name" href="#intro" aria-label="조태현 소개로 이동" @click="closeMenu">
      조태현
    </a>
    <nav class="site-navigation" aria-label="주요 메뉴" :data-open="menuOpen">
      <a v-for="item in navigation" :key="item.href" :href="item.href" @click="closeMenu">
        {{ item.label }}
      </a>
    </nav>
    <div class="header-actions">
      <button class="print-button" type="button" data-print-resume @click="printResume">
        <PhPrinter :size="17" aria-hidden="true" />
        PDF로 저장
      </button>
      <button
        class="menu-toggle"
        type="button"
        data-menu-toggle
        :aria-expanded="menuOpen"
        aria-label="메뉴 열기 또는 닫기"
        @click="menuOpen = !menuOpen"
      >
        <PhX v-if="menuOpen" :size="20" />
        <PhList v-else :size="20" />
      </button>
    </div>
  </header>
</template>
