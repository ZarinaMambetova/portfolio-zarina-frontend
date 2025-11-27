<script setup>

</script>

<template>
<footer class="footer"> 
   <div class="footer__col">© 2025 Сайт разработан Зариной Мамбетовой</div>

</footer>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables' as v;

.footer {
    background-color: rgba(v.$bg-color, .8);
    width: 100%;
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: v.$light-gray;

    &__col {
      text-align: center;
    }
}
</style>