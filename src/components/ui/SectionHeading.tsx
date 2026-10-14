import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  body?: ReactNode
  align?: 'left' | 'center'
  id?: string
}

export function SectionHeading({ eyebrow, title, body, align = 'left', id }: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <Reveal>
        <p className="eyebrow">
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-accent-blue" aria-hidden />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 id={id} className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tightest sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={0.1}>
          <p className={`mt-6 text-lg leading-relaxed text-zinc-400 ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
            {body}
          </p>
        </Reveal>
      )}
    </div>
  )
}
