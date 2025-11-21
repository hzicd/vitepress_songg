import { h, nextTick, provide } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './rainbow.css'
import './blur.css'
import './custom-block.css'
import './vp-code-title.css'
import confetti from './components/confetti.vue'
import HomeUnderline from './components/HomeUnderline.vue'
import MyLayout from './components/MyLayout.vue'
import mediumZoom from 'medium-zoom'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
export default {
  extends: DefaultTheme,
  Layout: MyLayout, // 视图过渡
  enhanceApp({ app }) {
    app.component('confetti', confetti)  // 欢迎离子组件
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