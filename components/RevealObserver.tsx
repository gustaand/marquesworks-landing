'use client';
import { useEffect } from 'react';
export function RevealObserver() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.documentElement.classList.add('can-reveal');
    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return null;
}
