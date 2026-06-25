import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Plus, Lock, ChevronDown, Check } from 'lucide-react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import { WEEKS } from '../content';
import { ICONS, Reveal, Accent, CTAButton } from './shared';

/* True on a real pointer (desktop). False on touch — where hover doesn't
   exist and tap-to-toggle accordions are fiddly. */
function useCanHover() {
  const [canHover, setCanHover] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const sync = () => setCanHover(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);
  return canHover;
}

/* Modules as a clean step list inside each week — title and summary always
   visible, the full detail one tap away. */
/* The bullet list for one module */
function ModulePoints({ points }: { points: string[] }) {
  return (
    <ul className="space-y-2">
      {points.map((point) => (
        <li
          key={point}
          className="flex items-start gap-2 text-[13px] sm:text-sm text-ink/85 leading-relaxed"
        >
          <Plus size={13} className="text-ember mt-1 shrink-0" strokeWidth={2.5} />
          {point}
        </li>
      ))}
    </ul>
  );
}

function ModuleHead({ mod, mi }: { mod: (typeof WEEKS)[number]['modules'][number]; mi: number }) {
  return (
    <>
      <span className="mt-0.5 flex items-center justify-center w-8 h-8 rounded-full bg-ember/[0.08] border border-ember/25 font-brand text-ember text-base shrink-0">
        {mi + 1}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2 flex-wrap">
          <h4
            className="text-ink font-semibold text-[15px] leading-snug"
            style={{ letterSpacing: '-0.02em' }}
          >
            {mod.title}
          </h4>
          {mod.comingSoon && (
            <span className="inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wider text-ember bg-ember/[0.08] border border-ember/30 rounded-full px-2 py-0.5">
              <Lock size={9} /> Soon
            </span>
          )}
        </span>
        {mod.description && (
          <p className="text-ink/75 text-[13px] sm:text-sm leading-relaxed mt-1.5">
            {mod.description}
          </p>
        )}
      </span>
    </>
  );
}

