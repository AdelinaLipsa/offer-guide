export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll-animate', {
    mounted(el: HTMLElement, binding: { value?: string; modifiers?: Record<string, boolean> }) {
      const animation = binding.value || 'fade-up'
      const once = binding.modifiers?.once !== false

      el.classList.add('scroll-animate', `animate-${animation}`)

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Small delay to ensure smooth animation
              requestAnimationFrame(() => {
                el.classList.add('is-visible')
              })
              if (once) {
                observer.unobserve(el)
              }
            } else if (!once) {
              el.classList.remove('is-visible')
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )

      observer.observe(el)

      // Store observer for cleanup
      ;(el as any)._scrollObserver = observer
    },
    unmounted(el: HTMLElement) {
      const observer = (el as any)._scrollObserver
      if (observer) {
        observer.disconnect()
      }
    }
  })
})
