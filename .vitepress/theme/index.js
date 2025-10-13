import { h, nextTick, provide } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './rainbow.css'
import './blur.css'
import './custom-block.css'
import './vp-code-title.css'
import confetti from './components/confetti.vue'
import HomeUnderline from './components/HomeUnderline.vue'

import mediumZoom from 'medium-zoom'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout: {
    setup(props, { slots }) {
      // 适配暗黑模式切换过渡
      const enableTransitions = () =>
        'startViewTransition' in document &&
        window.matchMedia('(prefers-reduced-motion: no-preference)').matches

      provide('toggle-appearance', async ({ clientX: x, clientY: y }) => {
        const isDark = document.documentElement.classList.contains('dark')
        if (!enableTransitions()) {
          document.documentElement.classList.toggle('dark')
          return
        }

        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y)
          )}px at ${x}px ${y}px)`
        ]

        await document.startViewTransition(async () => {
          document.documentElement.classList.toggle('dark')
          await nextTick()
        }).ready

        document.documentElement.animate(
          { clipPath: isDark ? clipPath.reverse() : clipPath },
          {
            duration: 300,
            easing: 'ease-in',
            pseudoElement: `::view-transition-${isDark ? 'old' : 'new'}(root)`
          }
        )
      })

      return () => h(DefaultTheme.Layout, null, slots)
    }
  },
  enhanceApp({ app }) {
    app.component('confetti', confetti)
    app.component('HomeUnderline', HomeUnderline)
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }) // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }) // 为所有图片启用放大
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}