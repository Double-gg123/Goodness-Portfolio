import React, { useEffect, useRef, useState } from 'react';
import { Reveal } from '../hooks';

const stats = [
  { value: 4, suffix: 'x', label: 'Organic traffic growth for a consulting platform' },
  { value: 10, suffix: 'k', label: 'Email subscribers grown with Mailchimp automation' },
  { value: 10, suffix: ' hrs', label: 'Saved each week by automating 5 workflows' },
];

/* Counts up from 0 once, the first time the number scrolls into view. */
const CountUp = ({ value, suffix }) => {
  const ref = useRef(null);
  const [n, setN] = useState(value);

  useEffect(() => {
    const node = ref.current;
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!node || typeof IntersectionObserver === 'undefined' || reduced) return undefined;

    setN(0);
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / 1000, 1);
        setN(Math.round(value * (1 - (1 - t) ** 3)));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="section-kicker">Professional profile</p>
        <h2 className="mt-4 text-4xl font-black leading-tight tracking-normal text-ink md:text-6xl">
          Engineering shaped by human insight.
        </h2>
      </div>

      <div className="space-y-8">
        <p className="text-2xl font-semibold leading-10 text-body">
          I'm a frontend developer and systems architect. I've delivered frontend migrations, built payment and banking integrations, automated business workflows, and grown traffic and sales for consulting platforms and impact-driven brands.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="border-t border-ink pt-5">
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-accent">Code</h3>
            <p className="mt-3 leading-7 text-muted">
              React, Next.js, TypeScript and Laravel on the build side; REST APIs, M-Pesa, OAuth and n8n to connect it all; Docker and nginx to ship it.
            </p>
          </div>
          <div className="border-t border-ink pt-5">
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-accent">Cognition</h3>
            <p className="mt-3 leading-7 text-muted">
              A psychology degree focused on HCI and behavioral mapping shapes how I simplify flows, reduce cognitive load, and design for accessibility.
            </p>
          </div>
        </div>
        <div className="grid gap-5 pt-4 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} className="border-t border-ink/10 pt-5">
              <p className="text-5xl font-black text-ink md:text-6xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs font-bold leading-5 text-faint">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
