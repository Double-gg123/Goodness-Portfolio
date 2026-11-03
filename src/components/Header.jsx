import React, { useState } from 'react';
import { useTypewriter } from '../hooks';

const contactItems = [
  { label: 'Location', value: 'Thika, Kenya · Remote' },
  { label: 'Phone', value: '+254 718 175283', href: 'tel:+254718175283' },
  { label: 'Email', value: 'gibendigoodness@gmail.com', href: 'mailto:gibendigoodness@gmail.com' },
  { label: 'Languages', value: 'English, Swahili' },
];

const roles = ['React & Next.js apps', 'payment integrations', 'workflow automations', 'AI agents', 'human-centered interfaces'];

const ticker = ['React', 'Next.js', 'TypeScript', 'Laravel', 'Node.js', 'M-Pesa Daraja', 'n8n', 'Docker', 'Shopify', 'AI Agents', 'WCAG', 'HCI'];

const PauseIcon = ({ paused }) => (
  <svg viewBox="0 0 12 12" className="h-3 w-3" fill="currentColor" aria-hidden="true">
    {paused ? <path d="M3 1.5v9l7.5-4.5z" /> : <path d="M2.5 1.5h2.5v9H2.5zM7 1.5h2.5v9H7z" />}
  </svg>
);

const Header = () => {
  // WCAG 2.2.2: looping motion (typing line + ticker) needs a way to pause it.
  const [paused, setPaused] = useState(false);
  const role = useTypewriter(roles, { paused });

  return (
    <header className="relative overflow-hidden bg-paper text-ink">
      <div id="top" className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-14 pt-10 md:px-8 md:pb-20 md:pt-16 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="mb-6 max-w-max border-y border-ink/20 py-3 text-[11px] font-black uppercase tracking-[0.32em] text-accent">
            Frontend engineer and systems architect
          </p>
          <h1 className="max-w-5xl text-6xl font-black leading-[0.92] tracking-normal text-ink md:text-8xl lg:text-9xl">
            Goodness Gibendi
          </h1>
          <div className="mt-8 max-w-2xl">
            <p className="text-2xl font-black leading-9 md:text-3xl md:leading-10" aria-label={`I build ${roles.join(', ')}`}>
              <span aria-hidden="true">
                I build <span className="bg-lime px-1 text-night">{role || ' '}</span>
                {!paused && <span className="ml-0.5 inline-block w-[3px] animate-blink bg-ink align-middle">&nbsp;</span>}
              </span>
            </p>
            <p className="mt-5 text-xl leading-8 text-muted md:text-2xl md:leading-9">
              Fast, secure, scalable web platforms, shaped by a background in behavioral psychology so they feel intuitive to the people who use them.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-ink px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-paper transition hover:-translate-y-0.5 hover:bg-accent"
            >
              See my work
            </a>
            <a
              href="https://github.com/Double-gg123"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink px-6 py-3 text-xs font-black uppercase tracking-[0.2em] transition hover:-translate-y-0.5 hover:bg-ink hover:text-paper"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/goodness-gibendi/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-lime px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-night transition hover:-translate-y-0.5 hover:bg-lime-dark"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <aside className="border-t border-ink pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <div className="mb-10">
            <p className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.28em] text-faint">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
              Availability
            </p>
            <p className="mt-3 text-3xl font-black leading-tight">
              Open to remote frontend roles and freelance projects.
            </p>
          </div>

          <div className="space-y-5">
            {contactItems.map((item) => (
              <div key={item.label} className="grid grid-cols-[92px_1fr] gap-4 border-t border-ink/10 pt-5">
                <span className="text-[10px] font-black uppercase tracking-[0.24em] text-faint">
                  {item.label}
                </span>
                {item.href ? (
                  <a className="break-all font-semibold text-ink transition hover:text-accent" href={item.href}>
                    {item.value}
                  </a>
                ) : (
                  <span className="font-semibold text-ink">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div className="relative border-y border-ink/10 bg-night text-white">
        <div className="overflow-hidden py-4" aria-hidden="true">
          <div
            className="flex w-max animate-marquee gap-10 whitespace-nowrap"
            style={{ animationPlayState: paused ? 'paused' : 'running' }}
          >
            {[...ticker, ...ticker].map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-10 text-sm font-black uppercase tracking-[0.24em]">
                {item}
                <span className="text-lime">/</span>
              </span>
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center bg-gradient-to-r from-transparent via-night to-night pl-12 pr-3">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            aria-label={paused ? 'Play animations' : 'Pause animations'}
            title={paused ? 'Play animations' : 'Pause animations'}
            className="grid h-9 w-9 place-items-center rounded-full bg-lime text-night transition hover:bg-white"
          >
            <PauseIcon paused={paused} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
