/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Github, Linkedin, Instagram, MessageSquare, ArrowUp, Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Processo', href: '#processo' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-dark-deep border-t border-dark-gray pt-16 pb-8 text-left relative overflow-hidden">
      
      {/* Blueprint Grid pattern in footer */}
      <div 
        className="absolute inset-0 opacity-[0.01]" 
        style={{
          backgroundImage: `linear-gradient(#F2F2F2 1px, transparent 1px), linear-gradient(90deg, #F2F2F2 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-dark-gray/60">
          
          {/* Brand/Bio Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#9E1B32] flex items-center justify-center font-mono text-xs tracking-widest text-[#F2F2F2]">MA</div>
              <span className="font-bold tracking-tighter text-base uppercase text-[#F2F2F2]">
                MATHEUS ARAÚJO
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed max-w-sm">
              Desenvolvedor especializado na criação de sites, catálogos e sistemas web personalizados de alto desempenho. Transformando ideias em experiências digitais marcantes.
            </p>
            <div className="flex items-center space-x-1 font-mono text-[9px] text-[#9E1B32] tracking-widest font-bold">
              <span>● SURUBIM, PE</span>
              <span>• BRASIL</span>
            </div>
          </div>

          {/* Quick links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs uppercase text-light-white tracking-widest font-semibold">
              Navegação
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-sans text-text-muted">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="hover:text-red-live transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Space Connections Column (Prepared for production hooks) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase text-light-white tracking-widest font-semibold">
              Canais Oficiais
            </h4>
            <div className="flex flex-wrap gap-2.5">
              
              {/* WhatsApp direct */}
              <a
                href="https://wa.me/5581998520781"
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-sm bg-dark-graphite border border-dark-gray flex items-center justify-center text-text-muted hover:text-light-white hover:border-red-dark transition-all duration-300"
                title="WhatsApp Direct"
              >
                <MessageSquare className="w-5 h-5" />
              </a>

              {/* GitHub space - Prepared placeholder for edit */}
              <a
                href="https://github.com"
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-sm bg-dark-graphite border border-dark-gray flex items-center justify-center text-text-muted hover:text-light-white hover:border-red-dark transition-all duration-300"
                title="GitHub Space"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* LinkedIn space - Prepared placeholder for edit */}
              <a
                href="https://linkedin.com"
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-sm bg-dark-graphite border border-dark-gray flex items-center justify-center text-text-muted hover:text-light-white hover:border-red-dark transition-all duration-300"
                title="LinkedIn Space"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* Instagram space - Prepared placeholder for edit */}
              <a
                href="https://www.instagram.com/araujommatheus/"
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-sm bg-dark-graphite border border-dark-gray flex items-center justify-center text-text-muted hover:text-light-white hover:border-red-dark transition-all duration-300"
                title="Instagram Space"
              >
                <Instagram className="w-5 h-5" />
              </a>

            </div>

            <p className="font-mono text-[9px] text-[#A8A8A8] uppercase tracking-wider">
              PRONTO PARA APRESENTAÇÃO DE LINKS REAIS
            </p>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-text-muted select-none">
          
          <div className="flex items-center space-x-1.5">
            <Zap className="w-3.5 h-3.5 text-red-live animate-pulse" />
            <span>
              &copy; {currentYear} Matheus Araújo — Todos os direitos reservados.
            </span>
          </div>

          <div className="font-mono text-[10px] tracking-widest text-[#9E1B32]">
            DESENVOLVIDO POR MATHEUS ARAÚJO
          </div>

          <div>
            <a 
              href="#inicio" 
              onClick={handleBackToTop}
              className="inline-flex items-center space-x-1 bg-dark-graphite border border-dark-gray hover:text-red-live px-3 py-1.5 rounded-sm transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
