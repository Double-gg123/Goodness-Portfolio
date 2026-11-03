import React from 'react';
import { ChatIcon } from './Icons';

// Written for clients: what they get, in plain language. Tools live in Stack.jsx.
const services = [
  {
    title: 'Websites and web apps',
    text: 'Fast, accessible sites and dashboards in React and Next.js, built to work well on the phones your customers actually use.',
  },
  {
    title: 'Payments and messaging',
    text: 'Take M-Pesa payments and reach people by SMS, WhatsApp and email, with receipts, reminders and records that add up.',
  },
  {
    title: 'Automation and AI',
    text: 'Workflows and AI assistants that take repetitive admin off your team, from lead follow-ups to translating messages into Kiswahili.',
  },
  {
    title: 'Online stores and growth',
    text: 'Shopify stores, email campaigns and technical SEO that bring in visitors and turn them into customers.',
  },
];

const Services = () => (
  <section id="services" aria-labelledby="services-title">
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div>
        <h2 id="services-title" className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
          Work with me
        </h2>
        <p className="mt-5 max-w-sm text-lg leading-relaxed text-muted">
          For SACCOs, churches, NGOs and growing businesses, in Kenya or anywhere remote.
        </p>
        <a
          href="https://wa.me/254718175283"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex min-h-[52px] items-center gap-2 rounded-full bg-accent px-6 font-semibold text-on-accent transition-transform duration-300 ease-out hover:-translate-y-0.5"
        >
          <ChatIcon className="h-5 w-5" />
          Message me on WhatsApp
        </a>
      </div>

      <dl className="m-0">
        {services.map((s) => (
          <div key={s.title} className="grid gap-2 border-t border-line py-7 sm:grid-cols-[13rem_1fr] sm:gap-8">
            <dt className="font-display text-xl font-bold text-ink">{s.title}</dt>
            <dd className="m-0 leading-relaxed text-body">{s.text}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Services;
