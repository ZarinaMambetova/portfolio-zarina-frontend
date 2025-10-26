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

<style lang="scss"></style>
