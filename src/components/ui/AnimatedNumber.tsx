import { animate, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

/** Counts up to `value` the first time it scrolls into view. */
export function AnimatedNumber({ value, prefix = '', className = '' }: { value: number; prefix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setN(value)
      return
    }
    const c = animate(0, value, { duration: 1.6, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, value, reduce])

  const text = `${prefix}${n.toLocaleString('en-US')}`
  return (
    <span ref={ref} className={`tabular-nums ${className}`} aria-label={`${prefix}${value.toLocaleString('en-US')}`}>
      <span aria-hidden>{text}</span>
    </span>
  )
}
