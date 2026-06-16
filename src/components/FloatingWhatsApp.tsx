/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/5581998520781?text=Olá,%20Matheus!%20Conheci%20seu%20trabalho%20através%20do%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        referrerPolicy="no-referrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-colors duration-300 border border-white/10"
        title="Falar com Matheus no WhatsApp"
      >
        {/* Soft green radar pulsation background */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/45 animate-ping opacity-60 pointer-events-none group-hover:scale-125 transition-all"></span>

        <MessageSquare className="w-6 h-6 fill-current" />
        
        {/* Hover label hint */}
        <span className="absolute right-16 bg-dark-deep border border-dark-gray text-light-white text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 uppercase transition-opacity duration-300 hidden md:block">
          Whatsapp Off-line / Online
        </span>
      </motion.a>
    </div>
  );
}
