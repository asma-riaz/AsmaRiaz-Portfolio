import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const isEnabled = isFinePointer && !reduced
    setEnabled(isEnabled)
    document.documentElement.classList.toggle('custom-cursor', isEnabled)
    return () => document.documentElement.classList.remove('custom-cursor')
  }, [reduced])

  useEffect(() => {
    if (!enabled) return undefined

    const ring = { x: 0, y: 0 }
    let raf

    const onMove = (e) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
      ring.x = e.clientX
      ring.y = e.clientY
    }

    const animateRing = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`
      }
      raf = requestAnimationFrame(animateRing)
    }

    const onOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea')) {
        setHovering(true)
      }
    }
    const onOut = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea')) {
        setHovering(false)
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    raf = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div aria-hidden="true">
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[90] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[90] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color] duration-200 ease-out ${
          hovering ? 'h-10 w-10 border-accent-hover/70' : 'h-7 w-7 border-accent/40'
        }`}
      />
    </div>
  )
}
