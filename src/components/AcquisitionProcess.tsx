import { STEPS } from '../data/content'
import { AcquireButton } from './ui/Button'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function AcquisitionProcess() {
  return (
    <section className="section" aria-labelledby="process-title">
      <div className="container-x">
        <SectionHeading id="process-title" eyebrow="Acquisition" title="Three steps from name to company." />
        <ol className="mt-14 grid gap-4 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.1}>
              <div className="surface relative h-full p-7">
                <span className="relative inline-flex h-11 items-center rounded-full border border-white/10 bg-ink-950 px-4 font-mono text-sm text-[#a9c0ff]">
                  {s.n}
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-zinc-400">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <AcquireButton />
        </Reveal>
      </div>
    </section>
  )
}
