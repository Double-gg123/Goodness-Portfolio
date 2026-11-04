import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Reveal, prefersReducedMotion } from '../hooks';
import { ArrowRight, ArrowUpRight, MinusIcon, NewTab, PlusIcon, ReplayIcon } from './Icons';

// Case studies. Live sites (scrollable screenshots) come first, then private work shown as system flows.
// `outcome: false` labels the last row "Shipped" when there is no measured result yet.
// `why` is the people-side reasoning behind the build (the psychology/HCI angle).
// `compact: true` merges Problem and What I built into one row for the shorter case studies.
const projects = [
  {
    name: 'The Career Whisperer',
    role: 'Lead developer and frontend administrator',
    problem: 'A career consulting platform needed to be found by more people and turn visitors into clients.',
    built: 'A fast, responsive React interface with technical SEO, metadata schemas and web security, plus n8n automations behind it.',
    why: 'Job seekers arrive stressed and short on time, so the homepage leads with one clear next step, a free five-minute quiz, instead of a menu of services to choose from.',
    result: 'Organic traffic grew from about 500 to 2,000 visitors a month.',
    stack: 'React · Tailwind CSS · JavaScript · n8n',
    url: 'https://thecareerwhisperer.net/',
    shot: 'career-whisperer.webp',
    shotH: 2377,
  },
  {
    name: 'Briwnet Awards',
    role: 'Software engineer at Briwnet (part-time)',
    problem: 'An influencer awards event needed public voting that could handle nominees campaigning for votes.',
    built: 'An awards platform where nominees run campaigns to gather votes in categories such as Influencer of the Year.',
    why: 'Fans arrive from a nominee’s shared link, usually on a phone, so the path from that link to a cast vote is kept as short as possible.',
    result: 'Public voting built for a target of about 10,000 votes.',
    outcome: false,
    stack: 'React · Next.js · PHP · Laravel · MySQL',
    url: 'https://briwnetawards.com/',
    shotNote: 'Now running as Aurevia Africa Honours.',
    shot: 'briwnet-awards.webp',
    shotH: 2400,
  },
  {
    name: 'Amare’s Big Planet',
    compact: true,
    role: 'Co-developer, frontend and accessibility',
    problem: 'An educational platform for young learners had to work for children and the adults guiding them.',
    built: 'Child-centered design with WCAG accessibility, semantic HTML5 and CSS Grid layouts.',
    why: 'It is designed for two people at once: a child who explores by tapping big, bright choices, and the parent or teacher beside them who needs to find the right video quickly.',
    result: 'SEO and paid ad campaigns to grow its audience.',
    outcome: false,
    stack: 'React · Semantic HTML5 · CSS Grid · WCAG',
    url: 'https://amaresbigplanet.com/',
    shot: 'amares-big-planet.webp',
    shotH: 1290,
  },
  {
    name: 'Lumen-ra',
    compact: true,
    role: 'Systems architect and core developer',
    problem: 'An educational platform had to keep confidential user data safe.',
    built: 'Modular interface features, API integrations and server-side authentication.',
    why: 'People come to it around sensitive, personal experiences, so they need to trust that only the right people can see what they share.',
    result: 'A live platform where each role sees only the data it needs.',
    outcome: false,
    stack: 'React · Vite · API integrations · Auth',
    url: 'https://lumen-ra.vercel.app/',
    shot: 'lumen-ra.webp',
    shotH: 2400,
  },
  {
    name: 'Jamii Connect',
    role: 'Growth Hacker (frontend & integrations) at Wakandi, in a team of 10+',
    problem: 'Kenyan SACCOs and churches need to reach their members reliably, by SMS, email and WhatsApp, in the language members read.',
    built: 'The integrations behind a production platform: SMS sign-in codes and delivery reports, M-Pesa top-ups, email and WhatsApp, plus an English-to-Kiswahili message translator built on the Claude API that falls back safely to English.',
    why: 'Members already trust M-Pesa’s own payment prompt, so top-ups use STK Push instead of asking people to type in a paybill number. Messages go out in Kiswahili so members read them in their first language, and fall back to English rather than not arriving at all.',
    result: 'In production. 190 commits in my first month, plus a referral programme, lifecycle emails and the ChurchPay giving product, with unit tests running in CI.',
    stack: 'Next.js · Supabase · PostgreSQL · Claude API · Zod · M‑Pesa Daraja · Onfon · Brevo',
    flow: {
      label: 'A member tops up their account',
      steps: [
        ['Member taps “Top up”', 'Next.js'],
        ['Payment prompt on their phone', 'M‑Pesa STK Push', true],
        ['Balance updated securely', 'Supabase'],
      ],
      branch: [
        ['Receipt sent', 'SMS · WhatsApp · email'],
        ['Written in Kiswahili', 'Claude API', true],
      ],
    },
  },
  {
    name: 'Digital Chama',
    role: 'Sole developer, prototype',
    problem: 'Group savings and loan groups (chamas) need shared accounts, loans and approvals that every member can trust.',
    built: 'A full-stack banking prototype with about 94 API endpoints: M-Pesa payments, account creation, ID verification, OCR, SMS, and real-time sanctions screening with timeouts and fallback.',
    why: 'A chama runs on trust between members, so no single person can move money: every loan needs several signatories, and every action lands in an audit trail any member can check.',
    result: 'Role-based access, multi-signatory approvals, loan workflows, PDF reports and a full audit trail.',
    outcome: false,
    stack: 'Node.js · TypeScript · Express · React · SQLite · JWT',
    flow: {
      label: 'A member takes a loan',
      steps: [
        ['Member requests a loan', 'React'],
        ['Signatories approve', 'Multi-signatory rules', true],
        ['ID and sanctions checks', 'Screening API, with fallback'],
        ['Money sent to their phone', 'M‑Pesa STK Push', true],
        ['Audit trail and PDF report', 'Express + SQLite'],
      ],
    },
  },
  {
    name: 'AI Job Application Automation',
    role: 'Sole developer',
    problem: 'Finding and applying for relevant jobs across dozens of boards is slow, repetitive work.',
    built: 'A system that gathers jobs from about 20 boards, scores each against a CV with an LLM, and tailors the CV and cover letter with an automatic honesty check. A person reviews every application in Telegram before anything is sent.',
    why: 'Automation shouldn’t speak for someone unchecked, so nothing is sent without a person approving it, and the honesty check stops a tailored CV from claiming experience the candidate doesn’t have.',
    result: 'Runs the whole pipeline, from finding jobs to submitting reviewed applications, for two users. Built with AI coding agents (Claude Code).',
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

const FEATURED = 5; // the four live sites, plus Jamii Connect (current full-time work)

// Measured results, shown once at the top of the work. Numbers count up the first time they appear.
const RESULTS_SOURCE = { label: 'The Career Whisperer, 2022–26', href: '#case-the-career-whisperer' };
const results = [
  { value: 4, suffix: '×', label: 'organic traffic for a consulting platform' },
  { value: 10, suffix: ' hrs', label: 'saved every week by automating 5 workflows' },
  { value: 10000, label: 'email subscribers grown with automation' },
  { value: 200, prefix: '~', label: 'Shopify orders a month after a store rebuild' },
];

const format = ({ prefix = '', suffix = '' }, n) => `${prefix}${n.toLocaleString('en-US')}${suffix}`;

/* Counts from 0 to the value once, when it scrolls into view. Screen readers only get the final value. */
const CountUp = ({ item }) => {
  const ref = useRef(null);
  const [n, setN] = useState(item.value);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined' || prefersReducedMotion()) return undefined;
    setN(0);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / 1100, 1);
          setN(Math.round(item.value * (1 - (1 - t) ** 4)));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [item.value]);

  return (
    <>
      <span ref={ref} aria-hidden="true" className="tabular-nums">
        {format(item, n)}
      </span>
      <span className="sr-only">{format(item, item.value)}</span>
    </>
  );
};

