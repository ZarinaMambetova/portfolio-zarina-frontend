import { ref, onMounted, onUnmounted } from 'vue'
import { useAnimationStore } from '@/stores/animationStore'

export const useIntersectionObserver = (
  elementRef: Ref<HTMLElement | null>,
  options?: IntersectionObserverInit,
  callback?: (isIntersecting: boolean, entry?: IntersectionObserverEntry) => void
) => {
  const animationStore = useAnimationStore()
  const isIntersecting = ref(false)

  onMounted(() => {
    if (!elementRef.value) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!animationStore.active) return
        
        const intersecting = entry.isIntersecting
        isIntersecting.value = intersecting
        
        if (callback) {
          callback(intersecting, entry)
        }
      })
    }, options)

    observer.observe(elementRef.value)

    // Очистка
    onUnmounted(() => {
      observer.disconnect()
    })
  })

  return {
    isIntersecting
  }
}