import React from 'react';
import Avatar from './Avatar';
import { ArrowRight } from './Icons';

const Header = () => (
  <header id="top" className="relative">
    <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-8 md:px-8 md:pb-24 md:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
      <div>
        <h1 className="font-display text-[clamp(2.6rem,5.2vw,4.4rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink">
          I build the interface, and wire up the systems behind it.
        </h1>
        <p className="mt-7 max-w-[34rem] text-xl leading-relaxed text-muted md:text-[1.375rem]">
          Frontend developer working in React, Next.js and TypeScript. I connect web apps to the payments, messaging and AI they depend on, and a psychology degree keeps the people using them in view.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#work"
            className="group inline-flex min-h-[52px] items-center gap-2 rounded-full bg-accent px-7 text-base font-semibold text-on-accent transition-transform duration-300 ease-out hover:-translate-y-0.5"
          >
            See my work
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-[52px] items-center rounded-full border border-line px-7 text-base font-semibold text-ink transition-colors hover:border-ink"
          >
            Get in touch
          </a>
        </div>

        <p className="mt-10 max-w-[34rem] text-[15px] leading-relaxed text-body">
          <span className="font-semibold text-accent">Now, full-time at Wakandi:</span> building the M-Pesa, SMS and AI integrations behind Jamii Connect, a platform in production for Kenyan SACCOs and churches.
        </p>

        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-faint">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Open to remote roles and freelance work
          </li>
          <li>English · Kiswahili</li>
        </ul>
      </div>

      <div className="order-first lg:order-none">
        <Avatar />
      </div>
    </div>
  </header>
);

export default Header;
