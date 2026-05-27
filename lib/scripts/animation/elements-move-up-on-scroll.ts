export const initElementsMoveUpOnScroll = () => {
  if (typeof window === 'undefined' || !(window as any).gsap) return;
  const gsap = (window as any).gsap;

  document.querySelectorAll('[data-move-up-on-scroll-element]').forEach((el) => {
    const element = el as HTMLElement;
    const start = getComputedStyle(element).top;
    const h = (element.offsetParent as HTMLElement ?? document.documentElement).clientHeight;
    const px = parseFloat(start);
    if (!h || isNaN(px)) return;

    const n = parseFloat(element.dataset.moveUpValue ?? '8');
    const delta = isNaN(n) ? 8 : n;

    gsap.fromTo(
      element,
      { top: start },
      {
        top: `${(px / h) * 100 - delta}%`,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'bottom 20%',
          scrub: 1,
        },
      }
    );
  });
};
