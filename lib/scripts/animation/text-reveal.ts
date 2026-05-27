export const initTextReveal = () => {
  if (typeof window === 'undefined') return;
  if (!(window as any).gsap || !(window as any).SplitText) {
    console.warn('GSAP or SplitText not found, applying opacity fail-safe for [data-text-reveal]');
    document.querySelectorAll('[data-text-reveal]').forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
    });
    return;
  }
  const gsap = (window as any).gsap;
  const SplitText = (window as any).SplitText;
  const ScrollTrigger = (window as any).ScrollTrigger;

  gsap.registerPlugin(SplitText);
  if (ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  const elements = document.querySelectorAll('[data-text-reveal]');
  if (!elements.length) return;

  const LINE_CLASS = 'text-reveal-line';
  const DEFAULT_DELAY = 0.1;
  const LINES_CONFIG = { duration: 0.8, stagger: 0.08 };

  (document as any).fonts.ready.then(() => {
    elements.forEach((el) => {
      const element = el as HTMLElement;
      const raw = element.dataset.revealDelay;
      const delay =
        raw !== undefined && raw !== '' && !isNaN(parseFloat(raw))
          ? parseFloat(raw)
          : DEFAULT_DELAY;

      const instant = element.dataset.instant !== undefined && element.dataset.instant !== 'false';
      const start = element.dataset.start || 'top 90%';
      const end = element.dataset.end || 'top 50%';

      SplitText.create(element, {
        type: 'lines',
        mask: 'lines',
        linesClass: LINE_CLASS,
      });

      const lines = element.querySelectorAll(`.${LINE_CLASS}`);

      gsap.set(element, { opacity: 1 });

      const tweenVars: any = {
        yPercent: 0,
        opacity: 1,
        duration: LINES_CONFIG.duration,
        stagger: LINES_CONFIG.stagger,
        ease: 'power3.out',
        delay,
      };

      if (!instant && ScrollTrigger) {
        tweenVars.scrollTrigger = {
          trigger: element,
          start,
          end,
          scrub: false,
        };
      }

      gsap.fromTo(
        lines,
        { yPercent: 110, opacity: 0 },
        tweenVars
      );
    });
  });
};
