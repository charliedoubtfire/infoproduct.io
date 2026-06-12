import { ArrowRight } from 'lucide-react';
import { BG_IMAGE_1 } from '../content';
import { Reveal, CTAButton, Wordmark } from './shared';

const INACTION = [
  'Your competitors keep programming your future audience to buy from them — and beliefs, once installed, are extraordinarily difficult to reverse.',
  'The window of AI arbitrage quietly closes while others compound a 13× speed advantage every single day.',
  'The sales that could have been yours keep going to people less skilled than you.',
];

const ACTION = [
  'You install the exact algorithm behind 7, 8 and 9-figure infoproduct operations.',
  'You move 13× faster than every human competitor — from day one.',
  'You build a business with 90%+ margins that earns while you sleep, changes lives, and makes you known for it.',
];

export default function Closing() {
  return (
    <section id="enrol" className="relative bg-ink overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover opacity-[0.2] drift-slow"
        style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, var(--ink), rgba(12,11,10,0.7) 42%, var(--ink)), radial-gradient(55% 38% at 50% 16%, rgba(255,66,0,0.1), transparent 60%)',
        }}
      />

      <div className="relative max-w-content mx-auto px-5 sm:px-8 pt-24 sm:pt-28 pb-24 sm:pb-28">
        {/* ---- stretch your brain: brand-font title centred, Inter body left ---- */}
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-center font-brand text-white text-[2.2rem] leading-[1.16] sm:text-[3.2rem] sm:leading-[1.1]">
            So really stretch your brain for a moment…
          </h2>
          <p className="mt-8 mx-auto max-w-2xl text-white/70 leading-[1.7] text-[15px] sm:text-[17px]">
            Try to imagine the person you are going to become — the one who has mastered all of
            these skills. The world would be yours for the taking. Everything you have ever desired,
            at your fingertips. All you have to do is follow the roadmap inside{' '}
            <Wordmark className="text-[1.05em]" color="#ff6a3d" />.
          </p>
        </Reveal>

        {/* ---- crossroads close ---- */}
        <Reveal className="mt-20 sm:mt-24" delay={60}>
          <h3
            className="mx-auto max-w-3xl text-center text-white font-semibold text-[1.7rem] sm:text-[2.3rem] leading-[1.12]"
            style={{ letterSpacing: '-0.035em' }}
          >
            The decision in front of you is simple.
          </h3>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 max-w-4xl mx-auto items-stretch">
          <Reveal>
            <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-7 sm:p-8 opacity-70">
              <p className="text-white/40 text-[11px] font-semibold uppercase tracking-[0.24em] mb-6">
                If you wait
              </p>
              <ul className="space-y-4">
                {INACTION.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white/45 text-[15px] leading-[1.6]">
                    <span className="mt-2.5 h-1 w-3 rounded-full bg-white/20 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-white/40 text-[15px] font-brand">
                A year from now, you’ll wish you had begun today.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative h-full rounded-[1.5rem] border border-ember/45 bg-gradient-to-br from-ember/[0.16] to-ember/[0.03] p-7 sm:p-8 shadow-[0_50px_100px_-50px_rgba(255,66,0,0.5)]">
              <p className="text-ember text-[11px] font-semibold uppercase tracking-[0.24em] mb-6">
                When you begin
              </p>
              <ul className="space-y-4">
                {ACTION.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white/90 text-[15px] leading-[1.6]">
                    <ArrowRight size={16} className="text-ember mt-0.5 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-white font-brand text-[17px]">
                You become your own version of this magic.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ---- The call: a distinctive standalone feature band ---- */}
        <Reveal className="mt-20 sm:mt-28" delay={80}>
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-ember/40 bg-gradient-to-br from-[#1a120e] to-[#0c0b0a] shadow-[0_60px_140px_-50px_rgba(255,66,0,0.65)]">
            {/* artwork + ember glows */}
            <div
              className="absolute inset-0 bg-center bg-cover opacity-[0.16] drift-slow"
              style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(80% 90% at 18% 12%, rgba(255,66,0,0.28), transparent 60%)',
              }}
            />

            <div className="relative grid gap-8 md:grid-cols-[auto_1fr] md:items-center p-7 sm:p-10 md:p-12">
              {/* time badge */}
              <div className="relative mx-auto md:mx-0 w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] shrink-0">
                <span className="absolute inset-0 rounded-full border border-ember/35" />
                <span className="absolute inset-[10px] rounded-full border border-ember/20 drift-slow" />
                <span
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(255,66,0,0.22), transparent 68%)' }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="font-brand text-ember text-[3.4rem] sm:text-[4rem] leading-none">40</span>
                  <span className="text-white/70 text-[10px] font-semibold uppercase tracking-[0.28em] mt-1">
                    Minute Call
                  </span>
                </div>
              </div>

              {/* copy + CTA */}
              <div className="text-center md:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/[0.08] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ember mb-5">
                  Free · 1:1 with Charlie
                </span>
                <h3
                  className="text-white font-semibold text-[1.6rem] sm:text-[2.1rem] leading-[1.14] mb-4"
                  style={{ letterSpacing: '-0.035em' }}
                >
                  Your personal roadmap, <span className="font-brand font-normal text-ember">drawn up live.</span>
                </h3>
                <p className="text-white/70 text-[15px] sm:text-[17px] leading-[1.65] max-w-xl mx-auto md:mx-0 mb-8">
                  In this 40-minute call, Charlie will teach you exactly how to start and scale your
                  online education company — using methodologies taken directly from inside{' '}
                  <Wordmark className="text-[1.05em]" color="#ff6a3d" />.
                </p>
                <div className="flex justify-center md:justify-start">
                  <CTAButton label="Book Your Free Call" size="lg" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
