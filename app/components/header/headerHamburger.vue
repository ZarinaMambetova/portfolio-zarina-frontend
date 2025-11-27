<template>
<div class="header-hamburger"
 :class=" { 'active' : isOpen }"
 @click.prevent="toggleHamburger" @keypress="enter">
  <div class="header-hamburger__lines">
    <span class="header-hamburger__line header-hamburger__line-1"></span>
    <span class="header-hamburger__line header-hamburger__line-2"></span>
    <span class="header-hamburger__line header-hamburger__line-3"></span>
  </div>
</div>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['addClassOpen'])

const toggleHamburger = () => {
  emit('addClassOpen')
}
</script>

<style lang="scss" scoped>
@use '@/assets/css/variables' as v;

.header-hamburger {
  display: none;

  @media (max-width: 900px) {
    display: block;
  }

  &__lines {
    position: relative;
    height: 30px;
    width: 32px;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform .6s cubic-bezier(.165, .84, .44, 1);
    z-index: 95;
    cursor: pointer;
  }

  &__line {
    background-color: v.$text-color;
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    border-radius: 1.5px;
    transition: transform .6s cubic-bezier(.165, .84, .44, 1),
      opacity .3s cubic-bezier(.165, .84, .44, 1),
      background-color .6s cubic-bezier(.165, .84, .44, 1);
  }

  &__line-1 {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }

  &__line-2 {
    transform-origin: 100% 50%;
    transform: scaleX(.8);
  }

  &__lines:hover .header-hamburger__line-2 {
    transform: scaleX(.8);
  }

  &__line-3 {
    transform: translateY(6px);
  }

  &.active .header-hamburger__lines {
    transform: rotate(-180deg);
  }

  &.active .header-hamburger__line-1 {
    transform: rotate(45deg);
  }

  &.active .header-hamburger__line-2 {
    opacity: 0;
  }

  &.active .header-hamburger__line-3 {
    transform: rotate(-45deg);
  }
}
</style>
