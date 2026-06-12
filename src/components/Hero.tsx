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
            'linear-gradient(to bottom, rgba(8,8,10,0.6) 0%, rgba(8,8,10,0.1) 28%, rgba(8,8,10,0) 48%, rgba(8,8,10,0.2) 68%, rgba(8,8,10,0.85) 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          background: 'radial-gradient(120% 80% at 50% 40%, transparent 54%, rgba(0,0,0,0.42) 100%)',
        }}
      />

      {/* headline */}
      <div className="absolute top-[17%] left-0 right-0 z-50 flex flex-col items-center text-center px-6 pointer-events-none">
        <span
          className="hero-anim hero-fade text-white/70 text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.28em]"
          style={{ animationDelay: '0.15s' }}
        >
          <RollingText words={EYEBROW_WORDS} align="center" interval={2000} />
        </span>

        <h1
          className="mt-8 max-w-[44rem] text-white font-semibold text-[1.95rem] leading-[1.14] sm:text-[2.7rem] sm:leading-[1.1] md:text-[3.25rem]"
          style={{ letterSpacing: '-0.04em' }}
        >
          <span className="hero-anim hero-reveal block" style={{ animationDelay: '0.3s' }}>
            Learn the Exact Blueprint to
          </span>
          <span className="hero-anim hero-reveal block" style={{ animationDelay: '0.44s' }}>
            <span className="font-brand text-ember">Rapidly Start &amp; Scale</span> an
          </span>
          <span className="hero-anim hero-reveal block" style={{ animationDelay: '0.58s' }}>
            Online Education Business
          </span>
        </h1>
      </div>

      {/* CTA */}
      <div
        className="absolute bottom-[11%] sm:bottom-[10%] left-0 right-0 z-50 flex justify-center px-5 hero-anim hero-fade"
        style={{ animationDelay: '0.85s' }}
      >
        <div className="pointer-events-auto">
          <CTAButton label="Start &amp; Scale Today" size="lg" />
        </div>
      </div>

      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 text-white/40 hero-anim hero-fade"
        style={{ animationDelay: '1.15s' }}
      >
        <ChevronDown size={22} className="animate-bounce" />
      </div>
    </section>
  );
}
