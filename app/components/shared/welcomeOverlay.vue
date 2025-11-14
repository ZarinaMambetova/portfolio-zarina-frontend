<template>
    <div v-if="isVisible" class="welcome-overlay">
        <div class="welcome-overlay__block welcome-overlay__block-grey"></div>
        <div class="welcome-overlay__block welcome-overlay__block-green"></div>
        <div class="welcome-overlay__block welcome-overlay__block-white"></div>
    </div>
</template>

<script setup>
const isVisible = ref(true)

onMounted(() => {
    // Скрываем компонент после завершения всех анимаций
    setTimeout(() => {
        isVisible.value = false
    }, 1500) // Общее время анимации
})
</script>

<style scoped lang="scss">
@use '@/assets/css/variables' as v;

.welcome-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    pointer-events: none;
    &__block {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        animation: slideOut 0.8s ease-in-out forwards;
        &-grey {
            background-color: v.$bg-color-light;
            z-index: 3;
            animation-delay: 0.2s;
        }
        &-green {
            background-color: v.$main-green;
            z-index: 2;
            animation-delay: 0.4s;
        }
                &-white {
            background-color: v.$text-color;
            z-index: 1;
            animation-delay: 0.5s;
        }
    }
}

@keyframes slideOut {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}
</style>