/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Processo', href: '#processo' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsAppUrl = "https://wa.me/5581998520781?text=Olá,%20Matheus!%20Conheci%20seu%20trabalho%20através%20do%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

  return (
    <>
      <header
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-deep/80 backdrop-blur-md border-b border-dark-gray py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and REC Indicator */}
            <a
              href="#inicio"
              onClick={(e) => handleLinkClick(e, '#inicio')}
              className="flex items-center space-x-3 group"
            >
              <div className="w-10 h-10 border border-[#9E1B32] flex items-center justify-center font-mono text-sm tracking-widest text-[#F2F2F2] group-hover:border-[#D1273F] transition-colors">MA</div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tighter text-lg uppercase text-light-white group-hover:text-red-live transition-all">
                  MATHEUS ARAÚJO
                </span>
                <span className="font-mono text-[8px] text-text-muted tracking-widest uppercase -mt-0.5">Sistemas & Sites</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-dark-gray/60 border border-white/5 px-2 py-0.5 rounded-full text-[9px] font-mono tracking-widest text-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span>ONLINE</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`font-mono text-xs tracking-wider transition-all duration-200 relative py-1 ${
                      isActive
                        ? 'text-red-live font-medium'
                        : 'text-text-muted hover:text-light-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-red-dark"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Iniciar Projeto CTA */}
            <div className="hidden md:flex items-center">
              <a
                href={openWhatsAppUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="inline-flex items-center space-x-2 bg-[#9E1B32] hover:bg-[#D1273F] text-light-white font-mono text-xs uppercase tracking-widest font-bold px-6 py-2.5 transition-all duration-300 border border-transparent"
              >
                <span>INICIAR PROJETO</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-text-muted hover:text-light-white p-2 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[68px] left-0 right-0 z-40 bg-[#080808]/95 backdrop-blur-lg border-b border-[#222222] px-4 py-6 flex flex-col space-y-4 shadow-xl"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`font-mono text-xs uppercase tracking-widest py-2.5 px-4 block transition-colors ${
                      isActive
                        ? 'bg-[#9E1B32]/10 text-white border-l-2 border-[#9E1B32] font-bold'
                        : 'text-[#A8A8A8] hover:bg-[#222222]/30 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            
            <div className="pt-4 border-t border-[#222222]">
              <a
                href={openWhatsAppUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center space-x-2 w-full bg-[#9E1B32] hover:bg-[#D1273F] text-white font-mono text-xs uppercase tracking-widest font-bold py-3 transition-colors text-center"
              >
                <span>INICIAR PROJETO</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
