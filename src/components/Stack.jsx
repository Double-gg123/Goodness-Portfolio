import React, { useState } from 'react';
import { MinusIcon, PlusIcon } from './Icons';

// The tools used day to day. `icon` is a file in public/icons (simpleicons.org).
const daily = [
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextdotjs' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'Supabase', icon: 'supabase' },
  { name: 'Laravel', icon: 'laravel' },
  { name: 'Node.js', icon: 'nodedotjs' },
  { name: 'n8n', icon: 'n8n' },
  { name: 'Claude', icon: 'claude' },
  { name: 'Docker', icon: 'docker' },
];

// Everything else, by layer, behind a disclosure.
const full = [
  { label: 'Frontend', items: 'JavaScript (ES6+), Redux, Vite, HTML5, CSS3, Alpine.js, Blade' },
  { label: 'Backend and data', items: 'PHP, Express, PostgreSQL, MySQL, SQLite, Prisma, Zod, REST APIs, OAuth, JWT, row-level security, PHPUnit' },
  { label: 'Payments and messaging', items: 'M-Pesa Daraja (STK Push), Onfon SMS, WhatsApp Business API, Brevo, Mailchimp, Telegram Bot API' },
  { label: 'AI and automation', items: 'Anthropic Claude API, OpenAI API, Gemini, Make, LLM integration, prompt engineering, Claude Code' },
  { label: 'Shipping', items: 'Git, GitHub Actions (CI/CD), nginx, Render, Playwright, unit testing' },
  { label: 'CMS and commerce', items: 'WordPress, Shopify (Liquid themes)' },
  { label: 'UX', items: 'Figma prototyping, WCAG accessibility, user behavioural mapping, semantic SEO, performance diagnostics' },
];

/* Logo drawn as a mask so it takes the theme's text color. */
const Logo = ({ icon }) => (
  <span
    aria-hidden="true"
    className="block h-6 w-6 shrink-0 bg-ink"
    style={{
      WebkitMask: `url(${process.env.PUBLIC_URL}/icons/${icon}.svg) center / contain no-repeat`,
      mask: `url(${process.env.PUBLIC_URL}/icons/${icon}.svg) center / contain no-repeat`,
    }}
  />
);

const Stack = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="stack" aria-labelledby="stack-title">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 id="stack-title" className="font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
          What I use every day
        </h2>
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
        {daily.map((tool) => (
          <li key={tool.name} className="flex min-h-[64px] items-center gap-3 bg-paper px-5 py-4">
            <Logo icon={tool.icon} />
            <span className="font-medium text-ink">{tool.name}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="full-stack"
        className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full border border-line px-6 font-semibold text-ink transition-colors hover:border-ink"
      >
        {open ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
        {open ? 'Hide the full stack' : 'Show the full stack'}
      </button>

      <div id="full-stack" hidden={!open}>
        <dl className="mt-6">
          {full.map((group) => (
            <div key={group.label} className="grid gap-1 border-t border-line py-4 sm:grid-cols-[13rem_1fr] sm:gap-8">
              <dt className="font-semibold text-ink">{group.label}</dt>
              <dd className="m-0 leading-relaxed text-body">{group.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Stack;
