import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

const Portfolio = () => (
  <div className="min-h-screen overflow-x-hidden bg-[#f7f4ee] font-sans text-[#181818] selection:bg-[#d7f264] selection:text-[#181818]">
    <Header />

    <main>
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <About />
      </div>

      <div className="border-y border-[#181818]/10 bg-[#efebe2]">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Skills />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Experience />
      </div>

      <div className="border-y border-[#181818]/10 bg-[#fdfbf6]">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Projects />
        </div>
      </div>

      <section id="education" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-10 border border-[#181818] bg-[#181818] p-7 text-white md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#d7f264]">
              Academic background
            </p>
            <h2 className="mt-6 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              Bachelor of Arts in Psychology
            </h2>
            <p className="mt-5 text-lg font-semibold text-white/65">
              Mount Kenya University / Dec 2025
            </p>
          </div>
          <div className="border-t border-white/20 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-white/45">
              Specialization
            </p>
            <h3 className="mt-5 text-3xl font-black">Human-Computer Interaction</h3>
            <p className="mt-5 leading-8 text-white/65">
              Applying cognitive load theories to digital systems, interface decisions, and intuitive product workflows.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#d7f264] px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#181818]">
                Behavioral science
              </span>
              <span className="rounded-full border border-white/20 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white">
                Cognitive research
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="bg-[#181818] px-5 py-14 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <h2 className="text-3xl font-black">Goodness Gibendi</h2>
          <p className="mt-2 text-[11px] font-black uppercase tracking-[0.28em] text-white/40">
            Systems architect / Frontend engineer
          </p>
        </div>
        <a
          href="mailto:gibendigoodness@gmail.com?subject=Project Inquiry"
          className="text-2xl font-black text-[#d7f264] underline decoration-white/20 underline-offset-8 transition hover:text-white"
        >
          Let's build something together
        </a>
      </div>
    </footer>
  </div>
);

export default Portfolio;
