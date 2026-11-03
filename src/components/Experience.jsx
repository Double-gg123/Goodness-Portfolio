import React from 'react';

const experiences = [
  {
    company: 'JOAT Kenya',
    role: 'Software Engineer',
    period: 'May 2026 - Present',
    current: true,
    points: ['Building and maintaining software systems, improving product interfaces, and supporting engineering work.'],
    tags: ['Software Engineering', 'Product Development', 'Frontend Systems'],
    url: 'https://joatkenya.com/',
  },
  {
    company: 'Briwnet',
    location: 'Juja, Kenya',
    role: 'Software Engineer',
    period: 'Feb 2026 - Aug 2026',
    points: [
      'Built Briwnet Awards, an influencer awards platform with public voting designed for a target of about 10,000 votes.',
      'Built a second platform end to end as sole developer in Laravel, Blade, Tailwind and Alpine.js, with four user roles, a wallet ledger, and M-Pesa STK Push payments (with a simulation mode for testing).',
      'Shipped 36 controllers, 17 models and about 87 routes, covered by about 37 PHPUnit tests and deployed with Docker and nginx on Render.',
    ],
    tags: ['Laravel', 'M-Pesa Daraja', 'React / Next.js', 'Docker'],
  },
  {
    company: 'The Career Whisperer',
    location: 'Remote',
    role: 'Frontend & Systems Developer',
    period: 'Jan 2022 - Present',
    current: true,
    points: [
      'Grew organic traffic from about 500 to 2,000 visitors a month with semantic HTML, metadata schemas, and technical SEO.',
      'Automated 5 business workflows with n8n and custom API webhooks, saving about 10 hours a week.',
      'Built responsive web apps in React, Vite and Tailwind CSS, and acted as technical liaison for non-technical leadership.',
    ],
    tags: ['React', 'n8n', 'Technical SEO'],
    url: 'https://thecareerwhisperer.net/',
  },
  {
    company: 'The Career Whisperer',
    location: 'Remote',
    role: 'Technical Support & E-Commerce Architect',
    period: 'Jan 2024 - Jan 2025',
    points: [
      'Built and optimized the Shopify store (Liquid themes, site migration, custom checkout flows), reaching about 200 orders a month.',
      'Grew the Mailchimp list to about 10,000 subscribers with automated, segmented email campaigns.',
      'Shipped data-collection hotfixes and isolated tracking bugs during high-traffic launch windows.',
    ],
    tags: ['Shopify', 'Mailchimp', 'E-commerce'],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="mb-16 grid gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
        <div>
          <p className="section-kicker">Career journey</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-ink md:text-6xl">
            Experience that connects systems and people.
          </h2>
        </div>
        <p className="max-w-xl text-lg leading-8 text-muted lg:justify-self-end">
          From interface work to payments and automation, the common thread is making digital systems easier to understand and easier to use.
        </p>
      </div>

      <div className="divide-y divide-ink/10 border-y border-ink/10">
        {experiences.map((exp) => (
          <article key={`${exp.company}-${exp.role}`} className="group relative grid gap-6 py-9 lg:grid-cols-[0.75fr_1.5fr]">
            <span
              className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 bg-lime transition-transform duration-500 group-hover:scale-x-100"
              aria-hidden="true"
            />
            <div>
              <p className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.24em] text-faint">
                {exp.current && <span className="h-2 w-2 rounded-full bg-accent" title="Current role" />}
                {exp.period}
              </p>
              {exp.url ? (
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-lg font-black text-ink underline decoration-lime underline-offset-4 transition hover:text-accent"
                >
                  {exp.company}
                </a>
              ) : (
                <p className="mt-3 text-lg font-black text-ink">{exp.company}</p>
              )}
              {exp.location && <p className="mt-1 text-sm text-faint">{exp.location}</p>}
            </div>
            <div>
              <h3 className="text-3xl font-black leading-tight text-ink">{exp.role}</h3>
              <ul className="mt-5 max-w-3xl space-y-3">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-3 text-lg leading-8 text-muted">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-lime px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-night">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
