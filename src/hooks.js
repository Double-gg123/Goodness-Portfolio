import { createElement, useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/* Fades its children in the first time they scroll into view. */
export const Reveal = ({ as = 'div', delay = 0, className = '', style, children, ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined' || prefersReducedMotion()) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `reveal ${visible ? 'is-visible' : ''} ${className}`,
      style: { ...style, '--reveal-delay': `${delay}ms` },
      ...rest,
    },
    children,
  );
};

/* Returns the id of the section currently in the middle of the viewport. */
export const useActiveSection = (ids) => {
  const [active, setActive] = useState('');
  const key = ids.join(',');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    key.split(',').forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [key]);

  return active;
};

/* Scroll progress from 0 to 1. */
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return progress;
};

/* Light/dark theme, saved in localStorage and defaulting to the OS setting. */
export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = window.localStorage?.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage?.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  return [theme, toggle];
};

/* Types each word, pauses, deletes it, then moves on to the next one. */
// When `paused` (or the visitor prefers reduced motion) it shows the current word in full and stops.
export const useTypewriter = (words, { paused = false, typeMs = 70, deleteMs = 40, holdMs = 1800 } = {}) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(prefersReducedMotion() ? words[0] : '');
  const [deleting, setDeleting] = useState(false);
  const still = paused || prefersReducedMotion();

  useEffect(() => {
    if (still) return undefined;
    const word = words[index % words.length];
    let delay = deleting ? deleteMs : typeMs;
    if (!deleting && text === word) delay = holdMs;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs, still]);

  return still ? words[index % words.length] : text;
};
