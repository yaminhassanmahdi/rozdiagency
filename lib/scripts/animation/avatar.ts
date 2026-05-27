export const initAvatarAnimation = () => {
  if (typeof window === 'undefined' || !(window as any).gsap) return;
  const gsap = (window as any).gsap;

  const avatars = document.querySelectorAll('[data-opai-avatar]');
  avatars.forEach((el) => {
    const element = el as HTMLElement;
    const delay = element.getAttribute('data-avatar-delay')
      ? parseFloat(element.getAttribute('data-avatar-delay')!)
      : 0;
    const direction = element.getAttribute('data-avatar-direction')
      ? element.getAttribute('data-avatar-direction')
      : 'left';
    const scale = element.getAttribute('data-avatar-scale')
      ? parseFloat(element.getAttribute('data-avatar-scale')!)
      : 0;
    const offset = element.getAttribute('data-avatar-offset')
      ? parseFloat(element.getAttribute('data-avatar-offset')!)
      : 0;

    const animationProps: any = {
      duration: 1.5,
      opacity: 0,
      scale: scale,
      filter: 'blur(5px)',
      delay,
      ease: 'elastic.out(1, 0.7)',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        end: 'bottom 20%',
      },
    };

    // Set animation direction  data-avatar-direction
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

    gsap.from(element, animationProps);
  });
};
