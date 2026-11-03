import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Stack from './components/Stack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { useScrollProgress } from './hooks';

const BackToTop = () => {
  const progress = useScrollProgress();
  const visible = progress > 0.15;

  return (
    <a
      href="#top"
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-lime text-lg font-black text-night shadow-[4px_4px_0_#181818] transition duration-300 hover:-translate-y-1 ${
        visible ? 'opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      ↑
    </a>
  );
};

const Portfolio = () => (
  <div className="min-h-screen overflow-x-clip bg-paper font-sans text-ink selection:bg-lime selection:text-night">
    <Nav />
    <Header />

    <main>
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <About />
      </div>

      <div className="border-y border-ink/10 bg-paper-alt">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Skills />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Stack />
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Experience />
        </div>
      </div>

      <div className="border-y border-ink/10 bg-paper-soft">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Projects />
        </div>
      </div>

      <section id="education" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-10 border border-night bg-night p-7 text-white dark:border-white/10 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-lime">
              Education
            </p>
            <h2 className="mt-6 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              Bachelor of Arts in Psychology
            </h2>
            <p className="mt-5 text-lg font-semibold text-white/65">
              Mount Kenya University / Dec 2025
            </p>
            <p className="mt-5 max-w-xl leading-8 text-white/65">
              Focus on Human-Computer Interaction, user behavioral mapping, research methods, and accessibility.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full bg-lime px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-night">
                HCI
              </span>
              <span className="rounded-full border border-white/20 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white">
                Research methods
              </span>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-white/45">
              Fellowship
            </p>
            <h3 className="mt-5 text-3xl font-black">Women Techsters Fellowship</h3>
            <p className="mt-3 font-semibold text-white/65">Tech4Dev / Aug 2025 - Oct 2026</p>
            <p className="mt-5 leading-8 text-white/65">
              Frontend Development track.
            </p>
          </div>
        </div>
      </section>
    </main>

    <footer className="bg-night px-5 py-14 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <h2 className="text-3xl font-black">Goodness Gibendi</h2>
          <p className="mt-2 text-[11px] font-black uppercase tracking-[0.28em] text-white/40">
            Systems & integrations architect / Frontend developer
          </p>
        </div>
        <a
          href="mailto:gibendigoodness@gmail.com?subject=Project Inquiry"
          className="group text-2xl font-black text-lime underline decoration-white/20 underline-offset-8 transition hover:text-white"
        >
          Let's build something together
          <span className="ml-2 inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
        </a>
      </div>
    </footer>

    <BackToTop />
  </div>
);

export default Portfolio;
