import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Plus } from 'lucide-react'
import { useState } from 'react'
import { FAQS } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const reduce = useReducedMotion()

  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions, answered." body="Anything else? The seller replies directly." />
        <Reveal delay={0.1}>
          <ul className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {FAQS.map((f, i) => {
              const isOpen = open === i
              const btnId = `faq-btn-${i}`
              const panelId = `faq-panel-${i}`
              return (
                <li key={f.q}>
                  <h3 className="font-sans">
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left text-[17px] font-medium text-white transition-colors hover:text-[#c9d6ff]"
                    >
                      {f.q}
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: reduce ? 0 : 0.25 }}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10"
                        aria-hidden
                      >
                        <Plus className="h-4 w-4" />
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-12 text-[15px] leading-relaxed text-zinc-400">
                          <p>{f.a}</p>
                          {f.link && (
                            <a
                              href={f.link.href}
                              {...(f.link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                              className="mt-3 inline-flex items-center gap-1 text-[#a9c0ff] underline decoration-[#a9c0ff]/30 underline-offset-4 hover:text-white"
                            >
                              {f.link.label}
                              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
