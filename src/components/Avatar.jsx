import React, { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../hooks';

// Illustration colours. Fixed, not theme tokens: they are the character, not the UI.
const SKIN = '#5b3a26';
const SKIN_SHADE = '#4a2e1e';
const HAIR = '#24170f';
const HAIR_LIGHT = '#33231a';
const OUTFIT = '#ff8a3d';
const FRAME = '#120c08';

// The tools she connects, wired to the character. Highlighted ones are her signature integrations.
const nodes = [
  { label: 'React', x: 18, y: 76, to: [176, 262], side: 'l' },
  { label: 'Next.js', x: 0, y: 206, to: [176, 290], side: 'l' },
  { label: 'M-Pesa', x: 18, y: 336, to: [168, 392], side: 'l', hot: true },
  { label: 'SMS', x: 370, y: 76, to: [304, 262], side: 'r' },
  { label: 'Claude API', x: 370, y: 206, to: [304, 290], side: 'r', hot: true },
  { label: 'n8n', x: 370, y: 336, to: [312, 392], side: 'r' },
];
const NODE_W = 110;
const NODE_H = 36;

// Locs hang from the crown to the shoulders.
const backLocs = Array.from({ length: 12 }, (_, i) => ({ x: 170 + i * 12.5, len: 178 + ((i * 37) % 40) }));

const Avatar = () => {
  const svgRef = useRef(null);
  const [look, setLook] = useState({ x: 0, y: 0, tilt: 0 });
  const [blink, setBlink] = useState(false);
  const [still] = useState(prefersReducedMotion);

  const doBlink = () => {
    if (still) return;
    setBlink(true);
    window.setTimeout(() => setBlink(false), 140);
  };

  // Two blinks as the page settles (well under 5 seconds), then only on hover or focus.
  useEffect(() => {
    if (still) return undefined;
    const timers = [900, 2700].map((t) => window.setTimeout(doBlink, t));
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Eyes follow the pointer; the head tilts a little toward it.
  useEffect(() => {
    if (still || !window.matchMedia?.('(pointer: fine)').matches) return undefined;
    let frame = 0;
    let last = null;
    const update = () => {
      frame = 0;
      const svg = svgRef.current;
      if (!svg || !last) return;
      const r = svg.getBoundingClientRect();
      const cx = r.left + r.width * 0.5;
      const cy = r.top + r.height * 0.43;
      const dx = last.x - cx;
      const dy = last.y - cy;
      const dist = Math.hypot(dx, dy) || 1;
      const reach = Math.min(dist / 160, 1);
      setLook({
        x: (dx / dist) * 3.6 * reach,
        y: (dy / dist) * 2.6 * reach,
        tilt: Math.max(-4, Math.min(4, dx / 120)),
      });
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

  const lid = { transform: `scaleY(${blink ? 1 : 0})`, transition: 'transform 70ms ease-out' };

  return (
    <figure className="relative mx-auto w-full max-w-[480px]" onMouseEnter={doBlink}>
      <svg
        ref={svgRef}
        viewBox="0 0 480 480"
        className="h-auto w-full"
        role="img"
        aria-label="Illustration of Goodness: deep brown skin, shoulder-length locs, round glasses and an orange top, wired to the tools she connects: React, Next.js, M-Pesa, SMS, the Claude API and n8n."
      >
        {/* Wires from each tool to the character */}
        {nodes.map((n, i) => {
          const sx = n.side === 'l' ? n.x + NODE_W : n.x;
          const sy = n.y + NODE_H / 2;
          const [tx, ty] = n.to;
          const mx = (sx + tx) / 2;
          return (
            <path
              key={`w-${n.label}`}
              d={`M${sx} ${sy} C${mx} ${sy} ${mx} ${ty} ${tx} ${ty}`}
              className={`wire ${n.hot ? 'stroke-accent' : 'stroke-line'}`}
              strokeWidth={n.hot ? 2 : 1.5}
              strokeDasharray={n.hot ? undefined : '4 5'}
              fill="none"
              style={{ '--d': `${200 + i * 90}ms` }}
            />
          );
        })}

        {/* Character */}
        <g style={{ transform: `rotate(${look.tilt}deg)`, transformOrigin: '240px 330px', transition: 'transform 600ms cubic-bezier(0.16,1,0.3,1)' }}>
          {/* Locs behind the head */}
          <g>
            {backLocs.map((l, i) => (
              <rect key={`bl-${l.x}`} x={l.x - 7} y={150} width={14} height={l.len} rx={7} fill={i % 2 ? HAIR_LIGHT : HAIR} />
            ))}
          </g>

          {/* Shoulders and top */}
          <path d="M112 480 C112 396 168 360 240 360 C312 360 368 396 368 480 Z" fill={OUTFIT} />
          <path d="M216 296 L264 296 L266 364 Q240 380 214 364 Z" fill={SKIN_SHADE} />
          <path d="M210 362 Q240 396 270 362 Z" fill={SKIN} />

          {/* Front locs falling over the shoulders */}
          {[160, 172, 184].map((x) => (
            <rect key={`fl-${x}`} x={x - 7} y={168} width={14} height={210 - (x - 160)} rx={7} fill={x === 172 ? HAIR_LIGHT : HAIR} />
          ))}
          {[296, 308, 320].map((x) => (
            <rect key={`fr-${x}`} x={x - 7} y={168} width={14} height={186 + (x - 296)} rx={7} fill={x === 308 ? HAIR_LIGHT : HAIR} />
          ))}

          {/* Ears and earrings */}
          <ellipse cx="176" cy="214" rx="10" ry="15" fill={SKIN_SHADE} />
          <ellipse cx="304" cy="214" rx="10" ry="15" fill={SKIN_SHADE} />
          <circle cx="176" cy="236" r="5" fill={OUTFIT} />
          <circle cx="304" cy="236" r="5" fill={OUTFIT} />

          {/* Face */}
          <ellipse cx="240" cy="206" rx="64" ry="78" fill={SKIN} />
          <ellipse cx="200" cy="242" rx="11" ry="6" fill="#c0634a" opacity="0.28" />
          <ellipse cx="280" cy="242" rx="11" ry="6" fill="#c0634a" opacity="0.28" />

          {/* Hair crown with loc texture */}
          <path d="M170 214 C158 128 204 104 240 104 C278 104 322 128 310 214 C302 168 282 146 240 144 C198 146 178 168 170 214 Z" fill={HAIR} />
          <path d="M196 120 Q200 140 196 160 M222 110 Q226 132 222 150 M248 108 Q252 130 248 148 M274 114 Q278 136 274 156 M298 128 Q302 150 298 170" stroke={HAIR_LIGHT} strokeWidth="5" strokeLinecap="round" fill="none" />

          {/* Brows */}
          <path d="M194 184 Q208 176 224 182" stroke="#1a110b" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M256 182 Q272 176 286 184" stroke="#1a110b" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* Eyes: whites, pupils that track, lids that blink */}
          <ellipse cx="210" cy="210" rx="9.5" ry="7" fill="#f4ece4" />
          <ellipse cx="270" cy="210" rx="9.5" ry="7" fill="#f4ece4" />
          <g style={{ transform: `translate(${look.x}px, ${look.y}px)`, transition: 'transform 120ms ease-out' }}>
            <circle cx="210" cy="210" r="4.4" fill="#1a110b" />
            <circle cx="270" cy="210" r="4.4" fill="#1a110b" />
            <circle cx="211.6" cy="208.4" r="1.3" fill="#ffffff" />
            <circle cx="271.6" cy="208.4" r="1.3" fill="#ffffff" />
          </g>
          <rect x="198" y="201" width="24" height="18" fill={SKIN} style={{ ...lid, transformOrigin: '210px 201px' }} />
          <rect x="258" y="201" width="24" height="18" fill={SKIN} style={{ ...lid, transformOrigin: '270px 201px' }} />

          {/* Round glasses */}
          <circle cx="210" cy="210" r="22" fill="rgba(255,255,255,0.07)" stroke={FRAME} strokeWidth="3.5" />
          <circle cx="270" cy="210" r="22" fill="rgba(255,255,255,0.07)" stroke={FRAME} strokeWidth="3.5" />
          <path d="M232 208 Q240 202 248 208 M188 206 L176 201 M292 206 L304 201" stroke={FRAME} strokeWidth="3.5" strokeLinecap="round" fill="none" />

          {/* Nose and smile */}
          <path d="M238 222 Q242 238 233 243 Q240 248 248 244" stroke="#3a2416" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M220 258 Q240 274 260 258" stroke="#2a160d" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        </g>

        {/* Tool nodes, on top of the wires */}
        {nodes.map((n, i) => (
          <g key={`n-${n.label}`} className="node" style={{ '--d': `${700 + i * 90}ms` }}>
            <rect
              x={n.x + 1}
              y={n.y}
              width={NODE_W - 2}
              height={NODE_H}
              rx={NODE_H / 2}
              className={`fill-card ${n.hot ? 'stroke-accent' : 'stroke-line'}`}
              strokeWidth="1.5"
            />
            <text
              x={n.x + NODE_W / 2}
              y={n.y + NODE_H / 2 + 5}
              textAnchor="middle"
              className={`font-mono ${n.hot ? 'fill-accent' : 'fill-ink'}`}
              style={{ fontSize: 14 }}
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
};

export default Avatar;
