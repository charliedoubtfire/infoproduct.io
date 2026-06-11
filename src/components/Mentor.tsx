import { useState } from 'react';
import { Reveal } from './shared';

const MENTOR_PHOTO = '/assets/mentor.jpg';

function Portrait() {
  const [errored, setErrored] = useState(false);
  return (
    <div className="relative">
      {/* offset frame */}
      <div className="absolute -inset-3 sm:-inset-4 border border-ember/35 rounded-[2.2rem] rotate-[1.6deg]" />
      <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-40px_rgba(12,11,10,0.55)] bg-ink">
        {!errored ? (
          <img
            src={MENTOR_PHOTO}
            alt="Charlie Doubtfire"
            onError={() => setErrored(true)}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink to-[#1c1916]">
            <span className="font-brand text-ember text-7xl">CD</span>
          </div>
        )}
        {/* gentle bottom gradient for the name plate */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />
      </div>
      <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-ink text-white font-display italic text-lg px-7 py-2.5 rounded-full whitespace-nowrap shadow-xl">
        Charlie Doubtfire
      </span>
    </div>
  );
}

export default function Mentor() {
  return (
    <section id="mentor" className="relative bg-paper">
      <div className="max-w-content mx-auto px-5 sm:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16">
        <div className="grid gap-12 md:gap-16 md:grid-cols-[0.85fr_1.15fr] items-center">
          <Reveal>
            <Portrait />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="text-center font-brand text-ember text-[2.3rem] leading-[1.12] sm:text-[3rem] sm:leading-[1.1]">
                Meet Your New Advisor
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 text-ink/70 leading-[1.7] text-[15px] sm:text-[17px]">
                An extensive track record helping people start and scale successful online
                education companies.
              </p>
              <p className="mt-5 text-ink/70 leading-[1.7] text-[15px] sm:text-[17px]">
                Charlie’s expertise derives from working with, and learning from, 7, 8 and 9-figure
                infoproduct business owners and A-Player specialists across all the most notorious
                online education operations.
              </p>
              <p className="mt-5 text-ink/70 leading-[1.7] text-[15px] sm:text-[17px]">
                For six months you get him directly — unlimited text and unlimited 1:1 calls — until
                his brain is downloaded into yours, and you no longer need him.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* seam → dark close */}
      <div
        className="mt-16 sm:mt-20 h-32 w-full"
        style={{ background: 'linear-gradient(to bottom, var(--paper), var(--ink))' }}
      />
    </section>
  );
}
