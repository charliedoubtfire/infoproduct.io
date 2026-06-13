import { useRef } from 'react';
import { Check, Flame, Compass, Crown } from 'lucide-react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Reveal, CTAButton } from './shared';
import { RollingText } from './ui/rolling-text';

/* tokens for the animated info-gap line; `a` = ember accent word */
const GAP_LINE: { t: string; a?: boolean }[] = [
  { t: 'Close' }, { t: 'this' }, { t: 'information' }, { t: 'gap,' },
  { t: 'learn' }, { t: 'our' }, { t: 'methods,' }, { t: 'and' }, { t: 'there' },
  { t: 'will' }, { t: 'be' }, { t: 'nothing' }, { t: 'standing' }, { t: 'in' },
  { t: 'the' }, { t: 'way' }, { t: 'of' }, { t: 'your', a: true }, { t: 'success', a: true },
  { t: 'except' }, { t: 'yourself.' },
];

/* One word of the gap line, lit by scroll progress. Spaces are real text so
   the line wraps and reads naturally. */
function GapWord({
  word,
  accent,
  progress,
  range,
}: {
  word: string;
  accent?: boolean;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const blur = useTransform(progress, range, ['blur(3px)', 'blur(0px)']);
  return (
    <motion.span
      className={`inline-block mr-[0.26em] ${accent ? 'text-ember' : ''}`}
      style={{ opacity, filter: blur }}
    >
      {word}
    </motion.span>
  );
}

function GapLine() {
  const ref = useRef<HTMLDivElement>(null);
  /* the words illuminate across this scroll window — reading pace, not a pop */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.92', 'start 0.36'],
  });
  const glow = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const ctaOpacity = useTransform(scrollYProgress, [0.82, 1], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.82, 1], [18, 0]);
  const n = GAP_LINE.length;

  return (
    <div ref={ref} className="relative mt-24 sm:mt-32 text-center">
      {/* ember glow swells in behind the line as it completes */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,720px)] h-[420px] pointer-events-none"
        style={{
          opacity: glow,
          background: 'radial-gradient(closest-side, rgba(255,66,0,0.22), transparent 72%)',
        }}
      />
      <h3 className="relative mx-auto max-w-[26ch] sm:max-w-[34ch] font-brand text-white text-[1.7rem] leading-[1.3] sm:text-[2.5rem] sm:leading-[1.26]">
        {GAP_LINE.map((w, i) => (
          <GapWord
            key={i}
            word={w.t}
            accent={w.a}
            progress={scrollYProgress}
            range={[i / (n + 2), (i + 2.4) / (n + 2)]}
          />
        ))}
      </h3>
      <motion.div className="relative mt-10 flex justify-center" style={{ opacity: ctaOpacity, y: ctaY }}>
        <CTAButton label="Learn Our Methods" href="#curriculum" size="lg" />
      </motion.div>
    </div>
  );
}

const NICHES = [
  'Fitness',
  'E-Commerce',
  'Clipping',
  'Communication Skills',
  'Football',
  'Networking',
  'Mindset',
  'Dating',
  'Trading',
  'Real Estate',
  'Public Speaking',
  'Gaming',
  'Cooking',
  'Photography',
  'Confidence',
  'Productivity',
  'Music Production',
  'Marketing',
  'Faith',
  'Parenting',
  'Style & Grooming',
  'Sales',
  'Crypto',
  'Languages',
  'Art',
];

const ROLES = [
  'Owners',
  'Heads of Sales',
  'Heads of Marketing',
  'Appointment Setters',
  'Fulfilment Experts',
  'Roles you don’t yet know exist…',
];

const CRITERIA: { icon: typeof Flame; title: string; body?: string; lines?: string[] }[] = [
  {
    icon: Flame,
    title: 'You Have One Of The Following',
    lines: [
      'A problem you have overcome,',
      'a passion you hold deeply,',
      'or knowledge that you desire to share with the world.',
    ],
  },
  {
    icon: Compass,
    title: 'You Take Relentless Action',
    body: 'You must be an individual who will take relentless action, remain coachable, and be free from unjustified ego.',
  },
  {
    icon: Crown,
    title: 'You Have Zero Doubt',
    body: 'You must be a person who does not have a single doubt in their mind that they will BECOME wildly successful beyond whatever they currently think is possible.',
  },
];

