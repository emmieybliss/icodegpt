import { motion, useReducedMotion } from 'framer-motion'

const BEATS = ['Before the product.', 'Before the users.', 'Before the code.']

export function BrandStory() {
  const reduce = useReducedMotion()
  const fade = (i: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '0px 0px -80px 0px' },
    transition: { duration: reduce ? 0.2 : 0.8, delay: reduce ? 0 : i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section className="section overflow-hidden" aria-labelledby="story-title">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(139,108,255,0.10),transparent)]" />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p {...fade(0)} className="eyebrow justify-center">
            The brand story
          </motion.p>
          <motion.h2 {...fade(1)} id="story-title" className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tightest sm:text-6xl">
            From a domain name to a technology brand.
          </motion.h2>

          <motion.p {...fade(2)} className="mt-14 text-xl text-zinc-300 sm:text-2xl">
            Every technology company starts with an idea.
          </motion.p>
          <div className="mt-8 space-y-2">
            {BEATS.map((b, i) => (
              <motion.p key={b} {...fade(3 + i)} className="font-display text-2xl text-zinc-500 sm:text-3xl">
                {b}
              </motion.p>
            ))}
          </div>
          <motion.p {...fade(6)} className="mt-8 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient">There is a name.</span>
          </motion.p>

          <motion.div {...fade(7)} className="mx-auto mt-14 max-w-2xl space-y-5 text-[17px] leading-relaxed text-zinc-400">
            <p>
              iCodeGPT.com was acquired with the vision that the intersection of coding and artificial intelligence would
              become one of the defining areas of software innovation.
            </p>
            <p className="text-zinc-300">
              Today, the domain is being made available to the founder or company that can turn that idea into something
              bigger.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
