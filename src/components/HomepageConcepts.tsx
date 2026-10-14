import { ArrowRight } from 'lucide-react'
import { HOMEPAGE_CONCEPTS } from '../data/content'
import { LogoMark } from './ui/Logo'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const glows: Record<string, string> = {
  blue: 'rgba(91,140,255,0.22)',
  violet: 'rgba(139,108,255,0.22)',
  cyan: 'rgba(63,208,224,0.18)',
}

export function HomepageConcepts() {
  return (
    <section className="section" aria-labelledby="homepage-title">
      <div className="container-x">
        <SectionHeading
          id="homepage-title"
          eyebrow="Your homepage"
          title="What could your homepage say?"
          body="These are conceptual brand directions demonstrating the flexibility of the name."
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {HOMEPAGE_CONCEPTS.map((c, i) => (
            <Reveal key={c.headline} delay={i * 0.08}>
              <figure className="surface card-hover group h-full overflow-hidden">
                <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-ink-850 px-4 py-2.5" aria-hidden>
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="ml-3 rounded bg-ink-900 px-2 py-0.5 font-mono text-[10px] text-zinc-500">icodegpt.com</span>
                </div>
                <div
                  className="relative flex min-h-[260px] flex-col justify-between p-7"
                  style={{ background: `radial-gradient(420px circle at 50% 0%, ${glows[c.hue]}, transparent 65%)` }}
                >
                  <div className="flex items-center gap-2" aria-hidden>
                    <LogoMark className="h-5 w-5" />
                    <span className="font-display text-sm font-semibold text-white">iCodeGPT</span>
                  </div>
                  <blockquote className="mt-10 font-display text-[1.7rem] font-semibold leading-[1.1] tracking-tight text-white">
                    {c.headline}
                  </blockquote>
                  <span
                    className="mt-8 inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-medium text-ink-950"
                    aria-hidden
                  >
                    {c.cta}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
                <figcaption className="sr-only">
                  Concept {i + 1}: “{c.headline}” with a “{c.cta}” button
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
