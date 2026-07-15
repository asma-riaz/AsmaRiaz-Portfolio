import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-[3px] origin-left bg-accent"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
