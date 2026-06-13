import { useState } from 'react';
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react';
import { COMPARISON } from '../content';
import { Reveal, Wordmark } from './shared';

export default function Comparison() {
  const [open, setOpen] = useState(false);

  return (
    <section id="proof" className="relative bg-paper">
      <div className="max-w-content mx-auto px-5 sm:px-8 pt-8 sm:pt-12 pb-24 sm:pb-28">
        {/* Title — centred, all in the brand font */}
        <Reveal>
          <h2 className="mx-auto max-w-4xl text-center font-brand text-ink text-[2.3rem] leading-[1.12] sm:text-[3rem] sm:leading-[1.1]">
            Frankly, We Have <span className="font-brand text-ember">No Competition</span>
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-center text-[15px] sm:text-[17px] leading-[1.7] text-ink/65">
            We have the most comprehensive, advanced and effective methodology to start and scale
            an infoproduct business. Compare us to our main “competitors” yourself.
          </p>
        </Reveal>

        {/* Premium solid click-to-expand trigger — centred */}
        <Reveal className="mt-12 mx-auto max-w-3xl" delay={80}>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className={`group w-full rounded-2xl border transition-all duration-400 px-5 sm:px-8 py-6 text-center ${
              open
                ? 'border-ember/40 bg-white shadow-[0_30px_60px_-35px_rgba(255,66,0,0.45)]'
                : 'border-ink/10 bg-white shadow-[0_18px_40px_-28px_rgba(12,11,10,0.45)] hover:shadow-[0_30px_60px_-32px_rgba(12,11,10,0.4)] hover:-translate-y-0.5'
            }`}
          >
            <span className="flex flex-wrap items-center justify-center gap-2.5">
              <span className="inline-flex items-center h-7 px-3 rounded-full border border-ink/15 bg-paperDeep/60 text-ink/55 text-[12px] font-medium">
                ‘Competition’
              </span>
              <span className="font-brand text-ink/40 text-sm leading-none">vs</span>
              <span className="inline-flex items-center h-7 px-3 rounded-full border border-ember/30 bg-ember/[0.07] leading-none">
                <Wordmark className="text-[13px]" />
              </span>
            </span>
            <span className="block mt-3.5 text-ink font-semibold text-base sm:text-lg" style={{ letterSpacing: '-0.02em' }}>
              See The Full Feature Comparison
            </span>
            <span
              className={`mx-auto mt-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                open ? 'bg-ember/10 text-ember' : 'bg-ember text-white group-hover:bg-[#e63b00]'
              }`}
            >
              {open ? 'Close' : 'Tap To Reveal'}
              <ChevronDown
                size={15}
                className={`transition-transform duration-500 ${open ? 'rotate-180' : 'group-hover:translate-y-0.5'}`}
              />
            </span>
          </button>

          <div
            className={`grid transition-[grid-template-rows] duration-700 ease-out ${
              open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
          >
            <div className="overflow-hidden">
              <div className="mt-4 rounded-[1.5rem] border border-ink/10 bg-white overflow-hidden shadow-[0_40px_80px_-50px_rgba(12,11,10,0.4)]">
                {/* header */}
                <div className="grid grid-cols-[1fr_3.5rem_3.5rem] sm:grid-cols-[1fr_7rem_8rem] items-center bg-ink text-white">
                  <span className="px-4 sm:px-7 py-4 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55 text-left">
                    Topic Included?
                  </span>
                  <span className="px-1 sm:px-3 py-4 text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.1em] text-white/55 text-center">
                    <span className="sm:hidden">Others</span>
                    <span className="hidden sm:inline">‘Competition’</span>
                  </span>
                  <span className="px-1 sm:px-3 py-4 text-center bg-ember/20 h-full flex items-center justify-center">
                    <span className="sm:hidden font-brand text-[15px] leading-none text-ember">
                      IP
                    </span>
                    <span className="hidden sm:inline leading-none">
                      <Wordmark className="text-[15px]" />
                    </span>
                  </span>
                </div>
                {/* rows */}
                {COMPARISON.map((row, i) => (
                  <div
                    key={row.topic}
                    className={`grid grid-cols-[1fr_3.5rem_3.5rem] sm:grid-cols-[1fr_7rem_8rem] items-stretch ${
                      i % 2 ? 'bg-paper/50' : 'bg-white'
                    } ${i < COMPARISON.length - 1 ? 'border-b border-ink/5' : ''}`}
                  >
                    <span className="px-4 sm:px-7 py-3.5 text-[13px] sm:text-sm text-ink/80 leading-snug text-left flex items-center">
                      {row.topic}
                    </span>
                    <span className="px-1 sm:px-3 py-3.5 flex items-center justify-center border-l border-ink/[0.04]">
                      {row.competition ? (
                        <Check size={15} className="text-ink/35" />
                      ) : (
                        <X size={15} className="text-ink/25" />
                      )}
                    </span>
                    <span className="px-1 sm:px-3 py-3.5 flex items-center justify-center border-l border-ember/15 bg-ember/[0.05]">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-ember/15">
                        <Check size={14} className="text-ember" strokeWidth={2.5} />
                      </span>
                    </span>
                  </div>
                ))}
                {/* footer accent */}
              </div>

              {/* easy close at the end */}
              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => {
                    setOpen(false);
                    document
                      .getElementById('proof')
                      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/60 hover:text-ember hover:border-ember/40 transition-colors"
                >
                  <ChevronUp size={15} />
                  Close Comparison
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
