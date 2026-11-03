import React from 'react';

const education = [
  ['Bachelor of Arts in Psychology', 'Mount Kenya University · Dec 2025', 'Focus on Human-Computer Interaction, user behavioural mapping, research methods and accessibility. Studied while working full-time.'],
  ['Women Techsters Fellowship', 'Tech4Dev · Aug 2025 – Oct 2026', 'Frontend Development track.'],
];

const About = () => (
  <section id="about" aria-labelledby="about-title" className="grid gap-14 lg:grid-cols-2 lg:gap-20">
    <div>
      <h2 id="about-title" className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
        Psychology first, then code.
      </h2>
      <div className="mt-7 max-w-[60ch] space-y-5 text-lg leading-relaxed text-body">
        <p>
          I studied psychology, with a focus on how people use technology, alongside building for the web. It shapes how I build: fewer steps, clearer choices, and interfaces that still make sense to someone in a hurry on a small phone.
        </p>
        <p>
          Since 2022 I have built frontends, payment and messaging integrations, and automations for consulting platforms, impact-driven brands and Kenyan member organisations.
        </p>
      </div>
    </div>

    <div>
      <h3 className="font-display text-xl font-bold text-ink">Education</h3>
      <ul className="mt-4">
        {education.map(([title, meta, note]) => (
          <li key={title} className="border-t border-line py-5">
            <p className="m-0 font-semibold text-ink">{title}</p>
            <p className="m-0 mt-1 font-mono text-[13px] text-faint">{meta}</p>
            <p className="m-0 mt-2 leading-relaxed text-body">{note}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default About;
