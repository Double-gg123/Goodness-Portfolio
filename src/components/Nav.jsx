import React, { useEffect, useState } from 'react';
import { useActiveSection, useScrollProgress, useTheme } from '../hooks';
import { MoonIcon, SunIcon } from './Icons';

const links = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
];

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
        scrolled || open ? 'border-b border-line bg-paper/90 backdrop-blur-md' : 'border-b border-transparent bg-paper'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a href="#top" aria-label="Goodness Gibendi, back to top" className="flex min-h-[44px] items-center whitespace-nowrap font-display text-lg font-bold tracking-tight text-ink">
          <span className="sm:hidden" aria-hidden="true">Goodness</span>
          <span className="hidden sm:inline" aria-hidden="true">Goodness Gibendi</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? 'true' : undefined}
              className={`flex min-h-[44px] items-center rounded-full px-4 text-[15px] font-medium transition-colors ${
                active === link.id ? 'bg-card text-ink' : 'text-muted hover:text-ink'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href="#contact"
            className="flex min-h-[44px] items-center rounded-full bg-accent px-5 text-[15px] font-semibold text-on-accent transition-transform duration-300 ease-out hover:-translate-y-0.5"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative grid h-11 w-11 place-items-center rounded-full border border-line md:hidden"
          >
            <span className={`absolute h-0.5 w-4 bg-ink transition-transform duration-300 ${open ? 'rotate-45' : '-translate-y-1'}`} />
            <span className={`absolute h-0.5 w-4 bg-ink transition-transform duration-300 ${open ? '-rotate-45' : 'translate-y-1'}`} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-all duration-300 ease-out md:hidden ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <div className="flex flex-col px-5 pb-6">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className={`border-b border-line py-4 font-display text-2xl font-bold ${active === link.id ? 'text-accent' : 'text-ink'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-0.5 bg-accent" style={{ width: `${progress * 100}%` }} aria-hidden="true" />
    </div>
  );
};

export default Nav;
