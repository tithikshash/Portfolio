import { useEffect, useRef } from 'react'

export default function CrystalCursor() {
  const canvasRef = useRef(null)
  const particles = useRef([])
  const mouse = useRef({ x: 0, y: 0 })
  const lastMouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    document.body.style.cursor = 'none'

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }

      const dx = mouse.current.x - lastMouse.current.x
      const dy = mouse.current.y - lastMouse.current.y
      const speed = Math.sqrt(dx * dx + dy * dy)

      if (speed > 3) { // Only spawn on noticeable movement
        const count = Math.min(Math.floor(speed / 6), 4) // Max 4 tiny particles
        for (let i = 0; i < count; i++) {
          particles.current.push({
            x: mouse.current.x,
            y: mouse.current.y,
            vx: (Math.random() - 0.5) * 2, // Very low spread
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 4 + 3, // Small crystals
            life: 1,
            color: ['#2dd4bf', '#fbcfe8', '#ffffff'][Math.floor(Math.random() * 3)],
          })
        }
      }

      lastMouse.current = { ...mouse.current }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Soft bigger teal glow halo + white core
      ctx.beginPath()
      ctx.arc(mouse.current.x, mouse.current.y, 24, 0, Math.PI * 2) // Slightly bigger
      ctx.fillStyle = 'rgba(45, 212, 191, 0.3)'
      ctx.shadowBlur = 60
      ctx.shadowColor = '#2dd4bf'
      ctx.fill()

      ctx.beginPath()
      ctx.arc(mouse.current.x, mouse.current.y, 10, 0, Math.PI * 2)
      ctx.fillStyle = '#ffffff'
      ctx.shadowBlur = 40
      ctx.shadowColor = '#5eead4'
      ctx.fill()

      // Minimal subtle crystal trail
      particles.current = particles.current.filter(p => {
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.03 // Quick fade
        p.size *= 0.95

        if (p.life > 0 && p.size > 1) {
          ctx.globalAlpha = p.life * 0.7

          // Soft outer glow
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 1.8, 0, Math.PI * 2)
          ctx.fillStyle = '#ffffff'
          ctx.shadowBlur = 30
          ctx.shadowColor = p.color
          ctx.fill()

          // Tiny pastel core
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = p.color
          ctx.shadowBlur = 20
          ctx.shadowColor = p.color
          ctx.fill()

          return true
        }
        return false
      })

      ctx.globalAlpha = 1
      ctx.shadowBlur = 0

      requestAnimationFrame(animate)
    }

    if (!('ontouchstart' in window)) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('resize', handleResize)
      animate()
    }

    return () => {
      document.body.style.cursor = 'default'
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  )
}