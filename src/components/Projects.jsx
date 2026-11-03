import React, { useState } from 'react';
import { Reveal } from '../hooks';
import { ArrowUpRight, MinusIcon, PlusIcon } from './Icons';

// Case studies, strongest first. Live sites show a screenshot; private work shows how the system flows.
const projects = [
  {
    name: 'Jamii Connect',
    role: 'Growth hacker at Wakandi, in a team of 10+',
    problem: 'Kenyan SACCOs and churches need to reach members reliably, by SMS, email and WhatsApp, in the language members read.',
    built: 'Integrations for a production multi-tenant platform: Onfon SMS with delivery reports and sign-in codes, M-Pesa top-ups, Brevo email, the WhatsApp Business API, and an English-to-Kiswahili translator on the Claude API with Zod-validated output and a safe fallback.',
    result: 'In production. 190 commits in my first month, plus a referral programme, lifecycle emails and the ChurchPay giving product, with unit tests in GitHub Actions CI.',
    stack: 'Next.js · Supabase · PostgreSQL · Claude API · Zod · M-Pesa Daraja',
    flow: {
      label: 'A member tops up their account',
      steps: [
        ['Member taps “Top up”', 'Next.js'],
        ['STK push to their phone', 'M-Pesa Daraja', true],
        ['Ledger update, row-level security', 'Supabase'],
      ],
      branch: [
        ['Receipt by SMS', 'Onfon · WhatsApp · Brevo'],
        ['Written in Kiswahili', 'Claude API + Zod', true],
      ],
    },
  },
  {
    name: 'The Career Whisperer',
    role: 'Lead developer and frontend administrator',
    problem: 'A career consulting platform needed to be found by more people and turn visitors into clients.',
    built: 'A fast, responsive React interface with technical SEO, metadata schemas and web security, plus n8n automations behind it.',
    result: 'Organic traffic grew from about 500 to 2,000 visitors a month.',
    stack: 'React · Tailwind CSS · JavaScript · n8n',
    url: 'https://thecareerwhisperer.net/',
    shot: 'career-whisperer.webp',
  },
  {
    name: 'Digital Chama',
    role: 'Sole developer, prototype',
    problem: 'Group savings and loan groups (chamas) need shared accounts, loans and approvals that every member can trust.',
    built: 'A full-stack banking prototype with about 94 API endpoints: M-Pesa STK Push, core-banking account creation, ID verification, OCR, SMS, and real-time sanctions screening with timeouts and fallback.',
    result: 'Role-based access, multi-signatory approvals, loan workflows, PDF reports and a full audit trail.',
    stack: 'Node.js · TypeScript · Express · React · SQLite · JWT',
    flow: {
      label: 'A member takes a loan',
      steps: [
        ['Member requests a loan', 'React'],
        ['Signatories approve', 'Multi-signatory rules', true],
        ['ID and sanctions checks', 'Screening API, with fallback'],
        ['Money sent to their phone', 'M-Pesa STK Push', true],
        ['Audit trail and PDF report', 'Express + SQLite'],
      ],
    },
  },
  {
    name: 'Briwnet Awards',
    role: 'Software engineer at Briwnet',
    problem: 'An influencer awards event needed public voting that could handle nominees campaigning for votes.',
    built: 'An awards platform where nominees run campaigns to gather votes in categories such as Influencer of the Year.',
    result: 'Public voting built for a target of about 10,000 votes.',
    stack: 'React · Next.js · PHP · Laravel · MySQL',
    flow: {
      label: 'A fan votes for a nominee',
      steps: [
        ['Nominee shares a campaign link', 'Next.js'],
        ['Fan casts a public vote', 'Laravel', true],
        ['Tallied per category', 'MySQL'],
      ],
    },
  },
  {
    name: 'Amare’s Big Planet',
    role: 'Co-developer, frontend and accessibility',
    problem: 'An educational platform for young learners had to work for children and the adults guiding them.',
    built: 'Child-centered design with WCAG accessibility, semantic HTML5 and CSS Grid layouts.',
    result: 'Growth driven through SEO and paid ad campaigns.',
    stack: 'React · Semantic HTML5 · CSS Grid · WCAG',
    url: 'https://amaresbigplanet.com/',
    shot: 'amares-big-planet.webp',
  },
  {
    name: 'Lumen-ra',
    role: 'Systems architect and core developer',
    problem: 'An educational platform had to keep confidential user data safe.',
    built: 'Modular interface features, API integrations and server-side authentication.',
    result: 'Role-based authorization protects confidential user data.',
    stack: 'React · Vite · API integrations · Auth',
    url: 'https://lumen-ra.vercel.app/',
    shot: 'lumen-ra.webp',
  },
  {
    name: 'AI Job Application Automation',
    role: 'Sole developer',
    problem: 'Finding and applying for relevant jobs across dozens of boards is slow, repetitive work.',
    built: 'A system that collects jobs from about 20 boards and feeds, scores each one against a CV with an LLM, and tailors the CV and cover letter with an automatic honesty check. Telegram bots handle review before anything is sent.',
    result: 'Runs the whole pipeline, from finding jobs to submitting applications, for two users. Built with AI coding agents (Claude Code).',
    stack: 'Node.js · TypeScript · PostgreSQL · Prisma · Docker · Playwright · Gemini API',
    flow: {
      label: 'From job post to application',
      steps: [
        ['Jobs gathered from ~20 boards', 'Playwright + feeds'],
        ['Scored against the CV', 'Gemini API', true],
        ['CV and letter tailored, honesty-checked', 'LLM + rules'],
        ['Reviewed by a person', 'Telegram Bot API', true],
        ['Sent', 'Gmail · form-filling'],
      ],
    },
  },
];

