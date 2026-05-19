import React from 'react';

const About = () => {
  return (
    <section id="about" className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="section-kicker">Professional profile</p>
        <h2 className="mt-4 text-4xl font-black leading-tight tracking-normal text-[#181818] md:text-6xl">
          Engineering shaped by human insight.
        </h2>
      </div>

      <div className="space-y-8">
        <p className="text-2xl font-semibold leading-10 text-[#25231f]">
          I am a frontend engineer specializing in responsive, data-driven interfaces for teams that need clarity, speed, and thoughtful interaction.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="border-t border-[#181818] pt-5">
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[#2f7f62]">Code</h3>
            <p className="mt-3 leading-7 text-[#58534b]">
              React, JavaScript, Tailwind CSS, PHP/Laravel, Python, and practical system integrations.
            </p>
          </div>
          <div className="border-t border-[#181818] pt-5">
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[#2f7f62]">Cognition</h3>
            <p className="mt-3 leading-7 text-[#58534b]">
              Psychology and HCI principles guide how I simplify flows, reduce cognitive load, and improve engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
