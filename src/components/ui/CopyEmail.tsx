import { AnimatePresence, motion } from 'framer-motion'
import { Check, Copy } from 'lucide-react'
import { useEffect, useState } from 'react'
import { SELLER_EMAIL } from '../../data/content'

/** Copies the seller's email to the clipboard, with a polite live-region confirmation. */
export function CopyEmail({ className = '' }: { className?: string }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const t = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(t)
  }, [copied])

  async function copy() {
    try {
      await navigator.clipboard.writeText(SELLER_EMAIL)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${SELLER_EMAIL}`
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-zinc-300 transition-colors hover:border-white/25 hover:text-white ${className}`}
      aria-label={`Copy seller email address ${SELLER_EMAIL}`}
    >
      <span>{SELLER_EMAIL}</span>
      <span className="relative inline-flex h-3.5 w-3.5 items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span key="ok" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
              <Check className="h-3.5 w-3.5 text-accent-green" aria-hidden />
            </motion.span>
          ) : (
            <motion.span key="copy" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
              <Copy className="h-3.5 w-3.5" aria-hidden />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? 'Email address copied' : ''}
      </span>
    </button>
  )
}
