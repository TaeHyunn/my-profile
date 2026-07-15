<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const root = ref(null);
const visible = ref(false);
let observer;

onMounted(() => {
  const reducedMotion = window.matchMedia?.(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (reducedMotion || !window.IntersectionObserver) {
    visible.value = true;
    return;
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      visible.value = true;
      observer.disconnect();
    },
    { threshold: 0.12 },
  );
  observer.observe(root.value);
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <div ref="root" class="reveal" :class="{ 'is-visible': visible }">
    <slot />
  </div>
</template>
