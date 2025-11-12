<template>
  <Teleport to="#teleports">
     <transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
        <div v-if="modelValue" class="modal"  @click.self="$emit('update:modelValue', false)">

      <div class="modal__content">

        <button class="modal__close" @click="$emit('update:modelValue', false)">х</button>

        <div class="modal__text">
          <slot></slot>
        </div>
        
      </div>
    </div>
    </transition>

  </Teleport>
</template>

<script setup>
defineProps(['modelValue'])

defineEmits(['update:modelValue'])
</script>

<style scoped lang="scss">
@use '@/assets/css/variables' as v;

.modal {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  &__content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 65%;
    border: .1rem solid v.$bg-color-light;
    background-color: v.$bg-color;
    padding: 2rem;
    border-radius: .6rem;
    margin: 1rem 0 ;
    
    max-height: 90%;
    position: relative;
  }

  &__text {
  overflow: auto;
  }

  &__close {
    position: absolute;
    top: -8px;
    right: -10px;
    color: #081b29;
    background-color: #00dc82;
    border: 1px solid #00dc82;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.8rem;
    font-size: 1rem;
    z-index: 1;
    overflow: hidden;
    transition: 0.5s;
    padding: 5px 9px;
    line-height: 1.3rem;
    cursor: pointer;
    font-size: 23px;


  }
}
</style>