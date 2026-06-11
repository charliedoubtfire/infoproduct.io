import { useState } from 'react';
import { ChevronDown, Plus, Lock } from 'lucide-react';
import { WEEKS } from '../content';
import { ICONS, Reveal, Accent, CTAButton } from './shared';

export default function Curriculum() {
  const [openWeek, setOpenWeek] = useState<number>(0);

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

        <div className="mt-14 flex flex-col gap-3.5">
          {WEEKS.map((week, i) => {
            const Icon = ICONS[week.icon];
            const open = openWeek === i;
            return (
              <Reveal key={week.numeral} delay={Math.min(i, 4) * 55}>
                <div
                  className={`rounded-[1.5rem] border transition-all duration-500 overflow-hidden ${
                    open
                      ? 'border-ember/40 bg-white shadow-[0_40px_80px_-40px_rgba(255,66,0,0.28)]'
                      : 'border-ink/10 bg-white/55 hover:bg-white hover:border-ink/20'
                  }`}
                >
                  <button
                    onClick={() => setOpenWeek(open ? -1 : i)}
                    className="w-full flex items-center gap-4 sm:gap-6 px-5 sm:px-8 py-5 sm:py-6 text-left"
                  >
                    <span
                      className={`font-brand text-3xl sm:text-4xl w-9 sm:w-12 shrink-0 text-center transition-colors duration-500 ${
                        open ? 'text-ember' : 'text-ink/25'
                      }`}
                    >
                      {week.numeral}
                    </span>
                    <span
                      className={`hidden sm:flex items-center justify-center w-11 h-11 rounded-2xl border shrink-0 transition-all duration-500 ${
                        open
                          ? 'border-ember/40 bg-ember/[0.08] text-ember'
                          : 'border-ink/15 text-ink/35'
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.6} />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/40 mb-1">
                        Week {i + 1}
                      </span>
                      <span
                        className="block text-lg sm:text-2xl text-ink font-semibold"
                        style={{ letterSpacing: '-0.03em' }}
                      >
                        {week.title}
                      </span>
                    </span>
                    <span className="shrink-0 flex items-center gap-2.5">
                      <span
                        className={`hidden sm:block text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                          open ? 'text-ember' : 'text-ink/40'
                        }`}
                      >
                        {open ? 'Collapse' : 'Expand'}
                      </span>
                      <span
                        className={`flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-500 ${
                          open
                            ? 'rotate-180 border-ember/40 text-ember bg-ember/[0.06]'
                            : 'border-ink/15 text-ink/40'
                        }`}
                      >
                        <ChevronDown size={18} />
                      </span>
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-8 pb-8">
                        <p className="text-ink/65 text-sm sm:text-base leading-relaxed max-w-3xl border-l-2 border-ember/50 pl-4 mb-7">
                          {week.description}
                        </p>
                        <div className="grid gap-3.5 md:grid-cols-2">
                          {week.modules.map((mod, mi) => (
                            <div
                              key={mod.title}
                              className="rounded-2xl border border-ink/10 bg-paperDeep/50 p-5 transition-colors duration-300 hover:border-ember/30"
                            >
                              <div className="flex items-start justify-between gap-3 mb-2">
                                <h4
                                  className="text-ink font-semibold text-sm sm:text-base"
                                  style={{ letterSpacing: '-0.02em' }}
                                >
                                  <span className="font-brand text-ember/90 mr-2">{mi + 1}.</span>
                                  {mod.title}
                                </h4>
                                {mod.comingSoon && (
                                  <span className="shrink-0 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-ember bg-ember/[0.08] border border-ember/30 rounded-full px-2.5 py-1">
                                    <Lock size={10} /> Soon
                                  </span>
                                )}
                              </div>
                              {mod.description && (
                                <p className="text-ink/55 text-xs sm:text-sm leading-relaxed mb-3">
                                  {mod.description}
                                </p>
                              )}
                              {mod.points.length > 0 && (
                                <ul className="space-y-1.5">
                                  {mod.points.map((point) => (
                                    <li
                                      key={point}
                                      className="flex items-start gap-2 text-xs sm:text-sm text-ink/70 leading-relaxed"
                                    >
                                      <Plus
                                        size={13}
                                        className="text-ember mt-0.5 shrink-0"
                                        strokeWidth={2.5}
                                      />
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

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
