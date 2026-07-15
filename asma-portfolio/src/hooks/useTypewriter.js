import { useEffect, useState } from 'react'

/**
 * Cycles through an array of words with a typing / deleting animation.
 * Respects prefers-reduced-motion by freezing on the first word.
 */
export function useTypewriter(words, { typingSpeed = 70, deletingSpeed = 40, pauseMs = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (reduced || words.length === 0) return undefined

    const current = words[index % words.length]

    if (!deleting && subIndex === current.length) {
      const pause = setTimeout(() => setDeleting(true), pauseMs)
      return () => clearTimeout(pause)
    }

    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
      return undefined
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed,
    )
    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, words, reduced, typingSpeed, deletingSpeed, pauseMs])

  if (reduced) return words[0] ?? ''
  return words[index % words.length]?.slice(0, subIndex) ?? ''
}
