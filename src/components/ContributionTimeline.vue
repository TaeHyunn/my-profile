<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="timeline-section" aria-labelledby="timeline-title">
    <header class="section-heading">
      <h2 id="timeline-title">기여의 흐름</h2>
      <p>기능을 추가하는 데서 멈추지 않고 다음 운영 문제를 이어서 해결했습니다.</p>
    </header>
    <ol class="timeline-list">
      <li v-for="item in items" :key="item.period">
        <time>{{ item.period }}</time>
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>
