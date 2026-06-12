import { ReactNode, useEffect } from 'react';

/* Pointer-tracking spotlight card (adapted from the GlowCard pattern).
   A soft #ff4200 glow sweeps along the card border as the cursor passes,
   via viewport-fixed radial gradients masked to the border ring.
   One shared document listener feeds CSS vars on :root for all cards. */

let listenerCount = 0;
const syncPointer = (e: PointerEvent) => {
  const root = document.documentElement.style;
  root.setProperty('--glow-x', e.clientX.toFixed(1));
  root.setProperty('--glow-y', e.clientY.toFixed(1));
};

export function GlowCard({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  useEffect(() => {
    if (listenerCount++ === 0) document.addEventListener('pointermove', syncPointer);
    return () => {
      if (--listenerCount === 0) document.removeEventListener('pointermove', syncPointer);
    };
  }, []);

  return (
    <div data-glow className={`glow-card relative ${className}`}>
      {children}
    </div>
  );
}
