import { useRef, useState } from 'react';
import { Plus, Lock, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WEEKS } from '../content';
import { ICONS, Reveal, Accent, CTAButton } from './shared';

export default function Curriculum() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const railRef = useRef<HTMLDivElement>(null);

  const go = (i: number) => {
    setDir(i > active ? 1 : -1);
    setActive(i);
    // keep the chosen week chip in view on mobile
    const rail = railRef.current;
    const chip = rail?.children[i] as HTMLElement | undefined;
    chip?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  const week = WEEKS[active];
  const Icon = ICONS[week.icon];

  return (
    <section id="curriculum" className="relative bg-paper">
      <div className="max-w-content mx-auto px-5 sm:px-8 pt-8 sm:pt-12 pb-24 sm:pb-28">
        <Reveal>
          <h2
            className="mx-auto max-w-4xl text-center font-semibold text-ink text-[1.9rem] leading-[1.14] sm:text-[2.4rem] sm:leading-[1.12] md:text-[2.7rem]"
            style={{ letterSpacing: '-0.035em' }}
          >
            The Exact <Accent>7-Week Roadmap</Accent> You Need To Follow To Start &amp; Scale A
            Successful Online Education Company
          </h2>
          <p className="mt-6 text-center text-[15px] sm:text-[17px] leading-[1.7] text-ink/65 md:whitespace-nowrap">
            Read every detail carefully. You don’t skip steps in your own brand or business, do you?
          </p>
        </Reveal>

        {/* ---- Week selector rail (sliding ember pill) ---- */}
        <Reveal className="mt-12" delay={60}>
          <div
            ref={railRef}
            className="flex gap-2 overflow-x-auto no-scrollbar md:flex-wrap md:justify-center md:overflow-visible -mx-5 px-5 md:mx-0 md:px-0 pb-1"
          >
            {WEEKS.map((w, i) => {
              const on = active === i;
              return (
                <button
                  key={w.numeral}
                  onClick={() => go(i)}
                  className={`relative shrink-0 rounded-full px-4 sm:px-5 py-2.5 transition-colors duration-300 ${
                    on ? 'text-white' : 'text-ink/55 hover:text-ink'
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="weekPill"
                      className="absolute inset-0 rounded-full bg-ember shadow-[0_14px_30px_-12px_rgba(255,66,0,0.7)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative flex items-center gap-2 whitespace-nowrap text-[13px] sm:text-sm font-semibold">
                    <span className="font-brand text-[1.15em] leading-none">{w.numeral}</span>
                    <span style={{ letterSpacing: '-0.01em' }}>{w.title}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* ---- Active week panel ---- */}
        <Reveal className="mt-7" delay={80}>
          <div className="relative rounded-[1.75rem] border border-ink/10 bg-white shadow-[0_50px_100px_-60px_rgba(12,11,10,0.4)] overflow-hidden">
            {/* week header */}
            <div className="relative flex items-center gap-4 sm:gap-5 px-5 sm:px-8 pt-6 sm:pt-7 pb-5 border-b border-ink/[0.07]">
              <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-ember/[0.08] border border-ember/25 text-ember shrink-0">
                <Icon size={24} strokeWidth={1.6} />
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-ink/40 mb-1">
                  <span className="font-brand text-ember text-base leading-none">{week.numeral}</span>
                  Week {active + 1}
                </div>
                <h3
                  className="text-ink font-semibold text-xl sm:text-2xl leading-tight"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  {week.title}
                </h3>
              </div>
              {/* desktop prev/next */}
              <div className="ml-auto hidden sm:flex items-center gap-2">
                <button
                  onClick={() => go((active - 1 + WEEKS.length) % WEEKS.length)}
                  aria-label="Previous week"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-ink/15 text-ink/50 hover:border-ember/40 hover:text-ember transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => go((active + 1) % WEEKS.length)}
                  aria-label="Next week"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-ink/15 text-ink/50 hover:border-ember/40 hover:text-ember transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* animated content */}
            <div className="relative px-5 sm:px-8 py-6 sm:py-7 overflow-hidden">
              <AnimatePresence mode="wait" custom={dir} initial={false}>
                <motion.div
                  key={active}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-ink/65 text-[15px] sm:text-base leading-[1.7] max-w-3xl border-l-2 border-ember/50 pl-4 mb-6">
                    {week.description}
                  </p>

                  {/* modules: snap carousel on mobile, grid on md+ */}
                  <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-5 px-5 pb-1 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:mx-0 md:px-0 md:pb-0">
                    {week.modules.map((mod, mi) => (
                      <div
                        key={mod.title}
                        className="snap-center shrink-0 w-[86%] sm:w-[70%] md:w-auto md:shrink rounded-2xl border border-ink/10 bg-paperDeep/40 p-5 sm:p-6 transition-colors duration-300 hover:border-ember/30 flex flex-col"
                      >
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ember/[0.08] border border-ember/25 font-brand text-ember text-lg shrink-0">
                            {mi + 1}
                          </span>
                          {mod.comingSoon && (
                            <span className="shrink-0 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-ember bg-ember/[0.08] border border-ember/30 rounded-full px-2.5 py-1">
                              <Lock size={10} /> Soon
                            </span>
                          )}
                        </div>
                        <h4
                          className="text-ink font-semibold text-[15px] sm:text-[17px] leading-snug mb-2"
                          style={{ letterSpacing: '-0.02em' }}
                        >
                          {mod.title}
                        </h4>
                        {mod.description && (
                          <p className="text-ink/55 text-[13px] sm:text-sm leading-relaxed mb-3">
                            {mod.description}
                          </p>
                        )}
                        {mod.points.length > 0 && (
                          <ul className="space-y-2 border-t border-ink/[0.07] pt-3 mt-auto">
                            {mod.points.map((point) => (
                              <li
                                key={point}
                                className="flex items-start gap-2 text-[13px] sm:text-sm text-ink/70 leading-relaxed"
                              >
                                <Plus size={13} className="text-ember mt-1 shrink-0" strokeWidth={2.5} />
                                {point}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* progress dots */}
            <div className="flex items-center justify-center gap-1.5 pb-6">
              {WEEKS.map((w, i) => (
                <button
                  key={w.numeral}
                  onClick={() => go(i)}
                  aria-label={`Week ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-400 ${
                    active === i ? 'w-7 bg-ember' : 'w-1.5 bg-ink/15 hover:bg-ink/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* That was a lot + CTA */}
        <Reveal className="mt-20 mx-auto max-w-3xl" delay={80}>
          <h3 className="text-center font-brand text-[2rem] sm:text-[2.6rem] text-ink mb-5 leading-[1.15]">
            That was a lot…
          </h3>
          <p className="mx-auto max-w-2xl text-ink/65 leading-[1.7] text-[15px] sm:text-[17px]">
            That’s because a lot goes into a massively successful brand. Yet this is the fastest
            path anyone — even a complete beginner — can take. Some steps you may already know, but
            none of you will know the esoteric secrets shared within.{' '}
            <span className="text-ink font-semibold whitespace-nowrap">That is what sets us apart.</span>
          </p>
          <div className="mt-9 flex justify-center">
            <CTAButton label="Book A Call Now" size="lg" />
          </div>
        </Reveal>
      </div>

      {/* seam → dark AI suite */}
      <div
        className="h-40 w-full"
        style={{ background: 'linear-gradient(to bottom, var(--paper), var(--ink))' }}
      />
    </section>
  );
}
