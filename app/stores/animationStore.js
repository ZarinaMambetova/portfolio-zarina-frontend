import { defineStore } from 'pinia'

export const useAnimationStore = defineStore('animation', {
  state: () => ({
    active: true
  }),
  actions: {
    pause() {
      this.active = false
    },
    resume() {
      this.active = true
    }
  }
})