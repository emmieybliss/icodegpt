import { DOMAIN } from '../data/content'
import { AcquireButton, ContactButton } from './ui/Button'
import { Reveal } from './ui/Reveal'

export function FinalCTA() {
  return (
    <section className="section noise overflow-hidden" aria-labelledby="final-title">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_55%,black,transparent)]" />
        <div className="absolute left-1/2 top-1/2 h-[560px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(91,140,255,0.18),rgba(139,108,255,0.07),transparent)]" />
      </div>
      <div className="container-x relative text-center">
        <Reveal>
          <h2 id="final-title" className="text-4xl font-semibold tracking-tightest sm:text-6xl">
            Your next product needs a name.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 text-lg text-zinc-400">iCodeGPT.com is available now.</p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-12 break-words font-display text-[3.2rem] font-semibold leading-none tracking-tightest text-white sm:text-8xl lg:text-[8.5rem]">
            <span className="text-gradient">{DOMAIN}</span>
          </p>
        </Reveal>
        <Reveal delay={0.24} className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <AcquireButton label="Acquire Domain" />
          <ContactButton label="Contact Seller" />
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-[12px] text-zinc-500">
            <span>$4,995 USD</span>
            <span className="text-zinc-700" aria-hidden>•</span>
            <span>.COM</span>
            <span className="text-zinc-700" aria-hidden>•</span>
            <span>AI / Coding / Developer Tools</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
