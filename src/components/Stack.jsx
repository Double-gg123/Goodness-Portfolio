import React, { useState } from 'react';
import { Reveal } from '../hooks';

// `icon` is a file in public/icons (from simpleicons.org). `brand` is the hover color;
// it's left out for near-black brands so they stay readable in dark mode.
const groups = [
  {
    id: 'frontend',
    label: 'Frontend',
    summary: 'Fast, accessible interfaces and component systems.',
    tools: [
      { name: 'React', icon: 'react', brand: '#61DAFB' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'TypeScript', icon: 'typescript', brand: '#3178C6' },
      { name: 'JavaScript', icon: 'javascript', brand: '#F7DF1E' },
      { name: 'Redux', icon: 'redux', brand: '#764ABC' },
      { name: 'Vite', icon: 'vite', brand: '#9135FF' },
      { name: 'HTML5', icon: 'html5', brand: '#E34F26' },
      { name: 'CSS3', icon: 'css', brand: '#663399' },
      { name: 'Tailwind CSS', icon: 'tailwindcss', brand: '#06B6D4' },
      { name: 'Alpine.js', icon: 'alpinedotjs', brand: '#8BC0D0' },
    ],
    also: ['Blade templates'],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    summary: 'Data models, payments, auth, and the APIs that connect them.',
    tools: [
      { name: 'PHP', icon: 'php', brand: '#777BB4' },
      { name: 'Laravel', icon: 'laravel', brand: '#FF2D20' },
      { name: 'Node.js', icon: 'nodedotjs', brand: '#5FA04E' },
      { name: 'Express', icon: 'express' },
      { name: 'MySQL', icon: 'mysql', brand: '#4479A1' },
      { name: 'PostgreSQL', icon: 'postgresql', brand: '#4169E1' },
      { name: 'SQLite', icon: 'sqlite' },
      { name: 'Prisma', icon: 'prisma' },
      { name: 'JWT', icon: 'jsonwebtokens' },
    ],
    also: ['REST APIs', 'OAuth', 'M-Pesa Daraja API', 'PHPUnit'],
  },
  {
    id: 'cms',
    label: 'CMS & E-commerce',
    summary: 'Stores, content platforms, and email that grows an audience.',
    tools: [
      { name: 'WordPress', icon: 'wordpress', brand: '#21759B' },
      { name: 'Shopify', icon: 'shopify', brand: '#7AB55C' },
      { name: 'Mailchimp', icon: 'mailchimp', brand: '#FFE01B' },
    ],
    also: ['Liquid themes', 'CMS administration', 'Email automation'],
  },
  {
    id: 'devops',
    label: 'DevOps & Automation',
    summary: 'Shipping, deploying, and automating the boring parts.',
    tools: [
      { name: 'Git', icon: 'git', brand: '#F03C2E' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Docker', icon: 'docker', brand: '#2496ED' },
      { name: 'CI/CD', icon: 'githubactions', brand: '#2088FF' },
      { name: 'nginx', icon: 'nginx', brand: '#009639' },
      { name: 'Render', icon: 'render' },
      { name: 'n8n', icon: 'n8n', brand: '#EA4B71' },
    ],
    also: ['Playwright'],
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    summary: 'LLM-powered agents, chatbots, and workflow automation.',
    tools: [
      { name: 'Claude', icon: 'claude', brand: '#D97757' },
      { name: 'Gemini', icon: 'googlegemini', brand: '#8E75B2' },
      { name: 'Make', icon: 'make', brand: '#6D00CC' },
      { name: 'Telegram Bots', icon: 'telegram', brand: '#26A5E4' },
    ],
    also: ['OpenAI API', 'Claude Code', 'AI agents & chatbots', 'LLM integration', 'Prompt engineering'],
  },
  {
    id: 'ux',
    label: 'UX & Optimization',
    summary: 'Research-led design, accessibility, and getting found.',
    tools: [{ name: 'Figma', icon: 'figma', brand: '#F24E1E' }],
    also: ['HCI', 'WCAG accessibility', 'Semantic SEO', 'Performance & edge caching', 'Paid ad campaigns'],
  },
];

const total = groups.reduce((n, g) => n + g.tools.length + g.also.length, 0);

/* Logo drawn as a mask so it takes the theme's text color, then its brand color on hover. */
const Logo = ({ icon, brand }) => (
  <span
    aria-hidden="true"
    className="block h-9 w-9 bg-ink transition-colors duration-300 group-hover:bg-[color:var(--brand)]"
    style={{
      '--brand': brand || 'rgb(var(--ink))',
      WebkitMask: `url(${process.env.PUBLIC_URL}/icons/${icon}.svg) center / contain no-repeat`,
      mask: `url(${process.env.PUBLIC_URL}/icons/${icon}.svg) center / contain no-repeat`,
    }}
  />
);

const Group = ({ group }) => (
  <div>
    <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/10 pb-3">
      <h3 className="text-sm font-black uppercase tracking-[0.22em] text-accent">{group.label}</h3>
      <p className="text-sm text-muted">{group.summary}</p>
    </div>
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
      {group.tools.map((tool, i) => (
        <Reveal key={tool.name} delay={i * 40}>
          <div className="group flex aspect-square flex-col sm:aspect-[4/3] lg:aspect-[3/2] items-center justify-center gap-3 border border-ink/10 bg-card p-3 text-center transition duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[6px_6px_0_#d7f264]">
            <Logo icon={tool.icon} brand={tool.brand} />
            <span className="text-[10px] font-black uppercase tracking-[0.14em] text-chip md:text-[11px]">{tool.name}</span>
          </div>
        </Reveal>
      ))}
    </div>
    {group.also.length > 0 && (
      <div className="mt-4 flex flex-wrap gap-2">
        {group.also.map((item) => (
          <span
            key={item}
            className="rounded-full border border-ink/15 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    )}
  </div>
);

const Stack = () => {
  const [tab, setTab] = useState('all');
  const shown = tab === 'all' ? groups : groups.filter((g) => g.id === tab);
  const tabs = [{ id: 'all', label: 'All' }, ...groups];

  return (
    <section id="stack">
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1fr] lg:items-end">
        <div>
          <p className="section-kicker">Stack and technologies</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-ink md:text-6xl">
            What I build with.
          </h2>
        </div>
        <p className="max-w-xl text-lg leading-8 text-muted lg:justify-self-end">
          {Math.floor(total / 10) * 10}+ tools across the frontend, backend, automation, and AI layers, from first sketch in Figma to a Dockerized deploy.
        </p>
      </div>

      <div className="-mx-5 mb-12 overflow-x-auto px-5 md:mx-0 md:px-0">
        <div className="flex w-max gap-2 md:w-auto md:flex-wrap" role="tablist" aria-label="Technology categories">
          {tabs.map((t) => {
            const selected = t.id === tab;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setTab(t.id)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] transition ${
                  selected ? 'border-ink bg-ink text-paper' : 'border-ink/15 text-muted hover:border-ink hover:text-ink'
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* key={tab} remounts the list so tiles animate in again when the tab changes */}
      <div key={tab} className="space-y-14" role="tabpanel">
        {shown.map((group) => (
          <Group key={group.id} group={group} />
        ))}
      </div>
    </section>
  );
};

export default Stack;
