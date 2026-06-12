import { Check, Flame, Compass, Crown } from 'lucide-react';
import { Reveal, Accent, CTAButton } from './shared';
import { RollingText } from './ui/rolling-text';
import { GlowCard } from './ui/spotlight-card';

const NICHES = [
  'Fitness',
  'E-Commerce',
  'Clipping',
  'Communication Skills',
  'Football',
  'Networking',
  'Mindset',
];

const ROLES = [
  'Owners',
  'Heads of Sales',
  'Heads of Marketing',
  'Appointment Setters',
  'Fulfilment Experts',
  'Roles you don’t yet know exist…',
];

const CRITERIA = [
  {
    icon: Flame,
    title: 'You Have One Of The Following',
    body: 'A problem you have overcome, a passion you hold deeply, or knowledge that you desire to share with the world.',
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
            <h2
              className="mx-auto max-w-4xl text-center font-semibold text-white text-[1.7rem] leading-[1.16] sm:text-[2.1rem] sm:leading-[1.14]"
              style={{ letterSpacing: '-0.035em' }}
            >
              If You’re Above Average At{' '}
              <span className="whitespace-nowrap">Anything In Life,</span>
              <span className="mt-1.5 block font-brand font-normal text-ember text-[2.1rem] leading-[1.14] sm:text-[2.7rem] sm:leading-[1.12]">
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
                  interval={2000}
                  fit="active"
                  className="font-brand text-ember text-[1.25em] leading-none"
                />
                …
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

          {/* Discovery — two tiles side by side, CTA separate beneath */}
          <div className="mt-20 grid gap-5 lg:grid-cols-2 items-stretch">
            <Reveal delay={60}>
              <GlowCard className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7 sm:p-10">
                <h3
                  className="text-[1.45rem] sm:text-[1.7rem] text-white font-semibold leading-[1.2] mb-5"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  I Discovered the Algorithm to Success <Accent>Selling Info…</Accent>
                </h3>
                <p className="text-white/65 leading-[1.7] mb-6">
                  From working with, and learning from 7, 8 and 9-figure infoproduct operations, I
                  learned the raw realities and darkest secrets of exactly how people build and
                  scale insanely lucrative online education companies. I have friends at every
                  level of these world-renowned operations:
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {ROLES.map((role) => (
                    <span
                      key={role}
                      className="inline-flex items-center gap-1.5 text-[13px] sm:text-sm text-white/75 border border-ember/30 bg-ember/[0.06] rounded-full px-3.5 py-1.5"
                    >
                      <Check size={13} className="text-ember" />
                      {role}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </Reveal>

            <Reveal delay={140}>
              <GlowCard className="h-full rounded-[1.75rem] border border-ember/30 bg-gradient-to-br from-ember/[0.1] to-transparent p-7 sm:p-10 flex flex-col">
                <p className="text-white/65 leading-[1.7] mb-7">
                  All of whom know their part of the operation intimately — better than any
                  generalist ever could. From these connections I pulled together the blueprint
                  anyone can install to rapidly build a highly lucrative online education company,
                  even if you don’t want to be in the public eye.
                </p>
                <p className="mt-auto font-brand text-[1.6rem] sm:text-[2rem] leading-[1.25] text-white">
                  The only difference between your business today and scaling it to eight figures
                  is, literally, just <span className="font-brand text-ember">information</span>.
                </p>
              </GlowCard>
            </Reveal>
          </div>

          {/* CTA — special-font headline, centred, links to the curriculum */}
          <Reveal className="mt-16 text-center" delay={80}>
            <h3 className="mx-auto max-w-3xl font-brand text-white text-[1.7rem] sm:text-[2.3rem] leading-[1.22] mb-9">
              Close this information gap, learn our methods, and there will be nothing standing in
              the way of your success except yourself.
            </h3>
            <div className="flex justify-center">
              <CTAButton label="Learn Our Methods" href="#curriculum" size="lg" />
            </div>
          </Reveal>
        </div>

        <div
          className="h-32 w-full"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--paper))' }}
        />
      </section>

      {/* ============ WHO IT'S FOR (paper) ============ */}
      <section id="who" className="relative bg-paper">
        <div className="max-w-content mx-auto px-5 sm:px-8 pb-24 sm:pb-28">
          <Reveal>
            <h2
              className="mx-auto max-w-4xl text-center font-semibold text-ink text-[1.9rem] leading-[1.14] sm:text-[2.4rem] sm:leading-[1.12]"
              style={{ letterSpacing: '-0.035em' }}
            >
              This Is Not For Everyone — <Accent>This Is Only For You If…</Accent>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {CRITERIA.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <GlowCard className="group h-full rounded-[1.5rem] border border-ink/10 bg-white/60 hover:bg-white transition-all duration-500 p-7 sm:p-8">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-ember/30 bg-ember/[0.07] text-ember mb-6 group-hover:scale-105 transition-transform duration-500">
                    <c.icon size={22} strokeWidth={1.6} />
                  </span>
                  <h3
                    className="text-ink font-semibold text-[1.15rem] mb-2.5 leading-snug"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {c.title}
                  </h3>
                  <p className="text-ink/60 text-[15px] leading-[1.65]">{c.body}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center" delay={120}>
            <p className="text-ink/70 text-[16px] sm:text-[18px] leading-[1.6]">
              If this is you, then here is the exact roadmap you need to follow…
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
