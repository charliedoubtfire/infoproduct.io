import { useState } from 'react';
import { Reveal } from './shared';

const MENTOR_PHOTO = '/assets/mentor.jpg';

function Portrait() {
  const [errored, setErrored] = useState(false);
  return (
    <div className="relative">
      {/* deep, quiet shadow — presence without decoration */}
      <div className="relative aspect-[4/5] rounded-[1.6rem] overflow-hidden bg-ink shadow-[0_60px_120px_-40px_rgba(12,11,10,0.75)]">
        {!errored ? (
          <img
            src={MENTOR_PHOTO}
            alt="Charlie Doubtfire"
            onError={() => setErrored(true)}
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: 'contrast(1.06) saturate(0.88)' }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink to-[#1c1916]">
            <span className="font-brand text-ember text-7xl">CD</span>
          </div>
        )}
        {/* cinematic grade: darkened edges, ember warmth low-left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(8,7,6,0.78) 0%, rgba(8,7,6,0.18) 36%, transparent 55%), radial-gradient(120% 90% at 50% 30%, transparent 55%, rgba(8,7,6,0.4) 100%), radial-gradient(60% 45% at 12% 96%, rgba(255,66,0,0.22), transparent 70%)',
          }}
        />
        {/* hairline keyline inset — gallery framing */}
        <div className="absolute inset-3 rounded-[1.15rem] border border-white/20 pointer-events-none" />
        {/* name, set quietly inside the frame */}
        <div className="absolute left-7 bottom-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-ember mb-1.5">
            Your Advisor
          </p>
          <p className="font-brand text-white text-[1.5rem] leading-none">Charlie Doubtfire</p>
        </div>
      </div>
    </div>
  );
}

export default function Mentor() {
  return (
    <section id="mentor" className="relative bg-paper">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 sm:pt-10 pb-8 sm:pb-10">
        <div className="grid gap-10 md:gap-12 md:grid-cols-[0.85fr_1.15fr] items-center">
          <Reveal>
            <Portrait />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="text-center font-brand text-ember text-[2rem] leading-[1.12] sm:text-[2.5rem] sm:leading-[1.1]">
                Meet Your New Advisor
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-ink/75 leading-[1.65] text-[14px] sm:text-[15px]">
                An extensive track record helping people start and scale successful online
                education companies.
              </p>
              <p className="mt-4 text-ink/75 leading-[1.65] text-[14px] sm:text-[15px]">
                Charlie’s expertise derives from working with, and learning from, 7, 8 and 9-figure
                infoproduct business owners and A-Player specialists across all the most notorious
                online education operations.
              </p>
              <p className="mt-4 text-ink/75 leading-[1.65] text-[14px] sm:text-[15px]">
                For six months you get him directly — unlimited text and unlimited 1:1 calls — until
                his brain is downloaded into yours, and you no longer need him.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* seam → dark close */}
      <div
        className="mt-10 sm:mt-12 h-32 w-full"
        style={{ background: 'linear-gradient(to bottom, var(--paper), var(--ink))' }}
      />
    </section>
  );
}
