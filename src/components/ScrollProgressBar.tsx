/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          if (totalScroll > 0) {
            const progress = (window.scrollY / totalScroll) * 100;
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-transparent z-[9999] pointer-events-none">
      <div 
        className="h-full bg-[#9E1B32] transition-[width] duration-75 ease-out shadow-[0_0_8px_#9E1B32] will-change-transform" 
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
