import { DOMAIN, PRICE_LABEL } from '../data/content'
import { AcquireButton, ContactButton } from './ui/Button'
import { CopyEmail } from './ui/CopyEmail'
import { Reveal } from './ui/Reveal'

const SPECS = [
  ['Domain', DOMAIN],
  ['Extension', '.COM'],
  ['Category', 'AI / Coding / Developer Tools'],
  ['Status', 'Available'],
] as const

export function PriceAnchor() {
  return (
    <section id="acquire" className="section" aria-labelledby="anchor-title">
      <div className="container-x">
        <Reveal>
          <div className="gradient-border mx-auto max-w-5xl">
            <div className="gradient-border-inner noise relative overflow-hidden">
              <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,rgba(91,140,255,0.14),transparent),radial-gradient(ellipse_60%_60%_at_100%_100%,rgba(139,108,255,0.10),transparent)]" />
              <div className="relative grid gap-10 p-7 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
                <div>
                  <h2 id="anchor-title" className="text-3xl font-semibold leading-[1.08] tracking-tightest sm:text-5xl">
                    Own the name before someone else does.
                  </h2>
                  <p className="mt-8 font-mono text-lg text-zinc-300">{DOMAIN}</p>
                  <p className="mt-1 flex items-baseline gap-2">
                    <span className="font-display text-5xl font-semibold tracking-tightest text-white sm:text-6xl">{PRICE_LABEL}</span>
                    <span className="font-mono text-sm text-zinc-500">USD</span>
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <AcquireButton label="Acquire via Afternic" />
                    <ContactButton label="Make an Inquiry" />
                  </div>
                  <CopyEmail className="mt-5" />
                </div>
                <dl className="self-center rounded-2xl border border-white/[0.08] bg-ink-950/60">
                  {SPECS.map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between gap-4 border-b border-white/[0.06] px-5 py-4 last:border-b-0">
                      <dt className="text-sm text-zinc-500">{k}</dt>
                      <dd className="text-right font-mono text-[13px] text-zinc-100">
                        {k === 'Status' ? (
                          <span className="inline-flex items-center gap-2">
                            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent-green" aria-hidden />
                            {v}
                          </span>
                        ) : (
                          v
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
