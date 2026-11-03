import React from 'react';

const experiences = [
  {
    company: 'Wakandi',
    role: 'Growth Hacker, building Jamii Connect',
    period: 'Sep 2026 – Present',
    current: true,
    points: [
      'Building integrations for a production multi-tenant SMS and member platform for Kenyan SACCOs and churches: Onfon SMS with delivery reports and sign-in codes, M-Pesa top-ups, Brevo email and the WhatsApp Business API.',
      'Built an English-to-Kiswahili message translator on the Anthropic Claude API, with Zod-validated output, rate limiting and a safe fallback to English.',
      'Wrote unit tests for SMS, fraud, payment and loan-ledger logic, run in GitHub Actions CI. 190 commits in my first month.',
    ],
    stack: 'Next.js · Supabase · Claude API · M-Pesa Daraja',
  },
  {
    company: 'JOAT Kenya',
    role: 'Software Engineer',
    period: 'May 2026 – Present',
    current: true,
    url: 'https://joatkenya.com/',
    points: ['Building and maintaining software systems, improving product interfaces, and supporting engineering work.'],
    stack: 'Software engineering · Frontend systems',
  },
  {
    company: 'Briwnet',
    role: 'Software Engineer',
    period: 'Feb 2026 – Aug 2026',
    location: 'Juja, Kenya',
    points: [
      'Built Briwnet Awards, an influencer awards platform with public voting designed for a target of about 10,000 votes.',
      'Built a second platform end to end as sole developer in Laravel, Blade, Tailwind and Alpine.js, with four user roles, a wallet ledger and M-Pesa STK Push payments.',
      'Shipped 36 controllers, 17 models and about 87 routes, covered by about 37 PHPUnit tests and deployed with Docker and nginx on Render.',
    ],
    stack: 'Laravel · Next.js · MySQL · Docker',
  },
  {
    company: 'The Career Whisperer',
    role: 'Frontend & Systems Developer',
    period: 'Jan 2022 – Jan 2026',
    location: 'Remote',
    url: 'https://thecareerwhisperer.net/',
    points: [
      'Grew organic traffic from about 500 to 2,000 visitors a month with semantic HTML, metadata schemas and technical SEO.',
      'Automated 5 business workflows with n8n and custom API webhooks, saving about 10 hours a week.',
      'Earlier (2024), built the Shopify store to about 200 orders a month and grew the Mailchimp list to about 10,000 subscribers.',
    ],
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
          <div className="font-mono text-[13px] leading-relaxed text-faint">
            <p className="m-0 flex items-center gap-2">
              {exp.current && <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />}
              {exp.period}
            </p>
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
                </a>
              ) : (
                exp.company
              )}
            </h3>
            <p className="mt-1 text-muted">{exp.role}</p>
            <ul className="mt-5 max-w-[68ch] space-y-3">
              {exp.points.map((point) => (
                <li key={point} className="flex gap-3 leading-relaxed text-body">
                  <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-faint" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-5 font-mono text-[13px] text-faint">{exp.stack}</p>
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export default Experience;
