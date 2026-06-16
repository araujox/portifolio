/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Terminal, MessageSquare, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
}

export default function Hero({ onExploreProjects }: HeroProps) {
  const whatsAppUrl = "https://wa.me/5581998520781?text=Olá,%20Matheus!%20Conheci%20seu%20trabalho%20através%20do%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center pt-24 sm:pt-28 pb-12 sm:pb-20 overflow-hidden"
    >
      {/* Background gradients and radial cinematic glows */}
      <div className="absolute inset-0 bg-dark-deep pointer-events-none z-0">
        <div className="absolute top-[10%] right-[5%] w-80 sm:w-112 h-80 sm:h-112 rounded-full radial-glow-corner" />
        <div className="absolute bottom-[0%] left-[10%] w-96 sm:w-128 h-96 sm:h-128 rounded-full radial-glow" />
        
        {/* Subtle decorative grid overlay matching the investigation concept */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(#F2F2F2 1px, transparent 1px), linear-gradient(90deg, #F2F2F2 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Top/bottom vignette */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-dark-deep to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-deep to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text and Copy Area */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8 text-left">
            
            {/* Top Tagline */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex items-center space-x-2"
            >
              <span className="w-2 h-2 bg-[#9E1B32] rounded-full animate-pulse"></span>
              <span className="font-mono text-xs tracking-widest text-[#9E1B32] font-semibold uppercase">
                Desenvolvedor Web • Surubim, PE
              </span>
            </motion.div>

            {/* Core Cinematic Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.0] text-[#F2F2F2]"
            >
              Experiências digitais para ideias que merecem <span className="text-[#9E1B32]">sair do papel.</span>
            </motion.h1>

            {/* Structured Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-[#A8A8A8] text-base sm:text-lg max-w-2xl leading-relaxed"
            >
              Sites e sistemas construídos para marcar presença, gerar confiança e transformar visitantes em clientes reais. Desenvolvido sob medida por Matheus Araújo, com foco em alta performance e escalabilidade.
            </motion.p>

            {/* Responsive Action Buttons (Dossier 01 & Dossier 02) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              <a 
                href={whatsAppUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="bg-[#141414] border border-[#222222] p-5 flex flex-col justify-between hover:border-[#9E1B32] group transition-all text-left"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[9px] text-[#A8A8A8] tracking-widest uppercase">Dossier 01</span>
                  <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></span>
                </div>
                <h3 className="text-lg font-bold uppercase text-[#F2F2F2] group-hover:text-[#9E1B32] transition-colors">Falar no WhatsApp</h3>
                <p className="text-xs text-[#A8A8A8] mt-1">Consultoria técnica imediata e direta.</p>
              </a>

              <button 
                onClick={onExploreProjects}
                className="bg-[#F2F2F2] text-[#080808] p-5 flex flex-col justify-between hover:bg-[#A8A8A8] group text-left transition-all cursor-pointer border border-[#F2F2F2]"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[9px] text-[#080808]/70 tracking-widest uppercase">Dossier 02</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#080808] group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-lg font-bold uppercase text-[#080808]">Ver meus projetos</h3>
                <p className="text-xs text-[#080808]/75 mt-1">Explorar casos e soluções desenvolvidas.</p>
              </button>
            </motion.div>

            {/* Quick Indicators / Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-dark-gray max-w-lg"
            >
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-red-dark shrink-0" />
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider">Design Único</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-red-dark shrink-0" />
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider">Carregamento Rápido</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                <Terminal className="w-4 h-4 text-red-dark shrink-0" />
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider">Código Limpo</span>
              </div>
            </motion.div>

          </div>

          {/* Interactive IDE / Cinema Deck Graphic Block (Lighthouse & Code Mockup) */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            
            {/* Ambient Background Light Spill */}
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-72 h-72 bg-red-dark/15 rounded-full blur-[60px] pointer-events-none z-0" />

            {/* Custom Interactive Investigation File / IDE Screen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="w-full max-w-md bg-dark-graphite/90 border border-dark-gray rounded-lg glow-sm overflow-hidden z-10"
            >
              
              {/* Window Header */}
              <div className="bg-dark-deep px-4 py-3 flex items-center justify-between border-b border-dark-gray select-none">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-dark" />
                  <span className="w-2.5 h-2.5 rounded-full bg-dark-gray border border-white/5" />
                  <span className="w-2.5 h-2.5 rounded-full bg-dark-gray border border-white/5" />
                </div>
                <div className="font-mono text-[10px] text-text-muted font-medium tracking-wide">
                  build_stage_active_v19.sh
                </div>
                <div className="font-mono text-[10px] text-red-live animate-pulse flex items-center space-x-1">
                  <span>●</span> <span>PRO</span>
                </div>
              </div>

              {/* Console Code Body */}
              <div className="p-5 font-mono text-[11px] leading-relaxed text-light-white/90 space-y-4 overflow-x-auto">
                <div className="space-y-1">
                  <div className="text-text-muted">// Prova de Conceito - Algoritmo de Sucesso</div>
                  <div>
                    <span className="text-red-live">const</span> Developer = &#123;
                  </div>
                  <div className="pl-4">
                    nome: <span className="text-[#a5d6ff]">'Matheus Araújo'</span>,
                  </div>
                  <div className="pl-4">
                    idade: <span className="text-[#ffab70]">24</span>,
                  </div>
                  <div className="pl-4">
                    cidade: <span className="text-[#a5d6ff]">'Surubim - PE'</span>,
                  </div>
                  <div className="pl-4">
                    foco: <span className="text-[#ffab70]">'Faturamento + Conversão'</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                <div className="space-y-1 border-t border-dark-gray/40 pt-3">
                  <div className="text-text-muted">// Processando Regras de Desenvolvimento...</div>
                  <div>
                    <span className="text-red-live">function</span> buildExperience(projeto) &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-red-live">return</span> new Promise(resolve =&gt; &#123;
                  </div>
                  <div className="pl-8 text-text-muted">
                    // UI impecável + UX fluida para celular
                  </div>
                  <div className="pl-8 text-light-white/80">
                    resolve( <span className="text-[#79c0ff]">"Deploy completo com sucesso! 🚀"</span> );
                  </div>
                  <div className="pl-4">&#125;);</div>
                  <div>&#125;</div>
                </div>

                {/* Simulated Success Output */}
                <div className="bg-dark-deep/80 border border-white/5 p-3 rounded-sm space-y-1.5 text-xs">
                  <div className="text-green-500 font-bold flex items-center space-x-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                    <span>SISTEMA PRONTO PARA ALTA CARGA</span>
                  </div>
                  <div className="text-[10px] text-text-muted">
                    + Carregamento móvel avaliado: <span className="text-light-white font-medium">99/100</span>
                  </div>
                  <div className="text-[10px] text-text-muted">
                    + Retorno financeiro: <span className="text-light-white font-semibold">Foco em Conversão de Vendas</span>
                  </div>
                </div>
              </div>

              {/* Graphic bottom tag info */}
              <div className="bg-dark-deep px-4 py-2 border-t border-dark-gray/30 flex items-center justify-between text-[9px] text-[#A8A8A8] font-mono select-none">
                <span>FOLDER: /surubim/pe/matheus</span>
                <span>SYSTEM SECURE</span>
              </div>

            </motion.div>

            {/* Small decorative radar background crosshairs */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-red-dark/15 pointer-events-none"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-red-dark/15 pointer-events-none"></div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
