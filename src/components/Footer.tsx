import { ACQUIRE_URL, SELLER_EMAIL } from '../data/content'
import { CopyEmail } from './ui/CopyEmail'
import { Logo } from './ui/Logo'

const LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Vision', href: '#vision' },
  { label: 'Possibilities', href: '#possibilities' },
  { label: 'Valuation', href: '#valuation' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Acquire', href: ACQUIRE_URL, external: true },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-ink-950">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 font-mono text-[12px] tracking-wide text-zinc-500">AI × Code × Possibility</p>
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-sm text-zinc-500">Contact</p>
            <a href={`mailto:${SELLER_EMAIL}`} className="mt-2 block text-sm text-zinc-200 hover:text-white">
              Email the seller
            </a>
            <CopyEmail className="mt-3" />
          </div>
        </div>
        <div className="mt-12 border-t border-white/[0.06] pt-8">
          <p className="text-[13px] text-zinc-400">© 2026 iCodeGPT.com. Domain offered for acquisition.</p>
          <p className="mt-4 max-w-4xl text-[12px] leading-relaxed text-zinc-500">
            iCodeGPT.com is an independently offered domain name. The conceptual product interfaces and examples shown on
            this website are illustrative only and do not represent an existing commercial AI platform. iCodeGPT.com is not
            affiliated with or endorsed by OpenAI, ChatGPT, Microsoft, Google, Anthropic, or any other third-party AI
            company. Buyers should conduct their own trademark and legal due diligence before commercial use.
          </p>
        </div>
      </div>
    </footer>
  )
}
