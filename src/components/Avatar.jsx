import React, { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../hooks';
import { ArrowRight } from './Icons';

// Layout in SVG units. Goodness's portrait sits in a hub ring; each tool is wired to the ring.
const VB_W = 720;
const VB_H = 490;
const HUB = { cx: 360, cy: 230, r: 165 };
const NODE_W = 176;
const NODE_H = 50;

// `used` lists the case studies on this page that use the tool (ids from Projects.jsx).
const nodes = [
  { label: 'React', x: 0, y: 50, used: [['The Career Whisperer', 'case-the-career-whisperer'], ['Digital Chama', 'case-digital-chama']] },
  { label: 'Next.js', x: 0, y: 208, used: [['Jamii Connect', 'case-jamii-connect'], ['Briwnet Awards', 'case-briwnet-awards']] },
  { label: 'M-Pesa', x: 0, y: 366, hot: true, used: [['Jamii Connect', 'case-jamii-connect'], ['Digital Chama', 'case-digital-chama']] },
  { label: 'SMS', x: VB_W - NODE_W, y: 50, used: [['Jamii Connect', 'case-jamii-connect'], ['Digital Chama', 'case-digital-chama']] },
  { label: 'Claude API', x: VB_W - NODE_W, y: 208, hot: true, used: [['Jamii Connect', 'case-jamii-connect']] },
  { label: 'n8n', x: VB_W - NODE_W, y: 366, used: [['The Career Whisperer', 'case-the-career-whisperer']] },
];

// Where a node's wire meets the hub ring: same height as the node, kept off the ring's top and bottom.
const ringPoint = (n) => {
  const left = n.x < HUB.cx;
  const dy = Math.max(-120, Math.min(120, n.y + NODE_H / 2 - HUB.cy));
  const dx = Math.sqrt(HUB.r * HUB.r - dy * dy);
  return [HUB.cx + (left ? -dx : dx), HUB.cy + dy];
};

const Avatar = () => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [still] = useState(prefersReducedMotion);
  // The tool whose projects are showing: `hover` follows the pointer, `pinned` is set by click or tap.
  const [hover, setHover] = useState(null);
  const [pinned, setPinned] = useState(null);
  const active = hover ?? pinned;
  const activeNode = nodes.find((n) => n.label === active);

  // Escape closes the card however it was opened (hover, focus or click); a click elsewhere closes a pinned one.
  useEffect(() => {
    if (!active) return undefined;
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      setPinned(null);
      setHover(null);
    };
    const onDown = (e) => !ref.current?.contains(e.target) && setPinned(null);
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onDown);
    };
  }, [active]);

  // The portrait turns a few degrees toward the pointer (mouse and trackpad only).
  useEffect(() => {
    if (still || !window.matchMedia?.('(pointer: fine)').matches) return undefined;
    let frame = 0;
    let last = null;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el || !last) return;
      const r = el.getBoundingClientRect();
      const dx = (last.x - (r.left + r.width / 2)) / window.innerWidth;
      const dy = (last.y - (r.top + r.height * 0.4)) / window.innerHeight;
      setTilt({ x: Math.max(-1, Math.min(1, dx * 2)) * 7, y: Math.max(-1, Math.min(1, dy * 2)) * -5 });
    };
    const onMove = (e) => {
      last = { x: e.clientX, y: e.clientY };
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [still]);

  const pct = (v, total) => `${(v / total) * 100}%`;

  return (
    <figure
      ref={ref}
      onMouseLeave={() => setHover(null)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setHover(null)}
      className="relative mx-auto w-full max-w-[330px] sm:max-w-[440px] lg:max-w-[580px]">
      <div className="relative" style={{ aspectRatio: `${VB_W} / ${VB_H}` }}>
        {/* Hub ring and wires, behind the portrait */}
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
          <circle cx={HUB.cx} cy={HUB.cy} r={HUB.r} className="ring fill-card stroke-faint" strokeWidth="1.5" />
          {nodes.map((n, i) => {
            const left = n.x < HUB.cx;
            const sx = left ? n.x + NODE_W : n.x;
            const sy = n.y + NODE_H / 2;
            const [tx, ty] = ringPoint(n);
            const mx = (sx + tx) / 2;
            return (
              <g key={`w-${n.label}`}>
                <path
                  d={`M${sx} ${sy} C${mx} ${sy} ${mx} ${ty} ${tx} ${ty}`}
                  className={`wire transition-[stroke-width,opacity] duration-300 ${n.hot || active === n.label ? 'stroke-accent' : 'stroke-faint'} ${
                    active && active !== n.label ? 'opacity-30' : 'opacity-100'
                  }`}
                  strokeWidth={active === n.label ? 4 : n.hot ? 2.5 : 1.5}
                  fill="none"
                  style={{ '--d': `${300 + i * 90}ms` }}
                />
                <circle
                  cx={tx}
                  cy={ty}
                  r={active === n.label ? 7 : 5}
                  className={`node transition-all duration-300 ${active === n.label ? 'fill-accent stroke-accent' : `fill-paper ${n.hot ? 'stroke-accent' : 'stroke-faint'}`}`}
                  strokeWidth="2"
                  style={{ '--d': `${700 + i * 90}ms` }}
                />
              </g>
            );
          })}
        </svg>

        {/* Portrait: rises in once, then follows the pointer a little */}
        <div
          className="node absolute"
          style={{
            '--d': '150ms',
            left: pct(190, VB_W),
            width: pct(340, VB_W),
            top: pct(60, VB_H),
            perspective: '900px',
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/goodness.webp`}
            alt="Illustration of Goodness Gibendi: short auburn hair, round gold glasses, pearl earrings and a black shirt, smiling."
            width="720"
            height="857"
            fetchPriority="high"
            decoding="async"
            className="block h-auto w-full"
            style={{
              transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transformOrigin: '50% 70%',
              transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
              WebkitMaskImage: 'linear-gradient(to bottom, #000 72%, transparent 97%), linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%)',
              WebkitMaskComposite: 'source-in',
              maskComposite: 'intersect',
              maskImage: 'linear-gradient(to bottom, #000 72%, transparent 97%), linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%)',
            }}
          />
        </div>

        {/* Tool nodes: hover, focus or tap to see the projects that use each tool */}
        {nodes.map((n, i) => {
          const isActive = active === n.label;
          return (
            <div
              key={`n-${n.label}`}
              className="node absolute z-10"
              style={{ '--d': `${750 + i * 90}ms`, left: pct(n.x, VB_W), top: pct(n.y, VB_H), width: pct(NODE_W, VB_W), height: pct(NODE_H, VB_H) }}
            >
              <button
                type="button"
                aria-label={`${n.label}: show projects that use it`}
                aria-expanded={isActive}
                aria-controls="tool-projects"
                // Mouse hover and keyboard focus preview a tool; a click or tap toggles it. Touch fires
                // neither preview, so the first tap opens the card instead of closing a preview.
                onPointerEnter={(e) => e.pointerType === 'mouse' && setHover(n.label)}
                onFocus={(e) => e.currentTarget.matches(':focus-visible') && setHover(n.label)}
                onClick={() => {
                  setHover(null);
                  setPinned((p) => (p === n.label ? null : n.label));
                }}
                className={`relative flex h-full w-full items-center justify-center whitespace-nowrap rounded-full border font-mono text-[12px] transition-colors duration-200 before:absolute before:-inset-x-1.5 before:-inset-y-3 before:content-[''] sm:text-sm lg:text-[15px] ${
                  isActive
                    ? 'border-accent bg-accent text-on-accent'
                    : `bg-card ${n.hot ? 'border-accent text-accent' : 'border-faint text-ink'} hover:border-accent`
                }`}
              >
                {n.label}
              </button>
            </div>
          );
        })}
      </div>

      {/* One panel under the portrait: a hint by default, or the projects for the selected tool. Never covers her face. */}
      {/* Only the hint's height is reserved; the card floats over the caption and space below, so nothing jumps. */}
      <div id="tool-projects" aria-live="polite" className="relative mx-auto mt-2 h-7 max-w-sm">
        {activeNode ? (
          <div className="absolute inset-x-0 top-0 z-30 rounded-xl border border-line bg-card p-3 shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
            <p className="m-0 px-2 pb-1 text-xs font-semibold text-faint">Where I used {activeNode.label}</p>
            <ul className="m-0 flex list-none flex-col p-0">
              {activeNode.used.map(([name, id]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => {
                      setPinned(null);
                      setHover(null);
                    }}
                    className="flex min-h-[44px] items-center gap-2 rounded-lg px-2 font-semibold text-ink transition-colors hover:bg-paper hover:text-accent"
                  >
                    {name}
                    <ArrowRight className="h-4 w-4 shrink-0 text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="m-0 pt-2 text-center text-sm text-faint">
            <span className="[@media(hover:hover)]:hidden">Tap</span>
            <span className="hidden [@media(hover:hover)]:inline">Hover over</span> a tool to see where I used it
          </p>
        )}
      </div>

      <figcaption className="mt-1 text-center">
        <span className="block text-sm text-faint">Frontend developer · Thika, Kenya · English &amp; Kiswahili</span>
        <span className="sr-only">Shown wired to the tools she connects: React, Next.js, M-Pesa, SMS, the Claude API and n8n.</span>
      </figcaption>
    </figure>
  );
};

export default Avatar;
