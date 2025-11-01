<script setup lang="ts">

</script>

<template>
<header class="header">
  <header-navigation-bar/>
</header>
</template>

<style lang="scss" scoped>
@import '@/assets/css/variables';

.header {
  background-color: $bg-color;
      position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2rem 9%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    transition: .3s;
}
</style>