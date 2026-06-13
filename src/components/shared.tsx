import { ReactNode, useEffect, useRef, useState } from 'react';
import {
  Brain,
  Repeat,
  Blocks,
  Magnet,
  Wand2,
  Gift,
  Sparkles,
  FlaskConical,
  Clapperboard,
  Type,
  Mail,
  Search,
  ScrollText,
  LayoutTemplate,
  Map,
  MessagesSquare,
  UserRound,
  Cpu,
  PenTool,
  Handshake,
  LucideIcon,
} from 'lucide-react';
import { BOOK_CALL_URL } from '../content';

export const ICONS: Record<string, LucideIcon> = {
  Brain,
  Repeat,
  Blocks,
  Magnet,
  Wand2,
  Gift,
  Sparkles,
  FlaskConical,
  Clapperboard,
  Type,
  Mail,
  Search,
  ScrollText,
  LayoutTemplate,
  Map,
  MessagesSquare,
  UserRound,
  Cpu,
  PenTool,
  Handshake,
};

/* ---------------- Brand wordmark ----------------
   Live ITC Garamond Book Narrow Italic — infinitely crisp at any size. */
export function Wordmark({
  className = '',
  color = 'var(--ember)',
}: {
  className?: string;
  color?: string;
}) {
  return (
    <span
      className={`font-brand leading-none ${className}`}
      style={{ color, letterSpacing: '0.005em' }}
    >
      Infoproduct.io
    </span>
  );
}

/* Accent phrase — the brand display face in ember, inline with a headline. */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="font-brand text-ember">{children}</span>;
}

/* ---------------- Scroll reveal ---------------- */
export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    /* toggles both ways — content breathes in when reached, and resets once
       it has fully left, so every pass feels alive without mid-read flicker */
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '0px 0px -14% 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------------- The signature CTA ---------------- */
export function CTAButton({
  label,
  href = BOOK_CALL_URL,
  size = 'md',
  variant = 'solid',
  className = '',
}: {
  label: string;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline';
  className?: string;
}) {
  const sizes = {
    sm: 'text-[13px] px-6 py-3',
    md: 'text-sm px-7 py-3.5',
    lg: 'text-[15px] px-9 py-4',
  };
  const base =
    variant === 'solid'
      ? 'bg-ember text-white hover:shadow-[0_18px_50px_-12px_rgba(255,66,0,0.6)]'
      : 'border border-ember/50 text-ember hover:bg-ember hover:text-white';
  const internal = href.startsWith('#');
  return (
    <a
      href={href}
      target={internal ? undefined : '_blank'}
      rel={internal ? undefined : 'noopener noreferrer'}
      className={`cta-arrows group inline-flex items-center gap-3 font-medium rounded-full transition-all duration-500 hover:scale-[1.025] active:scale-[0.98] ${sizes[size]} ${base} ${className}`}
    >
      <span className="ar ar-l opacity-80">→</span>
      <span className="tracking-tight whitespace-nowrap">{label}</span>
      <span className="ar ar-r opacity-80">←</span>
    </a>
  );
}

/* ---------------- Section heading ----------------
   Titles are centred; the descriptive body sub beneath stays left-aligned. */
export function SectionHeading({
  children,
  sub,
  dark = false,
  className = '',
}: {
  children: ReactNode;
  sub?: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <h2
        className={`mx-auto max-w-4xl text-center text-[1.9rem] leading-[1.14] sm:text-[2.4rem] sm:leading-[1.12] md:text-[2.7rem] font-semibold ${
          dark ? 'text-white' : 'text-ink'
        }`}
        style={{ letterSpacing: '-0.035em' }}
      >
        {children}
      </h2>
      {sub && (
        <p
          className={`mt-6 mx-auto max-w-2xl text-left text-[15px] sm:text-[17px] leading-[1.7] ${
            dark ? 'text-white/60' : 'text-ink/65'
          }`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}

/* A centred title + button cluster for call-to-action moments. */
export function CTACluster({
  title,
  body,
  label,
  href,
  dark = false,
  className = '',
}: {
  title?: ReactNode;
  body?: ReactNode;
  label: string;
  href?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={`text-center ${className}`}>
      {title && (
        <h3 className={`font-brand text-[2rem] sm:text-[2.6rem] leading-[1.16] ${dark ? 'text-white' : 'text-ink'}`}>
          {title}
        </h3>
      )}
      {body && (
        <p className={`mt-5 mx-auto max-w-2xl text-[15px] sm:text-[17px] leading-[1.7] ${dark ? 'text-white/65' : 'text-ink/65'}`}>
          {body}
        </p>
      )}
      <div className="mt-9 flex justify-center">
        <CTAButton label={label} href={href} size="lg" />
      </div>
    </Reveal>
  );
}

/* ---------------- Centerpiece CTA band (centred) ---------------- */
export function CTABand({
  line,
  label,
  href,
  dark = false,
}: {
  line: ReactNode;
  label: string;
  href?: string;
  dark?: boolean;
}) {
  return (
    <Reveal>
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center">
        <span className={`mx-auto block h-px w-16 mb-7 ${dark ? 'bg-white/20' : 'bg-ink/15'}`} />
        <p
          className={`font-brand text-[1.8rem] sm:text-[2.3rem] leading-[1.22] mb-8 ${
            dark ? 'text-white' : 'text-ink'
          }`}
        >
          {line}
        </p>
        <div className="flex justify-center">
          <CTAButton label={label} href={href} size="lg" />
        </div>
      </div>
    </Reveal>
  );
}
