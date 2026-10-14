import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import type { PointerEvent } from 'react'
import { ConceptualIDE } from './ConceptualIDE'
import { AcquireButton, ContactButton } from './ui/Button'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduce = useReducedMotion()
  const mx = useSpring(useMotionValue(50), { stiffness: 60, damping: 20 })
  const my = useSpring(useMotionValue(30), { stiffness: 60, damping: 20 })
  const glow = useMotionTemplate`radial-gradient(600px circle at ${mx}% ${my}%, rgba(91,140,255,0.13), transparent 60%)`

  function onMove(e: PointerEvent<HTMLElement>) {
    if (reduce || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width) * 100)
    my.set(((e.clientY - r.top) / r.height) * 100)
  }

  const item = (i: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0.2 : 0.8, delay: reduce ? 0 : 0.1 + i * 0.08, ease },
  })

  return (
    <section
      id="top"
      onPointerMove={onMove}
      className="noise relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40"
      aria-labelledby="hero-title"
    >
      {/* Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="grid-bg absolute inset-0 animate-grid-drift [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div className="absolute left-1/2 top-[-18%] h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(91,140,255,0.22),rgba(139,108,255,0.10),transparent)] blur-2xl" />
        <div className="absolute right-[-10%] top-[30%] h-[420px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(63,208,224,0.10),transparent)] blur-2xl" />
        <motion.div className="absolute inset-0" style={{ background: glow }} />
      </div>

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.02fr_1fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <motion.p {...item(0)} className="inline-flex items-center gap-2 rounded-full border border-accent-blue/25 bg-accent-blue/[0.07] px-3 py-1.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.18em] text-[#a9c0ff] sm:text-[11px]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent-green" />
            </span>
            Domain available for acquisition
          </motion.p>

          <motion.p {...item(1)} className="mt-7 font-mono text-lg text-zinc-300 sm:text-xl">
            i<span className="text-white">Code</span>
            <span className="text-gradient font-medium">GPT</span>
            <span className="text-zinc-500">.com</span>
          </motion.p>

          <motion.h1
            id="hero-title"
            {...item(2)}
            className="mx-auto mt-4 max-w-[16ch] text-[2.6rem] font-semibold leading-[1.02] tracking-tightest sm:text-6xl lg:mx-0 lg:text-[4.4rem]"
          >
            The name for the next generation of{' '}
            <span className="text-gradient">AI&#8209;powered coding.</span>
          </motion.h1>

          <motion.p {...item(3)} className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-zinc-400 sm:text-lg lg:mx-0">
            A short, memorable .COM brand built for the intersection of artificial intelligence, software development and
            developer tools.
          </motion.p>

          <motion.div {...item(4)} className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <AcquireButton />
            <ContactButton />
          </motion.div>

          <motion.p {...item(5)} className="mt-6 font-mono text-[11.5px] text-zinc-500">
            <span className="block sm:inline">Available for acquisition via Afternic</span>
            <span className="mx-1.5 hidden text-zinc-700 sm:inline">•</span>
            <span className="block sm:inline">Asking $4,995 USD</span>
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 30, scale: reduce ? 1 : 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: reduce ? 0.2 : 1, delay: reduce ? 0 : 0.35, ease }}
          className="relative mx-auto w-full max-w-[640px]"
        >
          <ConceptualIDE />
        </motion.div>
      </div>
    </section>
  )
}
