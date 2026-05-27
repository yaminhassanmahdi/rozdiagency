export const initSmoothScrolling = () => {
  if (typeof window === 'undefined' || !(window as any).gsap || !(window as any).Lenis) return;
  const gsap = (window as any).gsap;
  const Lenis = (window as any).Lenis;
  const ScrollTrigger = (window as any).ScrollTrigger;

  let lenis: any;
  
  // Check if device is mobile
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    window.innerWidth <= 768 ||
    'ontouchstart' in window;

  if (!isMobile) {
    lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    lenis.on('scroll', () => ScrollTrigger.update());

    gsap.ticker.add((time: number) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  const resetTocItems = (sidebarList: HTMLElement) => {
    const allListItems = sidebarList.querySelectorAll('li');
    allListItems.forEach((item) => {
      const icon = item.querySelector('span:last-child');
      const text = item.querySelector('span:first-child, a span');

      if (icon) icon.classList.add('invisible');
      if (text) {
        text.classList.remove('font-medium', 'text-background-13');
        text.classList.add('font-normal', 'text-background-13/60');
      }
    });
  };

  const activateTocItem = (item: HTMLElement) => {
    const icon = item.querySelector('span:last-child');
    const text = item.querySelector('span:first-child, a span');

    if (icon) icon.classList.remove('invisible');
    if (text) {
      text.classList.remove('font-normal', 'text-background-13/60');
      text.classList.add('font-medium', 'text-background-13');
    }
  };

  const handleTocItemClick = (clickedItem: HTMLElement, sidebarList: HTMLElement) => {
    resetTocItems(sidebarList);
    activateTocItem(clickedItem);
  };

  const lenisTargetElements = document.querySelectorAll('.lenis-scroll-to');
  const sidebarList = document.querySelector('.table-of-contents .table-of-list') as HTMLElement;

  lenisTargetElements.forEach((el) => {
    const ele = el as HTMLElement;
    ele.addEventListener('click', function (e) {
      e.preventDefault();
      const target = ele.getAttribute('href');

      if (sidebarList) {
        const clickedItem = ele.closest('li') as HTMLElement;
        if (clickedItem) {
          handleTocItemClick(clickedItem, sidebarList);
        }
      }

      if (target) {
        if (lenis) {
          lenis.scrollTo(target, {
            offset: -100,
            duration: 1.7,
            easing: (t: number) => 1 - Math.pow(1 - t, 3),
          });
        } else {
          const targetElement = document.querySelector(target) as HTMLElement;
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
            setTimeout(() => {
              window.scrollBy(0, -100);
            }, 100);
          }
        }
      }
    });
  });

  if (sidebarList) {
    const listItems = sidebarList.querySelectorAll('li');
    listItems.forEach((item) => {
      if (item.querySelector('.lenis-scroll-to')) return;
      item.addEventListener('click', function () {
        handleTocItemClick(item as HTMLElement, sidebarList);
      });
    });
  }
};
