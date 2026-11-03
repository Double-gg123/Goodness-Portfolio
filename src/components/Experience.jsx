import React from 'react';
import { ArrowRight, NewTab } from './Icons';

// `caseStudy` links to a case study on this page instead of retelling it here.
const experiences = [
  {
    company: 'Wakandi',
    role: 'Growth Hacker',
    type: 'Full-time',
    period: 'Sep 2026 – Present',
    current: true,
    points: [
      'Building the SMS, M-Pesa, email and WhatsApp integrations behind Jamii Connect, a platform in production for Kenyan SACCOs and churches.',
      'Delivered growth features: a referral programme, lifecycle emails and the ChurchPay giving product.',
    ],
    caseStudy: { id: 'case-jamii-connect', label: 'Jamii Connect case study' },
    stack: 'Next.js · Supabase · Claude API · M-Pesa Daraja',
  },
  {
    company: 'JOAT Kenya',
    role: 'Software Engineer',
    type: 'Part-time',
    period: 'May 2026 – Present',
    current: true,
    url: 'https://joatkenya.com/',
    points: ['Software engineering, product development and frontend systems: building and maintaining software, and improving product interfaces.'],
  },
  {
    company: 'Briwnet',
    role: 'Software Engineer',
    type: 'Part-time',
    period: 'Feb 2026 – Aug 2026',
    location: 'Juja, Kenya',
    points: [
      'Built a second platform end to end as sole developer, with four user roles, a wallet ledger and M-Pesa STK Push payments.',
      'Shipped 36 controllers, 17 models and about 87 routes, covered by about 37 PHPUnit tests and deployed with Docker and nginx on Render.',
    ],
    caseStudy: { id: 'case-briwnet-awards', label: 'Briwnet Awards case study' },
    stack: 'Laravel · Next.js · MySQL · Docker',
  },
  {
    company: 'The Career Whisperer',
    role: 'Frontend & Systems Developer',
    type: 'Full-time',
    period: 'Jan 2022 – Jan 2026',
    location: 'Remote',
    url: 'https://thecareerwhisperer.net/',
    points: [
      'Automated 5 business workflows with n8n and custom API webhooks, saving about 10 hours a week.',
      'Built the Shopify store to about 200 orders a month and grew the Mailchimp list to about 10,000 subscribers.',
    ],
    caseStudy: { id: 'case-the-career-whisperer', label: 'The Career Whisperer case study' },
    stack: 'React · Vite · Tailwind · n8n · Shopify',
  },
];

const Experience = () => (
  <section id="experience" aria-labelledby="experience-title">
    <h2 id="experience-title" className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
      Experience
    </h2>

    <ol className="mt-12">
      {experiences.map((exp) => (
        <li key={`${exp.company}-${exp.role}`} className="grid gap-4 border-t border-line py-10 md:grid-cols-[14rem_1fr] md:gap-10">
          <div className="text-sm leading-relaxed text-faint">
            <p className="m-0 flex items-center gap-2 font-semibold text-muted">
              {exp.current && <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />}
              {exp.type}
            </p>
            <p className="m-0 mt-1 font-mono text-[13px]">{exp.period}</p>
            {exp.location && <p className="m-0">{exp.location}</p>}
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-[1.75rem]">
              {exp.url ? (
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center underline decoration-line decoration-2 underline-offset-[6px] transition-colors hover:decoration-accent"
                >
                  {exp.company}
                  <NewTab />
                </a>
              ) : (
                exp.company
              )}
            </h3>
            <p className="mt-1 text-muted">{exp.role}</p>
            <ul className="mt-5 max-w-[38rem] space-y-3">
              {exp.points.map((point) => (
                <li key={point} className="flex gap-3 leading-relaxed text-body">
                  <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-faint" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            {exp.caseStudy && (
              <a
                href={`#${exp.caseStudy.id}`}
                className="group mt-4 inline-flex min-h-[44px] items-center gap-2 font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
              >
                {exp.caseStudy.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </a>
            )}
            {exp.stack && <p className="mt-3 font-mono text-[13px] text-faint">{exp.stack}</p>}
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export default Experience;