function ModuleSteps({
  modules,
  canHover,
}: {
  modules: (typeof WEEKS)[number]['modules'];
  canHover: boolean;
}) {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const toggle = (mi: number) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(mi)) next.delete(mi);
      else next.add(mi);
      return next;
    });

  /* Touch / no-hover: every module is fully open. No fiddly accordions —
     one tap on the week reveals the whole curriculum to scroll. */
  if (!canHover) {
    return (
      <div className="space-y-2.5">
        {modules.map((mod, mi) => (
          <div
            key={mod.title}
            className="rounded-2xl border border-ink/[0.08] bg-paperDeep/30 px-4 py-4"
          >
            <div className="flex items-start gap-3.5">
              <ModuleHead mod={mod} mi={mi} />
            </div>
            {mod.points.length > 0 && (
              <div className="mt-3 ml-[46px]">
                <ModulePoints points={mod.points} />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  /* Pointer device: hover or click to expand each module */
  return (
    <div className="space-y-2.5">
      {modules.map((mod, mi) => {
        const open = openSet.has(mi);
        const hasMore = mod.points.length > 0;
        return (
          <div
            key={mod.title}
            onMouseEnter={() =>
              hasMore && setOpenSet((prev) => (prev.has(mi) ? prev : new Set(prev).add(mi)))
            }
            className={`rounded-2xl border transition-colors duration-300 ${
              open ? 'border-ember/30 bg-ember/[0.03]' : 'border-ink/[0.08] bg-paperDeep/30'
            }`}
          >
            <button
              onClick={() => hasMore && toggle(mi)}
              className={`w-full text-left px-4 sm:px-5 py-4 flex items-start gap-3.5 ${
                hasMore ? 'cursor-pointer' : 'cursor-default'
              }`}
              aria-expanded={open}
            >
              <ModuleHead mod={mod} mi={mi} />
            </button>
            {hasMore && (
              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                  open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 sm:px-5 pb-4 ml-[46px]">
                    <ModulePoints points={mod.points} />
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* A condensed milestone card: week number, title and blurb up front —
   the modules glide open on hover (desktop) or tap (mobile). */
function WeekCard({
  week,
  index,
  Icon,
  onVisit,
}: {
  week: (typeof WEEKS)[number];
  index: number;
  Icon: (typeof ICONS)[string];
  onVisit: (i: number) => void;
}) {
  const canHover = useCanHover();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  /* the card crossing mid-screen comes into sharp focus, drawing the eye */
  const inFocus = useInView(ref, { margin: '-32% 0px -32% 0px' });

  const openUp = () => {
    setOpen(true);
    onVisit(index);
  };

  return (
    <div
      ref={ref}
      className={`group rounded-[1.75rem] border bg-white shadow-[0_40px_90px_-60px_rgba(12,11,10,0.45)] overflow-hidden transition-all duration-700 ${
        inFocus ? 'border-ember/25 opacity-100' : 'border-ink/10 opacity-[0.55]'
      }`}
      onMouseEnter={canHover ? openUp : undefined}
      onMouseLeave={canHover ? () => setOpen(false) : undefined}
    >
      <button
        onClick={() => (open ? setOpen(false) : openUp())}
        className="w-full text-left cursor-pointer"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4 px-5 sm:px-7 pt-6 pb-4">
          <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-ember/[0.08] border border-ember/25 text-ember shrink-0">
            <Icon size={21} strokeWidth={1.6} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-ember mb-1">
              Week {index + 1}
            </p>
            <h3 className="font-brand text-ink text-[1.45rem] sm:text-[1.6rem] leading-[1.1]">
              {week.title}
            </h3>
          </div>
          <ChevronDown
            size={18}
            className={`shrink-0 transition-all duration-500 ${
              open ? 'rotate-180 text-ember' : 'text-ink/30'
            }`}
          />
        </div>

        <div className="px-5 sm:px-7 pb-5">
          <p className="text-ink/80 text-[14px] sm:text-[15px] leading-[1.7] border-l-2 border-ember/50 pl-4">
            {week.description}
          </p>
          <span
            className={`mt-3.5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/40 transition-opacity duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          >
            <span className="md:hidden">Tap to reveal all {week.modules.length} modules</span>
            <span className="hidden md:inline">Hover to view the {week.modules.length} modules</span>
          </span>
        </div>
      </button>

      {/* modules: glide open on hover or tap */}
      <div
        className={`grid transition-[grid-template-rows] duration-700 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-7 pb-6 pt-1 border-t border-ink/[0.07]">
            <div className="pt-4">
              <ModuleSteps modules={week.modules} canHover={canHover} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Curriculum() {
  const trailRef = useRef<HTMLDivElement>(null);
  /* the spine fills ember as the reader walks the roadmap */
  const { scrollYProgress } = useScroll({
    target: trailRef,
    offset: ['start 0.55', 'end 0.85'],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 70, damping: 22, mass: 0.4 });
  /* weeks you've explored get a satisfying tick — collect all seven */
  const [visited, setVisited] = useState<Set<number>>(new Set());
  const markVisited = (i: number) =>
    setVisited((prev) => (prev.has(i) ? prev : new Set(prev).add(i)));

  /* measure each milestone so the path can weave organically through them */
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [route, setRoute] = useState<{ h: number; ys: number[] }>({ h: 0, ys: [] });

  useLayoutEffect(() => {
    const measure = () => {
      const trail = trailRef.current;
      if (!trail) return;
      const tr = trail.getBoundingClientRect();
      const ys = nodeRefs.current.map((n) => {
        if (!n) return 0;
        const r = n.getBoundingClientRect();
        return r.top - tr.top + r.height / 2;
      });
      setRoute({ h: tr.height, ys });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trailRef.current) ro.observe(trailRef.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  /* an organic serpentine through every milestone (SVG coords, width 160) */
  const SVG_W = 160;
  const CX = SVG_W / 2;
  const AMP = 30;
  const pathD = (() => {
    const ys = route.ys.filter((y) => y > 0);
    if (ys.length < 2) return `M ${CX} 0 L ${CX} ${route.h}`;
    let d = `M ${CX} 0 C ${CX} ${ys[0] * 0.4}, ${CX} ${ys[0] * 0.7}, ${CX} ${ys[0]}`;
    for (let i = 1; i < ys.length; i++) {
      const y0 = ys[i - 1];
      const y1 = ys[i];
      const bulge = CX + (i % 2 ? AMP : -AMP);
      d += ` C ${bulge} ${y0 + (y1 - y0) * 0.4}, ${bulge} ${y1 - (y1 - y0) * 0.4}, ${CX} ${y1}`;
    }
    // trail off below the final milestone
    const last = ys[ys.length - 1];
    d += ` C ${CX} ${last + (route.h - last) * 0.4}, ${CX} ${route.h}, ${CX} ${route.h}`;
    return d;
  })();

  return (
    <section id="curriculum" className="relative bg-paper">
      <div className="max-w-content mx-auto px-5 sm:px-8 pt-8 sm:pt-12 pb-24 sm:pb-28">
        <Reveal>
          <h2 className="mx-auto max-w-4xl text-center font-brand text-ink text-[2rem] leading-[1.18] sm:text-[2.6rem] sm:leading-[1.14] md:text-[2.9rem]">
            The Exact <Accent>7-Week Roadmap</Accent> You Need To Follow To Start &amp; Scale A
            Successful Online Education Company
          </h2>
        </Reveal>

        {/* the instruction — drawn in so it actually gets read */}
        <motion.p
          className="mt-7 text-center text-[15px] sm:text-[17px] leading-[1.7] text-ink/70"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-10%' }}
          variants={{ show: { transition: { staggerChildren: 0.045, delayChildren: 0.15 } } }}
        >
          {['Read', 'every', 'detail', 'carefully.'].map((w, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.28em] font-semibold text-ink"
              variants={{
                hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
                show: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="border-b-2 border-ember/50 pb-0.5">{w}</span>
            </motion.span>
          ))}
          {'You don’t skip steps in your own brand or business, do you?'.split(' ').map((w, i) => (
            <motion.span
              key={`b-${i}`}
              className="inline-block mr-[0.28em]"
              variants={{
                hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
                show: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}
            </motion.span>
          ))}
        </motion.p>

        {/* ---- The roadmap: one organic path winding through seven weeks ---- */}
        <div ref={trailRef} className="relative mt-16 max-w-5xl mx-auto">
          {/* serpentine route — grey base + ember progress that draws on scroll */}
          <svg
            className="absolute left-[26px] md:left-1/2 top-0 -translate-x-1/2 overflow-visible pointer-events-none"
            width={SVG_W}
            height={route.h || 0}
            viewBox={`0 0 ${SVG_W} ${route.h || 1}`}
            fill="none"
            aria-hidden
          >
            <path
              d={pathD}
              stroke="rgba(12,11,10,0.1)"
              strokeWidth={3}
              strokeLinecap="round"
            />
            <motion.path
              d={pathD}
              stroke="var(--ember)"
              strokeWidth={3.5}
              strokeLinecap="round"
              style={{ pathLength: fill, filter: 'drop-shadow(0 0 6px rgba(255,66,0,0.5))' }}
            />
          </svg>

          <div className="space-y-14 md:space-y-20">
            {WEEKS.map((week, i) => {
              const Icon = ICONS[week.icon];
              const leftSide = i % 2 === 0; // desktop: alternate sides down the path
              return (
                <div key={week.numeral} className="relative">
                  {/* milestone on the spine */}
                  <motion.div
                    className="absolute left-[26px] md:left-1/2 top-0 -translate-x-1/2 z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, margin: '-20% 0px -20% 0px' }}
                    transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                  >
                    <span
                      ref={(el) => (nodeRefs.current[i] = el)}
                      className="relative flex items-center justify-center w-[52px] h-[52px] rounded-full bg-ember text-white font-brand text-[1.5rem] leading-none border-4 border-paper shadow-[0_16px_36px_-12px_rgba(255,66,0,0.7)]"
                    >
                      {i + 1}
                      {visited.has(i) && (
                        <motion.span
                          className="absolute -bottom-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-white border border-ember/40 shadow-md"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                        >
                          <Check size={11} className="text-ember" strokeWidth={3.5} />
                        </motion.span>
                      )}
                    </span>
                  </motion.div>

                  {/* week card */}
                  <motion.div
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-12% 0px -12% 0px' }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                    className={`relative ml-[62px] md:ml-0 md:w-[calc(50%-142px)] ${
                      leftSide ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                  >
                    {/* connector from spine to card (desktop) — long enough that the
                        card sits well clear of the centre line, no accidental hovers */}
                    <span
                      className={`hidden md:block absolute top-[24px] h-[2px] w-[122px] bg-ink/10 ${
                        leftSide ? '-right-[132px]' : '-left-[132px]'
                      }`}
                    />

                    <WeekCard week={week} index={i} Icon={Icon} onVisit={markVisited} />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* That was a lot + CTA */}
        <motion.div
          className="mt-24 mx-auto max-w-3xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-12%' }}
          variants={{ show: { transition: { staggerChildren: 0.16, delayChildren: 0.05 } } }}
        >
          <motion.h3
            className="text-center font-brand text-[2rem] sm:text-[2.6rem] text-ink mb-5 leading-[1.15]"
            variants={{
              hidden: { opacity: 0, y: 26, filter: 'blur(8px)' },
              show: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            That was a lot…
          </motion.h3>
          <motion.p
            className="mx-auto max-w-2xl text-center text-ink/65 leading-[1.7] text-[15px] sm:text-[17px]"
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            That’s because a lot goes into a massively successful brand. Yet this is the fastest
            path anyone — even a complete beginner — can take. Some steps you may already know, but
            none of you will know the esoteric secrets shared within.{' '}
            <span className="text-ink font-semibold whitespace-nowrap">That is what sets us apart.</span>
          </motion.p>
          <motion.div
            className="mt-9 flex justify-center"
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <CTAButton label="Book A Call Now" size="lg" />
          </motion.div>
        </motion.div>
      </div>

      {/* seam → dark AI suite */}
      <div
        className="h-40 w-full"
        style={{ background: 'linear-gradient(to bottom, var(--paper), var(--ink))' }}
      />
    </section>
  );
}
