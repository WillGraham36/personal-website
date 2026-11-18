"use client";

import { useEffect, useRef } from 'react';

// Original SVG ridgelines and colors; valleys and slope points stay anchored.
const mountains = [
  {"depth": 0.5, "color": "#2d4739", "points": [[0, 276], [129, 225], [257, 262], [386, 258], [514, 283], [643, 262], [771, 231], [900, 216]]},
  {"depth": 0.42, "color": "#244038", "points": [[0, 280], [129, 363], [257, 348], [386, 339], [514, 312], [643, 292], [771, 286], [900, 300]]},
  {"depth": 0.34, "color": "#1e3936", "points": [[0, 314], [129, 387], [257, 302], [386, 362], [514, 348], [643, 362], [771, 315], [900, 402]]},
  {"depth": 0.26, "color": "#1a3232", "points": [[0, 338], [129, 438], [257, 411], [386, 343], [514, 410], [643, 334], [771, 336], [900, 357]]},
  {"depth": 0.18, "color": "#182a2d", "points": [[0, 446], [129, 406], [257, 457], [386, 463], [514, 449], [643, 426], [771, 403], [900, 399]]},
  {"depth": 0.1, "color": "#162327", "points": [[0, 459], [129, 490], [257, 427], [386, 442], [514, 482], [643, 429], [771, 497], [900, 440]]},
  {"depth": 0, "color": "#151d20", "points": [[0, 534], [129, 493], [257, 528], [386, 513], [514, 500], [643, 510], [771, 537], [900, 474]]},
];

const ridgePath = (points: number[][], layer: number, time: number, phases?: number[]) => {
  const ridge = points.map(([x, y], vertex) => {
    // SVG heights run downward, so peaks are local minima (including edge peaks).
    const previous = points[vertex - 1];
    const next = points[vertex + 1];
    const isPeak = (!previous || y < previous[1]) && (!next || y < next[1]);
    const amplitude = 7 + (vertex % 3) * 2;
    const speed = 0.38 + layer * 0.025 + vertex * 0.015;
    const phase = phases?.[vertex] ?? vertex * 2.4 + layer * 1.7;
    // Start at the original height; random phases choose the initial direction.
    const wave = Math.sin(time * speed + phase) - Math.sin(phase);
    const downwardRoom = Math.min(previous ? previous[1] - y : Infinity, next ? next[1] - y : Infinity);
    // Keep shallow peaks above their fixed neighbors when moving downward.
    const travel = wave > 0 ? Math.min(amplitude, downwardRoom * 0.4) : amplitude;
    const offset = isPeak ? travel * wave : 0;
    return `${vertex === 0 ? 'M' : 'L'}${x} ${(y + offset).toFixed(2)}`;
  }).join('');
  return `${ridge}L900 601L0 601Z`;
};

const MountainScenery = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const paths = container.querySelectorAll('path');
    // Randomize once per mount, never during rendering or individual frames.
    const phases = mountains.map(({ points }) => points.map(() => Math.random() * Math.PI * 2));
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let visible = false;
    let previousTime = 0;
    let elapsed = 0;

    const draw = (time: number) => {
      paths.forEach((path, index) => {
        path.setAttribute('d', ridgePath(mountains[index].points, index, time, phases[index]));
      });
    };
    const animate = (timestamp: number) => {
      if (previousTime) elapsed += Math.min(timestamp - previousTime, 64) / 1000;
      previousTime = timestamp;
      draw(elapsed);
      frame = window.requestAnimationFrame(animate);
    };
    const sync = () => {
      window.cancelAnimationFrame(frame);
      previousTime = 0;
      if (motion.matches) {
        elapsed = 0;
        draw(0);
      } else if (visible && !document.hidden) {
        frame = window.requestAnimationFrame(animate);
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(container);
    motion.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      motion.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
    };
  }, []);

  return (
    <div ref={containerRef} className="mountain-scenery" aria-hidden="true">
      {mountains.map(({ depth, color, points }, index) => (
        <div key={index} data-depth={depth} className="mountain-layer">
          <svg viewBox="0 0 900 600" preserveAspectRatio="xMidYMax slice" className="h-full w-full" focusable="false">
            <path d={ridgePath(points, index, 0)} fill={color} />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default MountainScenery;
