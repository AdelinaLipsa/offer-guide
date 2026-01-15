import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation(options: {
  threshold?: number
  rootMargin?: string
  once?: boolean
} = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    once = true
  } = options

  const elementRef = ref<HTMLElement | null>(null)
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!elementRef.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            if (once && observer && elementRef.value) {
              observer.unobserve(elementRef.value)
            }
          } else if (!once) {
            isVisible.value = false
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { elementRef, isVisible }
}

// Directive for easy template usage
export const vScrollAnimate = {
  mounted(el: HTMLElement, binding: { value?: string; modifiers?: Record<string, boolean> }) {
    const animation = binding.value || 'fade-up'
    const once = binding.modifiers?.once !== false

    el.classList.add('scroll-animate', `animate-${animation}`)
    el.style.opacity = '0'

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            el.style.opacity = ''
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
}
