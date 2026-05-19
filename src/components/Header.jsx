import React from 'react';

const contactItems = [
  { label: 'Location', value: 'Thika, Kenya' },
  { label: 'Phone', value: '+254 718 175283' },
  { label: 'Email', value: 'gibendigoodness@gmail.com', href: 'mailto:gibendigoodness@gmail.com' },
];

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-[#f7f4ee] text-[#181818]">
      <div className="absolute inset-x-0 top-0 h-px bg-[#181818]/10" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
        <a href="#top" className="text-sm font-black uppercase tracking-[0.28em]">
          GG
        </a>
        <div className="hidden items-center gap-8 text-[11px] font-black uppercase tracking-[0.24em] text-[#58534b] md:flex">
          <a className="transition hover:text-[#181818]" href="#about">About</a>
          <a className="transition hover:text-[#181818]" href="#skills">Skills</a>
          <a className="transition hover:text-[#181818]" href="#experience">Experience</a>
          <a className="transition hover:text-[#181818]" href="#projects">Projects</a>
        </div>
        <a
          href="mailto:gibendigoodness@gmail.com?subject=Project Inquiry"
          className="rounded-full bg-[#181818] px-5 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#2f7f62]"
        >
          Hire me
        </a>
      </nav>

      <div id="top" className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-14 pt-10 md:px-8 md:pb-20 md:pt-16 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="mb-6 max-w-max border-y border-[#181818]/20 py-3 text-[11px] font-black uppercase tracking-[0.32em] text-[#2f7f62]">
            Frontend engineer and systems architect
          </p>
          <h1 className="max-w-5xl text-6xl font-black leading-[0.92] tracking-normal text-[#181818] md:text-8xl lg:text-9xl">
            Goodness Gibendi
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-[#58534b] md:text-2xl md:leading-9">
            I build responsive interfaces, workflow systems, and dashboards that make complex information feel calm, useful, and human.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://github.com/Double-gg123"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#181818] px-6 py-3 text-xs font-black uppercase tracking-[0.2em] transition hover:bg-[#181818] hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/goodness-gibendi/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#d7f264] px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-[#181818] transition hover:bg-[#c7e64b]"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <aside className="border-t border-[#181818] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <div className="mb-10">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#7b756b]">
              Availability
            </p>
            <p className="mt-3 text-3xl font-black leading-tight">
              Open to frontend and automation projects.
            </p>
          </div>

          <div className="space-y-5">
            {contactItems.map((item) => (
              <div key={item.label} className="grid grid-cols-[92px_1fr] gap-4 border-t border-[#181818]/10 pt-5">
                <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#8a8378]">
                  {item.label}
                </span>
                {item.href ? (
                  <a className="font-semibold text-[#181818] hover:text-[#2f7f62]" href={item.href}>
                    {item.value}
                  </a>
                ) : (
                  <span className="font-semibold text-[#181818]">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Header;
