import { useEffect, useRef, useState } from 'react';
import { ArrowRight, X, Check } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';
import { AI_TOOLS } from '../content';
import { ICONS, SectionHeading, Accent, CTAButton } from './shared';

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: '-20%' });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export default function AISuite() {
  return (
    <section id="ai-suite" className="relative bg-ink overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none drift-slow"
        style={{
          background:
            'radial-gradient(70% 45% at 50% 0%, rgba(255,66,0,0.16), transparent 62%), radial-gradient(45% 40% at 88% 70%, rgba(255,66,0,0.08), transparent 60%)',
        }}
      />
      <div className="relative max-w-content mx-auto px-5 sm:px-8 pt-8 sm:pt-12 pb-24 sm:pb-32">
        <SectionHeading
          dark
          sub={
            <>
              Knowing what to do is half the battle. Doing it faster than any human alive is the
              other half. Every lesson you just saw is supercharged by a proprietary AI — so
              whether you do it yourself or pay someone thousands a month, you will always be{' '}
              <span className="whitespace-nowrap">slower than the suite.</span>
            </>
          }
        >
          <span className="font-brand font-normal">A Human Will</span>{' '}
          <Accent>Always Be Slower</Accent>
        </SectionHeading>

        {/* ---- The ledger: by hand vs the suite, line by line ---- */}
        <div className="mt-12 mx-auto max-w-4xl rounded-[1.75rem] border border-white/10 bg-white/[0.03] overflow-hidden">
          {/* column headers */}
          <div className="grid grid-cols-[1fr_auto] sm:grid-cols-[1.2fr_1fr_1fr_auto] items-center gap-3 px-5 sm:px-8 py-4 border-b border-white/10 bg-white/[0.03]">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              The job
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
              <X size={12} className="text-white/30" /> By hand
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ember">
              <Check size={12} /> With the suite
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-ember text-right">
              Advantage
            </span>
          </div>

          {AI_TOOLS.map((tool, i) => {
            const Icon = ICONS[tool.icon];
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: '-8%' }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`group grid grid-cols-[1fr_auto] sm:grid-cols-[1.2fr_1fr_1fr_auto] items-center gap-x-3 gap-y-2 px-5 sm:px-8 py-4 sm:py-5 hover:bg-ember/[0.05] transition-colors duration-300 ${
                  i < AI_TOOLS.length - 1 ? 'border-b border-white/[0.06]' : ''
                }`}
              >
                {/* the job */}
                <div className="flex items-center gap-3 min-w-0">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl border border-ember/35 bg-ember/[0.08] text-ember shrink-0">
                    <Icon size={17} strokeWidth={1.7} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-[14px] sm:text-[15px] leading-tight truncate" style={{ letterSpacing: '-0.015em' }}>
                      {tool.name}
                    </p>
                    <p className="text-white/40 text-[10px] uppercase tracking-[0.1em] mt-0.5 truncate">
                      {tool.process}
                    </p>
                  </div>
                </div>

                {/* multiplier — the hero of every row */}
                <motion.span
                  className="row-start-1 col-start-2 sm:col-start-4 font-brand text-ember text-[1.7rem] sm:text-[2rem] leading-none text-right whitespace-nowrap"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, margin: '-8%' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 16, delay: 0.25 + (i % 4) * 0.07 }}
                  style={{ textShadow: '0 0 22px rgba(255,66,0,0.45)' }}
                >
                  {tool.boost.replace('x', '×')}
                </motion.span>

                {/* by hand — small, struck through, fading */}
                <p className="col-span-2 sm:col-span-1 sm:col-start-2 flex items-center gap-2 text-white/35 text-[13px] sm:text-[14px]">
                  <span className="sm:hidden"><X size={12} className="text-white/25" /></span>
                  <span className="line-through decoration-white/25">{tool.without}</span>
                </p>

                {/* with the suite — bright, bold, winning */}
                <p className="col-span-2 sm:col-span-1 flex items-center gap-2 text-white font-semibold text-[14px] sm:text-[15px]">
                  <ArrowRight size={13} className="text-ember shrink-0 sm:hidden" />
                  <Check size={14} className="text-ember shrink-0 hidden sm:block" strokeWidth={2.5} />
                  {tool.withIP}
                </p>
              </motion.div>
            );
          })}

          {/* the verdict: 13× — a genuine moment */}
          <div className="relative px-5 sm:px-8 py-8 sm:py-10 border-t border-ember/30 overflow-hidden">
            {/* a quiet ember halo, breathing slowly */}
            <motion.div
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[220px] pointer-events-none"
              style={{ background: 'radial-gradient(closest-side, rgba(255,66,0,0.18), transparent 72%)' }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative flex flex-col items-center text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-4">
                Across the entire suite
              </p>
              <motion.span
                className="font-brand text-ember text-[2.7rem] sm:text-[3.2rem] leading-none"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-15%' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* a slow luminous breath on the glow — the eye finds it without being shouted at */}
                <motion.span
                  className="inline-block"
                  animate={{
                    textShadow: [
                      '0 0 18px rgba(255,66,0,0.25)',
                      '0 0 38px rgba(255,66,0,0.6)',
                      '0 0 18px rgba(255,66,0,0.25)',
                    ],
                  }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <CountUp to={13} suffix="×" />
                </motion.span>
              </motion.span>
              <p className="mt-2.5 text-white/80 text-[14px] sm:text-[15px] font-medium leading-snug">
                average efficiency boost
              </p>
              {/* a thin line drawing itself, then shimmering gently */}
              <motion.span
                className="mt-4 block w-[180px] overflow-hidden rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: false, margin: '-15%' }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              >
                <span className="block h-[2px] w-full line-shimmer" />
              </motion.span>
            </div>
          </div>
        </div>

        {/* the arbitrage window — a killer point, treated like one */}
        <motion.div
          className="mt-20 mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-12%' }}
          variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
        >
          <h3 className="font-brand text-white">
            <span className="block text-[1.4rem] leading-[1.3] sm:text-[1.8rem] sm:leading-[1.28] text-white/85">
              {'Right now there is a window of arbitrage before these efficiency boosters become common practice.'
                .split(' ')
                .map((t, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.25em]"
                    variants={{
                      hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
                      show: { opacity: 1, y: 0, filter: 'blur(0px)' },
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {t}
                  </motion.span>
                ))}
            </span>
            <span className="block mt-5 text-[2rem] leading-[1.2] sm:text-[2.9rem] sm:leading-[1.16]">
              {[
                ...'Why not'.split(' ').map((t) => ({ t, a: false })),
                ...'start whilst you hold the most unfair advantage?'
                  .split(' ')
                  .map((t) => ({ t, a: true })),
              ].map((w, i) => (
                <motion.span
                  key={i}
                  className={`inline-block mr-[0.25em] ${w.a ? 'text-ember' : ''}`}
                  variants={{
                    hidden: { opacity: 0, y: 22, filter: 'blur(7px)' },
                    show: { opacity: 1, y: 0, filter: 'blur(0px)' },
                  }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w.t}
                </motion.span>
              ))}
            </span>
          </h3>
          <motion.div
            className="mt-10 flex justify-center"
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <CTAButton label="Book A Call Now" size="lg" />
          </motion.div>
        </motion.div>
      </div>

      <div
        className="h-40 w-full"
        style={{ background: 'linear-gradient(to bottom, var(--ink), var(--paper))' }}
      />
    </section>
  );
}
