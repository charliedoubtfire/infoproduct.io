import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/* Rolling word/phrase animation — a lateral swipe with the faintest blur,
   like a card being dealt in and out.
   fit="max":    all words share one grid cell; invisible copies size the
                 container to the longest word, so the line never shifts.
   fit="active": container hugs the current word, so trailing punctuation
                 stays snug against it. */
const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];
const ROLL = {
  duration: 0.7,
  ease: EASE,
  opacity: { duration: 0.45, ease: EASE },
  filter: { duration: 0.45, ease: EASE },
};

function rollState(active: boolean, passed: boolean) {
  return active
    ? { x: '0%', opacity: 1, filter: 'blur(0px)' }
    : {
        x: passed ? '-36%' : '36%',
        opacity: 0,
        filter: 'blur(3px)',
      };
}

export function RollingText({
  words,
  interval = 2200,
  className = '',
  align = 'start',
  fit = 'max',
}: {
  words: string[];
  interval?: number;
  className?: string;
  align?: 'start' | 'center';
  fit?: 'max' | 'active';
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearTimeout(id);
  }, [index, interval, words.length]);

  if (fit === 'active') {
    return (
      <span className={`relative inline-block overflow-hidden align-bottom py-[0.08em] ${className}`}>
        {words.map((w, i) => {
          const active = index === i;
          return (
            <motion.span
              key={`word-${w}-${i}`}
              className={`whitespace-nowrap ${active ? 'relative inline-block' : 'absolute left-0 top-[0.08em]'}`}
              initial={false}
              transition={ROLL}
              animate={rollState(active, index > i)}
            >
              {w}
            </motion.span>
          );
        })}
      </span>
    );
  }

  return (
    <span
      className={`relative inline-grid overflow-hidden align-bottom py-[0.08em] ${
        align === 'center' ? 'justify-items-center' : 'justify-items-start'
      } ${className}`}
    >
      {words.map((w) => (
        <span key={`spacer-${w}`} className="invisible whitespace-nowrap [grid-area:1/1]" aria-hidden>
          {w}
        </span>
      ))}
      {words.map((w, i) => (
        <motion.span
          key={`word-${w}-${i}`}
          className="whitespace-nowrap [grid-area:1/1]"
          initial={false}
          transition={ROLL}
          animate={rollState(index === i, index > i)}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}
