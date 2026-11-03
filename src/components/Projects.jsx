import React, { useState } from 'react';
import { Reveal } from '../hooks';

// Each project is a short case study: the problem, what I built, and the result.
const allProjects = [
  {
    name: 'AI Job Application Automation',
    role: 'Sole developer',
    category: ['ai'],
    problem: 'Finding and applying for relevant jobs across dozens of boards is slow, repetitive work.',
    built: 'A system that collects jobs from about 20 boards and feeds, scores each one against a CV with an LLM, and tailors the CV and cover letter with an automatic honesty check. Telegram bots handle review, then it sends by Gmail or fills forms with Playwright.',
    result: 'Runs the whole pipeline, from finding jobs to submitting applications, for two users. Built with AI coding agents (Claude Code).',
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'Playwright', 'Gemini API', 'Telegram Bot API'],
  },
  {
    name: 'Digital Chama Platform',
    role: 'Sole developer · Prototype',
    category: ['fintech'],
    problem: 'Group savings and loan groups (chamas) need shared accounts, loans and approvals that every member can trust.',
    built: 'A full-stack banking prototype with about 94 API endpoints: M-Pesa STK Push, core-banking account creation, ID verification, OCR, SMS, and real-time sanctions screening with timeouts and fallback.',
    result: 'Role-based access, multi-signatory approvals, loan workflows, PDF reports, and a full audit trail.',
    stack: ['Node.js', 'TypeScript', 'Express', 'React', 'SQLite', 'JWT', 'M-Pesa Daraja'],
  },
  {
    name: 'The Career Whisperer',
    role: 'Lead developer & frontend administrator',
    category: ['web', 'ai'],
    problem: 'A career consulting platform needed to be found by more people and turn visitors into clients.',
    built: 'A fast, responsive React interface with technical SEO, metadata schemas and web security, plus n8n automations behind it.',
    result: 'Organic traffic grew from about 500 to 2,000 visitors a month (4x).',
    stack: ['React', 'Tailwind CSS', 'JavaScript', 'n8n'],
    url: 'https://thecareerwhisperer.net/',
  },
  {
    name: 'Briwnet Awards',
    role: 'Software engineer at Briwnet',
    category: ['web'],
    problem: 'An influencer awards event needed public voting that could handle nominees campaigning for votes.',
    built: 'An awards platform where nominees run campaigns to gather votes in categories such as Influencer of the Year.',
    result: 'Public voting built for a target of about 10,000 votes.',
    stack: ['React', 'Next.js', 'PHP', 'Laravel', 'MySQL'],
  },
  {
    name: "Amare's Big Planet",
    role: 'Co-developer, frontend & accessibility',
    category: ['web'],
    problem: 'An educational platform for young learners had to work for children and the adults guiding them.',
    built: 'Child-centered design with WCAG accessibility, semantic HTML5 and CSS Grid layouts.',
    result: 'Growth driven through SEO and paid ad campaigns.',
    stack: ['React', 'Semantic HTML5', 'CSS Grid', 'WCAG'],
    url: 'https://amaresbigplanet.com/',
  },
  {
    name: 'Lumen-ra',
    role: 'Systems architect & core developer',
    category: ['web'],
    problem: 'An educational platform had to keep confidential user data safe.',
    built: 'Modular interface features, API integrations, and server-side authentication.',
    result: 'Role-based authorization protects confidential user data.',
    stack: ['React', 'Vite', 'API integrations', 'Auth'],
    url: 'https://lumen-ra.vercel.app/',
  },
];

const filters = [
  { id: 'all', label: 'All', match: () => true },
  { id: 'web', label: 'Web platforms', match: (p) => p.category.includes('web') },
  { id: 'ai', label: 'Automation & AI', match: (p) => p.category.includes('ai') },
  { id: 'fintech', label: 'Payments & fintech', match: (p) => p.category.includes('fintech') },
  { id: 'live', label: 'Live sites', match: (p) => Boolean(p.url) },
];

const Row = ({ label, children, highlight }) => (
  <div className="grid gap-1 border-t border-ink/10 py-4 sm:grid-cols-[110px_1fr] sm:gap-6">
    <dt className="pt-1 text-[10px] font-black uppercase tracking-[0.22em] text-faint">{label}</dt>
    <dd className={`leading-7 ${highlight ? 'font-bold text-ink' : 'text-muted'}`}>{children}</dd>
  </div>
);

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const active = filters.find((f) => f.id === filter);
  const shown = allProjects.filter(active.match);

  return (
    <section id="projects">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="section-kicker">Selected work</p>
          <h2 className="mt-4 text-4xl font-black text-ink md:text-6xl">
            Featured projects
          </h2>
        </div>
        <a
          href="https://github.com/Double-gg123"
          target="_blank"
          rel="noreferrer"
          className="max-w-max rounded-full border border-ink px-5 py-3 text-xs font-black uppercase tracking-[0.2em] transition hover:bg-ink hover:text-paper"
        >
          View GitHub
        </a>
      </div>

      <div className="mb-10 flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects">
        {filters.map((f) => {
          const count = allProjects.filter(f.match).length;
          const selected = f.id === filter;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] transition ${
                selected
                  ? 'border-ink bg-ink text-paper'
                  : 'border-ink/15 text-muted hover:border-ink hover:text-ink'
              }`}
            >
              {f.label} <span className={selected ? 'text-paper/60' : 'text-faint'}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* key={filter} remounts the list so cards animate in again on every filter change */}
      <div key={filter} className="grid gap-5" aria-live="polite">
        {shown.map((project, index) => (
          <Reveal key={project.name} delay={index * 60}>
            <article className="grid gap-8 border border-ink/10 bg-card p-7 transition duration-300 hover:border-ink hover:shadow-[10px_10px_0_#d7f264] md:p-9 lg:grid-cols-[0.8fr_1.4fr]">
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-[0.26em] text-faint">
                  0{allProjects.indexOf(project) + 1}
                </span>
                <h3 className="mt-4 text-3xl font-black leading-tight text-ink">{project.name}</h3>
                <p className="mt-2 font-semibold text-accent">{project.role}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-paper px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-chip"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link mt-6 inline-flex max-w-max items-center gap-2 rounded-full bg-ink px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-paper transition hover:bg-accent"
                  >
                    Visit live site
                    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M3 9 9 3M4 3h5v5" />
                    </svg>
                  </a>
                )}
              </div>

              <dl>
                <Row label="Problem">{project.problem}</Row>
                <Row label="What I built">{project.built}</Row>
                <Row label="Result" highlight>{project.result}</Row>
              </dl>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
