import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check, ChevronDown, FileCode, Folder, Loader2, Sparkles, SquareTerminal } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'

const PROMPT = 'Build a production-ready application'
const STEPS = ['Analyzing architecture', 'Generating components', 'Running tests', 'Optimizing code']
const RESULTS = ['42 files generated', 'Tests passing', 'Build successful']

const CODE: { indent: number; tokens: [string, string][] }[] = [
  { indent: 0, tokens: [['k', 'export async function '], ['f', 'createApp'], ['p', '(spec: '], ['t', 'Spec'], ['p', ') {']] },
  { indent: 1, tokens: [['k', 'const '], ['v', 'plan'], ['p', ' = '], ['k', 'await '], ['f', 'architect'], ['p', '(spec)']] },
  { indent: 1, tokens: [['k', 'const '], ['v', 'modules'], ['p', ' = '], ['k', 'await '], ['f', 'generate'], ['p', '(plan.modules)']] },
  { indent: 1, tokens: [['k', 'await '], ['f', 'test'], ['p', '(modules, { coverage: '], ['n', '0.9'], ['p', ' })']] },
  { indent: 1, tokens: [['k', 'return '], ['f', 'build'], ['p', '(modules, { target: '], ['s', "'edge'"], ['p', ' })']] },
  { indent: 0, tokens: [['p', '}']] },
]

const tokenColor: Record<string, string> = {
  k: 'text-[#b69cff]',
  f: 'text-[#7aa2ff]',
  v: 'text-zinc-200',
  t: 'text-[#5fd4e3]',
  s: 'text-[#8fe3b0]',
  n: 'text-[#ffb86b]',
  p: 'text-zinc-400',
}

const FILES = [
  { name: 'src', dir: true, depth: 0 },
  { name: 'app', dir: true, depth: 1 },
  { name: 'createApp.ts', dir: false, depth: 2, active: true },
  { name: 'components', dir: true, depth: 1 },
  { name: 'api', dir: true, depth: 1 },
  { name: 'tests', dir: true, depth: 0 },
]

// phase: 0 typing prompt, 1..4 steps running, 5 results, then loop
const PHASE_MS = [0, 1100, 1100, 1300, 1000]
const HOLD_MS = 5200

