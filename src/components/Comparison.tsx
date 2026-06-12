import { useState } from 'react';
import { Check, X, ChevronDown } from 'lucide-react';
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

        {/* Obvious click-to-expand dropdown — centred */}
        <Reveal className="mt-12 mx-auto max-w-3xl" delay={80}>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className={`group w-full rounded-2xl border-2 transition-all duration-400 px-5 sm:px-8 py-6 text-center ${
              open
                ? 'border-ember/50 bg-white shadow-[0_30px_60px_-35px_rgba(255,66,0,0.45)]'
                : 'border-dashed border-ink/25 bg-white/70 hover:bg-white hover:border-ember/50 hover:shadow-[0_30px_60px_-35px_rgba(12,11,10,0.3)]'
            }`}
          >
            <span
              className="block text-ink font-semibold text-base sm:text-lg"
              style={{ letterSpacing: '-0.02em' }}
            >
              See The Full Feature Comparison
            </span>
            {/* chips on their own row — fixed heights, no line-metric overlap */}
            <span className="mt-3 flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center h-7 px-3 rounded-full border border-ink/15 bg-paperDeep/60 text-ink/55 text-[12px] font-medium">
                ‘Competition’
              </span>
              <span className="font-brand text-ink/40 text-sm leading-none">vs</span>
              <span className="inline-flex items-center h-7 px-3 rounded-full border border-ember/30 bg-ember/[0.07] leading-none">
                <Wordmark className="text-[13px]" />
              </span>
            </span>
            <span
              className={`mx-auto mt-4 flex items-center justify-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                open ? 'text-ember' : 'text-ink/45 group-hover:text-ember'
              }`}
            >
              {open ? 'Click To Close' : 'Click To Expand'}
              <span
                className={`flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-500 ${
                  open
                    ? 'rotate-180 border-ember/40 text-ember bg-ember/[0.07]'
                    : 'border-ink/20 text-ink/50 group-hover:border-ember/40 group-hover:text-ember animate-bounce'
                }`}
              >
                <ChevronDown size={15} />
              </span>
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
                    <span className="sm:hidden font-brand text-[15px] leading-none" style={{ color: '#ff6a3d' }}>
                      IP
                    </span>
                    <span className="hidden sm:inline leading-none">
                      <Wordmark className="text-[15px]" color="#ff6a3d" />
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
                <div className="grid grid-cols-[1fr_3.5rem_3.5rem] sm:grid-cols-[1fr_7rem_8rem] bg-ink">
                  <span className="px-4 sm:px-7 py-3 text-[11px] text-white/45 text-left">
                    Every capability. One place.
                  </span>
                  <span />
                  <span className="bg-ember/20" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
