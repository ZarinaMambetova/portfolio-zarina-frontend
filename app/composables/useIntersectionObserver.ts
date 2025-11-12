export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const isIntersecting = ref(false)
  const targetRef = ref<HTMLElement | null>(null)
  const observer = ref<IntersectionObserver | null>(null)

  onMounted(() => {
    if (!targetRef.value) return

    observer.value = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry) {
        isIntersecting.value = entry.isIntersecting
      }
    }, options)

    observer.value.observe(targetRef.value)
  })

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect()
    }
  })

  return {
    targetRef,
    isIntersecting
  }
}