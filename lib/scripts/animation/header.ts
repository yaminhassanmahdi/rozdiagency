export const initHeaderAnimation = () => {
  if (typeof window === 'undefined') return;

  const header = document.querySelector('.header-one') as HTMLElement;

  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        header.style.transition = 'all 0.5s ease-in-out';
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
  }
};
