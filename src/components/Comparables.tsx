import { ArrowUpRight } from 'lucide-react'
import { COMPARABLES } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function Comparables() {
  const sales = COMPARABLES.filter((c) => c.kind === 'completed')
  const asking = COMPARABLES.filter((c) => c.kind === 'asking')

  return (
    <section className="section pt-0" aria-labelledby="comps-title">
      <div className="container-x">
        <SectionHeading
          id="comps-title"
          eyebrow="Market context"
          title="Recent technology & AI domain sales"
          body="Reported sales of short, brandable technology names, each linked to its public source."
        />

        <Reveal delay={0.1} className="mt-12">
          <div className="surface overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3.5 sm:px-6">
              <h3 className="font-sans text-sm font-medium text-white">Reported completed sales</h3>
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-zinc-500">USD</span>
            </div>
            <ul>
              {sales.map((c) => (
                <li
                  key={c.domain}
                  className="group grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 border-b border-white/[0.05] px-5 py-4 transition-colors last:border-b-0 hover:bg-white/[0.02] sm:grid-cols-[1.2fr_1fr_auto] sm:px-6"
                >
                  <span className="font-mono text-[15px] text-white">{c.domain}</span>
                  <span className="text-right font-display text-lg font-semibold tabular-nums text-white sm:order-3">{c.price}</span>
                  <span className="col-span-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] text-zinc-500 sm:order-2 sm:col-span-1">
                    {c.detail}
                    <a
                      href={c.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-zinc-400 underline decoration-white/20 underline-offset-4 hover:text-white"
                    >
                      {c.source.label}
                      <ArrowUpRight className="h-3 w-3" aria-hidden />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {asking.length > 0 && (
          <Reveal delay={0.15} className="mt-4">
            <div className="surface overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3.5 sm:px-6">
                <h3 className="font-sans text-sm font-medium text-white">Current asking prices</h3>
                <span className="rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-200/80">
                  Not sales
                </span>
              </div>
              <ul>
                {asking.map((c) => (
                  <li key={c.domain} className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 px-5 py-4 sm:grid-cols-[1.2fr_1fr_auto] sm:px-6">
                    <span className="font-mono text-[15px] text-zinc-200">{c.domain}</span>
                    <span className="text-right font-display text-lg font-semibold tabular-nums text-zinc-300 sm:order-3">{c.price}</span>
                    <span className="col-span-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] text-zinc-500 sm:order-2 sm:col-span-1">
                      {c.detail}
                      <a
                        href={c.source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 text-zinc-400 underline decoration-white/20 underline-offset-4 hover:text-white"
                      >
                        {c.source.label}
                        <ArrowUpRight className="h-3 w-3" aria-hidden />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-3xl text-[13px] leading-relaxed text-zinc-500">
            Comparable domain transactions are provided for market context only. Domain names differ significantly in
            quality, demand, timing and buyer circumstances, and these figures do not establish a value for iCodeGPT.com.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
