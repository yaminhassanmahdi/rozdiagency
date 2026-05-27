export const initRevealAnimation = () => {
  if (typeof window === 'undefined') return;
  if (!(window as any).gsap || !(window as any).Springer) {
    console.warn('GSAP or Springer not found, applying opacity fail-safe for [data-opai-animate]');
    document.querySelectorAll('[data-opai-animate]').forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
    });
    return;
  }
  const gsap = (window as any).gsap;
  const Springer = (window as any).Springer.default;

  const elements = document.querySelectorAll('[data-opai-animate]');
  elements.forEach((elem) => {
    const element = elem as HTMLElement;
    const duration = element.getAttribute('data-duration')
      ? parseFloat(element.getAttribute('data-duration')!)
      : 0.6;
    const blur = element.getAttribute('data-blur') ? parseFloat(element.getAttribute('data-blur')!) : 0;
    const delay = element.getAttribute('data-delay')
      ? parseFloat(element.getAttribute('data-delay')!)
      : 0;
    const offset = element.getAttribute('data-offset')
      ? parseFloat(element.getAttribute('data-offset')!)
      : 60;
    const instant =
      element.hasAttribute('data-instant') && element.getAttribute('data-instant') !== 'false';
    const start = element.getAttribute('data-start') || 'top 90%';
    const end = element.getAttribute('data-end') || 'top 50%';
    const direction = element.getAttribute('data-direction') || 'down';
    const useSpring = element.hasAttribute('data-spring');
    const spring = useSpring ? Springer(0.2, 0.8) : null;
    const rotation = element.getAttribute('data-rotation')
      ? parseFloat(element.getAttribute('data-rotation')!)
      : 0;
    const scale = element.getAttribute('data-scale')
      ? parseFloat(element.getAttribute('data-scale')!)
      : 1;
    const animationType = element.getAttribute('data-animation-type') || 'from';
    
    // Force initial state
    element.style.opacity = '1';
    element.style.filter = `blur(${blur}px)`;

    // Set animation properties based on animation type
    let animationProps: any;

    if (animationType === 'to') {
      animationProps = {
        opacity: 1,
        filter: 'blur(0)',
        duration: duration,
        delay: delay,
        ease: useSpring ? spring : 'power2.out',
        scale: scale,
      };

      if (rotation !== 0) {
        animationProps.rotation = rotation;
      }
    } else {
      animationProps = {
        opacity: 0,
        filter: 'blur(16px)',
        duration: duration,
        delay: delay,
        ease: useSpring ? spring : 'power2.out',
      };

      if (rotation !== 0) {
        animationProps.rotation = rotation;
      }
    }

    if (!instant) {
      animationProps.scrollTrigger = {
        trigger: element,
        start: start,
        end: end,
        scrub: false,
      };
    }

    // Set animation direction based on data-direction
    switch (direction) {
      case 'left':
        animationProps.x = -offset;
        break;
      case 'right':
        animationProps.x = offset;
        break;
      case 'down':
        animationProps.y = offset;
        break;
      case 'up':
      default:
        animationProps.y = -offset;
        break;
    }

    if (animationType === 'to') {
      gsap.to(element, animationProps);
    } else {
      gsap.from(element, animationProps);
    }
  });
};
