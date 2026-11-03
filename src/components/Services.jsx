import React from 'react';
import { WHATSAPP_URL } from '../contact';
import { ChatIcon, NewTab } from './Icons';

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

const steps = [
  ['Message me', 'On WhatsApp or by email: tell me what you need and who it is for.'],
  ['We talk it through', 'A short call to agree what to build and what success looks like.'],
  ['You get a quote', 'A written plan with scope, timeline and price before any work starts.'],
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
        <p lang="sw" className="mt-3 max-w-sm leading-relaxed text-body">
          Karibu! Tunaweza kuzungumza kwa Kiswahili au Kiingereza.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex min-h-[52px] items-center gap-2 rounded-full bg-accent px-6 font-semibold text-on-accent transition-transform duration-300 ease-out hover:-translate-y-0.5"
        >
          <ChatIcon className="h-5 w-5" />
          Message me on WhatsApp
          <NewTab />
        </a>
      </div>

      <div>
        <dl className="m-0">
          {services.map((s) => (
            <div key={s.title} className="grid gap-2 border-t border-line py-7 sm:grid-cols-[13rem_1fr] sm:gap-8">
              <dt className="font-display text-xl font-bold text-ink">{s.title}</dt>
              <dd className="m-0 leading-relaxed text-body">{s.text}</dd>
            </div>
          ))}
        </dl>

        <h3 className="mt-10 font-display text-xl font-bold text-ink">How we work</h3>
        <ol className="m-0 mt-4 list-none p-0">
          {steps.map(([title, text], i) => (
            <li key={title} className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-t border-line py-4">
              <span className="font-display text-2xl font-extrabold leading-none text-accent" aria-hidden="true">
                {i + 1}
              </span>
              <span>
                <span className="block font-semibold text-ink">{title}</span>
                <span className="mt-1 block leading-relaxed text-body">{text}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Services;
