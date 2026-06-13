import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
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
          <motion.div
            className="mt-9 mx-auto max-w-xl space-y-5 text-white/75 leading-[1.8] text-[15px] sm:text-[17px]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: '-12%' }}
            variants={{ show: { transition: { staggerChildren: 0.22 } } }}
          >
            {[
              <>Try to imagine the person you are going to become — the one who has mastered all of these skills.</>,
              <>The world would be yours for the taking. Everything you have ever desired, at your fingertips.</>,
              <>All you have to do is follow the roadmap inside <Wordmark className="text-[1.05em]" />.</>,
            ].map((line, li) => (
              <motion.p
                key={li}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
        </Reveal>

        {/* ---- crossroads close ---- */}
        <Reveal className="mt-20 sm:mt-24" delay={60}>
          <h3 className="mx-auto max-w-3xl text-center font-brand text-white text-[2rem] sm:text-[2.8rem] leading-[1.16]">
            So Now… <span className="font-brand text-ember">You Have A Choice To Make</span>
          </h3>
        </Reveal>

        {/* binary fork — two clearly opposed paths, labelled A / B */}
        <div className="relative mt-12 grid gap-5 md:grid-cols-2 max-w-4xl mx-auto items-stretch">
          {/* centre divider 'OR' on desktop */}
          <span className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center w-11 h-11 rounded-full border border-white/15 bg-ink text-white/55 text-[11px] font-semibold uppercase tracking-[0.18em]">
            or
          </span>

          <Reveal>
            <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-7 sm:p-8">
              <p className="text-white/55 text-[12px] font-semibold uppercase tracking-[0.24em] mb-6">
                You wait
              </p>
              <ul className="space-y-4">
                {INACTION.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white/60 text-[15px] leading-[1.6]">
                    <span className="mt-2.5 h-1 w-3 rounded-full bg-white/25 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative h-full rounded-[1.5rem] border border-ember/45 bg-gradient-to-br from-ember/[0.16] to-ember/[0.03] p-7 sm:p-8 shadow-[0_50px_100px_-50px_rgba(255,66,0,0.5)]">
              <p className="text-ember text-[12px] font-semibold uppercase tracking-[0.24em] mb-6">
                You begin
              </p>
              <ul className="space-y-4">
                {ACTION.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white/90 text-[15px] leading-[1.6]">
                    <ArrowRight size={16} className="text-ember mt-0.5 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* ---- The call — flows straight on from "You begin", no island ---- */}
        <Reveal className="mt-12 sm:mt-16" delay={60}>
          <div id="call" className="relative flex flex-col items-center text-center scroll-mt-28">
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,680px)] h-[380px] pointer-events-none"
              style={{
                background: 'radial-gradient(closest-side, rgba(255,66,0,0.14), transparent 70%)',
              }}
            />
            <span className="relative inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/[0.08] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ember mb-5">
              Complimentary · 40 Minutes · 1:1 with Charlie
            </span>
            <h3 className="relative font-brand text-white text-[1.8rem] sm:text-[2.4rem] leading-[1.16] mb-4">
              Your personal roadmap, <span className="font-brand text-ember">drawn up live.</span>
            </h3>
            <p className="relative text-white text-[15px] sm:text-[17px] leading-[1.65] max-w-xl mb-8">
              In this 40-minute call, Charlie will teach you exactly how to start and scale your
              online education company — using methodologies taken directly from inside{' '}
              <Wordmark className="text-[1.05em]" />.
            </p>
            <div className="relative cta-breathe">
              <CTAButton label="Book Your Complimentary Call Now" size="lg" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
