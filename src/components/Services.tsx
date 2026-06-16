/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowUpRight, HelpCircle, Cpu, ShoppingBag, Truck, Smartphone, Compass } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';

export default function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('landing-page');

  const selectedService = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'landing-page':
        return <Smartphone className="w-5 h-5" />;
      case 'clothing-catalog':
        return <ShoppingBag className="w-5 h-5" />;
      case 'ecommerce':
        return <Cpu className="w-5 h-5" />;
      case 'delivery':
        return <Truck className="w-5 h-5" />;
      default:
        return <HelpCircle className="w-5 h-5" />;
    }
  };

  // WhatsApp pre-filled message helper
  const getWhatsAppServiceLink = (serviceTitle: string) => {
    const text = `Olá, Matheus! Conheci seu trabalho através do seu portfólio e gostaria de solicitar um orçamento para ${serviceTitle}.`;
    return `https://wa.me/5581998520781?text=${encodeURIComponent(text)}`;
  };

  const customIdeaWhatsAppLink = "https://wa.me/5581998520781?text=Olá,%20Matheus!%20Tenho%20uma%20ideia%20para%20um%20projeto%20e%20gostaria%20de%20conversar%20com%20você.";

  const customIdeaSteps = [
    { num: '1', title: 'Apresentação da Ideia', desc: 'Você me envia a sua ideia e o problema que quer resolver.' },
    { num: '2', title: 'Mapeamento de Objetivo', desc: 'Identificamos quem é seu cliente e como a web ajudará.' },
    { num: '3', title: 'Definisão de Funções', desc: 'Listamos as telas e integrações necessárias.' },
    { num: '4', title: 'Direção Visual Única', desc: 'Criamos layouts focados na credibilidade do negócio.' },
    { num: '5', title: 'Ação e Testes (QA)', desc: 'Escrevemos o código e revisamos o mobile em tela real.' },
    { num: '6', title: 'Deploy e Crescimento', desc: 'Lançamos seu site na internet pronto para faturar.' }
  ];

  return (
    <section id="servicos" className="relative py-20 sm:py-28 bg-dark-graphite border-t border-dark-gray overflow-hidden">
      {/* Absolute Glow Spill */}
      <div className="absolute bottom-[10%] right-[10%] w-112 h-112 rounded-full radial-glow pointer-events-none z-0" />
      <div className="absolute top-[10%] left-[5%] w-96 h-96 rounded-full radial-glow-corner pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header */}
        <div className="flex flex-col space-y-3 mb-16 max-w-2xl text-left">
          <div className="flex items-center space-x-2">
            <span className="w-4 h-[1px] bg-red-dark"></span>
            <span className="font-mono text-xs tracking-widest text-[#9E1B32] font-semibold uppercase">
              SOLUÇÕES WEB DISPONÍVEIS
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-light-white">
            O que desenvolvo para o seu negócio
          </h2>
          <p className="font-sans text-xs sm:text-sm text-text-muted">
            Serviços com objetivos claros, foco na usabilidade e sem termos técnicos complexos para você entender do início ao fim.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap gap-2.5 mb-8 border-b border-dark-gray pb-4">
          {SERVICES_DATA.map((service) => {
            const isSelected = service.id === selectedServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-sm font-mono text-xs tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-red-dark text-light-white border border-red-dark shadow-lg'
                    : 'bg-dark-deep hover:bg-dark-gray/60 text-text-muted border border-transparent'
                }`}
              >
                <span>{getServiceIcon(service.id)}</span>
                <span>{service.title.toUpperCase()}</span>
              </button>
            );
          })}
        </div>

        {/* Single Selected Service Spotlight Content */}
        <div className="bg-[#090909] border border-dark-gray/80 p-6 sm:p-8 rounded-sm shadow-2xl relative mb-20">
          
          <div className="absolute top-4 right-4 text-[10px] font-mono text-charcoal-400 select-none text-red-dark/40 tracking-widest hidden sm:block">
            ACTIVE_MODULE: {selectedService.id.toUpperCase()}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedServiceId}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              
              {/* Left Column: Details & ForWho */}
              <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
                
                <div>
                  <span className="font-mono text-[10px] bg-red-dark/10 text-red-live border border-red-dark/30 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Indicado Para
                  </span>
                  <p className="mt-2.5 font-sans text-xs sm:text-sm font-medium text-light-white/90">
                    {selectedService.forWhom}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-light-white">
                    {selectedService.title}
                  </h3>
                  <p className="font-sans text-sm text-text-muted leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>

                {/* Benefits Checkgrid */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-mono text-[10px] tracking-wider text-light-white uppercase">
                    Principais Benefícios:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {selectedService.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start space-x-2.5 text-text-muted">
                        <Check className="w-4 h-4 text-red-live shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Call for custom budgets */}
                <div className="pt-4 border-t border-dark-gray/50 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={getWhatsAppServiceLink(selectedService.title)}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center justify-center space-x-2 bg-red-dark hover:bg-red-live text-light-white px-5 py-3 rounded-sm font-mono text-xs tracking-wider transition-all glow-sm hover:scale-[1.02]"
                  >
                    <span>SOLICITAR MEU ORÇAMENTO</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <span className="text-[10px] font-mono text-text-muted text-center sm:text-left self-center">
                    *Alinhamento sem custo pelo WhatsApp
                  </span>
                </div>

              </div>

              {/* Right Column: Code Mockup Segment representation */}
              <div className="lg:col-span-5 w-full">
                <div className="bg-dark-deep border border-dark-gray/60 rounded-sm overflow-hidden flex flex-col shadow-inner">
                  
                  {/* Mock head bar */}
                  <div className="bg-[#0f0f0f] px-4 py-2 border-b border-dark-gray/30 flex items-center justify-between">
                    <span className="font-mono text-[9px] text-[#A8A8A8] tracking-widest">
                      {selectedService.exampleLabel}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-red-live"></span>
                  </div>

                  {/* Preloaded interactive code body */}
                  <pre className="p-4 sm:p-5 font-mono text-[10px] leading-relaxed text-[#D2D2D2] text-left overflow-x-auto select-none bg-dark-deep">
                    <code>{selectedService.exampleImageCode}</code>
                  </pre>

                  {/* Mock footer with quick structural tags */}
                  <div className="bg-[#0f0f0f] px-4 py-2.5 border-t border-dark-gray/30 flex justify-between items-center text-[8px] font-mono text-text-muted">
                    <span>CHAR: UTF-8</span>
                    <span className="text-red-live font-semibold">RESPONSIVO</span>
                  </div>

                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Blueprint Customized Section: "Sua ideia ainda não se encaixa em um modelo?" */}
        <div className="bg-dark-deep border border-dark-gray p-6 sm:p-10 rounded-sm overflow-hidden relative shadow-2xl">
          
          {/* Diagnostic Blueprint Grid in Background */}
          <div 
            className="absolute inset-0 opacity-[0.02]" 
            style={{
              backgroundImage: `linear-gradient(#F2F2F2 1px, transparent 1px), linear-gradient(90deg, #F2F2F2 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />

          {/* Glowing dot decorative line */}
          <div className="absolute top-0 right-0 w-[45%] h-[2px] bg-gradient-to-l from-red-dark/50 to-transparent"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 items-center">
            
            <div className="lg:col-span-5 flex flex-col space-y-4 text-left">
              <span className="font-mono text-[10px] text-red-live font-bold tracking-widest flex items-center space-x-1.5 uppercase">
                <Compass className="w-3.5 h-3.5 animate-spin" />
                <span>ESTÁGIO CUSTOMIZADO</span>
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-light-white">
                Sua ideia ainda não se encaixa em um modelo pronto?
              </h3>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                Nem todo projeto começa com uma definição perfeita. Você pode me apresentar sua ideia, explicar o problema que deseja resolver e, juntos, podemos construir a solução mais adequada do escopo ao deploy.
              </p>
              
              <div className="pt-2">
                <a
                  href={customIdeaWhatsAppLink}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-dark to-[#731324] hover:from-red-live hover:to-red-dark text-light-white px-5 py-3.5 rounded-sm font-mono text-xs tracking-wider border border-red-dark/50 hover:scale-[1.02] transition-transform shadow-md"
                >
                  <span>QUERO APRESENTAR MINHA IDEIA</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Custom Interactive Roadmap blueprint */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {customIdeaSteps.map((step) => (
                  <div 
                    key={step.num}
                    className="p-4 bg-dark-graphite/60 border border-dark-gray rounded-sm flex items-start space-x-3 hover:border-red-dark/30 transition-all duration-300 group"
                  >
                    <span className="font-mono text-xs font-bold text-red-live bg-dark-deep border border-dark-gray px-2 py-0.5 rounded-sm select-none group-hover:bg-red-dark group-hover:text-light-white transition-colors">
                      {step.num}
                    </span>
                    <div className="flex flex-col space-y-0.5 text-left">
                      <h4 className="font-sans text-xs font-bold text-light-white group-hover:text-red-live transition-colors">
                        {step.title}
                      </h4>
                      <p className="font-sans text-[11px] text-text-muted leading-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
