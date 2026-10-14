import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { useRef, type ReactNode, type PointerEvent } from 'react'
import { ACQUIRE_URL, MAILTO } from '../../data/content'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: Variant
  size?: 'md' | 'lg'
  icon?: ReactNode
  external?: boolean
  magnetic?: boolean
  className?: string
  ariaLabel?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-white text-ink-950 shadow-[0_0_0_1px_rgba(255,255,255,0.4),0_10px_40px_-10px_rgba(91,140,255,0.65)] hover:bg-zinc-100',
  secondary: 'border border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.08]',
  ghost: 'text-zinc-300 hover:text-white',
}

const sizes = {
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-[15px] sm:h-[52px]',
}

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'lg',
  icon,
  external,
  magnetic = false,
  className = '',
  ariaLabel,
}: ButtonProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 })
  const canMagnet = magnetic && !reduce

  function onMove(e: PointerEvent<HTMLAnchorElement>) {
    if (!canMagnet || e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.18)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25)
  }
  function onLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={canMagnet ? { x, y } : undefined}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      className={`group inline-flex select-none items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {icon}
    </motion.a>
  )
}

/** Primary conversion: opens the Afternic listing in a new tab. */
export function AcquireButton({
  label = 'Acquire iCodeGPT.com',
  size = 'lg',
  className = '',
  magnetic = true,
}: {
  label?: string
  size?: 'md' | 'lg'
  className?: string
  magnetic?: boolean
}) {
  return (
    <Button
      href={ACQUIRE_URL}
      external
      size={size}
      magnetic={magnetic}
      className={className}
      ariaLabel={`${label} (opens the Afternic listing in a new tab)`}
      icon={
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden
        />
      }
    >
      {label}
    </Button>
  )
}

export function ContactButton({
  label = 'Talk to the Seller',
  size = 'lg',
  className = '',
}: {
  label?: string
  size?: 'md' | 'lg'
  className?: string
}) {
  return (
    <Button
      href={MAILTO}
      variant="secondary"
      size={size}
      className={className}
      icon={<Mail className="h-4 w-4 opacity-70" aria-hidden />}
    >
      {label}
    </Button>
  )
}
