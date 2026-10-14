import { motion, useReducedMotion } from 'framer-motion'
import { NAME_PARTS } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const accents = ['from-accent-blue/30', 'from-accent-violet/30', 'from-accent-cyan/25']

export function WhyICodeGPT() {
  const reduce = useReducedMotion()
  return (
    <section id="why" className="section" aria-labelledby="why-title">
      <div className="container-x">
        <SectionHeading
          id="why-title"
          eyebrow="Why iCodeGPT"
          title="Built into the name."
          body="Three parts, each doing a specific job. Together they describe a category in a single word."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {NAME_PARTS.map((p, i) => (
            <Reveal key={p.token} delay={i * 0.08}>
              <article className="surface card-hover group relative h-full overflow-hidden p-7 sm:p-8">
                <div aria-hidden className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${accents[i]} to-transparent opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-80`} />
                <h3 className="relative font-display text-5xl font-semibold tracking-tightest sm:text-6xl">
                  {i === 1 ? <span className="text-gradient">{p.token}</span> : p.token}
                </h3>
                <p className="relative mt-6 text-sm text-zinc-500">{p.lead}</p>
                <ul className="relative mt-3 flex flex-wrap gap-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[12px] text-zinc-300">
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-6">
          <div className="surface relative overflow-hidden px-6 py-12 text-center sm:py-16" role="img" aria-label="iCode plus GPT plus .COM equals AI times Code times Brand">
            <div aria-hidden className="grid-bg absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
            <div className="relative flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-xl text-zinc-300 sm:text-3xl" aria-hidden>
              {['iCode', '+', 'GPT', '+', '.COM'].map((t, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: reduce ? 0 : i * 0.1, duration: 0.5 }}
                  className={t === '+' ? 'text-zinc-600' : 'text-white'}
                >
                  {t}
                </motion.span>
              ))}
            </div>
            <motion.div
              aria-hidden
              className="relative mx-auto my-5 h-10 w-px bg-gradient-to-b from-white/40 to-accent-blue"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              style={{ originY: 0 }}
              transition={{ delay: reduce ? 0 : 0.55, duration: 0.6 }}
            />
            <motion.p
              aria-hidden
              initial={{ opacity: 0, letterSpacing: reduce ? '0.08em' : '0.3em' }}
              whileInView={{ opacity: 1, letterSpacing: '0.08em' }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : 0.9, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative whitespace-nowrap font-display text-[1.6rem] font-semibold text-white sm:text-5xl"
            >
              AI <span className="text-accent-blue">×</span> CODE <span className="text-accent-violet">×</span> BRAND
            </motion.p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