const FEATURED = 3;

const Node = ({ text, system, hot }) => (
  <div className={`flex items-center justify-between gap-4 rounded-xl border px-4 py-3 ${hot ? 'border-accent' : 'border-line'} bg-paper`}>
    <span className="text-[15px] text-ink">{text}</span>
    <span className={`text-right font-mono text-[13px] ${hot ? 'text-accent' : 'text-faint'}`}>{system}</span>
  </div>
);

const Wire = () => <div className="ml-6 h-4 w-px bg-line" aria-hidden="true" />;

/* How a private project's system works, drawn as a simple vertical flow. */
const Flow = ({ flow }) => (
  <figure className="flex flex-col rounded-2xl border border-line bg-card p-5 md:p-6">
    <figcaption className="mb-4 font-mono text-[13px] text-faint">{flow.label}</figcaption>
    <ol className="flex flex-col" aria-label={flow.label}>
      {flow.steps.map(([text, system, hot], i) => (
        <li key={text}>
          {i > 0 && <Wire />}
          <Node text={text} system={system} hot={hot} />
        </li>
      ))}
      {flow.branch && (
        <li>
          <Wire />
          <div className="grid gap-3 sm:grid-cols-2">
            {flow.branch.map(([text, system, hot]) => (
              <div key={text} className={`flex flex-col gap-1 rounded-xl border px-4 py-3 ${hot ? 'border-accent' : 'border-line'} bg-paper`}>
                <span className="text-[15px] text-ink">{text}</span>
                <span className={`font-mono text-[13px] ${hot ? 'text-accent' : 'text-faint'}`}>{system}</span>
              </div>
            ))}
          </div>
        </li>
      )}
    </ol>
  </figure>
);

const Shot = ({ project }) => (
  <a
    href={project.url}
    target="_blank"
    rel="noreferrer"
    className="group block overflow-hidden rounded-2xl border border-line bg-card"
    aria-label={`${project.name} live site (opens in a new tab)`}
  >
    <img
      src={`${process.env.PUBLIC_URL}/shots/${project.shot}`}
      alt={`Homepage of ${project.name}`}
      width="1280"
      height="800"
      loading="lazy"
      decoding="async"
      className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
    />
  </a>
);

const Row = ({ label, children, strong }) => (
  <div className="grid gap-1 border-t border-line py-4 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
    <dt className="text-sm font-semibold text-faint">{label}</dt>
    <dd className={`m-0 leading-relaxed ${strong ? 'font-semibold text-ink' : 'text-body'}`}>{children}</dd>
  </div>
);

const CaseStudy = ({ project }) => (
  <article className="grid gap-8 border-t border-line py-14 first:border-t-0 first:pt-4 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
    <Reveal className="lg:pt-2">{project.flow ? <Flow flow={project.flow} /> : <Shot project={project} />}</Reveal>
    <div>
      <h3 className="font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">{project.name}</h3>
      <p className="mt-2 text-muted">{project.role}</p>
      <dl className="mt-6">
        <Row label="Problem">{project.problem}</Row>
        <Row label="What I built">{project.built}</Row>
        <Row label="Result" strong>{project.result}</Row>
      </dl>
      <p className="mt-2 border-t border-line pt-4 font-mono text-[13px] leading-relaxed text-faint">{project.stack}</p>
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="group mt-5 inline-flex min-h-[44px] items-center gap-2 font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
        >
          Visit the live site
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      )}
    </div>
  </article>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? projects : projects.slice(0, FEATURED);
  const more = projects.length - FEATURED;

  return (
    <section id="work" aria-labelledby="work-title">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 id="work-title" className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
          Case studies
        </h2>
        <p className="max-w-md text-lg leading-relaxed text-muted">
          The problem, what I built, and what changed.
        </p>
      </div>

      <div id="case-studies" className="mt-10">
        {shown.map((project) => (
          <CaseStudy key={project.name} project={project} />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-line pt-8">
        <button
          type="button"
          onClick={() => setShowAll((s) => !s)}
          aria-expanded={showAll}
          aria-controls="case-studies"
          className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-line px-6 font-semibold text-ink transition-colors hover:border-ink"
        >
          {showAll ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
          {showAll ? 'Show fewer projects' : `Show ${more} more projects`}
        </button>
        <a
          href="https://github.com/Double-gg123"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[48px] items-center gap-2 font-semibold text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink"
        >
          Code on GitHub
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
