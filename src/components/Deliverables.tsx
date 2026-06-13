import { Check, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { DELIVERABLES } from '../content';
import { ICONS, Reveal, Accent, CTAButton } from './shared';

/* where each feature takes you when tapped */
const FEATURE_LINKS: Record<string, string> = {
  Map: '#curriculum', // 7-week program → the roadmap
  UserRound: '#mentor', // 1:1 consulting → Charlie
  Cpu: '#ai-suite', // AI tool suite
  PenTool: '#call', // founder-written VSL → hear it on the call
  Handshake: '#call', // industry connections → hear it on the call
  Gift: '#call', // welcome gifts → book the call
};

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

const SUBTITLE =
  'Nothing is held back inside. No secret sauce left to unlock. It’s worked for us countless times — it’s going to work for you.';

export default function Deliverables() {
  return (
    <section id="included" className="relative bg-paperDeep/60">
      {/* a warmer band so this section reads as its own moment */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 38% at 50% 0%, rgba(255,66,0,0.07), transparent 62%), linear-gradient(to bottom, var(--paper), transparent 18%, transparent 82%, var(--paper))',
        }}
      />
      <div className="relative max-w-content mx-auto px-5 sm:px-8 pt-16 sm:pt-20 pb-24 sm:pb-28">
        <Reveal>
          <h2 className="mx-auto max-w-4xl text-center font-brand text-ink text-[2.1rem] leading-[1.16] sm:text-[2.7rem] sm:leading-[1.12] md:text-[3rem]">
            So What Exactly Do You Get <Accent>When You Join?</Accent>
          </h2>
        </Reveal>

        {/* subtitle — important, so it reads clear and animates in word by word */}
        <motion.p
          className="mt-6 mx-auto max-w-2xl text-center text-[16px] sm:text-[18px] leading-[1.7] text-ink/80"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-10%' }}
          variants={{ show: { transition: { staggerChildren: 0.03, delayChildren: 0.05 } } }}
        >
          {SUBTITLE.split(' ').map((w, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.26em]"
              variants={{
                hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
                show: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}
            </motion.span>
          ))}
        </motion.p>

        {/* the manifest — one coherent stack, every row built identically */}
        <motion.ol
          className="mt-14 mx-auto max-w-3xl space-y-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-8%' }}
          variants={{ show: { transition: { staggerChildren: 0.09 } } }}
        >
          {DELIVERABLES.map((d, i) => {
            const Icon = ICONS[d.icon];
            return (
              <motion.li
                key={d.title}
                variants={{
                  hidden: { opacity: 0, y: 26 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <a href={FEATURE_LINKS[d.icon] ?? '#call'} className="block group">
                  <div className="dl-card relative flex gap-5 sm:gap-7 rounded-[1.5rem] border border-ink/10 bg-white pl-5 sm:pl-7 pr-5 sm:pr-14 py-6 sm:py-7 shadow-[0_24px_60px_-50px_rgba(12,11,10,0.5)] hover:shadow-[0_34px_80px_-50px_rgba(255,66,0,0.35)] hover:border-ember/30 hover:-translate-y-0.5 transition-all duration-500 overflow-hidden">
                    {/* ember rail down the left, grows on hover */}
                    <span className="absolute left-0 top-5 bottom-5 w-[3px] rounded-full bg-ember/30 group-hover:bg-ember scale-y-75 group-hover:scale-y-100 transition-all duration-500 origin-center" />

                    {/* oversized ghost numeral — depth + reads as a grand series */}
                    <span
                      aria-hidden
                      className="absolute -right-2 -bottom-7 font-brand text-ember/[0.07] group-hover:text-ember/[0.12] text-[7rem] sm:text-[9rem] leading-none pointer-events-none select-none transition-colors duration-500"
                    >
                      {ROMAN[i]}
                    </span>
                    {/* diagonal sheen that sweeps across on hover */}
                    <span aria-hidden className="dl-sheen" />

                    {/* index + icon — fixed column so every row aligns */}
                    <div className="relative flex flex-col items-center gap-3 shrink-0 w-12 sm:w-16 pt-1">
                      <span className="font-brand text-ember text-[1.9rem] sm:text-[2.4rem] leading-none">
                        {ROMAN[i]}
                      </span>
                      <span className="flex items-center justify-center w-10 h-10 rounded-xl border border-ember/25 bg-ember/[0.07] text-ember group-hover:bg-ember group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                        <Icon size={18} strokeWidth={1.7} />
                      </span>
                    </div>

                    {/* title + points */}
                    <div className="relative min-w-0 flex-1">
                      <h3 className="font-brand text-ink text-[1.45rem] sm:text-[1.65rem] leading-[1.12] mb-3 pr-10 sm:pr-0 group-hover:text-ember transition-colors duration-500">
                        {d.title}
                      </h3>
                      <ul className="space-y-2">
                        {d.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-ink/75 leading-[1.6]"
                          >
                            <span className="mt-[3px] shrink-0 inline-flex items-center justify-center w-[17px] h-[17px] rounded-full bg-ember/12">
                              <Check size={11} className="text-ember" strokeWidth={3} />
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* the "go there" affordance */}
                    <span className="absolute top-6 right-5 flex items-center justify-center w-8 h-8 rounded-full border border-ink/10 text-ink/30 group-hover:border-ember/40 group-hover:text-ember group-hover:rotate-45 transition-all duration-500">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </a>
              </motion.li>
            );
          })}
        </motion.ol>

        <Reveal className="mt-14 flex justify-center" delay={100}>
          <CTAButton label="Book A Call Now" size="lg" />
        </Reveal>
      </div>
    </section>
  );
}