export const slug = (name) => `case-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}`;

const STEP_MS = 420;

/* Plays a flow diagram step by step: once when it first scrolls into view, and again from the Replay button. */
const useFlowPlayback = (stages) => {
  const ref = useRef(null);
  const timer = useRef(0);
  const [lit, setLit] = useState(stages); // `stages` = settled: every step shown as done

  const play = useCallback(() => {
    if (prefersReducedMotion()) return;
    clearInterval(timer.current);
    let i = 0;
    setLit(0);
    timer.current = setInterval(() => {
      i += 1;
      setLit(i);
      if (i >= stages) clearInterval(timer.current);
    }, STEP_MS);
  }, [stages]);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined' || prefersReducedMotion()) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          play();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      clearInterval(timer.current);
    };
  }, [play]);

  return { ref, lit, play };
};

// Where a step is in the playback: not reached yet, happening now, or done.
const stateOf = (i, lit) => (i < lit ? 'done' : i === lit ? 'active' : 'pending');

const stepClass = (state, hot) => {
  // Done steps get a solid, visible border; steps not reached yet stay faint and dashed.
  const border = state === 'active' || (hot && state === 'done') ? 'border-accent' : state === 'done' ? 'border-faint' : 'border-line';
  const glow = state === 'active' ? 'bg-accent/10 shadow-[0_0_0_4px_rgb(var(--accent)/0.18)]' : 'bg-paper';
  const fade = state === 'pending' ? 'border-dashed' : '';
  return `${border} ${glow} ${fade} transition-[opacity,background-color,box-shadow,border-color] duration-300 ease-out`;
};

