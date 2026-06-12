import { Check } from 'lucide-react';
import { DELIVERABLES } from '../content';
import { ICONS, Reveal, Accent, CTAButton } from './shared';
import { GlowCard } from './ui/spotlight-card';

export default function Deliverables() {
  return (
    <section id="included" className="relative bg-paper">
      <div className="max-w-content mx-auto px-5 sm:px-8 pt-8 sm:pt-12 pb-24 sm:pb-28">
        <Reveal>
          <h2
            className="mx-auto max-w-4xl text-center font-semibold text-ink text-[1.9rem] leading-[1.14] sm:text-[2.4rem] sm:leading-[1.12] md:text-[2.7rem]"
            style={{ letterSpacing: '-0.035em' }}
          >
            So What Exactly Do You Get <Accent>When You Join?</Accent>
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-center text-[15px] sm:text-[17px] leading-[1.7] text-ink/65">
            Nothing is held back inside. No secret sauce left to unlock. It’s worked for us
            countless times — it’s going to work for you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {DELIVERABLES.map((d, i) => {
            const Icon = ICONS[d.icon];
            return (
              <Reveal key={d.title} delay={Math.min(i, 4) * 70}>
                <GlowCard className="h-full rounded-[1.75rem] border border-ink/10 bg-white/60 hover:bg-white transition-all duration-500 p-7 sm:p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-ember/30 bg-ember/[0.07] text-ember shrink-0">
                      <Icon size={21} strokeWidth={1.6} />
                    </span>
                    <h3
                      className="text-ink font-semibold text-lg leading-snug"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {d.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {d.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-ink/70 leading-relaxed"
                      >
                        <span className="mt-0.5 shrink-0 inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-ember/12">
                          <Check size={12} className="text-ember" strokeWidth={3} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14 flex justify-center" delay={100}>
          <CTAButton label="Book A Call Now" size="lg" />
        </Reveal>
      </div>
    </section>
  );
}
