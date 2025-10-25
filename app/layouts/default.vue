<!-- <template>
  <div>
    <AppHeader /> 
    <slot />
    <AppFooter />
  </div>
</template> -->
<template>
  <div>
    <!-- <NavBar/> -->
    <main>
      <div class="container">
        <!-- slot работает как vue-router, показывает. Сюда будут передаваться страницы из папки pages -->
        <slot />
      </div>
    </main>
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar'

// export default {
//   components: {
//     NavBar
//   }
// }
</script>

<style lang="scss"></style>
