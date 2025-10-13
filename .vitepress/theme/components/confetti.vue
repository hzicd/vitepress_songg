<script setup>
import { onMounted } from 'vue'
import confetti from 'canvas-confetti'

function randomInRange(min, max) {
  return Math.random() * (max - min) + min
}

onMounted(() => {
  const duration = 15 * 1000
  const animationEnd = Date.now() + duration
  let skew = 1

  function frame() {
    const timeLeft = animationEnd - Date.now()
    const ticks = Math.max(200, 500 * (timeLeft / duration))
    skew = Math.max(0.8, skew - 0.001)

    confetti({
      particleCount: 1,
      startVelocity: 0,
      angle: 225, // 西南方向
      spread: 20, // 控制发射角度范围
      ticks: ticks,
      origin: {
        x: Math.random(),
        y: (Math.random() * skew) - 0.2
      },
      colors: ['#ffffff'],
      shapes: ['circle'],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4)
    })

    if (timeLeft > 0) {
      requestAnimationFrame(frame)
    }
  }

  frame()
})
</script>