export default function Story() {
  return (
    <>
      {/* ============ THE GOLDMINE + DISCOVERY (dark, flows out of hero) ============ */}
      <section id="algorithm" className="relative bg-ink overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none drift-slow"
          style={{
            background:
              'radial-gradient(55% 45% at 82% 8%, rgba(255,66,0,0.13), transparent 60%), radial-gradient(45% 38% at 10% 62%, rgba(255,66,0,0.07), transparent 60%)',
          }}
        />
        <div className="relative max-w-content mx-auto px-5 sm:px-8 pt-24 sm:pt-28 pb-24 sm:pb-28">
          {/* Title — centred; accent line slightly larger, full phrase in brand font */}
          <Reveal>
            <h2 className="mx-auto max-w-4xl text-center font-brand text-white text-[1.9rem] leading-[1.18] sm:text-[2.3rem] sm:leading-[1.16]">
              If You’re Above Average At{' '}
              <span className="whitespace-nowrap">Anything In Life,</span>
              <span className="mt-1.5 block font-brand text-ember text-[2.1rem] leading-[1.14] sm:text-[2.7rem] sm:leading-[1.12]">
                You’re Sitting On A Literal Goldmine
              </span>
            </h2>
          </Reveal>

          {/* Strapline — exact roadmap copy, short paragraphs, left-aligned */}
          <Reveal className="mx-auto mt-9 max-w-2xl" delay={60}>
            <div className="space-y-4 text-[15px] sm:text-[17px] leading-[1.7] text-white/65">
              <p>
                Whether it’s{' '}
                <RollingText
                  words={NICHES}
                  interval={1400}
                  fit="active"
                  className="font-brand text-ember text-[1.25em] leading-none"
                />
              </p>
              <p>
                Whatever it is, there are people as you read this, less skilled than you,
                consistently generating anywhere from 5 to 7 figures per month online.
              </p>
              <p>
                They boast 90%+ profit margins, low complexity, and overall, fun and highly
                rewarding businesses.
              </p>
            </div>
          </Reveal>

          {/* Discovery — editorial, open layout. No boxes, just typography. */}
          <div className="mt-24 sm:mt-28">
            <Reveal>
              <h3 className="mx-auto max-w-5xl text-center font-brand text-white text-[2rem] leading-[1.18] sm:text-[2.6rem] sm:leading-[1.14] lg:whitespace-nowrap">
                I Discovered the Algorithm to Success{' '}
                <span className="font-brand text-ember">Selling Info…</span>
              </h3>
            </Reveal>

            <div className="mt-12 mx-auto max-w-5xl grid gap-10 lg:gap-0 lg:grid-cols-2">
              <Reveal delay={70} className="lg:pr-12 lg:border-r lg:border-white/10">
                <div className="space-y-4 text-white/70 text-[15px] sm:text-[16px] leading-[1.8]">
                  <p>
                    From working with, and learning from{' '}
                    <span className="text-white font-semibold">
                      7, 8 and 9-figure infoproduct operations
                    </span>
                    , I learned the raw realities and{' '}
                    <span className="text-white font-semibold">darkest secrets</span> of exactly how
                    people build and scale insanely lucrative online education companies.
                  </p>
                  <p>I have friends at every level of these world-renowned operations:</p>
                </div>
              </Reveal>

              <Reveal delay={150} className="lg:pl-12 flex flex-col">
                <div className="space-y-4 text-white/70 text-[15px] sm:text-[16px] leading-[1.8]">
                  <p>
                    All of whom know their part of the operation intimately —{' '}
                    <span className="text-white font-semibold">
                      better than any generalist ever could.
                    </span>
                  </p>
                  <p>
                    From these connections I pulled together{' '}
                    <span className="text-white font-semibold">
                      the blueprint anyone can install
                    </span>{' '}
                    to rapidly build a highly lucrative online education company, even if you don’t
                    want to be in the public eye.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* the network — one balanced row beneath both columns, drifting in */}
            <motion.div
              className="mt-9 flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto"
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, margin: '-10%' }}
              variants={{ show: { transition: { staggerChildren: 0.07 } } }}
            >
              {ROLES.map((role, ri) => (
                <motion.span
                  key={role}
                  className="inline-block"
                  variants={{
                    hidden: { opacity: 0, y: 14, x: ri % 2 ? 10 : -10 },
                    show: { opacity: 1, y: 0, x: 0 },
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span
                    className="chip-bob inline-flex items-center gap-1.5 text-[13px] sm:text-sm text-white/75 border border-ember/30 bg-ember/[0.06] hover:bg-ember/[0.12] hover:border-ember/50 transition-colors rounded-full px-3.5 py-1.5"
                    style={{ animationDelay: `${ri * 0.35}s` }}
                  >
                    <Check size={13} className="text-ember" />
                    {role}
                  </span>
                </motion.span>
              ))}
            </motion.div>

            {/* the line that matters, set apart */}
            <Reveal delay={120} className="relative mt-14 sm:mt-16">
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(88vw,640px)] h-[260px] pointer-events-none"
                style={{
                  background: 'radial-gradient(closest-side, rgba(255,66,0,0.16), transparent 72%)',
                }}
              />
              <p className="relative mx-auto max-w-3xl text-center font-brand text-[1.7rem] sm:text-[2.2rem] leading-[1.3] text-white">
                The only difference between your business today and scaling it to eight figures is,
                literally, just <span className="font-brand text-ember">information</span>.
              </p>
            </Reveal>
          </div>

          {/* ---- The info-gap line: illuminated word by word as you scroll ---- */}
          <GapLine />
        </div>

        <div
          className="h-32 w-full"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--paper))' }}
        />
      </section>

      {/* ============ WHO IT'S FOR (paper) — deliberately understated ============ */}
      <section id="who" className="relative bg-paper">
        <div className="max-w-content mx-auto px-5 sm:px-8 pb-24 sm:pb-28">
          {/* title — all brand face, words rising in softly */}
          <motion.h2
            className="mx-auto max-w-2xl text-center font-brand text-ink text-[2.1rem] leading-[1.16] sm:text-[2.8rem]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: '-12%' }}
            variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } }}
          >
            {['This', 'Is', 'Only', 'For', 'You', 'If…'].map((w, i) => (
              <motion.span
                key={i}
                className={`inline-block mr-[0.24em] ${i >= 2 ? 'text-ember' : ''}`}
                variants={{
                  hidden: { opacity: 0, y: 22, filter: 'blur(7px)' },
                  show: { opacity: 1, y: 0, filter: 'blur(0px)' },
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            ))}
          </motion.h2>

          {/* the three criteria — open tiles, no box-in-a-box */}
          <div className="mt-12 grid gap-4 md:grid-cols-3 max-w-4xl mx-auto items-stretch">
            {CRITERIA.map((c, i) => (
              <Reveal key={c.title} delay={i * 110} className={i === 1 ? 'md:-mt-3' : ''}>
                <div
                  className={`group relative h-full rounded-[1.5rem] border bg-white/50 hover:bg-white hover:-translate-y-1 hover:border-ember/30 transition-all duration-500 p-6 sm:p-7 text-center ${
                    i === 1
                      ? 'border-ember/25 shadow-[0_30px_70px_-46px_rgba(255,66,0,0.45)]'
                      : 'border-ink/10 shadow-[0_24px_60px_-48px_rgba(12,11,10,0.5)]'
                  }`}
                >
                  <span className="mx-auto mb-5 flex items-center justify-center w-12 h-12 rounded-full bg-ember/[0.07] border border-ember/25 text-ember group-hover:scale-110 transition-transform duration-500">
                    <c.icon size={20} strokeWidth={1.7} />
                  </span>
                  <h3 className="text-ink font-semibold text-[16px] leading-snug mb-2.5" style={{ letterSpacing: '-0.02em' }}>
                    {c.title}
                  </h3>
                  {c.lines ? (
                    <div className="space-y-1.5 text-ink/60 text-[14px] sm:text-[14.5px] leading-[1.55]">
                      {c.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-ink/60 text-[14px] sm:text-[14.5px] leading-[1.65]">
                      {c.body}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <motion.p
            className="mt-9 text-center text-ink/70 text-[15px] sm:text-[17px] leading-[1.6]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: '-12%' }}
            variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
          >
            {'If this is you, then here is the exact roadmap you need to follow…'
              .split(' ')
              .map((w, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.26em]"
                  variants={{
                    hidden: { opacity: 0, y: 14, filter: 'blur(5px)' },
                    show: { opacity: 1, y: 0, filter: 'blur(0px)' },
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              ))}
          </motion.p>
        </div>
      </section>
    </>
  );
}
