export const initDividerExpand = () => {
  if (typeof window === 'undefined' || !(window as any).gsap) return;
  const gsap = (window as any).gsap;

  const dividers = document.querySelectorAll('[data-divider-expand]');
  dividers.forEach((divider) => {
    gsap.to(divider, {
      scrollTrigger: {
        trigger: divider,
        start: 'top 100%',
        end: 'top 50%',
        toggleActions: 'play none none none',
      },
      width: '50%',
      duration: 1,
      delay: 0.7,
      ease: 'power2.out',
    });
  });
};
