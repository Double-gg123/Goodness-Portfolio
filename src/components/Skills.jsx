import React from 'react';
import { Reveal } from '../hooks';

// Services, written for both hiring managers and freelance clients. The tool list lives in Stack.jsx.
const services = [
  {
    title: 'Frontend development',
    summary: 'Fast, responsive, accessible interfaces in React and Next.js, from a single landing page to a full dashboard.',
    points: ['React / Next.js / TypeScript', 'Frontend migrations', 'Accessibility (WCAG)'],
  },
  {
    title: 'Integrations & payments',
    summary: 'Back ends and APIs that connect your product to the services it depends on, including M-Pesa.',
    points: ['M-Pesa Daraja (STK Push)', 'REST APIs, OAuth, JWT', 'Laravel / Node.js'],
  },
  {
    title: 'Automation & AI',
    summary: 'Workflows and AI agents that take repetitive work off your team, so people can focus on the work that needs them.',
    points: ['n8n and Make workflows', 'LLM integration', 'Telegram bots'],
  },
  {
    title: 'E-commerce & growth',
    summary: 'Stores, email, and technical SEO that bring in visitors and turn them into customers.',
    points: ['Shopify (Liquid)', 'Mailchimp automation', 'Technical SEO'],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="section-kicker">Services</p>
          <h2 className="mt-4 text-4xl font-black text-ink md:text-6xl">
            What I do
          </h2>
        </div>
        <p className="max-w-sm text-lg leading-8 text-muted">
          For teams hiring and for clients with a project: here's where I'm most useful.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 80} className="bg-paper">
            <article className="group h-full p-7 transition-colors duration-300 hover:bg-card md:p-9">
              <div className="mb-10 flex items-start justify-between gap-6">
                <h3 className="text-2xl font-black text-ink">{service.title}</h3>
                <span className="text-xs font-black uppercase tracking-[0.26em] text-faint transition group-hover:text-accent">
                  0{index + 1}
                </span>
              </div>
              <p className="mb-8 max-w-md leading-7 text-muted">{service.summary}</p>
              <div className="flex flex-wrap gap-2">
                {service.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-ink/15 bg-card/55 px-3 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-chip"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
