import React, { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Stack from './components/Stack';
import About from './components/About';
import { ArrowUp, ArrowUpRight, ChatIcon, CheckIcon, CopyIcon, MailIcon, NewTab } from './components/Icons';
import { useScrollProgress } from './hooks';
import { EMAIL, WHATSAPP_URL } from './contact';

const BackToTop = () => {
  const progress = useScrollProgress();
  const visible = progress > 0.15 && progress < 0.95;

  return (
    <a
      href="#top"
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-card text-ink shadow-[0_4px_12px_rgba(0,0,0,0.3)] ring-1 ring-line transition duration-300 ease-out hover:-translate-y-1 ${
        visible ? 'opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp />
    </a>
  );
};

/* Copies the email, for visitors without a mail app set up. */
const CopyEmail = () => {
  const [status, setStatus] = useState('idle'); // idle | copied | failed
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setStatus('copied');
      window.setTimeout(() => setStatus('idle'), 2500);
    } catch {
      setStatus('failed');
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={copy}
        className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-line px-6 font-semibold text-ink transition-colors hover:border-ink"
      >
        {status === 'copied' ? <CheckIcon className="h-5 w-5 text-accent" /> : <CopyIcon className="h-5 w-5" />}
        {status === 'copied' ? 'Email copied' : 'Copy email'}
      </button>
      <p aria-live="polite" className="m-0 text-sm text-muted">
        {status === 'failed' && `Couldn't copy automatically. The address is ${EMAIL}.`}
      </p>
    </div>
  );
};

const Section = ({ children, alt }) => (
  <div className={alt ? 'border-y border-line bg-paper-alt' : ''}>
    <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">{children}</div>
  </div>
);

const Portfolio = () => (
  <div className="min-h-screen overflow-x-clip bg-paper font-sans text-ink">
    <a
      href="#work"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:font-semibold focus:text-on-accent"
    >
      Skip to case studies
    </a>
    <Nav />
    <Header />

    <main>
      <Section alt>
        <Projects />
      </Section>
      <Section>
        <Experience />
      </Section>
      <Section alt>
        <Services />
      </Section>
      <Section>
        <Stack />
      </Section>
      <Section alt>
        <About />
      </Section>

      <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <h2 id="contact-title" className="max-w-4xl font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink">
          Need an interface, and the systems behind it?
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Open to remote frontend roles and freelance projects. Email or WhatsApp, whichever suits you.
        </p>
        <div className="mt-10 flex flex-wrap items-start gap-3">
          <a
            href={`mailto:${EMAIL}?subject=Hello%20Goodness`}
            className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-accent px-6 font-semibold text-on-accent transition-transform duration-300 ease-out hover:-translate-y-0.5"
          >
            <MailIcon className="h-5 w-5" />
            {EMAIL}
          </a>
          <CopyEmail />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-line px-6 font-semibold text-ink transition-colors hover:border-ink"
          >
            <ChatIcon className="h-5 w-5" />
            WhatsApp
            <NewTab />
          </a>
        </div>
      </section>
    </main>

    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-5 py-10 md:flex-row md:items-center md:px-8">
        <p className="m-0 text-muted">
          <span className="font-semibold text-ink">Goodness Gibendi</span> · Frontend developer · Thika, Kenya
        </p>
        <ul className="m-0 flex flex-wrap gap-2 p-0">
          {[
            ['LinkedIn', 'https://www.linkedin.com/in/goodness-gibendi/'],
            ['GitHub', 'https://github.com/Double-gg123'],
          ].map(([label, href]) => (
            <li key={label} className="list-none">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-4 font-medium text-muted transition-colors hover:text-ink"
              >
                {label}
                <ArrowUpRight className="h-4 w-4" />
                <NewTab />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>

    <BackToTop />
  </div>
);

export default Portfolio;