const Node = ({ text, system, hot, state }) => (
  <div className={`flex items-center justify-between gap-4 rounded-xl border px-4 py-3 ${stepClass(state, hot)}`}>
    <span className="text-[15px] text-ink">{text}</span>
    <span className={`text-right font-mono text-[13px] ${hot ? 'text-accent' : 'text-faint'}`}>{system}</span>
  </div>
);

// The wire into a step lights up once the signal has reached that step.
const Wire = ({ on }) => (
  <div className={`ml-6 h-4 w-px transition-colors duration-300 ${on ? 'bg-accent' : 'bg-faint'}`} aria-hidden="true" />
);

/* How a private project's system works, drawn as a vertical flow that can play through. */
const Flow = ({ flow }) => {
  const stages = flow.steps.length + (flow.branch ? 1 : 0);
  const { ref, lit, play } = useFlowPlayback(stages);
  const branchState = stateOf(flow.steps.length, lit);
  const branchOn = lit >= flow.steps.length;

  return (
    <figure ref={ref} className="flex flex-col rounded-2xl border border-line bg-card p-5 md:p-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <figcaption className="font-mono text-[13px] text-faint">{flow.label}</figcaption>
        <button
          type="button"
          onClick={play}
          aria-label={`Replay: ${flow.label}`}
          className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-muted transition-colors hover:text-ink motion-reduce:hidden"
        >
          <ReplayIcon className="h-4 w-4" />
          Replay
        </button>
      </div>
      <ol className="flex flex-col">
        {flow.steps.map(([text, system, hot], i) => (
          <li key={text}>
            {i > 0 && <Wire on={i <= lit} />}
            <Node text={text} system={system} hot={hot} state={stateOf(i, lit)} />
          </li>
        ))}
        {flow.branch && (
          <li>
            <div className="ml-6 flex h-4 w-[calc(50%+0.25rem)] items-end" aria-hidden="true">
              <div className={`h-full w-px transition-colors duration-300 ${branchOn ? 'bg-accent' : 'bg-faint'}`} />
              <div className={`h-px flex-1 transition-colors duration-300 ${branchOn ? 'bg-accent' : 'bg-faint'}`} />
              <div className={`h-full w-px transition-colors duration-300 ${branchOn ? 'bg-accent' : 'bg-faint'}`} />
            </div>
            <p className="sr-only">Then, at the same time:</p>
            <div className="grid grid-cols-2 gap-3">
              {flow.branch.map(([text, system, hot]) => (
                <div key={text} className={`flex flex-col gap-1 rounded-xl border px-4 py-3 ${stepClass(branchState, hot)}`}>
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
};

/* A live site's screenshot in a 16:10 window. Hovering (or keyboard focus) scrolls through the page. */
const Shot = ({ project }) => {
  const [height, width] = [project.shotH, 960];
  const shift = Math.max(0, (1 - (width * 10) / 16 / height) * 100); // % of image height to travel
  const style = { '--shift': `-${shift.toFixed(2)}%`, transitionDuration: `${Math.round(shift * 55)}ms` };

  return (
    <div>
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-card"
      >
        <img
          src={`${process.env.PUBLIC_URL}/shots/${project.shot}`}
          alt={`The ${project.name} website`}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          style={style}
          className="absolute left-0 top-0 h-auto w-full ease-in-out motion-safe:transition-transform motion-safe:group-hover:[transform:translateY(var(--shift))] motion-safe:group-focus-visible:[transform:translateY(var(--shift))]"
        />
        <span className="sr-only">{project.name} live site (opens in a new tab)</span>
      </a>
      {project.shotNote && <p className="m-0 mt-2 text-sm text-muted">{project.shotNote}</p>}
      {/* The hint only under the first screenshot; the others work the same way. */}
      {project === projects.find((p) => p.shot) && (
        <p className="mt-2 hidden text-sm text-faint motion-safe:[@media(hover:hover)]:block">Hover to scroll through the site</p>
      )}
    </div>
  );
};

const Row = ({ label, children }) => (
  <div className="grid gap-1 border-t border-line py-4 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
    <dt className="text-sm font-semibold text-faint">{label}</dt>
    <dd className="m-0 leading-relaxed text-body">{children}</dd>
  </div>
);

/* Bold only the result's first sentence, so the headline outcome stands out. */
const ResultText = ({ text }) => {
  const i = text.indexOf('. ');
  if (i === -1) return <strong className="font-semibold text-ink">{text}</strong>;
  return (
    <>
      <strong className="font-semibold text-ink">{text.slice(0, i + 1)}</strong>
      {text.slice(i + 1)}
    </>
  );
};

const CaseStudy = ({ project, headingRef }) => (
  <article
    id={slug(project.name)}
    className="grid gap-6 border-t border-line py-14 first:border-t-0 first:pt-4 lg:grid-cols-[1fr_1.05fr] lg:gap-x-14 lg:gap-y-0"
  >
    <header className="lg:col-start-2 lg:row-start-1">
      <h3 ref={headingRef} tabIndex={-1} className="rounded-md font-display text-3xl font-extrabold tracking-tight text-ink focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-4xl">
        {project.name}
      </h3>
      <p className="mt-2 text-muted">{project.role}</p>
    </header>

    <Reveal className="lg:sticky lg:top-24 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-start lg:pt-2">
      {project.flow ? <Flow flow={project.flow} /> : <Shot project={project} />}
    </Reveal>

    <div className="lg:col-start-2">
      <dl className="mt-0 lg:mt-6">
        {project.compact ? (
          <Row label="The work">
            {project.problem} {project.built}
          </Row>
        ) : (
          <>
            <Row label="Problem">{project.problem}</Row>
            <Row label="What I built">{project.built}</Row>
          </>
        )}
        {project.why && <Row label="Why it works">{project.why}</Row>}
        <Row label={project.outcome === false ? 'Shipped' : 'Result'}>
          <ResultText text={project.result} />
        </Row>
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
          <NewTab />
        </a>
      )}
    </div>
  </article>
);

/* While the list is collapsed: a short index of the private systems still hidden, so the M-Pesa and AI
   proof is visible without reordering. Each row links to its case study, which opens the list. */
const PrivateSystems = ({ items }) => {
  const systems = items.filter((p) => p.flow);
  if (!systems.length) return null;
  return (
    <section aria-labelledby="private-systems-title" className="mt-4 border-t border-line pt-10">
      <h3 id="private-systems-title" className="font-display text-2xl font-extrabold tracking-tight text-ink">
        More projects
      </h3>
      <p className="mt-2 max-w-xl text-muted">Built for clients and teams, so shown as how the system works rather than a screenshot.</p>
      <ul className="m-0 mt-6 list-none p-0">
        {systems.map((p) => {
          const signature = [...p.flow.steps, ...(p.flow.branch || [])].filter((s) => s[2]).map((s) => s[1]);
          return (
            <li key={p.name} className="border-t border-line first:border-t-0">
              <a
                href={`#${slug(p.name)}`}
                className="group grid gap-1 py-5 transition-colors hover:bg-paper/40 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_auto] sm:items-center sm:gap-6"
              >
                <span className="font-display text-xl font-bold text-ink transition-colors group-hover:text-accent">{p.name}</span>
                <span className="text-body">
                  {p.flow.label}
                  <span className="mt-1 block font-mono text-[13px] text-accent">{signature.join(' · ')}</span>
                </span>
                <span className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-muted transition-colors group-hover:text-ink">
                  Read the case study
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const firstNewRef = useRef(null);
  const toggleRef = useRef(null);
  const userToggled = useRef(false);
  const shown = showAll ? projects : projects.slice(0, FEATURED);
  const more = projects.length - FEATURED;

  // Expanding moves focus to the first newly shown project; collapsing brings the button back into view.
  useEffect(() => {
    if (!userToggled.current) return;
    if (showAll) firstNewRef.current?.focus();
    else toggleRef.current?.scrollIntoView?.({ block: 'center' });
  }, [showAll]);

  const toggle = () => {
    userToggled.current = true;
    setShowAll((s) => !s);
  };

  // Links elsewhere on the page (Experience, the hero tool cards) may point at a case study that is
  // still collapsed. Open the list first, then scroll to it, so no link is ever dead.
  const pendingId = useRef(null);
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest?.('a[href^="#case-"]');
      if (!link) return;
      const id = link.getAttribute('href').slice(1);
      if (document.getElementById(id)) return;
      e.preventDefault();
      userToggled.current = false;
      pendingId.current = id;
      setShowAll(true);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!showAll || !pendingId.current) return;
    const el = document.getElementById(pendingId.current);
    pendingId.current = null;
    if (!el) return;
    el.scrollIntoView?.({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    el.querySelector('h3')?.focus({ preventScroll: true });
    window.history.replaceState(null, '', `#${el.id}`);
  }, [showAll]);

  return (
    <section id="work" aria-labelledby="work-title">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 id="work-title" className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
          Case studies
        </h2>
        <p className="max-w-md text-lg leading-relaxed text-muted">The problem, what I built, and what changed.</p>
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
        {results.map((item) => (
          <div key={item.label} className="flex flex-col gap-1 bg-paper-alt px-5 py-5">
            <dt className="order-2 text-sm leading-snug text-muted">{item.label}</dt>
            <dd className="order-1 m-0 font-display text-3xl font-extrabold tracking-tight text-ink">
              <CountUp item={item} />
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-sm text-faint">
        At{' '}
        <a href={RESULTS_SOURCE.href} className="-my-[13px] inline-block py-[13px] font-semibold text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink">
          {RESULTS_SOURCE.label}
        </a>
      </p>

      <div id="case-studies" className="mt-12">
        {shown.map((project, i) => (
          <CaseStudy key={project.name} project={project} headingRef={i === FEATURED ? firstNewRef : undefined} />
        ))}
      </div>

      {!showAll && <PrivateSystems items={projects.slice(FEATURED)} />}

      <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-line pt-8">
        <button
          ref={toggleRef}
          type="button"
          onClick={toggle}
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
          <NewTab />
        </a>
      </div>
    </section>
  );
};

export default Projects;
