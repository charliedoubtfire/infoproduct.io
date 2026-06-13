import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import RevealLayer from './RevealLayer';
import { CTAButton } from './shared';
import { RollingText } from './ui/rolling-text';
import { BG_IMAGE_1, BG_IMAGE_2 } from '../content';

const EYEBROW_WORDS = ['Earn More', 'Work Less', 'Change Lives', 'Be Known For It'];

export default function Hero() {
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef(0);
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', onMove);
    const loop = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
      setCursorPos({ x: smooth.current.x, y: smooth.current.y });
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden h-screen bg-black"
      style={{ height: '100dvh' }}
    >
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom"
        style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
      />

      <RevealLayer image={BG_IMAGE_2} cursorX={cursorPos.x} cursorY={cursorPos.y} />

      {/* legibility scrim */}
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(8,8,10,0.6) 0%, rgba(8,8,10,0.22) 28%, rgba(8,8,10,0.3) 48%, rgba(8,8,10,0.32) 68%, rgba(8,8,10,0.85) 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          background: 'radial-gradient(120% 80% at 50% 40%, transparent 54%, rgba(0,0,0,0.42) 100%)',
        }}
      />

      {/* the rolling promise sits high, out of the headline's way */}
      <div
        className="absolute top-[13%] sm:top-[14%] left-0 right-0 z-50 flex justify-center px-6 pointer-events-none hero-anim hero-fade"
        style={{ animationDelay: '0.15s' }}
      >
        <span className="text-white/55 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.3em]">
          <RollingText words={EYEBROW_WORDS} align="center" interval={1600} />
        </span>
      </div>

      {/* headline + CTA — vertically centred so it commands the page */}
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        <h1
          className="max-w-[46rem] text-white font-brand text-[2.3rem] leading-[1.12] sm:text-[3.1rem] sm:leading-[1.08] md:text-[3.7rem]"
          style={{ textShadow: '0 2px 28px rgba(0,0,0,0.6), 0 1px 8px rgba(0,0,0,0.45)' }}
        >
          <span className="block">
            {'Learn the Exact Blueprint to'.split(' ').map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <span
                  className="hero-anim hero-word inline-block"
                  style={{ animationDelay: `${0.35 + i * 0.07}s` }}
                >
                  {w}
                </span>
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
          <span className="block">
            <span
              className="font-brand text-ember hero-anim hero-word-glow inline-block"
              style={{
                animationDelay: '0.95s',
                textShadow: '0 2px 26px rgba(0,0,0,0.75), 0 0 34px rgba(255,66,0,0.35)',
              }}
            >
              Rapidly Start &amp; Scale
            </span>
          </span>
          <span className="block">
            {'an Online Education Business'.split(' ').map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <span
                  className="hero-anim hero-word inline-block"
                  style={{ animationDelay: `${1.4 + i * 0.07}s` }}
                >
                  {w}
                </span>
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        </h1>

        <div
          className="mt-9 sm:mt-10 hero-anim hero-fade pointer-events-auto"
          style={{ animationDelay: '1.95s' }}
        >
          <CTAButton label="Start &amp; Scale Today" size="lg" />
        </div>
      </div>

      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 text-white/40 hero-anim hero-fade"
        style={{ animationDelay: '2.3s' }}
      >
        <ChevronDown size={22} className="animate-bounce" />
      </div>
    </section>
  );
}
