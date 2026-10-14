import { Brain, CodeXml, Wrench } from 'lucide-react'
import { PRICE } from '../data/content'
import { AcquireButton } from './ui/Button'
import { AnimatedNumber } from './ui/AnimatedNumber'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const PILLARS = [
  { icon: Brain, label: 'Artificial Intelligence' },
  { icon: CodeXml, label: 'Software Development' },
  { icon: Wrench, label: 'Developer Tools' },
]

export function MarketContext() {
  return (
    <section id="valuation" className="section" aria-labelledby="valuation-title">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            id="valuation-title"
            eyebrow="Valuation"
            title="A brand built for a growing category."
            body="iCodeGPT.com sits where three spaces meet. A single name that speaks to all three is rare, and it reads naturally as a product, a platform or a company."
          />
          <Reveal delay={0.15}>
            <ul className="mt-10 flex flex-col items-start gap-3">
              {PILLARS.map((p, i) => (
                <li key={p.label} className="flex items-center gap-3">
                  <span className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-2 pl-2 pr-4 text-sm text-zinc-200">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06]">
                      <p.icon className="h-3.5 w-3.5 text-[#a9c0ff]" aria-hidden />
                    </span>
                    {p.label}
                  </span>
                  {i < PILLARS.length - 1 && (
                    <span className="font-mono text-sm text-zinc-600" aria-hidden>
                      +
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="gradient-border">
            <div className="gradient-border-inner relative overflow-hidden p-7 sm:p-10">
              <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(91,140,255,0.22),transparent)]" />
              <p className="eyebrow relative">Indicative Market Position</p>
              <h3 className="relative mt-6 font-sans text-sm font-medium text-zinc-400">Asking Price</h3>
              <p className="relative mt-1 flex items-baseline gap-3">
                <AnimatedNumber value={PRICE} prefix="$" className="font-display text-6xl font-semibold tracking-tightest text-white sm:text-7xl" />
                <span className="font-mono text-sm text-zinc-500">USD</span>
              </p>
              <div className="relative mt-6 h-px bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
              <p className="relative mt-6 text-[15px] leading-relaxed text-zinc-400">
                The $4,995 asking price reflects the domain's brandability, .COM extension, AI relevance, coding relevance and
                potential use as a technology company or product brand.
              </p>
              <p className="relative mt-3 text-[13px] leading-relaxed text-zinc-500">
                Domain valuations are subjective, and the asking price is not an independent appraisal or guarantee of resale
                value.
              </p>
              <AcquireButton className="relative mt-8 w-full sm:w-auto" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
