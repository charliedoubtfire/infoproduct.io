import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'AI Suite', href: '#ai-suite' },
  { label: 'Proof', href: '#proof' },
  { label: 'Mentor', href: '#mentor' },
  { label: 'Enrol', href: '#enrol' },
];

/* The condensed IP brand mark, drawn in the serif italic brand face. */
function Mark() {
  return (
    <span
      className="font-brand text-ember leading-none select-none"
      style={{ fontSize: '1.35rem', letterSpacing: '-0.02em' }}
    >
      IP
    </span>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > last && y > 480 && !open);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  return (
    <nav
      className={`fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-1.5rem)] sm:w-auto transition-all duration-500 ${
        hidden ? '-translate-y-[160%]' : 'translate-y-0'
      }`}
    >
      <div
        className={`flex items-center justify-between sm:justify-start gap-1 rounded-full pl-4 pr-2 sm:pr-2 py-2 border transition-all duration-500 ${
          scrolled
            ? 'bg-ink/70 border-white/10 backdrop-blur-xl shadow-[0_10px_40px_-12px_rgba(0,0,0,0.5)]'
            : 'bg-ink/40 border-white/15 backdrop-blur-md'
        }`}
      >
        <a href="#top" className="flex items-center pr-2 sm:pr-3 sm:mr-1 sm:border-r border-white/15">
          <Mark />
        </a>

        <div className="hidden sm:flex items-center gap-0.5">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-[13px] font-medium text-white/75 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="sm:hidden text-white p-1.5"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="sm:hidden mt-2 bg-ink/90 backdrop-blur-xl border border-white/10 rounded-3xl p-2 flex flex-col">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/85 hover:bg-white/10 px-4 py-3 rounded-2xl text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