export function ConceptualIDE() {
  const reduce = useReducedMotion() ?? false
  const [phase, setPhase] = useState(reduce ? 5 : 0)
  const [cycle, setCycle] = useState(0)
  const { shown, done } = useTypewriter(PROMPT, phase === 0, 38, reduce)

  useEffect(() => {
    if (reduce) {
      setPhase(5)
      return
    }
    if (phase === 0) {
      if (!done) return
      const t = window.setTimeout(() => setPhase(1), 450)
      return () => window.clearTimeout(t)
    }
    if (phase < 5) {
      const t = window.setTimeout(() => setPhase((p) => p + 1), PHASE_MS[phase])
      return () => window.clearTimeout(t)
    }
    const t = window.setTimeout(() => {
      setPhase(0)
      setCycle((c) => c + 1)
    }, HOLD_MS)
    return () => window.clearTimeout(t)
  }, [phase, done, reduce])

  const codeLines = phase === 0 ? 0 : Math.min(CODE.length, phase + 2)
  const prompt = phase === 0 ? shown : PROMPT

  return (
    <div className="relative">
      {/* Floating status cards */}
      <motion.div
        aria-hidden
        className="absolute -top-5 right-8 z-20 hidden lg:block"
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="glass flex items-center gap-2.5 rounded-xl px-3 py-2 shadow-2xl">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent-green" />
          </span>
          <span className="font-mono text-[11px] text-zinc-300">agent · active</span>
        </div>
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute -bottom-6 -left-5 z-20 hidden lg:block"
        animate={reduce ? undefined : { y: [0, 9, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      >
        <div className="glass rounded-xl px-3.5 py-2.5 shadow-2xl">
          <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">context</p>
          <div className="mt-1.5 flex items-end gap-[3px]">
            {[6, 10, 7, 13, 9, 15, 11, 16].map((h, i) => (
              <motion.span
                key={i}
                className="w-[3px] rounded-full bg-gradient-to-t from-accent-blue to-accent-violet"
                style={{ height: h }}
                animate={reduce ? undefined : { scaleY: [1, 0.55, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.12, ease: 'easeInOut' }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="gradient-border shadow-[0_40px_120px_-40px_rgba(91,140,255,0.45)]"
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="gradient-border-inner overflow-hidden"
          role="img"
          aria-label="Conceptual product visualization: an AI coding agent building an application, generating 42 files, passing tests and completing a build."
        >
          {/* Window chrome */}
          <div className="flex items-center gap-3 border-b border-white/[0.06] bg-ink-850 px-4 py-3">
            <div className="flex gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <div className="mx-auto flex items-center gap-2 rounded-md border border-white/[0.06] bg-ink-900 px-3 py-1 font-mono text-[11px] text-zinc-500">
              <span className="text-zinc-300">iCodeGPT</span>
              <span>/</span>
              <span>AI Coding Agent</span>
            </div>
            <span className="hidden font-mono text-[10px] text-zinc-600 sm:block">⌘K</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] lg:grid-cols-[160px_1fr]">
            {/* Explorer */}
            <div className="hidden border-r border-white/[0.06] bg-ink-900/60 px-3 py-4 md:block" aria-hidden>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-zinc-600">Explorer</p>
              <ul className="space-y-1.5 font-mono text-[11.5px]">
                {FILES.map((f) => (
                  <li
                    key={f.name + f.depth}
                    className={`flex items-center gap-1.5 rounded px-1 py-0.5 ${f.active ? 'bg-accent-blue/10 text-white' : 'text-zinc-500'}`}
                    style={{ paddingLeft: 4 + f.depth * 10 }}
                  >
                    {f.dir ? (
                      <>
                        <ChevronDown className="h-3 w-3 opacity-60" />
                        <Folder className="h-3 w-3 text-accent-blue/80" />
                      </>
                    ) : (
                      <FileCode className="ml-[18px] h-3 w-3 text-accent-cyan/80" />
                    )}
                    {f.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              {/* Agent panel */}
              <div className="px-4 py-4 sm:px-5 sm:py-5" aria-hidden>
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-accent-blue to-accent-violet">
                    <Sparkles className="h-3.5 w-3.5 text-white" />
                  </span>
                  <span className="text-[13px] font-medium text-white">AI Coding Agent</span>
                  <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-zinc-500">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${phase === 5 ? 'bg-accent-green' : 'animate-pulse-dot bg-accent-blue'}`}
                    />
                    {phase === 5 ? 'done' : phase === 0 ? 'listening' : 'working'}
                  </span>
                </div>

                <div className="mt-4 rounded-lg border border-white/[0.07] bg-ink-950/70 px-3 py-2.5 font-mono text-[12.5px] text-zinc-100 sm:text-[13px]">
                  <span className="text-accent-blue">&gt; </span>
                  {prompt}
                  {phase === 0 && <span className="ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] animate-blink bg-accent-blue" />}
                </div>

                <ul className="mt-4 min-h-[92px] space-y-1.5 font-mono text-[12px] sm:text-[12.5px]">
                  <AnimatePresence initial={false}>
                    {STEPS.map((s, i) => {
                      const idx = i + 1
                      if (phase < idx) return null
                      const running = phase === idx
                      return (
                        <motion.li
                          key={`${cycle}-${s}`}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center gap-2 text-zinc-400"
                        >
                          {running ? (
                            <Loader2 className="h-3.5 w-3.5 animate-spin text-accent-blue" />
                          ) : (
                            <Check className="h-3.5 w-3.5 text-zinc-600" />
                          )}
                          <span className={running ? 'text-zinc-200' : ''}>
                            {s}
                            {running ? '…' : ''}
                          </span>
                        </motion.li>
                      )
                    })}
                  </AnimatePresence>
                </ul>
              </div>

              {/* Code + terminal */}
              <div className="grid border-t border-white/[0.06]" aria-hidden>
                <div className="min-w-0 overflow-x-hidden border-b border-white/[0.06] bg-ink-950/50 px-4 py-3.5">
                  <div className="mb-2 flex items-center gap-1.5 font-mono text-[10.5px] text-zinc-500">
                    <FileCode className="h-3 w-3" /> createApp.ts
                  </div>
                  <pre className="overflow-hidden font-mono text-[11px] leading-[1.7] sm:text-[11.5px]">
                    {CODE.map((line, i) => (
                      <motion.div
                        key={`${cycle}-${i}`}
                        initial={false}
                        animate={{ opacity: i < codeLines ? 1 : 0.08 }}
                        transition={{ duration: 0.35 }}
                        className={`-mx-2 flex whitespace-pre rounded px-2 ${i === codeLines - 1 && phase < 5 ? 'bg-accent-blue/[0.08]' : ''}`}
                      >
                        <span className="mr-3 w-3 select-none text-right text-zinc-700">{i + 1}</span>
                        <span>
                          {'  '.repeat(line.indent)}
                          {line.tokens.map(([c, t], j) => (
                            <span key={j} className={tokenColor[c]}>
                              {t}
                            </span>
                          ))}
                        </span>
                      </motion.div>
                    ))}
                  </pre>
                </div>
                <div className="bg-ink-950/80 px-4 py-3.5">
                  <div className="mb-2 flex items-center gap-1.5 font-mono text-[10.5px] text-zinc-500">
                    <SquareTerminal className="h-3 w-3" /> terminal
                  </div>
                  <div className="min-h-[66px] space-y-1 font-mono text-[11.5px]">
                    {phase === 5 ? (
                      RESULTS.map((r, i) => (
                        <motion.p
                          key={`${cycle}-${r}`}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: reduce ? 0 : i * 0.18 }}
                          className="text-accent-green"
                        >
                          ✓ <span className="text-zinc-200">{r}</span>
                        </motion.p>
                      ))
                    ) : (
                      <p className="text-zinc-500">
                        $ icodegpt run
                        <span className="ml-1 inline-block h-[1em] w-[6px] translate-y-[2px] animate-blink bg-zinc-500" />
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <p className="mt-5 flex items-center justify-center gap-2 font-mono lg:mt-12 text-[11px] uppercase tracking-[0.16em] text-zinc-500">
        <span className="h-1 w-1 rounded-full bg-zinc-500" aria-hidden />
        Conceptual product visualization
      </p>
    </div>
  )
}
