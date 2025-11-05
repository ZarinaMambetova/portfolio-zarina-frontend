<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <h2 class="title">
    {{ title }}
  </h2>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables' as v;

.main-title {
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: v.$text-color;
}
</style>