/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import ExtraInfo from './components/ExtraInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollProgressBar from './components/ScrollProgressBar';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');

  useEffect(() => {
    // Elegant Intersection Observer to follow scroll active divisions on the navbar
    const sections = ['inicio', 'sobre', 'servicos', 'projetos', 'processo', 'contato'];
    const observers: IntersectionObserver[] = [];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // focused in center viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleScrollToProjects = () => {
    const target = document.querySelector('#projetos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-dark-deep font-sans text-light-white relative min-h-screen selection:bg-red-dark selection:text-light-white overflow-hidden">
      
      {/* Sleek Minimalist Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Immersive UI Background Blurs & Grid Lines */}
      <div className="absolute top-0 right-0 w-[530px] h-[530px] bg-[#9E1B32] opacity-5 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#9E1B32] opacity-5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none z-0" />
      
      <div className="absolute top-[30%] left-0 w-full h-[1px] bg-[#222222] opacity-20 pointer-events-none z-0" />
      <div className="absolute top-0 left-1/3 w-[1px] h-full bg-[#222222] opacity-20 pointer-events-none z-0" />

      {/* Cinematic Film-Grain Ambient Overlay */}
      <div className="film-grain" />

      {/* Navigation bar with dynamic active highlights */}
      <Navbar activeSection={activeSection} />

      {/* Page Content divided cleanly with cinematic border margins */}
      <main>
        
        {/* Hero Showcase segment */}
        <Hero onExploreProjects={handleScrollToProjects} />

        {/* Human Bio section */}
        <About />

        {/* Dynamic Interactive Solutions & Custom Idea Pipeline */}
        <Services />

        {/* Dynamic Category Case Archive & Study Modal */}
        <Projects />

        {/* Work Process flow storyboard */}
        <Process />

        {/* Commercial Differentials & Tech tagging space */}
        <ExtraInfo />

        {/* Lead collector form fully validated & WhatsApp bridge */}
        <Contact />

      </main>

      {/* Global standard dynamic footer */}
      <Footer />

      {/* pulsation WhatsApp floating contact toggle */}
      <FloatingWhatsApp />

    </div>
  );
}
