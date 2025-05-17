'use client';
import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll('section[id]'));
      const navHeight = document.querySelector('nav')?.offsetHeight || 0;
      
      // Check if we're very close to bottom (within 20px)
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20;
      
      if (isAtBottom) {
        const lastSection = sections[sections.length - 1];
        setActiveSection(lastSection.id);
        return;
      }

      // Find first section that intersects with nav
      const touchingSection = sections.find(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
        
        // Section is touching nav if:
        // 1. Its top edge is at or above nav height
        // 2. Its bottom edge is below nav height
        return sectionTop <= navHeight && sectionBottom > navHeight;
      });

      if (touchingSection) {
        setActiveSection(touchingSection.id);
      } else {
        // If no section is touching nav, activate first section
        setActiveSection(sections[0].id);
      }
    };

    const debouncedScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', debouncedScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', debouncedScroll);
  }, []);

  return activeSection;
}
