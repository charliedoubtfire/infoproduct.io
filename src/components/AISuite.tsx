import { useEffect, useRef, useState } from 'react';
import { Zap } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';
import { AI_TOOLS } from '../content';
import { ICONS, Reveal, SectionHeading, Accent, CTAButton } from './shared';
import { GlowCard } from './ui/spotlight-card';

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
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
          A Human Will <Accent>Always Be Slower</Accent>
        </SectionHeading>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AI_TOOLS.map((tool, i) => {
            const Icon = ICONS[tool.icon];
            const boostNum = parseInt(tool.boost, 10) || 4;
            const withPct = Math.min(42, Math.max(9, 100 / boostNum));
            return (
              <Reveal key={tool.name} delay={Math.min(i, 5) * 60}>
                <GlowCard className="group h-full rounded-[1.5rem] border border-white/10 bg-white/[0.035] hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-500 p-6 flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <span className="flex items-center justify-center w-11 h-11 rounded-2xl border border-ember/40 bg-ember/[0.08] text-ember group-hover:scale-105 transition-transform duration-500">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>
                    <span className="flex flex-col items-end leading-none">
                      <span className="font-display italic text-[2.1rem] text-ember leading-none">
                        {tool.boost}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-white/35 mt-1">
                        faster
                      </span>
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1" style={{ letterSpacing: '-0.02em' }}>
                    {tool.name}
                  </h3>
                  <p className="text-white/45 text-[11px] uppercase tracking-[0.12em] mb-6">
                    {tool.process}
                  </p>

                  {/* visual speed comparison */}
                  <div className="mt-auto space-y-3.5">
                    <div>
                      <div className="flex justify-between items-baseline text-[11px] mb-1.5">
                        <span className="uppercase tracking-[0.12em] text-white/40">By hand</span>
                        <span className="text-white/40 line-through decoration-white/25">
                          {tool.without}
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                        <div className="h-full w-full rounded-full bg-white/20" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-baseline text-[11px] mb-1.5">
                        <span className="uppercase tracking-[0.12em] text-ember">With the suite</span>
                        <span className="text-white font-semibold">{tool.withIP}</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-ember to-[#ff7a45] shadow-[0_0_16px_rgba(255,66,0,0.6)]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${withPct}%` }}
                          viewport={{ once: true, margin: '-12%' }}
                          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                        />
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </Reveal>
            );
          })}

          <Reveal delay={AI_TOOLS.length * 35}>
            <GlowCard className="h-full rounded-[1.5rem] border border-ember/50 bg-gradient-to-br from-ember/[0.22] to-ember/[0.04] p-6 flex flex-col items-center justify-center text-center">
              <Zap size={24} className="text-ember mb-3" fill="currentColor" />
              <span className="font-display italic text-[3.6rem] leading-none text-ember">
                <CountUp to={13} suffix="×" />
              </span>
              <p className="text-white/75 text-sm mt-3 leading-relaxed">
                average efficiency boost
                <br />
                across the entire suite
              </p>
            </GlowCard>
          </Reveal>
        </div>

        <Reveal className="mt-16 mx-auto max-w-2xl text-center" delay={120}>
          <p className="text-white/60 text-[15px] sm:text-[17px] leading-[1.7] mb-8">
            Right now there is a window of arbitrage before these efficiency boosters become common
            practice. Why not start whilst you hold the most unfair advantage?
          </p>
          <div className="flex justify-center">
            <CTAButton label="Book A Call Now" size="lg" />
          </div>
        </Reveal>
      </div>

      {/* seam → paper proof */}
      <div
        className="h-40 w-full"
        style={{ background: 'linear-gradient(to bottom, var(--ink), var(--paper))' }}
      />
    </section>
  );
}
