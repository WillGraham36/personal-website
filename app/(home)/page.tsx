"use client";

import { useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Header from './_components/Header';
import TechStack from '@/components/TechStack';
import ExperienceAndEducation from '@/components/Experience';
import Projects from '../projects/_components/Projects';
import ContactMe from '@/components/ContactMe';

import MountainScenery from './_components/MountainScenery';

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
      <section id="home" ref={heroRef} className="mountain-hero">
        <MountainScenery />
        <div className="mountain-hero-content">
          <Navbar />
          <Header />
        </div>
      </section>
      <div className="relative flex flex-col gap-8 bg-main">
        <TechStack />
        <ExperienceAndEducation />
        <section id="projects" className="scroll-mt-6" aria-label="Personal projects">
          <Projects />
        </section>
        <section id="contact" className="scroll-mt-6" aria-label="Contact">
          <ContactMe />
        </section>
      </div>
    </main>
  );
};

export default HomePage;
