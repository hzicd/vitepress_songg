<template>
  <div aria-hidden="true" class="vp-confetti"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import confetti from 'canvas-confetti'

const defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  colors: ['#FFE400', '#FFBD00', '#E89400', '#FFCA6C', '#FDFFB8']
}

let timers = []

function shoot() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ['star']
  })

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ['circle']
  })
}

onMounted(() => {
  if (typeof window === 'undefined') return
  timers.push(setTimeout(shoot, 0))
  timers.push(setTimeout(shoot, 100))
  timers.push(setTimeout(shoot, 200))
})

onBeforeUnmount(() => {
  timers.forEach(t => clearTimeout(t))
  timers = []
})
</script>

<style scoped>
.vp-confetti {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
</style>