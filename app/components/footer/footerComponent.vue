<script setup>

</script>

<template>
<footer class="footer"> 
   <div class="footer__col">© 2025 Зарина Мамбетова</div>

</footer>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables' as v;

.footer {
    background-color: rgba(v.$bg-color, .8);
    width: 100%;
    padding: 50px 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: v.$light-gray;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 0;
    right: 0;

    &__col {
      text-align: center;
    }
}
</style>