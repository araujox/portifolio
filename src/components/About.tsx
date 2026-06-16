/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Layers, Sparkles, MessageCircle, Phone, Search, Lock, ShieldCheck, Eye } from 'lucide-react';
import myPhoto from '@/imagens/port eu.jpeg';

export default function About() {
  const [activeDossierTab, setActiveDossierTab] = useState<'profile' | 'evidence' | 'timeline'>('profile');
  const [imgError, setImgError] = useState(false);

  const dossierItems = [
    { icon: <Calendar className="w-4 h-4 text-[#9E1B32]" />, label: 'Idade', value: '24 anos' },
    { icon: <MapPin className="w-4 h-4 text-[#9E1B32]" />, label: 'Localidade', value: 'Surubim, Pernambuco' },
    { icon: <Layers className="w-4 h-4 text-[#9E1B32]" />, label: 'Especialidade', value: 'Sistemas & Sites Web' },
    { icon: <Sparkles className="w-4 h-4 text-[#9E1B32]" />, label: 'Metodologia', value: 'Desenvolvimento Sob Medida' },
    { icon: <MessageCircle className="w-4 h-4 text-[#9E1B32]" />, label: 'Suporte', value: 'Atendimento Próximo e Direto' },
    { icon: <Phone className="w-4 h-4 text-[#9E1B32]" />, label: 'Canais Comerciais', value: 'Conexão Instantânea com WhatsApp' }
  ];

  return (
    <section id="sobre" className="relative py-20 sm:py-28 overflow-hidden bg-[#060606] border-t border-[#1a1a1a]">
      
      {/* Dynamic Detective Desk Grid Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Retro Red Thread investigation line indicator */}
      <svg className="absolute left-0 right-0 top-0 h-[200px] w-full pointer-events-none opacity-10" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0,50 Q 250,150 500,40 T 1000,180" fill="none" stroke="#9E1B32" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M 120,20 Q 350,180 800,20 T 1400,120" fill="none" stroke="#9E1B32" strokeWidth="1" strokeDasharray="6 4" />
      </svg>
      
      {/* Background radial glow */}
      <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#9E1B32] opacity-5 blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-[#9E1B32] opacity-5 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Group in Investigator Confidential Header format */}
        <div className="flex flex-col space-y-4 mb-20 max-w-3xl text-left">
          <div className="inline-flex items-center space-x-2.5 bg-[#9E1B32]/10 border border-[#9E1B32]/30 px-3 py-1.5 rounded-sm self-start">
            <span className="w-2 h-2 rounded-full bg-[#9E1B32] animate-pulse"></span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#F2F2F2] uppercase font-bold">
              CLASSIFICAÇÃO: CONFIDENCIAL // MESTRE DO CÓDIGO
            </span>
          </div>
          
          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F2F2F2] uppercase">
            DOSSIÊ DE AGENTE: <span className="text-[#9E1B32]">MATHEUS ARAÚJO</span>
          </h2>
          
          <div className="h-[1px] w-full bg-gradient-to-r from-[#9E1B32] via-[#222222] to-transparent"></div>
          
          <p className="font-mono text-[11px] sm:text-xs text-[#A8A8A8] leading-relaxed uppercase tracking-wider">
            Investigando problemas digitais, desvendando códigos obsoletos e arquitetando soluções cirúrgicas para acelerar negócios.
          </p>
        </div>

        {/* Dynamic Interactive Case Drawer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Aesthetic Cinematic Profile Frame (Evidence Polaroid Card) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <motion.div 
              whileHover={{ rotate: -1, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full max-w-[360px] mx-auto lg:mx-0 select-none cursor-crosshair group"
            >
              {/* Retro Manila File Tab tag overlaying the back of the picture */}
              <div className="absolute -top-6 left-6 bg-[#251214] border-x border-[#9E1B32]/30 border-t border-[#9E1B32]/40 text-[#9E1B32] text-[9px] font-mono tracking-widest px-4 py-1 uppercase rounded-t-sm z-0 select-none pt-1.5 opacity-90">
                PROCESSO_NO_903C
              </div>

              {/* Red-tint Shadow Layer */}
              <div className="absolute -inset-1.5 bg-[#9E1B32]/40 rounded-sm blur-md opacity-25 group-hover:opacity-40 transition-opacity duration-300 z-0" />
              
              {/* Outer polaroid cardboard container */}
              <div className="relative bg-[#0d0d0d] border border-[#222222] p-5 shadow-2xl rounded-sm z-10 flex flex-col">
                
                {/* Photo frame container containing pure CSS symbolic artwork */}
                <div className="relative aspect-[3/3.8] bg-[#050505] border border-[#1c1c1c] rounded-sm overflow-hidden flex flex-col justify-center items-center group">
                  
                  {!imgError && (
                    <img 
                      src={myPhoto}
                      alt="Matheus Araújo"
                      className="absolute inset-0 w-full h-full object-cover object-[center_30%] filter grayscale contrast-[1.10] brightness-[0.85] group-hover:filter-none group-hover:brightness-100 group-hover:scale-103 transition-all duration-700 ease-out z-0"
                      onError={() => setImgError(true)}
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Subtle Red Overlay vignette - Cinema noir theme */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#9E1B32]/5 to-transparent z-10 mix-blend-color-burn pointer-events-none" />
                  
                  {/* Investigation overlay lines (crosshair grid) */}
                  <div className="absolute inset-0 border border-[#9E1B32]/10 pointer-events-none z-10 m-4">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-[#9E1B32]/30" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-[#9E1B32]/30" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-4 bg-[#9E1B32]/30" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-4 bg-[#9E1B32]/30" />
                  </div>

                  {/* Fingerprint / Holographic Background Lines */}
                  <div className="absolute inset-0 opacity-[0.05] z-0 flex flex-col justify-between p-6 font-mono text-[8px] text-[#9E1B32] pointer-events-none">
                    <div>SYS_PORT: 3000</div>
                    <div>LAT: -7.84 // LON: -36.00</div>
                    <div>STATUS: SCANNING_OK</div>
                  </div>

                  {/* High contrast Silhouette with glowing eye target - Fallback or hover info */}
                  {imgError ? (
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full border border-[#9E1B32]/40 flex items-center justify-center bg-[#111] shadow-inner relative">
                        <svg className="w-16 h-16 text-[#A8A8A8] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                        </svg>
                        {/* Interactive clue beacon pulse on portrait */}
                        <span className="absolute top-4 right-5 w-2 h-2 bg-[#9E1B32] rounded-full ring-4 ring-[#9E1B32]/30 animate-pulse"></span>
                      </div>

                      <div className="mt-4 flex flex-col items-center text-center">
                        <span className="font-mono text-[10px] tracking-[0.25em] text-[#9E1B32] font-semibold uppercase">SUSPEITO DE ALTA EXCELÊNCIA</span>
                        <span className="font-sans text-[11px] text-[#A8A8A8] mt-1">NOME_CHAVE: @araujox</span>
                      </div>
                    </div>
                  ) : (
                    /* Elegant name tag strip across the picture */
                    <div className="absolute bottom-5 inset-x-0 mx-4 bg-[#0d0d0dc0] backdrop-blur-[2px] border border-[#222]/80 px-3 py-2 rounded-sm z-10 text-left flex justify-between items-center transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <div>
                        <div className="font-sans text-[11px] font-bold text-white leading-tight uppercase">Matheus Araújo</div>
                        <div className="font-mono text-[8px] text-[#9E1B32] tracking-wider uppercase mt-0.5">AGENTE DE DESENVOLVIMENTO</div>
                      </div>
                      <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9E1B32] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9E1B32]"></span>
                      </div>
                    </div>
                  )}

                  {/* Red Fingerprint stamp effect */}
                  <div className="absolute top-3 right-3 opacity-30 transform rotate-12 font-mono text-[9px] text-[#9E1B32] border border-dashed border-[#9E1B32] px-2 py-0.5 font-bold tracking-wider select-none uppercase z-20">
                    IDENTIFICADO
                  </div>

                </div>

                {/* Case card footer, styled like typewritten notes */}
                <div className="mt-5 pt-4 border-t border-[#222222] text-left">
                  <div className="flex justify-between items-center text-xs font-mono text-[#A8A8A8]">
                    <span>REGISTRO RECEPTOR</span>
                    <span className="text-[#9E1B32] font-semibold">ESTÁVEL</span>
                  </div>
                  <p className="mt-2 text-[11px] font-mono text-[#777777] italic leading-tight">
                    "24 anos de idade. Base operacional em Surubim-PE. Desenvolve aplicações estruturadas para o comércio sem intermediários."
                  </p>
                </div>

              </div>
            </motion.div>

            {/* Little detailed evidence coordinate label */}
            <div className="mt-4 font-mono text-[10px] text-[#9E1B32]/40 text-center lg:text-left uppercase tracking-widest">
              🔬 ANÁLISE FORENSE_ MÓDULO 04 // ARQUIVO.PDF
            </div>
          </div>

          {/* About Interactive Case Notebook Tabs */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-[#0f0f0f] border border-[#222222] rounded-sm p-6 sm:p-8 flex flex-col h-full text-left relative overflow-hidden">
              
              {/* Paper clipping aesthetic */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#9E1B32]/10 to-transparent pointer-events-none z-0"></div>

              {/* Navigation Tabs for the Investigator Files */}
              <div className="flex border-b border-[#222222] mb-6 font-mono text-[10px] uppercase tracking-wider relative z-10">
                <button
                  onClick={() => setActiveDossierTab('profile')}
                  className={`pb-3 pr-4 border-b-2 font-bold transition-colors ${
                    activeDossierTab === 'profile'
                      ? 'border-[#9E1B32] text-white'
                      : 'border-transparent text-[#777777] hover:text-white'
                  }`}
                >
                  [ 01_ ANÁLISE PROFISSIONAL ]
                </button>
                <button
                  onClick={() => setActiveDossierTab('evidence')}
                  className={`pb-3 px-4 border-b-2 font-bold transition-colors ${
                    activeDossierTab === 'evidence'
                      ? 'border-[#9E1B32] text-white'
                      : 'border-transparent text-[#777777] hover:text-white'
                  }`}
                >
                  [ 02_ ESCOPO & CREDENCIAIS ]
                </button>
                <button
                  onClick={() => setActiveDossierTab('timeline')}
                  className={`pb-3 pl-4 border-b-2 font-bold transition-colors ${
                    activeDossierTab === 'timeline'
                      ? 'border-[#9E1B32] text-white'
                      : 'border-transparent text-[#777777] hover:text-white'
                  }`}
                >
                  [ 03_ INVESTIGAÇÃO TÉCNICA ]
                </button>
              </div>

              {/* Dynamic Tabs Content */}
              <div className="flex-grow z-10">
                <AnimatePresence mode="wait">
                  {activeDossierTab === 'profile' && (
                    <motion.div
                      key="profile"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h4 className="font-mono text-[10px] text-[#9E1B32] uppercase tracking-[0.25em] font-bold">INTRODUÇÃO_</h4>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#F2F2F2] uppercase tracking-tight">
                        Foco no que realmente importa: resultados reais para seu negócio.
                      </h3>
                      <div className="space-y-4 font-sans text-sm sm:text-base text-[#A8A8A8] leading-relaxed">
                        <p>
                          Sou <strong className="text-white font-medium">Matheus Araújo</strong>, tenho 24 anos e sou desenvolvedor especializado na criação de sites e sistemas web. Meu trabalho consiste em transformar ideias, necessidades e negócios em experiências digitais funcionais, modernas e fáceis de usar.
                        </p>
                        <p>
                          Mais do que criar páginas bonitas, procuro entender o objetivo de cada projeto, o público que será atendido e a melhor maneira de gerar resultados práticos através da tecnologia.
                        </p>
                        <p className="border-l border-[#9E1B32] pl-4 py-1 italic text-xs font-mono text-[#bcbcbc] bg-[#9E1B32]/5">
                          "Cada projeto é desenvolvido com atenção cirúrgica à experiência do usuário, responsividade perfeita em celulares e identidade visual exclusiva."
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeDossierTab === 'evidence' && (
                    <motion.div
                      key="evidence"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-5"
                    >
                      <h4 className="font-mono text-[10px] text-[#9E1B32] uppercase tracking-[0.25em] font-bold">REGISTRO DE INFORMAÇÕES_</h4>
                      <p className="text-xs text-[#A8A8A8] font-mono uppercase tracking-wider mb-2">
                        Dossiê complementar sobre as competências operacionais do agente:
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {dossierItems.map((item, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center space-x-3 bg-[#0d0d0d] border border-[#222222]/80 p-3 rounded-sm hover:border-[#9E1B32]/40 transition-all duration-300"
                          >
                            <div className="p-1.5 bg-[#171717] rounded-sm">
                              {item.icon}
                            </div>
                            <div className="flex flex-col text-left">
                              <span className="font-mono text-[9px] uppercase text-[#777777] tracking-wider">
                                {item.label}
                              </span>
                              <span className="font-sans text-xs font-semibold text-[#F2F2F2]">
                                {item.value}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeDossierTab === 'timeline' && (
                    <motion.div
                      key="timeline"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h4 className="font-mono text-[10px] text-[#9E1B32] uppercase tracking-[0.25em] font-bold">NOTAS DO INVESTIGADOR_</h4>
                      <div className="space-y-3 font-mono text-xs text-[#A8A8A8] leading-relaxed">
                        <div className="border-b border-[#222222]/50 pb-2">
                          <span className="text-[#9E1B32] font-bold">[!] DIREÇÃO ESTRUTURAL:</span>
                          <p className="font-sans text-xs text-[#A8A8A8] mt-1 pl-4">Desenvolve sem o uso de maquetes repetitivas. Toda criação de layout é artesanal e calibrada para prender a atenção do público-alvo nos primeiros 3 segundos.</p>
                        </div>
                        <div className="border-b border-[#222222]/50 pb-2">
                          <span className="text-[#9E1B32] font-bold">[!] VELOCIDADE DE CARREGAMENTO:</span>
                          <p className="font-sans text-xs text-[#A8A8A8] mt-1 pl-4">Otimização máxima de imagens e código compilado. Sites atingem notas acima de 95 no Google PageSpeed.</p>
                        </div>
                        <div>
                          <span className="text-[#9E1B32] font-bold">[!] CAPTAÇÃO INTEGRADA:</span>
                          <p className="font-sans text-xs text-[#A8A8A8] mt-1 pl-4">Nenhum potencial cliente é perdido. Botões inteligentes de disparo de mensagens, carrinhos de compras diretos e formulários rápidos reduzem gargalos comerciais.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Investigator stamp watermark at the tab bottom */}
              <div className="mt-8 pt-4 border-t border-[#222222]/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] font-mono text-[#777777] uppercase tracking-widest">
                <span className="flex items-center gap-1.5 text-[#9E1B32]">
                  <Lock className="w-3.5 h-3.5" /> AGENTE CREDENCIADO
                </span>
                <span>REGISTRADO EM SURUBIM-PE // 2026</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

