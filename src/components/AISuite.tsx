import { ArrowRight, Zap } from 'lucide-react';
import { AI_TOOLS } from '../content';
import { ICONS, Reveal, SectionHeading, Accent, CTAButton } from './shared';
import { GlowCard } from './ui/spotlight-card';

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
            return (
              <Reveal key={tool.name} delay={Math.min(i, 5) * 60}>
                <GlowCard className="group h-full rounded-[1.5rem] border border-white/10 bg-white/[0.035] hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-500 p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="flex items-center justify-center w-11 h-11 rounded-2xl border border-ember/40 bg-ember/[0.08] text-ember group-hover:scale-105 transition-transform duration-500">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>
                    <span className="font-display italic text-[2.1rem] leading-none text-ember">
                      {tool.boost}
                    </span>
                  </div>
                  <h3
                    className="text-white font-semibold text-lg mb-1"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {tool.name}
                  </h3>
                  <p className="text-white/45 text-[11px] uppercase tracking-[0.12em] mb-6">
                    {tool.process}
                  </p>
                  <div className="mt-auto flex items-center gap-3 text-sm">
                    <span className="text-white/40 line-through decoration-white/30">
                      {tool.without}
                    </span>
                    <ArrowRight size={14} className="text-ember shrink-0" />
                    <span className="text-white font-semibold">{tool.withIP}</span>
                  </div>
                </GlowCard>
              </Reveal>
            );
          })}

          <Reveal delay={AI_TOOLS.length * 35}>
            <GlowCard className="h-full rounded-[1.5rem] border border-ember/50 bg-gradient-to-br from-ember/[0.22] to-ember/[0.04] p-6 flex flex-col items-center justify-center text-center">
              <Zap size={24} className="text-ember mb-3" fill="currentColor" />
              <span className="font-display italic text-[3.6rem] leading-none text-ember">13×</span>
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
