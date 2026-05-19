import React from 'react';

const allProjects = [
  {
    name: 'Lumen-ra',
    desc: 'A secure web application with custom authentication, dynamic user dashboards, and HCI-informed interaction patterns.',
    tech: ['React', 'HCI', 'Auth Systems', 'Git'],
  },
  {
    name: 'Freelancer Platform',
    desc: 'A multi-step registration flow with a custom quiz component, functional timer, state handling, and real-time validation.',
    tech: ['React', 'State Management', 'Validation'],
  },
  {
    name: 'The Career Whisperer',
    desc: 'A professional website with clear content structure, conversion-focused hierarchy, and smooth navigation.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    name: 'Task Management App',
    desc: 'A vanilla JavaScript app refactored into modular React architecture with state-based task tracking.',
    tech: ['React', 'Refactoring', 'Modular Design'],
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="section-kicker">Technical work</p>
          <h2 className="mt-4 text-4xl font-black text-[#181818] md:text-6xl">
            Featured projects
          </h2>
        </div>
        <a
          href="https://github.com/Double-gg123"
          target="_blank"
          rel="noreferrer"
          className="max-w-max rounded-full border border-[#181818] px-5 py-3 text-xs font-black uppercase tracking-[0.2em] transition hover:bg-[#181818] hover:text-white"
        >
          View GitHub
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {allProjects.map((project, index) => (
          <article
            key={project.name}
            className="group border border-[#181818]/10 bg-white p-7 transition hover:-translate-y-1 hover:border-[#181818] hover:shadow-[10px_10px_0_#d7f264] md:p-9"
          >
            <div className="mb-12 flex items-start justify-between gap-6">
              <h3 className="text-3xl font-black leading-tight text-[#181818]">{project.name}</h3>
              <span className="text-xs font-black uppercase tracking-[0.26em] text-[#938b7f]">
                0{index + 1}
              </span>
            </div>

            <p className="min-h-[112px] text-lg leading-8 text-[#58534b]">{project.desc}</p>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-[#181818]/10 pt-6">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#f7f4ee] px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#3c3933]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
