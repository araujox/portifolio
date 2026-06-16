/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Film, CheckCircle2 } from 'lucide-react';
import { PROCESS_DATA } from '../data';

export default function Process() {
  return (
    <section id="processo" className="relative py-20 sm:py-28 bg-dark-graphite border-t border-dark-gray overflow-hidden">
      {/* Cinematic Background Spills */}
      <div className="absolute top-[20%] left-[10%] w-96 h-96 rounded-full radial-glow pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-112 h-112 rounded-full radial-glow-corner pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16 max-w-2xl text-left">
          <div className="flex items-center space-x-2">
            <span className="w-4 h-[1px] bg-red-dark"></span>
            <span className="font-mono text-xs tracking-widest text-[#9E1B32] font-semibold uppercase">
              FLUXOGRAMA DE CRIAÇÃO
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-light-white">
            Como um projeto acontece, do zero ao deploy
          </h2>
          <p className="font-sans text-xs sm:text-sm text-text-muted">
            Transparência absoluta em cada corte. Sem surpresas ou taxas ocultas durante a montagem das cenas.
          </p>
        </div>

        {/* Narrative Reel Roadmap */}
        <div className="relative mt-8">
          
          {/* Vertical connecting line on mobile, decorative accent */}
          <div className="absolute left-[20px] sm:left-1/2 top-4 bottom-4 w-[2px] bg-dark-dark-gray/30 timeline-line -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 md:space-y-20 relative">
            {PROCESS_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={item.step}
                  className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Center Node - Desktop only */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-12">
                    <div className="w-10 h-10 rounded-full bg-dark-deep border-2 border-red-dark flex items-center justify-center glow-sm">
                      <span className="font-mono text-xs font-bold text-red-live">{item.step}</span>
                    </div>
                  </div>

                  {/* Left Column Content panel */}
                  <div className={`w-full md:w-[45%] text-left ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    
                    <div className={`bg-dark-deep/40 border border-dark-gray p-6 rounded-sm shadow-xl hover:border-red-dark/20 transition-all duration-300 relative group`}>
                      
                      {/* Ambient card node indicator for mobile */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-dark-gray/60">
                        <div className="flex items-center space-x-2">
                          <Film className="w-3.5 h-3.5 text-red-dark shrink-0" />
                          <span className="font-mono text-[9px] tracking-widest text-text-muted uppercase">
                            CENA {item.step} • ATIVO
                          </span>
                        </div>
                        <span className="font-mono text-xs font-bold text-red-live bg-dark-deep border border-dark-gray px-2 py-0.5 rounded-sm">
                          {item.step}
                        </span>
                      </div>

                      {/* Info Panel Text */}
                      <div className="space-y-4">
                        <h3 className="font-display text-lg sm:text-xl font-bold text-light-white group-hover:text-red-live transition-colors">
                          {item.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Log Action bullet steps */}
                      <div className={`mt-5 pt-4 border-t border-dark-gray/30 flex flex-wrap gap-2 ${
                        isEven ? 'justify-start' : 'justify-start md:justify-end'
                      }`}>
                        {item.highlights.map((highlight, idx) => (
                          <span 
                            key={idx}
                            className="inline-flex items-center space-x-1 font-mono text-[9px] bg-dark-deep border border-white/5 py-1 px-2.5 rounded-sm text-text-muted"
                          >
                            <CheckCircle2 className="w-2.5 h-2.5 text-red-live" />
                            <span>{highlight}</span>
                          </span>
                        ))}
                      </div>

                    </div>

                  </div>

                  {/* Spacing holder for even grid symmetry on desktop */}
                  <div className="hidden md:block w-[45%]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
