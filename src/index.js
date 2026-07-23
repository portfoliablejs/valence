import Lenis from 'lenis';

// Global right-click disabler
document.addEventListener('contextmenu', (e) => e.preventDefault(), false);

// Global Lenis smooth scroll engine
export const initSmoothScroll = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return lenis;
};

// Execute on app startup
if (typeof window !== 'undefined') {
  initSmoothScroll();
}