import { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQS } from '../content';
import { Reveal, SectionHeading, Accent } from './shared';

export default function FAQ() {
  const [open, setOpen] = useState<number>(-1);

  return (
    <section id="faq" className="relative bg-ink">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-20 sm:pt-24 pb-20 sm:pb-24">
        <SectionHeading dark>
          Still On <Accent>The Edge?</Accent>
        </SectionHeading>

        <div className="mt-12 flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={Math.min(i, 5) * 45}>
                <div
                  className={`rounded-[1.1rem] border transition-colors duration-300 ${
                    isOpen
                      ? 'border-ember/40 bg-white/[0.06]'
                      : 'border-white/10 bg-white/[0.025] hover:bg-white/[0.045]'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-brand text-[1.15rem] sm:text-[1.3rem] text-white">
                      {faq.q}
                    </span>
                    <span
                      className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-400 ${
                        isOpen
                          ? 'rotate-45 border-ember/40 text-ember bg-ember/[0.08]'
                          : 'border-white/15 text-white/50'
                      }`}
                    >
                      <Plus size={16} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 space-y-3">
                        {faq.a.map((para) => (
                          <p key={para} className="text-[15px] text-white/65 leading-[1.7]">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
