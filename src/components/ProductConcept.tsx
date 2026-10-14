import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Bot, Braces, Check, Circle, CodeXml, FileCode, Folder, Loader2, MessageSquare, PanelsTopLeft, Sparkles } from 'lucide-react'
import { useRef, useState, type KeyboardEvent } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

const TABS = [
  { id: 'assistant', label: 'Coding Assistant', icon: MessageSquare },
  { id: 'agent', label: 'Coding Agent', icon: Bot },
  { id: 'ide', label: 'AI IDE', icon: PanelsTopLeft },
  { id: 'api', label: 'Developer API', icon: Braces },
] as const

type TabId = (typeof TABS)[number]['id']

function AssistantView({ instant }: { instant: boolean }) {
  const answer =
    'This function validates the incoming payload, normalizes email casing and returns a typed result. Consider handling the empty-string case before the regex check.'
  const { shown, done } = useTypewriter(answer, true, 14, instant)
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-white/[0.07] bg-ink-950/70 p-4 font-mono text-[12px] leading-[1.75]">
        <p className="mb-2 flex items-center gap-1.5 text-[10.5px] text-zinc-500">
          <FileCode className="h-3 w-3" aria-hidden /> validate.ts
        </p>
        <p><span className="text-[#b69cff]">export function</span> <span className="text-[#7aa2ff]">validate</span><span className="text-zinc-400">(input: </span><span className="text-[#5fd4e3]">Input</span><span className="text-zinc-400">) {'{'}</span></p>
        <p className="-mx-2 rounded bg-accent-blue/[0.09] px-2 pl-6"><span className="text-[#b69cff]">if</span> <span className="text-zinc-400">(!</span><span className="text-zinc-200">EMAIL</span><span className="text-zinc-400">.test(input.email))</span></p>
        <p className="-mx-2 rounded bg-accent-blue/[0.09] px-2 pl-10"><span className="text-[#b69cff]">return</span> <span className="text-[#7aa2ff]">fail</span><span className="text-zinc-400">(</span><span className="text-[#8fe3b0]">'email'</span><span className="text-zinc-400">)</span></p>
        <p className="pl-4"><span className="text-[#b69cff]">return</span> <span className="text-[#7aa2ff]">ok</span><span className="text-zinc-400">({'{'} ...input {'}'})</span></p>
        <p className="text-zinc-400">{'}'}</p>
      </div>
      <div className="space-y-3">
        <div className="ml-auto w-fit max-w-[90%] rounded-2xl rounded-br-md bg-white/[0.06] px-4 py-2.5 text-sm text-zinc-200">
          Explain this function
        </div>
        <div className="flex gap-2.5">
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-violet">
            <Sparkles className="h-3.5 w-3.5 text-white" aria-hidden />
          </span>
          <p className="text-sm leading-relaxed text-zinc-300">
            <span className="text-accent-blue">&gt; </span>
            {shown}
            {!done && <span className="ml-0.5 inline-block h-[1em] w-[6px] translate-y-[2px] animate-blink bg-accent-blue" />}
          </p>
        </div>
      </div>
    </div>
  )
}

function AgentView({ instant }: { instant: boolean }) {
  const items = ['Database schema', 'API routes', 'Authentication', 'Tests']
  return (
    <div className="mx-auto max-w-xl">
      <p className="font-mono text-[10.5px] uppercase tracking-wider text-zinc-500">Task</p>
      <p className="mt-1 text-lg font-medium text-white">Build authentication system</p>
      <p className="mt-4 flex items-center gap-2 font-mono text-[12px] text-zinc-400">
        <Loader2 className="h-3.5 w-3.5 animate-spin text-accent-blue" aria-hidden /> Planning…
      </p>
      <ul className="mt-4 space-y-2">
        {items.map((it, i) => {
          const done = i < 3
          return (
            <motion.li
              key={it}
              initial={{ opacity: 0, x: instant ? 0 : -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: instant ? 0 : 0.15 + i * 0.25 }}
              className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-ink-950/60 px-3.5 py-2.5 font-mono text-[12.5px]"
            >
              {done ? (
                <Check className="h-4 w-4 text-accent-green" aria-hidden />
              ) : (
                <Circle className="h-4 w-4 text-zinc-600" aria-hidden />
              )}
              <span className={done ? 'text-zinc-200' : 'text-zinc-500'}>{it}</span>
              <span className="ml-auto text-[10.5px] text-zinc-600">{done ? 'done' : 'queued'}</span>
            </motion.li>
          )
        })}
      </ul>
    </div>
  )
}

