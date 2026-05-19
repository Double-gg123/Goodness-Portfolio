import React from 'react';

const skillGroups = [
  {
    category: 'Engineering',
    summary: 'Building polished, responsive products with modern frontend foundations.',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'PHP / Laravel', 'Python', 'Vite'],
  },
  {
    category: 'Systems',
    summary: 'Connecting tools, data, and teams into cleaner operational workflows.',
    skills: ['Workflow Automation', 'Shopify Flow', 'CRM Integrations', 'API Management', 'Mailchimp'],
  },
  {
    category: 'Experience',
    summary: 'Designing interfaces around behavior, comprehension, and real user intent.',
    skills: ['HCI Principles', 'User Behavior', 'Figma', 'Prototyping', 'Responsive Design'],
  },
  {
    category: 'Operations',
    summary: 'Supporting clients with clear communication and organized delivery.',
    skills: ['Virtual Assistance', 'Project Management', 'Technical Support', 'Client Relations'],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="section-kicker">Technical stack</p>
          <h2 className="mt-4 text-4xl font-black text-[#181818] md:text-6xl">
            Tools and expertise
          </h2>
        </div>
        <p className="max-w-sm text-lg leading-8 text-[#58534b]">
          A focused mix of engineering, systems thinking, UX psychology, and client operations.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden border border-[#181818]/10 bg-[#181818]/10 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <article key={group.category} className="bg-[#f7f4ee] p-7 md:p-9">
            <div className="mb-12 flex items-start justify-between gap-6">
              <h3 className="text-2xl font-black text-[#181818]">{group.category}</h3>
              <span className="text-xs font-black uppercase tracking-[0.26em] text-[#938b7f]">
                0{index + 1}
              </span>
            </div>
            <p className="mb-8 max-w-md leading-7 text-[#58534b]">{group.summary}</p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#181818]/15 bg-white/55 px-3 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#3c3933]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
