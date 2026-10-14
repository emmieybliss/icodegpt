import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { ACQUIRE_URL, NAV_LINKS } from '../data/content'
import { Logo } from './ui/Logo'
import { AcquireButton, ContactButton } from './ui/Button'

export function Navbar() {
  const { scrollY } = useScroll()
  const reduce = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24))

  // Lock scroll, close on Escape and keep focus inside the open mobile menu.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const first = panelRef.current?.querySelector<HTMLElement>('a,button')
    first?.focus()
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
      if (e.key === 'Tab' && panelRef.current) {
        // The close toggle lives in the header bar, so include it in the focus loop.
        const items = [
          ...(toggleRef.current ? [toggleRef.current] : []),
          ...Array.from(panelRef.current.querySelectorAll<HTMLElement>('a,button')),
        ]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === items[0]) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          items[0].focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const close = () => mq.matches && setOpen(false)
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-ink-950"
      >
        Skip to content
      </a>
      <motion.div
        initial={false}
        animate={{
          paddingTop: scrolled || open ? 10 : 18,
          paddingBottom: scrolled || open ? 10 : 18,
          backgroundColor: scrolled || open ? 'rgba(8,9,14,0.72)' : 'rgba(8,9,14,0)',
          borderColor: scrolled || open ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0)',
        }}
        transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`border-b ${scrolled || open ? 'backdrop-blur-xl backdrop-saturate-150' : ''}`}
      >
        <nav className="container-x flex items-center justify-between gap-6" aria-label="Primary">
          <a href="#top" className="rounded-lg" aria-label="iCodeGPT.com home">
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3.5 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/[0.04] hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <AcquireButton label="Acquire Domain" size="md" magnetic={false} className="hidden sm:inline-flex" />
            <a
              href={ACQUIRE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1 rounded-full bg-white px-3.5 text-[13px] font-medium text-ink-950 sm:hidden"
              aria-label="Acquire Domain (opens the Afternic listing in a new tab)"
            >
              Acquire
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-200 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="h-[18px] w-[18px]" aria-hidden /> : <Menu className="h-[18px] w-[18px]" aria-hidden />}
            </button>
          </div>
        </nav>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0, y: reduce ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 top-[61px] overflow-y-auto border-t border-white/5 bg-ink-950/[0.97] backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex min-h-full flex-col pb-10 pt-6">
              <ul className="flex flex-col">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: reduce ? 0 : -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduce ? 0 : 0.04 * i + 0.05 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-white/[0.06] py-4 font-display text-2xl font-medium text-white"
                    >
                      {l.label}
                      <span className="font-mono text-xs text-zinc-500">0{i + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3 pt-10">
                <AcquireButton className="w-full" magnetic={false} />
                <ContactButton className="w-full" />
                <p className="pt-2 text-center font-mono text-xs text-zinc-500">$4,995 USD · Available via Afternic</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