function IdeView({ instant }: { instant: boolean }) {
  const { shown } = useTypewriter('What are we building today?', true, 40, instant)
  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.07]">
      <div className="border-b border-white/[0.06] bg-ink-850 px-4 py-2 font-mono text-[11px] text-zinc-400">iCodeGPT Workspace</div>
      <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[150px_1fr_220px]">
        <div className="border-r border-white/[0.06] bg-ink-900/60 p-3 font-mono text-[11.5px]">
          <p className="mb-2 text-[10px] uppercase tracking-wider text-zinc-600">Explorer</p>
          {['src/', 'components/', 'api/', 'tests/'].map((f, i) => (
            <p key={f} className="flex items-center gap-1.5 py-0.5 text-zinc-400" style={{ paddingLeft: i === 0 || i === 3 ? 0 : 10 }}>
              <Folder className="h-3 w-3 text-accent-blue/80" aria-hidden />
              {f}
            </p>
          ))}
        </div>
        <div className="space-y-1.5 bg-ink-950/50 p-4">
          {[70, 45, 85, 60, 30, 75].map((w, i) => (
            <span key={i} className={`block h-2 rounded ${i === 2 ? 'bg-accent-blue/35' : 'bg-white/[0.07]'}`} style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="col-span-2 border-t border-white/[0.06] bg-ink-900/70 p-4 sm:col-span-1 sm:border-l sm:border-t-0">
          <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
            <Sparkles className="h-3 w-3 text-accent-violet" aria-hidden /> AI Assistant
          </p>
          <p className="mt-3 text-sm text-zinc-200">
            {shown}
            <span className="ml-0.5 inline-block h-[1em] w-[6px] translate-y-[2px] animate-blink bg-accent-violet" />
          </p>
          <div className="mt-4 rounded-md border border-white/[0.08] bg-ink-950/70 px-2.5 py-1.5 font-mono text-[11px] text-zinc-600">
            Ask anything… ⌘L
          </div>
        </div>
      </div>
    </div>
  )
}

function ApiView() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-white/[0.07] bg-ink-950/70 p-4 font-mono text-[12px] leading-[1.75]">
        <p>
          <span className="rounded bg-accent-green/15 px-1.5 py-0.5 text-accent-green">POST</span>{' '}
          <span className="text-zinc-200">/v1/code/generate</span>
        </p>
        <pre className="mt-3 whitespace-pre-wrap text-zinc-300">
{`{
  `}<span className="text-[#7aa2ff]">"prompt"</span>{`: `}<span className="text-[#8fe3b0]">"Create a REST API..."</span>{`,
  `}<span className="text-[#7aa2ff]">"language"</span>{`: `}<span className="text-[#8fe3b0]">"typescript"</span>{`
}`}
        </pre>
      </div>
      <div className="rounded-xl border border-white/[0.07] bg-ink-950/70 p-4 font-mono text-[12px] leading-[1.75]">
        <p className="text-zinc-500">
          Response <span className="text-accent-green">200</span>
        </p>
        <pre className="mt-3 whitespace-pre-wrap text-zinc-300">
{`{
  `}<span className="text-[#7aa2ff]">"files"</span>{`: [`}<span className="text-[#8fe3b0]">"routes.ts"</span>{`, `}<span className="text-[#8fe3b0]">"schema.ts"</span>{`],
  `}<span className="text-[#7aa2ff]">"status"</span>{`: `}<span className="text-[#8fe3b0]">"ready"</span>{`
}`}
        </pre>
      </div>
    </div>
  )
}

export function ProductConcept() {
  const [active, setActive] = useState<TabId>('assistant')
  const reduce = useReducedMotion() ?? false
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    const i = TABS.findIndex((t) => t.id === active)
    let next = i
    if (e.key === 'ArrowRight') next = (i + 1) % TABS.length
    else if (e.key === 'ArrowLeft') next = (i - 1 + TABS.length) % TABS.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = TABS.length - 1
    else return
    e.preventDefault()
    setActive(TABS[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="possibilities" className="section" aria-labelledby="concept-title">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-x">
        <SectionHeading
          id="concept-title"
          align="center"
          eyebrow="Possibilities"
          title="One name. Multiple possibilities."
          body="Four directions the brand could take. Each view below is an illustrative product concept, not a working product."
        />

        <Reveal delay={0.1} className="mt-12">
          <div
            role="tablist"
            aria-label="Product concepts"
            onKeyDown={onKey}
            className="mx-auto grid w-full max-w-2xl grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-ink-900/70 p-1 sm:flex sm:rounded-full"
          >
            {TABS.map((t, i) => {
              const selected = t.id === active
              const Icon = t.icon
              return (
                <button
                  key={t.id}
                  ref={(el) => {
                    tabRefs.current[i] = el
                  }}
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${t.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(t.id)}
                  className={`relative flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-3 py-2.5 text-[13px] sm:rounded-full sm:px-4 sm:text-sm transition-colors ${selected ? 'text-ink-950' : 'text-zinc-400 hover:text-white'}`}
                >
                  {selected && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-xl bg-white sm:rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <Icon className="relative h-4 w-4" aria-hidden />
                  <span className="relative">{t.label}</span>
                </button>
              )
            })}
          </div>

          <div className="surface relative mx-auto mt-6 max-w-5xl overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
              <span className="flex items-center gap-2 font-mono text-[11px] text-zinc-500">
                <CodeXml className="h-3.5 w-3.5" aria-hidden /> icodegpt / {TABS.find((t) => t.id === active)?.label.toLowerCase()}
              </span>
              <span className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                Conceptual UI
              </span>
            </div>
            <div className="min-h-[340px] p-5 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  role="tabpanel"
                  id={`panel-${active}`}
                  aria-labelledby={`tab-${active}`}
                  tabIndex={0}
                  initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduce ? 0 : -6 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-lg"
                >
                  {active === 'assistant' && <AssistantView instant={reduce} />}
                  {active === 'agent' && <AgentView instant={reduce} />}
                  {active === 'ide' && <IdeView instant={reduce} />}
                  {active === 'api' && <ApiView />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
