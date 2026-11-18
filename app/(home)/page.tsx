"use client";

import { useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Header from './_components/Header';
import TechStack from '@/components/TechStack';
import ExperienceAndEducation from '@/components/Experience';
import Projects from '../projects/_components/Projects';

// Depth controls decoration only; the document's height comes from its content.
const mountains = [0.5, 0.42, 0.34, 0.26, 0.18, 0.1, 0];

const HomePage = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const layers = hero.querySelectorAll<HTMLElement>('[data-depth]');
    let frame = 0;

    const update = () => {
      frame = 0;
      const { top, height } = hero.getBoundingClientRect();
      const distance = motion.matches ? 0 : Math.min(height, Math.max(0, -top));
      layers.forEach((layer) => {
        layer.style.transform = `translate3d(0, ${distance * Number(layer.dataset.depth)}px, 0)`;
      });
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    motion.addEventListener('change', schedule);
    update();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      motion.removeEventListener('change', schedule);
    };
  }, []);

  return (
    <main className="bg-main">
      <section ref={heroRef} className="mountain-hero">
        <div className="mountain-scenery" aria-hidden="true">
          {mountains.map((depth, index) => (
            <div
              key={index}
              data-depth={depth}
              className="mountain-layer"
              style={{ backgroundImage: `url(/peak${index + 1}.svg)` }}
            />
          ))}
        </div>
        <div className="mountain-hero-content">
          <Navbar />
          <Header />
        </div>
      </section>
      <div className="relative flex flex-col gap-8 bg-main">
        <TechStack />
        <ExperienceAndEducation />
        <Projects />
      </div>
    </main>
  );
};

export default HomePage;
