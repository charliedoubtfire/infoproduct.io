import { BOOK_CALL_URL, TELEGRAM_URL } from '../content';
import { Reveal, Accent, Wordmark } from './shared';

function TelegramGlyph({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.94 4.32a1.2 1.2 0 0 0-1.27-.2L3.3 11.04c-.86.34-.83 1.58.05 1.88l4.3 1.46 1.62 5.12c.2.62 1 .77 1.42.27l2.4-2.86 4.42 3.26c.5.37 1.22.1 1.36-.5l3.04-13.4a1.2 1.2 0 0 0-.4-1.95Zm-3.9 3.3-7.1 6.27a1 1 0 0 0-.32.6l-.27 2.04-1.3-4.1 9.02-5.34c.4-.24.78.27.41.62z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative bg-ink">
      <div className="max-w-content mx-auto px-5 sm:px-8 pt-16 sm:pt-20 pb-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-7 sm:px-12 py-12 sm:py-14">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(70% 90% at 0% 0%, rgba(255,66,0,0.12), transparent 60%)' }}
            />
            <div className="relative mx-auto max-w-2xl text-center">
              <h2
                className="text-white font-semibold text-[1.8rem] sm:text-[2.5rem] leading-[1.12] mb-9"
                style={{ letterSpacing: '-0.035em' }}
              >
                Questions? <Accent>Message Me Directly.</Accent>
              </h2>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-ember text-white font-medium text-[15px] sm:text-base px-7 py-3.5 rounded-full transition-all duration-500 hover:scale-[1.025] active:scale-[0.98] hover:shadow-[0_18px_50px_-12px_rgba(255,66,0,0.6)]"
              >
                <span className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <TelegramGlyph />
                </span>
                Message @cdoubtfire on Telegram
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* slim footer bar */}
      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto px-5 sm:px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#top">
            <Wordmark className="text-xl" />
          </a>
          <p className="text-white/40 text-xs order-last sm:order-none">
            © {new Date().getFullYear()} Infoproduct.io — Earn more. Work less. Change lives.
          </p>
          <div className="flex items-center gap-5 text-xs">
            <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-ember transition-colors">
              Book a call
            </a>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-ember transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
