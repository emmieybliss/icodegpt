import { Blocks, Bot, Braces, CodeXml, GraduationCap, Layers } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { POSSIBILITIES, type ConceptKey } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const ICONS: Record<ConceptKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  assistant: CodeXml,
  agent: Bot,
  platform: Layers,
  academy: GraduationCap,
  api: Braces,
  ide: Blocks,
}

function MiniUI({ kind }: { kind: ConceptKey }) {
  const base = 'font-mono text-[10.5px] leading-[1.6]'
  switch (kind) {
    case 'assistant':
      return (
        <div className={base}>
          <p className="text-zinc-500">// explain selection</p>
          <p>
            <span className="text-[#b69cff]">fn</span> <span className="text-[#7aa2ff]">parse</span>
            <span className="text-zinc-500">(input)</span>
          </p>
          <p className="mt-1 rounded bg-accent-blue/10 px-1.5 py-0.5 text-[#a9c0ff]">↳ Validates and normalizes…</p>
        </div>
      )
    case 'agent':
      return (
        <ul className={`${base} space-y-0.5`}>
          {['plan', 'implement', 'review'].map((s, i) => (
            <li key={s} className="flex items-center gap-1.5 text-zinc-400">
              <span className={`h-1.5 w-1.5 rounded-full ${i < 2 ? 'bg-accent-green' : 'animate-pulse-dot bg-accent-blue'}`} />
              {s}
            </li>
          ))}
        </ul>
      )
    case 'platform':
      return (
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className={`h-5 rounded border border-white/[0.06] ${i === 1 ? 'bg-accent-violet/25' : i === 3 ? 'bg-accent-blue/20' : 'bg-white/[0.03]'}`}
            />
          ))}
        </div>
      )
    case 'academy':
      return (
        <div className={base}>
          <p className="text-zinc-400">Lesson 04 · Recursion</p>
          <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <span className="block h-full w-[64%] rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue" />
          </div>
          <p className="mt-1 text-zinc-500">hint available</p>
        </div>
      )
    case 'api':
      return (
        <div className={base}>
          <p>
            <span className="rounded bg-accent-green/15 px-1 text-accent-green">POST</span>{' '}
            <span className="text-zinc-300">/v1/code</span>
          </p>
          <p className="text-zinc-500">{'{ "prompt": "…" }'}</p>
          <p className="text-zinc-500">
            → <span className="text-[#8fe3b0]">200</span>
          </p>
        </div>
      )
    case 'ide':
      return (
        <div className="flex gap-1">
          <div className="w-1/3 space-y-1">
            {[80, 60, 70].map((w, i) => (
              <span key={i} className="block h-1.5 rounded bg-white/[0.08]" style={{ width: `${w}%` }} />
            ))}
          </div>
          <div className="flex-1 space-y-1 border-l border-white/[0.06] pl-1.5">
            {[90, 55, 75, 40].map((w, i) => (
              <span key={i} className={`block h-1.5 rounded ${i === 2 ? 'bg-accent-blue/40' : 'bg-white/[0.08]'}`} style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>
      )
  }
}

export function Possibilities() {
  return (
    <section id="vision" className="section" aria-labelledby="vision-title">
      <div className="container-x">
        <SectionHeading
          id="vision-title"
          eyebrow="Vision"
          title={
            <>
              Imagine what you could build with <span className="text-gradient">iCodeGPT.</span>
            </>
          }
          body="The name is designed for products at the intersection of coding and artificial intelligence — from AI coding assistants and autonomous developer agents to programming education, developer SaaS and entirely new software-development workflows."
        />

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {POSSIBILITIES.map((p, i) => {
            const Icon = ICONS[p.key]
            return (
              <Reveal as="li" key={p.key} delay={(i % 3) * 0.06}>
                <article className="surface card-hover group relative h-full overflow-hidden p-6">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        'radial-gradient(400px circle at 20% 0%, rgba(91,140,255,0.12), transparent 60%), radial-gradient(300px circle at 100% 100%, rgba(139,108,255,0.08), transparent 60%)',
                    }}
                  />
                  <div className="relative flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-[transform,border-color] duration-300 group-hover:-rotate-6 group-hover:scale-105 group-hover:border-accent-blue/40">
                      <Icon className="h-5 w-5 text-[#a9c0ff]" aria-hidden />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">concept 0{i + 1}</span>
                  </div>
                  <h3 className="relative mt-6 text-xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="relative mt-2 text-[15px] leading-relaxed text-zinc-400">{p.body}</p>
                  <div
                    aria-hidden
                    className="relative mt-6 rounded-lg border border-white/[0.06] bg-ink-950/70 p-3 transition-colors duration-300 group-hover:border-white/[0.12]"
                  >
                    <MiniUI kind={p.key} />
                  </div>
                </article>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
