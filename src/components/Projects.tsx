/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Eye, X, BookOpen, ExternalLink, Activity, Sparkles, Fingerprint, Paperclip, Crosshair, Award, Shield } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { ProjetctItem } from '../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeProject, setActiveProject] = useState<ProjetctItem | null>(null);

  // Detective Mode state tracking
  const [isDetectiveMode, setIsDetectiveMode] = useState<boolean>(true);
  const [revealedClues, setRevealedClues] = useState<string[]>(['problema']); // Start with 'problema' pre-reviewed
  const [selectedClue, setSelectedClue] = useState<string>('problema');

  // Derive unique categories from data
  const categories = ['Todos', 'Landing Pages', 'Catálogos', 'E-commerces', 'Delivery', 'Sistemas Web'];

  // Filter projects dynamically
  const filteredProjects = selectedCategory === 'Todos'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  const whatsAppGeneralLink = "https://wa.me/5581998520781?text=Olá,%20Matheus!%20Estava%20visualizando%20seus%20casos%20desenvolvidos%20no%20portfólio%20e%20gostaria%20de%20tirar%20algumas%20dúvidas.";

  const handleOpenProject = (project: ProjetctItem) => {
    setActiveProject(project);
    // Reset detective state for this new case study
    setRevealedClues(['problema']);
    setSelectedClue('problema');
    setIsDetectiveMode(true);
  };

  const handleClueClick = (clueId: string) => {
    setSelectedClue(clueId);
    if (!revealedClues.includes(clueId)) {
      setRevealedClues((prev) => [...prev, clueId]);
    }
  };

  const cluesConfig = [
    { id: 'problema', label: '1. O Caso Histórico', description: 'O Problema que assolava o cliente', icon: '🚨' },
    { id: 'tecnologias', label: '2. Provas de Laboratório', description: 'Armas táticas & Tecnologias', icon: '🧪' },
    { id: 'solucao', label: '3. Operação Resolução', description: 'Como a solução foi pavimentada', icon: '🔍' },
    { id: 'resultados', label: '4. Veredito de Sucesso', description: 'Resultados & Recursos finais', icon: '⚖️' },
  ];

  const allCluesSolved = cluesConfig.every(clue => revealedClues.includes(clue.id));

  return (
    <section id="projetos" className="relative py-20 sm:py-28 bg-[#080808] border-t border-[#1a1a1a] overflow-hidden">
      
      {/* Immersive Noir Grid Background wrapper */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] z-0" />

      {/* Dark background decoration */}
      <div className="absolute top-[20%] right-[5%] w-96 h-96 rounded-full bg-[#9E1B32] opacity-5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[8%] w-112 h-112 rounded-full bg-[#9E1B32] opacity-5 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col space-y-3 max-w-2xl text-left font-sans">
            <div className="flex items-center space-x-2">
              <span className="w-4 h-[1px] bg-[#9E1B32]"></span>
              <span className="font-mono text-xs tracking-[0.25em] text-[#9E1B32] font-semibold uppercase">
                ARQUIVO DE CASOS INVESTIGADOS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F2F2F2] uppercase">
              Projetos & Provas de Tecnologia
            </h2>
            <p className="text-xs sm:text-sm text-[#A8A8A8] mt-1.5 font-sans">
              Modelos calibrados para dores comerciais do mercado. Clique nos dossiês abaixo para ativar o <strong className="text-[#9E1B32] font-semibold">Modo Detetive</strong> e examinar as pistas de cada projeto.
            </p>
          </div>

          <div className="font-mono text-[10px] text-[#9E1B32] flex items-center space-x-2 bg-[#9E1B32]/10 border border-[#9E1B32]/25 px-3 py-1 rounded-sm select-none">
            <span className="w-2 h-2 rounded-full bg-[#9E1B32] animate-pulse"></span>
            <span>AGENTE DE INTELIGÊNCIA COMERCIAL</span>
          </div>
        </div>

        {/* Categories filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-[#222222] pb-5">
          <div className="flex items-center space-x-2 font-mono text-xs text-[#A8A8A8] pr-3 uppercase">
            <Filter className="w-3.5 h-3.5 text-[#9E1B32]" />
            <span>Filtrar por:</span>
          </div>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-sm font-mono text-[10px] sm:text-xs tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#9E1B32] text-white font-bold'
                    : 'bg-[#141414] text-[#A8A8A8] hover:text-white hover:bg-[#222222]/50 border border-[#222222]'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              onClick={() => handleOpenProject(project)}
              className="bg-[#141414] border border-[#222222] hover:border-[#9E1B32]/70 transition-all duration-300 rounded-sm overflow-hidden flex flex-col group select-none relative h-full text-left cursor-pointer"
            >
              
              {/* Card visual header */}
              <div 
                className="relative aspect-[16/9] bg-[#080808] overflow-hidden"
              >
                <img 
                  src={project.coverImage} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-55 group-hover:scale-102 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (project.backupImage) {
                      e.currentTarget.src = project.backupImage;
                    }
                  }}
                />
                
                {/* Visual Label Badge overlays */}
                <div className="absolute top-4 left-4 bg-[#080808]/90 border border-[#222222] backdrop-blur-sm px-2.5 py-1.5 rounded-sm font-mono text-[9px] tracking-wider text-white">
                  {project.classNameLabel}
                </div>

                <div className="absolute top-4 right-4 bg-[#9E1B32] px-2.5 py-1 rounded-sm text-[9px] font-mono tracking-widest text-white uppercase font-bold">
                  {project.status.toUpperCase()}
                </div>

                {/* Cover Hover Visual Indicator */}
                <div className="absolute inset-0 bg-[#080808]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center space-y-2">
                  <div className="bg-[#9E1B32] text-white font-mono text-[10px] tracking-widest px-4 py-2.5 font-bold uppercase transition-transform transform translate-y-2 group-hover:translate-y-0 duration-300 flex items-center space-x-2">
                    <Fingerprint className="w-4 h-4 animate-pulse" />
                    <span>ENTRAR NO MODO DETETIVE</span>
                  </div>
                  <span className="text-[9px] font-mono text-[#A8A8A8] uppercase tracking-widest">[ INVESTIGAR PISTAS ]</span>
                </div>
              </div>

              {/* Card Info details */}
              <div className="p-5 flex flex-col space-y-4 text-left flex-grow">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-[#9E1B32] uppercase tracking-[0.2em] block font-bold">
                    {project.category}
                  </span>
                  <h3 
                    className="font-sans text-xl font-bold text-[#F2F2F2] uppercase tracking-tight group-hover:text-[#9E1B32] transition-colors leading-tight"
                  >
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-[#A8A8A8] leading-relaxed line-clamp-2 mt-1">
                    {project.summary}
                  </p>
                </div>

                {/* Tech tags list */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span 
                      key={idx}
                      className="font-mono text-[9px] bg-[#0e0e0e] border border-[#222222] text-[#A8A8A8] px-2 py-0.5 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Explanatory CTA block */}
                <div className="pt-3 border-t border-[#222222] mt-auto flex items-center justify-between text-[11px] font-mono text-[#A8A8A8]">
                  <div
                    className="text-[#9E1B32] group-hover:text-white font-bold flex items-center space-x-1.5 uppercase tracking-widest transition-colors"
                  >
                    <span>MÓDULO DETETIVE</span>
                    <Eye className="w-3.5 h-3.5 animate-pulse" />
                  </div>
                  <span className="text-[9px] uppercase tracking-wider text-[#555555]">PROVA_STÁVEL</span>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* CTA "Vamos Conversar" to support potential client bookings */}
        <div className="mt-16 bg-[#0c0c0c]/80 border border-[#222222] p-8 rounded-sm text-center max-w-xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#9E1B32]/10 blur-xl pointer-events-none" />
          <p className="font-mono text-xs text-[#A8A8A8] uppercase tracking-widest">
            Tem uma queixa digital ou ideia fora da curva?
          </p>
          <a
            href={whatsAppGeneralLink}
            target="_blank"
            referrerPolicy="no-referrer"
            className="inline-flex items-center space-x-2 mt-4 text-[#F2F2F2] border border-[#9E1B32] bg-[#9E1B32]/10 hover:bg-[#9E1B32] px-6 py-2.5 font-mono text-xs uppercase tracking-widest transition-all"
          >
            <span>Intimar Consultoria no WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* DETAILED CASE DOSSIER MODAL WITH IMMERSIVE MODO DETETIVE */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#060606]/95 backdrop-blur-md z-50 overflow-y-auto p-3 sm:p-5 md:p-8 flex justify-center items-start"
          >
            <motion.div
              initial={{ scale: 0.96, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-[#0b0b0b] border border-[#222222] w-full max-w-4xl rounded-sm shadow-2xl relative overflow-hidden my-6 flex flex-col"
            >
              
              {/* Crime tape / Blueprint border pattern */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#9E1B32]" />

              {/* Close Button top-right */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 bg-[#141414] border border-[#222222] text-[#A8A8A8] hover:text-white hover:border-[#9E1B32] p-2 rounded-sm cursor-pointer z-50 transition-colors"
                aria-label="Close CaseStudy"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header Info Panel */}
              <div className="relative aspect-[21/6] w-full bg-[#030303] overflow-hidden border-b border-[#222222] flex items-end">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#030303]/70 to-transparent z-10" />
                <img 
                  src={activeProject.coverImage} 
                  alt={activeProject.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-25"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (activeProject.backupImage) {
                      e.currentTarget.src = activeProject.backupImage;
                    }
                  }}
                />
                
                {/* Details overlays */}
                <div className="absolute bottom-5 left-6 text-left z-20 max-w-xl">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-mono text-[9px] bg-[#9E1B32]/15 text-[#9E1B32] border border-[#9E1B32]/30 px-2.5 py-0.5 rounded-sm select-none uppercase tracking-widest font-bold">
                      {activeProject.category}
                    </span>
                    <span className="font-mono text-[9px] bg-[#222222] text-[#A8A8A8] border border-[#222222] px-2 py-0.5 rounded-sm select-none uppercase tracking-widest">
                      {activeProject.classNameLabel}
                    </span>
                  </div>
                  <h3 className="font-sans text-2xl sm:text-4xl font-extrabold text-[#F2F2F2] uppercase tracking-tight">
                    {activeProject.title}
                  </h3>
                </div>

                {/* Switch View Controls at top of header */}
                <div className="absolute top-4 left-6 z-20 flex bg-[#141414] border border-[#222222] p-1 rounded-sm gap-1">
                  <button
                    onClick={() => setIsDetectiveMode(true)}
                    className={`px-3 py-1 text-[9px] font-mono rounded-sm transition-all flex items-center space-x-1 uppercase ${
                      isDetectiveMode 
                        ? 'bg-[#9E1B32] text-white font-semibold' 
                        : 'text-[#A8A8A8] hover:text-white'
                    }`}
                  >
                    <Fingerprint className="w-3 h-3" />
                    <span>Modo Detetive (Premium)</span>
                  </button>
                  <button
                    onClick={() => setIsDetectiveMode(false)}
                    className={`px-3 py-1 text-[9px] font-mono rounded-sm transition-all flex items-center space-x-1 uppercase ${
                      !isDetectiveMode 
                        ? 'bg-[#222222] text-white font-semibold' 
                        : 'text-[#A8A8A8] hover:text-white'
                    }`}
                  >
                    <BookOpen className="w-3 h-3" />
                    <span>Relatório Padrão</span>
                  </button>
                </div>
              </div>

              {/* INTERACTIVE DETECTIVE MODE */}
              <AnimatePresence mode="wait">
                {isDetectiveMode ? (
                  <motion.div
                    key="detective"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6 sm:p-8 flex flex-col space-y-6"
                  >
                    {/* Detective Blackboard Board Map Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#111111] p-4 border border-[#222222]/80 rounded-sm gap-4">
                      <div className="text-left">
                        <span className="font-mono text-[9px] text-[#9E1B32] font-extrabold tracking-widest uppercase block">[ PRANCHETA DE INVESTIGAÇÃO ]</span>
                        <h4 className="font-sans text-xs text-[#F2F2F2] mt-0.5 uppercase tracking-wider font-semibold">Examine as 4 pistas para elucidar o caso:</h4>
                      </div>
                      
                      {allCluesSolved ? (
                        <div className="bg-[#102a1a] border border-[#25D366]/40 px-3 py-1.5 rounded-sm flex items-center space-x-2 animate-bounce">
                          <Award className="w-4 h-4 text-[#25D366] shrink-0" />
                          <span className="font-mono text-[9px] text-[#25D366] font-extrabold tracking-widest uppercase">CASO TOTALMENTE SOLUCIONADO!</span>
                        </div>
                      ) : (
                        <div className="bg-[#141414] border border-[#9E1B32]/30 px-3 py-1 rounded-sm flex items-center space-x-2">
                          <div className="flex -space-x-1 select-none font-mono text-[10px] text-[#A8A8A8]">
                            {cluesConfig.map((clue) => {
                              const isRevealed = revealedClues.includes(clue.id);
                              return (
                                <span key={clue.id} className={isRevealed ? "text-[#9E1B32]" : "text-[#444444]"}>
                                  ●
                                </span>
                              );
                            })}
                          </div>
                          <span className="font-mono text-[9px] text-[#A8A8A8] tracking-wider uppercase">
                            ({revealedClues.length}/4 Pistórias decifradas)
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Corkboard Grid layout: Clue pins connected by string */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch pt-2">
                      
                      {/* Left Clue Selection Board */}
                      <div className="md:col-span-5 flex flex-col gap-3.5 relative bg-[#090909] p-4 border border-[#222222]/80 rounded-sm">
                        
                        {/* Interactive clue buttons acting as physical evidence pins */}
                        {cluesConfig.map((clue, idx) => {
                          const isActive = selectedClue === clue.id;
                          const isRevealed = revealedClues.includes(clue.id);
                          
                          return (
                            <button
                              key={clue.id}
                              onClick={() => handleClueClick(clue.id)}
                              className={`relative p-3 rounded-sm flex items-start space-x-3 text-left border cursor-pointer group transition-all ${
                                isActive 
                                  ? 'bg-[#1a0a0c] border-[#9E1B32] shadow-md shadow-[#9E1B32]/5' 
                                  : isRevealed
                                    ? 'bg-[#111] border-[#222] hover:border-[#9E1B32]/40'
                                    : 'bg-[#141414]/40 border-[#222]/30 opacity-70 hover:opacity-100 hover:border-[#9E1B32]/20'
                              }`}
                            >
                              {/* Glowing connection node (Red Pin) */}
                              <div className="mt-1 flex items-center justify-center shrink-0">
                                <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center relative ${
                                  isActive 
                                    ? 'bg-[#9E1B32] ring-4 ring-[#9E1B32]/20' 
                                    : isRevealed 
                                      ? 'bg-[#555] ring-2 ring-[#444]/30'
                                      : 'bg-[#222] border border-[#444]'
                                }`}>
                                  <span className="text-[7.5px] font-bold text-white shrink-0 font-mono">
                                    {idx + 1}
                                  </span>
                                </div>
                              </div>

                              <div className="flex flex-col text-left">
                                <div className="flex items-center space-x-1.5">
                                  <span className={`font-mono text-[10px] tracking-wider uppercase font-bold ${
                                    isActive ? 'text-[#9E1B32]' : isRevealed ? 'text-white' : 'text-[#777]'
                                  }`}>
                                    {clue.label}
                                  </span>
                                  {isRevealed && <span className="text-[10px] text-green-500 font-bold select-none">[v]</span>}
                                </div>
                                <span className={`text-[11px] font-sans transition-colors ${
                                  isActive ? 'text-white' : 'text-[#A8A8A8] group-hover:text-white'
                                }`}>
                                  {clue.description}
                                </span>
                              </div>

                              {/* Subtle active target scope */}
                              {isActive && (
                                <div className="absolute right-3 top-3 text-[#9E1B32] animate-spin-[20s] linear">
                                  <Crosshair className="w-4 h-4 opacity-40" />
                                </div>
                              )}
                            </button>
                          );
                        })}

                        {/* Informational string guide note */}
                        <div className="mt-2 text-[9px] font-mono text-[#555555] uppercase tracking-wider text-center flex items-center justify-center gap-1.5">
                          <Shield className="w-3.5 h-3.5 text-[#9E1B32]/30" /> CLIQUE NOS BOTÕES ACIMA PARA REVELAR O ARQUIVO
                        </div>
                      </div>

                      {/* Right Screen: High contrast magnifying clue reader (Visualized Polaroid or paper sheet) */}
                      <div className="md:col-span-7 flex flex-col justify-between bg-[#111111] border border-[#222222] p-6 rounded-sm relative shadow-inner overflow-hidden text-left min-h-[300px]">
                        
                        {/* Grid watermarking decor */}
                        <div className="absolute bottom-4 right-4 text-[9px] font-mono text-[#222] pointer-events-none tracking-widest font-extrabold select-none">
                          CONFIDENTIALITY INTEGRITY GUARANTEED
                        </div>

                        <div className="absolute top-0 right-0 p-3 z-0">
                          <Paperclip className="w-6 h-6 text-[#222]" />
                        </div>

                        {/* Clue decrypted data panels */}
                        <div className="flex-grow z-10">
                          <AnimatePresence mode="wait">
                            
                            {/* Clue 01: Problem */}
                            {selectedClue === 'problema' && (
                              <motion.div
                                key="sol_problema"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="space-y-4"
                              >
                                <div className="inline-flex items-center space-x-2 bg-[#9E1B32]/10 border border-[#9E1B32]/30 px-2.5 py-1 rounded-sm text-[#9E1B32] font-mono text-[9px] tracking-widest uppercase font-bold">
                                  <span>🚨 DECLARAÇÃO DO CASO: ENTRAVES COMERCIAIS</span>
                                </div>
                                <h3 className="font-sans text-lg font-bold text-white uppercase tracking-wider">A Queixa do Cliente:</h3>
                                <p className="font-sans text-xs sm:text-sm text-[#A8A8A8] leading-relaxed">
                                  {activeProject.problemDescription}
                                </p>
                                <div className="p-3.5 bg-gradient-to-r from-[#9E1B32]/5 to-transparent border-l-2 border-[#9E1B32] rounded-sm text-xs text-[#F2F2F2] leading-relaxed mt-2 italic font-mono">
                                  "Sem presença digital profissional, o cliente estava invisível na web e perdia tempo respondendo orçamentos redundantes manualmente."
                                </div>
                              </motion.div>
                            )}

                            {/* Clue 02: Technologies */}
                            {selectedClue === 'tecnologias' && (
                              <motion.div
                                key="sol_tecnologias"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="space-y-4"
                              >
                                <div className="inline-flex items-center space-x-2 bg-[#9E1B32]/10 border border-[#9E1B32]/30 px-2.5 py-1 rounded-sm text-[#9E1B32] font-mono text-[9px] tracking-widest uppercase font-bold">
                                  <span>🧪 EVIDÊNCIAS DE LABORATÓRIO: CORE ARQUITETURA</span>
                                </div>
                                <h3 className="font-sans text-lg font-bold text-white uppercase tracking-wider">Armas Técnicas Utilizadas:</h3>
                                <p className="font-sans text-xs text-[#A8A8A8] leading-relaxed">
                                  Para combater os atrasos e gargalos digitais do negócio, foram mobilizados componentes técnicos modulares e de carregamento instantâneo.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-1">
                                  {activeProject.technologies.map((tech, idx) => (
                                    <div 
                                      key={idx}
                                      className="font-mono text-xs bg-[#0a0a0a] border border-[#222] text-[#A8A8A8] px-3 py-1.5 rounded-sm flex items-center space-x-1.5"
                                    >
                                      <span className="w-1.5 h-1.5 bg-[#9E1B32] rounded-full"></span>
                                      <span>{tech}</span>
                                    </div>
                                  ))}
                                </div>
                                <p className="text-[10px] font-mono text-[#555555] uppercase tracking-wider mt-2">
                                  // Nenhuma biblioteca lenta foi aceita no escopo. Desempenho 100% puro.
                                </p>
                              </motion.div>
                            )}

                            {/* Clue 03: Solution */}
                            {selectedClue === 'solucao' && (
                              <motion.div
                                key="sol_solucao"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="space-y-4"
                              >
                                <div className="inline-flex items-center space-x-2 bg-[#9E1B32]/10 border border-[#9E1B32]/30 px-2.5 py-1 rounded-sm text-[#9E1B32] font-mono text-[9px] tracking-widest uppercase font-bold">
                                  <span>🔍 OPERAÇÃO RESOLUÇÃO: O SISTEMA DESENVOLVIDO</span>
                                </div>
                                <h3 className="font-sans text-lg font-bold text-white uppercase tracking-wider">A Solução Prática:</h3>
                                <p className="font-sans text-xs sm:text-sm text-[#A8A8A8] leading-relaxed">
                                  {activeProject.solutionDescription}
                                </p>
                                <div className="space-y-2 mt-2 pt-2 border-t border-[#222222]/50">
                                  <span className="text-[10px] font-mono text-[#A8A8A8] uppercase tracking-widest block font-bold">RECURSOS OPERACIONAIS CHAVE_</span>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                    {activeProject.keyFeatures.slice(0, 2).map((feat, i) => (
                                      <div key={i} className="flex items-start space-x-1.5 text-xs text-[#A8A8A8]/90 font-sans">
                                        <span className="text-[#9E1B32] font-mono">[{i+1}]</span>
                                        <span>{feat}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Visual Evidence screenshot preview */}
                                <div className="mt-3.5 relative border border-[#222222] bg-[#0c0c0c] rounded-sm overflow-hidden h-28 sm:h-32 group/detimg">
                                  <img 
                                    src={activeProject.coverImage} 
                                    alt="Foto da evidência" 
                                    className="w-full h-full object-cover object-top filter grayscale group-hover/detimg:grayscale-0 transition-all duration-500"
                                    onError={(e) => {
                                      if (activeProject.backupImage) {
                                        e.currentTarget.src = activeProject.backupImage;
                                      }
                                    }}
                                    referrerPolicy="no-referrer"
                                  />
                                  <div className="absolute top-2 right-2 bg-black/85 backdrop-blur-sm border border-[#222] px-2 py-0.5 text-[8px] font-mono tracking-widest text-[#9E1B32] uppercase select-none">
                                    Evidência #01
                                  </div>
                                </div>
                              </motion.div>
                            )}
 
                            {/* Clue 04: Verdict & Results */}
                            {selectedClue === 'resultados' && (
                              <motion.div
                                key="sol_resultados"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="space-y-4"
                              >
                                <div className="inline-flex items-center space-x-2 bg-[#25D366]/10 border border-[#25D366]/30 px-2.5 py-1 rounded-sm text-[#25D366] font-mono text-[9px] tracking-widest uppercase font-bold">
                                  <span>⚖️ SENTENÇA FINAL: CASO ELUCIDADO</span>
                                </div>
                                <h3 className="font-sans text-xl font-bold text-white uppercase tracking-wider">Veredito do Negócio:</h3>
                                <div className="space-y-3 font-sans text-xs sm:text-sm text-[#A8A8A8] text-left leading-relaxed">
                                  <p>
                                    O fluxo de atendimento foi completamente otimizado. O proprietário do negócio não disputa mais audiência fria, convertendo faturamento orgânico com facilidade através do WhatsApp.
                                  </p>
                                  
                                  <div className="bg-[#141414] border border-[#222222] p-3 rounded-sm flex justify-between items-center text-xs">
                                    <div className="flex items-center space-x-2">
                                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                      <span className="font-semibold text-white">Retorno Estimável Excepcional</span>
                                    </div>
                                    <span className="font-mono text-[10px] uppercase text-[#9E1B32] font-semibold">[ 100% OPERANTE ]</span>
                                  </div>

                                  {/* Visual Evidence screenshot */}
                                  <div className="mt-3 relative border border-[#222222] bg-[#0c0c0c] rounded-sm overflow-hidden h-28 sm:h-32 group/detimg2">
                                    <img 
                                      src={activeProject.coverImage} 
                                      alt="Tela final do sistema" 
                                      className="w-full h-full object-cover object-top filter grayscale group-hover/detimg2:grayscale-0 transition-all duration-500"
                                      onError={(e) => {
                                        if (activeProject.backupImage) {
                                          e.currentTarget.src = activeProject.backupImage;
                                        }
                                      }}
                                      referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute top-2 right-2 bg-black/85 backdrop-blur-sm border border-[#222] px-2 py-0.5 text-[8px] font-mono tracking-widest text-[#25D366] uppercase select-none">
                                      Evidência #02 • Resolvida
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}

                          </AnimatePresence>
                        </div>

                        {/* Clue Actions / Dynamic Footer inside magnifying card */}
                        <div className="mt-8 pt-4 border-t border-[#222222] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                          
                          <div className="flex items-center space-x-2 text-[10px] font-mono text-[#777777] uppercase">
                            <Activity className="w-3.5 h-3.5 text-[#9E1B32]/60 shrink-0" />
                            <span>Módulo de Decodificação Ativa</span>
                          </div>

                          <div className="flex flex-wrap items-center gap-3">
                            {activeProject.liveUrl && activeProject.liveUrl !== '#' && (
                              <a
                                href={activeProject.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                referrerPolicy="no-referrer"
                                className="inline-flex items-center space-x-1.5 bg-transparent hover:bg-[#1c1c1c] text-[#F2F2F2] border border-[#222222] hover:border-[#9E1B32]/40 font-mono text-xs uppercase tracking-widest font-bold px-4 py-2.5 rounded-sm transition-all cursor-pointer"
                              >
                                <span>Visitar Site Real</span>
                                <ExternalLink className="w-3.5 h-3.5 text-[#9E1B32]" />
                              </a>
                            )}
                            {selectedClue === 'resultados' && (
                              <a
                                href={`https://wa.me/5581998520781?text=${encodeURIComponent(`Olá, Matheus! Conheci seu trabalho e vi o caso do projeto "${activeProject.title}" no seu portfólio. Gostaria de conversar sobre algo parecido.`)}`}
                                target="_blank"
                                rel="noreferrer"
                                referrerPolicy="no-referrer"
                                className="text-center bg-[#9E1B32] hover:bg-[#D1273F] text-white font-mono text-xs uppercase tracking-widest font-bold px-5 py-2.5 rounded-sm transition-all shadow-md cursor-pointer hover:scale-[1.02]"
                              >
                                Fazer Caso Similar
                              </a>
                            )}
                          </div>
                        </div>

                      </div>

                    </div>
                  </motion.div>
                ) : (
                  
                  // CLASSIC REPORT VIEW (TRADITIONAL TEXT CONTENT)
                  <motion.div
                    key="standard"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6 sm:p-8 space-y-8 text-left"
                  >
                    {/* Top Meta info */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-[#111111] p-4 border border-[#222222] rounded-sm font-mono text-[11px] text-[#A8A8A8]">
                      <div>
                        <span className="block uppercase text-[9px] text-[#9E1B32] tracking-widest font-bold">Arquivo</span>
                        <span className="text-white font-semibold">{activeProject.classNameLabel}</span>
                      </div>
                      <div>
                        <span className="block uppercase text-[9px] text-[#9E1B32] tracking-widest font-bold">Situação</span>
                        <span className="text-white font-semibold">{activeProject.status}</span>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <span className="block uppercase text-[9px] text-[#9E1B32] tracking-widest font-bold">Autoria</span>
                        <span className="text-white font-semibold">Matheus Araújo</span>
                      </div>
                    </div>

                    {/* Real Screenshot Preview Frame */}
                    <div className="relative border border-[#222222] bg-[#0c0c0c] rounded-sm overflow-hidden group/screenshot">
                      {/* Browser Window Bar */}
                      <div className="bg-[#141414] border-b border-[#222222] px-4 py-2.5 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                        </div>
                        <div className="bg-[#080808] border border-[#222222] text-[#A8A8A8] font-mono text-[9px] px-4 py-0.5 rounded-sm select-all truncate max-w-[200px] sm:max-w-md select-none">
                          {activeProject.liveUrl}
                        </div>
                        <div className="w-12 select-none" />
                      </div>
                      
                      {/* Website Screenshot */}
                      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#080808] overflow-hidden">
                        <img 
                          src={activeProject.coverImage} 
                          alt={`Screenshot de ${activeProject.title}`}
                          className="w-full h-full object-cover object-top transition-all duration-700 group-hover/screenshot:scale-102"
                          onError={(e) => {
                            if (activeProject.backupImage) {
                              e.currentTarget.src = activeProject.backupImage;
                            }
                          }}
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-40 pointer-events-none" />
                      </div>
                    </div>

                    {/* Problem vs Solution Split columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#222222]">
                      <div className="space-y-2.5 bg-[#9E1B32]/5 border-l-2 border-[#9E1B32] p-4 rounded-sm">
                        <span className="font-mono text-[10px] text-[#9E1B32] uppercase tracking-widest font-bold block">
                          ⚠ O Problema Identificado
                        </span>
                        <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed">
                          {activeProject.problemDescription}
                        </p>
                      </div>

                      <div className="space-y-2.5 bg-[#141414] border-l-2 border-[#444444] p-4 rounded-sm">
                        <span className="font-mono text-[10px] text-[#A8A8A8] uppercase tracking-widest font-bold block">
                          ✔ Solução Desenvolvida
                        </span>
                        <p className="font-sans text-xs sm:text-sm text-[#A8A8A8] leading-relaxed">
                          {activeProject.solutionDescription}
                        </p>
                      </div>
                    </div>

                    {/* Core Features list bullets */}
                    <div className="space-y-3 pt-4 border-t border-[#222222]">
                      <span className="font-mono text-[10px] text-[#A8A8A8] uppercase tracking-widest block font-bold">
                        ⚙ Funcionalidades Implementadas / Escopo Técnico
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#A8A8A8] font-sans">
                        {activeProject.keyFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-[#9E1B32] select-none shrink-0 font-mono">[{idx + 1}]</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer and final action check */}
                    <div className="pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                      
                      {/* Tech stack row */}
                      <div className="flex flex-wrap gap-1">
                        {activeProject.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="font-mono text-[9px] bg-[#141414] border border-[#222222] text-[#A8A8A8] px-2 py-0.5 rounded-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Connect on WhatsApp referencing this case */}
                      <div className="flex flex-wrap items-center gap-3">
                        {activeProject.liveUrl && activeProject.liveUrl !== '#' && (
                          <a
                            href={activeProject.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            referrerPolicy="no-referrer"
                            className="inline-flex items-center space-x-1.5 bg-transparent hover:bg-[#1c1c1c] text-[#F2F2F2] border border-[#222222] hover:border-[#9E1B32]/40 font-mono text-xs uppercase tracking-widest font-bold px-5 py-3 rounded-sm transition-all cursor-pointer"
                          >
                            <span>Visitar Site Real</span>
                            <ExternalLink className="w-3.5 h-3.5 text-[#9E1B32]" />
                          </a>
                        )}
                        <a
                          href={`https://wa.me/5581998520781?text=${encodeURIComponent(`Olá, Matheus! Conheci seu trabalho e vi o caso do projeto "${activeProject.title}" no seu portfólio. Gostaria de conversar sobre algo parecido.`)}`}
                          target="_blank"
                          rel="noreferrer"
                          referrerPolicy="no-referrer"
                          className="text-center bg-[#9E1B32] hover:bg-[#D1273F] text-white font-mono text-xs uppercase tracking-widest font-bold px-5 py-3 rounded-sm transition-all shadow-md cursor-pointer hover:scale-[1.02]"
                        >
                          ENCOMENDAR PROJETO SIMILAR
                        </a>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

