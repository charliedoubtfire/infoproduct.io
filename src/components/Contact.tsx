import { motion } from 'framer-motion';
import { BOOK_CALL_URL, TELEGRAM_URL } from '../content';
import { Accent, Wordmark } from './shared';

function TelegramGlyph({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.94 4.32a1.2 1.2 0 0 0-1.27-.2L3.3 11.04c-.86.34-.83 1.58.05 1.88l4.3 1.46 1.62 5.12c.2.62 1 .77 1.42.27l2.4-2.86 4.42 3.26c.5.37 1.22.1 1.36-.5l3.04-13.4a1.2 1.2 0 0 0-.4-1.95Zm-3.9 3.3-7.1 6.27a1 1 0 0 0-.32.6l-.27 2.04-1.3-4.1 9.02-5.34c.4-.24.78.27.41.62z" />
    </svg>
  );
}

const SIGNATURE = [
  'earn more',
  'work less',
  'change lives',
  'be known for it',
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-ink overflow-hidden">
      {/* ---- Telegram: an open, animated hero moment (no card) ---- */}
      <div className="relative max-w-content mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-20 sm:pb-24">
        {/* breathing ember aura */}
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[min(92vw,760px)] h-[440px] pointer-events-none"
          style={{ background: 'radial-gradient(closest-side, rgba(255,66,0,0.2), transparent 72%)' }}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: '-15%' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />

        <div className="relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: '-12%' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mb-8 flex items-center justify-center w-16 h-16 rounded-2xl border border-ember/40 bg-ember/[0.1] text-ember"
          >
            <TelegramGlyph size={30} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-12%' }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl font-brand text-white text-[2.1rem] sm:text-[3.1rem] leading-[1.14]"
          >
            Questions? <Accent>Message Me Directly.</Accent>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-12%' }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex justify-center"
          >
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-ember text-white font-medium text-[15px] sm:text-base px-8 py-4 rounded-full transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] shadow-[0_20px_60px_-14px_rgba(255,66,0,0.65)]"
            >
              {/* sweeping shine */}
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute -inset-y-2 -left-1/3 w-1/3 rotate-12 bg-white/25 blur-md opacity-0 group-hover:opacity-100 group-hover:translate-x-[420%] transition-all duration-[1100ms] ease-out" />
              </span>
              <span className="relative transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <TelegramGlyph />
              </span>
              <span className="relative">Message @cdoubtfire on Telegram</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ---- liquid-glass footer ---- */}
      <div className="px-3 sm:px-5 pb-5">
        <motion.footer
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-10%' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="liquid-glass max-w-content mx-auto rounded-[1.75rem] px-6 sm:px-10 py-9"
        >
          <div className="flex flex-col items-center gap-5 text-center">
            <a href="#top">
              <Wordmark className="text-2xl" />
            </a>

            <div className="flex items-center gap-6 text-[13px]">
              <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-ember transition-colors">
                Book a call
              </a>
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-ember transition-colors">
                Telegram
              </a>
            </div>

            <p className="text-white/35 text-[11px] uppercase tracking-[0.18em] pt-4 border-t border-white/10 w-full">
              © {new Date().getFullYear()} Infoproduct.io
            </p>
          </div>
        </motion.footer>
      </div>

      {/* ---- the signature, rolling endlessly across the very bottom ---- */}
      <div className="ticker-mask relative overflow-hidden border-t border-white/[0.07] py-4 sm:py-5">
        <div className="ticker-track">
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center shrink-0" aria-hidden={half === 1}>
              {Array.from({ length: 3 })
                .flatMap(() => SIGNATURE)
                .map((phrase, pi) => (
                  <span key={pi} className="flex items-center shrink-0">
                    <span className="font-brand text-[17px] sm:text-[19px] leading-none text-white/35 whitespace-nowrap">
                      {phrase}
                    </span>
                    <span className="mx-6 sm:mx-8 w-[5px] h-[5px] rounded-full bg-ember/70 shrink-0" />
                  </span>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
