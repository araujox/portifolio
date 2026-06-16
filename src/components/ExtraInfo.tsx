/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Shield, Sparkles, Smartphone, Eye, Send, Star, Layers, Activity, FileCode } from 'lucide-react';
import { DIFFERENTIALS_DATA, TECH_DATA } from '../data';

export default function ExtraInfo() {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Front-end', 'Back-end', 'Ferramentas', 'Habilidades'];

  const filteredTechs = activeCategory === 'Todos'
    ? TECH_DATA
    : TECH_DATA.filter(t => t.category === activeCategory);

  const getDifferentialIcon = (index: number) => {
    const icons = [
      <Sparkles className="w-5 h-5 text-red-dark" />,
      <Eye className="w-5 h-5 text-red-dark" />,
      <Smartphone className="w-5 h-5 text-red-dark" />,
      <Shield className="w-5 h-5 text-red-dark" />,
      <Send className="w-5 h-5 text-red-dark" />,
      <Layers className="w-5 h-5 text-red-dark" />,
      <Activity className="w-5 h-5 text-red-dark" />,
      <Star className="w-5 h-5 text-red-dark" />
    ];
    return icons[index % icons.length];
  };

  return (
    <section id="tecnologias" className="relative py-20 sm:py-24 bg-dark-deep border-t border-dark-gray overflow-hidden">
      {/* Visual background spills */}
      <div className="absolute top-[40%] right-[10%] w-80 h-80 rounded-full radial-glow pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[5%] w-96 h-96 rounded-full radial-glow-corner pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* DIFFERENTIALS SECTIONS */}
        <div className="mb-24">
          {/* Header */}
          <div className="flex flex-col space-y-3 mb-16 max-w-2xl text-left">
            <div className="flex items-center space-x-2">
              <span className="w-4 h-[1px] bg-red-dark"></span>
              <span className="font-mono text-xs tracking-widest text-[#9E1B32] font-semibold uppercase">
                Valores Comerciais
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-light-white">
              Por que trabalhar comigo?
            </h2>
            <p className="font-sans text-xs sm:text-sm text-text-muted">
              Diferenciais focados no crescimento sustentável do seu negócio, sem promessas milagrosas ou ilusões.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIALS_DATA.map((item, index) => (
              <div 
                key={index} 
                className="bg-dark-graphite/50 border border-dark-gray/80 p-6 rounded-sm text-left hover:border-red-dark/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-sm bg-dark-deep border border-dark-gray flex items-center justify-center">
                    {getDifferentialIcon(index)}
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-light-white">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-dark-gray/30 text-[9px] font-mono tracking-widest text-[#A8A8A8] uppercase select-none">
                  VALID_STANDARD
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TECHNOLOGIES STACK SECTION */}
        <div>
          {/* Header */}
          <div className="flex flex-col space-y-3 mb-12 max-w-2xl text-left">
            <div className="flex items-center space-x-2">
              <span className="w-4 h-[1px] bg-red-dark"></span>
              <span className="font-mono text-xs tracking-widest text-[#9E1B32] font-semibold uppercase">
                COMPETÊNCIAS REGISTRADAS
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-light-white">
              Ferramentas e Tecnologias
            </h2>
          </div>

          {/* Sub tabs filtering techs */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-sm font-mono text-[10px] sm:text-xs tracking-wider border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-red-dark border-red-dark text-light-white shadow-md'
                    : 'bg-dark-graphite border-dark-gray text-text-muted hover:text-light-white hover:bg-dark-gray/50'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Tags Cloud Panel without heavy logos */}
          <div className="bg-[#090909] border border-dark-gray p-6 sm:p-8 rounded-sm">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {filteredTechs.map((tech, i) => (
                <div
                  key={i}
                  className="bg-dark-deep border border-dark-gray/80 px-4 py-3 rounded-sm flex items-center space-x-2.5 hover:border-red-dark/30 hover:scale-[1.01] transition-all"
                >
                  <FileCode className="w-4 h-4 text-red-live shrink-0" />
                  <div className="flex flex-col space-y-0.5 text-left">
                    <span className="font-sans text-xs font-semibold text-light-white">
                      {tech.name}
                    </span>
                    <span className="font-mono text-[8px] uppercase text-text-muted">
                      {tech.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
