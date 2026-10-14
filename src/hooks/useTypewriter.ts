import { useEffect, useState } from 'react'

/** Reveals `text` one character at a time once `active` is true. */
export function useTypewriter(text: string, active: boolean, speed = 32, instant = false) {
  const [count, setCount] = useState(instant ? text.length : 0)

  useEffect(() => {
    if (instant) {
      setCount(text.length)
      return
    }
    if (!active) {
      setCount(0)
      return
    }
    setCount(0)
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setCount(i)
      if (i >= text.length) window.clearInterval(id)
    }, speed)
    return () => window.clearInterval(id)
  }, [text, active, speed, instant])

  return { shown: text.slice(0, count), done: count >= text.length }
}
