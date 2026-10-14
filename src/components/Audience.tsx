import { Boxes, Briefcase, Building2, Cpu, Gem, GraduationCap, Rocket, TrendingUp, Users, Wrench } from 'lucide-react'
import { AUDIENCE } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const ICONS = [Rocket, Wrench, Boxes, Building2, Cpu, GraduationCap, Users, Gem, Briefcase, TrendingUp]

export function Audience() {
  return (
    <section className="section" aria-labelledby="audience-title">
      <div className="container-x">
        <SectionHeading id="audience-title" eyebrow="Who it's for" title="Built for founders thinking ahead." align="center" />
        <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {AUDIENCE.map((a, i) => {
            const Icon = ICONS[i]
            return (
              <Reveal as="li" key={a} delay={(i % 5) * 0.05}>
                <div className="surface card-hover group flex h-full flex-col gap-5 p-5">
                  <Icon className="h-5 w-5 text-zinc-500 transition-colors duration-300 group-hover:text-[#a9c0ff]" aria-hidden />
                  <span className="text-[15px] font-medium leading-snug text-zinc-200">{a}</span>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
