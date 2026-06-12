import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/* Rolling word/phrase animation (spring rise, adapted from the animated-hero
   pattern).
   fit="max":    all words share one grid cell; invisible copies size the
                 container to the longest word, so the line never shifts.
   fit="active": container hugs the current word, so trailing punctuation
                 (e.g. an ellipsis) stays snug against it. */
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
      <span className={`relative inline-block overflow-hidden align-bottom ${className}`}>
        {words.map((w, i) => {
          const active = index === i;
          return (
            <motion.span
              key={`word-${w}-${i}`}
              className={`whitespace-nowrap ${active ? 'relative inline-block' : 'absolute left-0 top-0'}`}
              initial={false}
              transition={{ type: 'spring', stiffness: 50 }}
              animate={active ? { y: 0, opacity: 1 } : { y: index > i ? -150 : 150, opacity: 0 }}
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
      className={`relative inline-grid overflow-hidden align-bottom ${
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
          transition={{ type: 'spring', stiffness: 50 }}
          animate={index === i ? { y: 0, opacity: 1 } : { y: index > i ? -150 : 150, opacity: 0 }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}
