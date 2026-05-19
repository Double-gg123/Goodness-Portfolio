import React from 'react';

const experiences = [
  {
    company: 'JOAT Kenya',
    role: 'Software Engineer',
    period: 'May 2026 - Present',
    description: 'Building and maintaining software systems, improving product interfaces, and supporting engineering work for JOAT Kenya.',
    tags: ['Software Engineering', 'Product Development', 'Frontend Systems'],
    url: 'https://joatkenya.com/',
  },
  {
    company: 'The Career Whisperer',
    role: 'Systems and Integrations Architect',
    period: 'Jan 2022 - Mar 2026',
    description: 'Leading the architectural design of AI-powered ecosystems, behavior-driven workflows, and practical automations that help teams move faster.',
    tags: ['AI Architect', 'Systems Design', 'Workflow Automation'],
  },
  {
    company: 'The Career Whisperer',
    role: 'Virtual Assistant',
    period: '2024',
    description: 'Coordinated digital administration and technical support across communication channels, client operations, and high-velocity project work.',
    tags: ['Operations', 'SaaS Strategy', 'Technical Support'],
  },
  {
    company: 'Mount Kenya University',
    role: 'Psychology and HCI Research',
    period: 'Graduated Dec 2025',
    description: 'Focused on Human-Computer Interaction and behavioral research while developing a community-centric web platform.',
    tags: ['HCI Research', 'UX Strategy', 'Behavioral Design'],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="mb-16 grid gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
        <div>
          <p className="section-kicker">Career journey</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-[#181818] md:text-6xl">
            Experience that connects systems and people.
          </h2>
        </div>
        <p className="max-w-xl text-lg leading-8 text-[#58534b] lg:justify-self-end">
          From interface work to operational architecture, the common thread is making digital systems easier to understand and easier to use.
        </p>
      </div>

      <div className="divide-y divide-[#181818]/10 border-y border-[#181818]/10">
        {experiences.map((exp) => (
          <article key={`${exp.company}-${exp.role}`} className="grid gap-6 py-9 lg:grid-cols-[0.75fr_1.5fr]">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#938b7f]">{exp.period}</p>
              {exp.url ? (
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-lg font-black text-[#181818] underline decoration-[#d7f264] underline-offset-4 transition hover:text-[#2f7f62]"
                >
                  {exp.company}
                </a>
              ) : (
                <p className="mt-3 text-lg font-black text-[#181818]">{exp.company}</p>
              )}
            </div>
            <div>
              <h3 className="text-3xl font-black leading-tight text-[#181818]">{exp.role}</h3>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#58534b]">{exp.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-[#d7f264] px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#181818]">
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
