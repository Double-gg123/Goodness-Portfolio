import React, { useEffect, useState } from 'react';
import { useActiveSection, useScrollProgress, useTheme } from '../hooks';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Services' },
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
];

const SunIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

const Nav = () => {
  const active = useActiveSection(links.map((l) => l.id));
  const progress = useScrollProgress();
  const [theme, toggleTheme] = useTheme();
  const [open, setOpen] = useState(false);
  const scrolled = progress > 0.005;

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-ink/10 bg-paper/85 backdrop-blur-md' : 'bg-paper'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <a href="#top" className="text-sm font-black uppercase tracking-[0.28em] text-ink">
          GG
        </a>

        <div className="hidden items-center gap-8 text-[11px] font-black uppercase tracking-[0.24em] md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? 'true' : undefined}
              className={`relative py-1 transition hover:text-ink ${active === link.id ? 'text-ink' : 'text-muted'}`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-[3px] w-full origin-left bg-lime transition-transform duration-300 ${
                  active === link.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink transition hover:rotate-12 hover:border-ink"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href="mailto:gibendigoodness@gmail.com?subject=Project Inquiry"
            className="hidden rounded-full bg-ink px-5 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-paper transition hover:bg-accent sm:inline-block"
          >
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative grid h-10 w-10 place-items-center rounded-full border border-ink/15 md:hidden"
          >
            <span className={`absolute h-0.5 w-4 bg-ink transition ${open ? 'rotate-45' : '-translate-y-1.5'}`} />
            <span className={`absolute h-0.5 w-4 bg-ink transition ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute h-0.5 w-4 bg-ink transition ${open ? '-rotate-45' : 'translate-y-1.5'}`} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-all duration-300 md:hidden ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-1 px-5 pb-6">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className={`border-b border-ink/10 py-4 text-2xl font-black ${active === link.id ? 'text-accent' : 'text-ink'}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:gibendigoodness@gmail.com?subject=Project Inquiry"
              tabIndex={open ? 0 : -1}
              className="mt-4 rounded-full bg-ink px-5 py-4 text-center text-xs font-black uppercase tracking-[0.2em] text-paper"
            >
              Hire me
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 h-[3px] bg-lime"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />
    </div>
  );
};

export default Nav;
