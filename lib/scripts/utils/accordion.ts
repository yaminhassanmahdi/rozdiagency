export const initAccordions = ({ selector = '.accordion', allowMultiple = false, keyboard = true } = {}) => {
  if (typeof window === 'undefined') return;

  const gsap = (window as any).gsap;
  const SplitText = (window as any).SplitText;

  function canSplit() {
    return gsap !== undefined && SplitText !== undefined;
  }

  function revertSplit(accordionContent: HTMLElement) {
    accordionContent.querySelectorAll('p').forEach((el: any) => {
      if (el._split) {
        try {
          el._split.revert();
        } catch {}
        el._split = null;
      }
      if (canSplit()) gsap.set(el, { clearProps: 'all' });
    });
  }

  function animateSplitIn(accordionContent: HTMLElement) {
    if (!canSplit()) return;

    accordionContent.querySelectorAll('p').forEach((el: any, i) => {
      if (!el.textContent.trim()) return;

      if (el._split) el._split.revert();
      gsap.killTweensOf(el);

      el._split = new SplitText(el, { type: 'lines' });

      gsap.set(el._split.lines, {
        opacity: 0,
        y: 24,
        rotationX: -90,
      });

      gsap.to(el._split.lines, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
        delay: i * 0.05,
      });
    });
  }

  function animateSplitOut(accordionContent: HTMLElement) {
    if (!canSplit()) return;

    accordionContent.querySelectorAll('p').forEach((el: any, i) => {
      if (!el.textContent.trim()) return;

      if (!el._split) el._split = new SplitText(el, { type: 'lines' });

      gsap.to(el._split.lines, {
        opacity: 0,
        y: -16,
        rotationX: 90,
        duration: 0.35,
        ease: 'power2.in',
        stagger: 0.03,
        delay: i * 0.02,
      });
    });
  }

  function openItem(item: HTMLElement, btn: HTMLElement, accordionContent: HTMLElement, animate: boolean) {
    item.dataset.state = 'open';
    btn.dataset.state = 'open';
    btn.setAttribute('aria-expanded', 'true');
    accordionContent.setAttribute('aria-hidden', 'false');

    if (!animate) {
      accordionContent.style.height = 'auto';
      accordionContent.style.opacity = '1';
      animateSplitIn(accordionContent);
      return;
    }

    revertSplit(accordionContent);

    accordionContent.style.height = '0px';
    accordionContent.style.opacity = '0';
    const target = (accordionContent.offsetHeight, accordionContent.scrollHeight);

    animateSplitIn(accordionContent);

    requestAnimationFrame(() => {
      accordionContent.style.height = `${target}px`;
      accordionContent.style.opacity = '1';
    });

    const onTransitionEnd = (e: TransitionEvent) => {
      if (e.propertyName === 'height') {
        accordionContent.style.height = 'auto';
        accordionContent.removeEventListener('transitionend', onTransitionEnd);
      }
    };
    accordionContent.addEventListener('transitionend', onTransitionEnd);
  }

  function closeItem(item: HTMLElement, btn: HTMLElement, accordionContent: HTMLElement, animate: boolean) {
    item.dataset.state = 'closed';
    btn.dataset.state = 'closed';
    btn.setAttribute('aria-expanded', 'false');
    accordionContent.setAttribute('aria-hidden', 'true');

    if (!animate) {
      accordionContent.style.height = '0px';
      accordionContent.style.opacity = '0';
      revertSplit(accordionContent);
      return;
    }

    animateSplitOut(accordionContent);

    const current = accordionContent.scrollHeight;
    accordionContent.style.height = `${current}px`;
    accordionContent.style.opacity = '1';
    
    setTimeout(() => {
      requestAnimationFrame(() => {
        accordionContent.style.height = '0px';
        accordionContent.style.opacity = '0';
      });
    }, 80);

    const onTransitionEnd = (e: TransitionEvent) => {
      if (e.propertyName === 'height') {
        revertSplit(accordionContent);
        accordionContent.removeEventListener('transitionend', onTransitionEnd);
      }
    };
    accordionContent.addEventListener('transitionend', onTransitionEnd);
  }

  const accordions = document.querySelectorAll(selector);

  accordions.forEach((accordion, accIndex) => {
    const items = Array.from(accordion.querySelectorAll('.accordion-item')) as HTMLElement[];

    if (!accordion.getAttribute('aria-label')) {
      accordion.setAttribute('aria-label', 'Accordion');
    }

    items.forEach((item, i) => {
      const accordionAction = item.querySelector('.accordion-action') as HTMLElement;
      const accordionContent = item.querySelector('.accordion-content') as HTMLElement;
      if (!accordionAction || !accordionContent) return;

      const qId = `acc-q-${accIndex}-${i}`;
      const aId = `acc-a-${accIndex}-${i}`;
      if (!accordionAction.id) accordionAction.id = qId;
      if (!accordionContent.id) accordionContent.id = aId;

      accordionAction.setAttribute('aria-controls', accordionContent.id);
      accordionContent.setAttribute('role', 'region');
      accordionContent.setAttribute('aria-labelledby', accordionAction.id);

      accordionContent.style.overflow = 'hidden';
      accordionContent.style.transition = 'height 300ms ease-in-out, opacity 300ms ease-in-out';

      const shouldOpen = item.dataset.defaultOpen === 'true';

      if (shouldOpen) openItem(item, accordionAction, accordionContent, false);
      else closeItem(item, accordionAction, accordionContent, false);
    });

    if (!allowMultiple) {
      const openDefaults = items.filter((it) => it.dataset.defaultOpen === 'true');

      openDefaults.slice(1).forEach((it) => {
        const btn = it.querySelector('.accordion-action') as HTMLElement;
        const accordionContent = it.querySelector('.accordion-content') as HTMLElement;
        if (btn && accordionContent) closeItem(it, btn, accordionContent, false);
        delete it.dataset.defaultOpen;
      });
    }

    accordion.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('.accordion-action') as HTMLElement;
      if (!btn || !accordion.contains(btn)) return;

      e.preventDefault();

      const item = btn.closest('.accordion-item') as HTMLElement;
      if (!item) return;

      const accordionContent = item.querySelector('.accordion-content') as HTMLElement;
      if (!accordionContent) return;

      const isOpen = item.dataset.state === 'open';

      if (isOpen) {
        closeItem(item, btn, accordionContent, true);
        return;
      }

      if (!allowMultiple) {
        items.forEach((it) => {
          if (it === item) return;
          if (it.dataset.state === 'open') {
            const b = it.querySelector('.accordion-action') as HTMLElement;
            const c = it.querySelector('.accordion-content') as HTMLElement;
            if (b && c) closeItem(it, b, c, true);
          }
        });
      }

      openItem(item, btn, accordionContent, true);
    });

    if (keyboard) {
      accordion.addEventListener('keydown', (e: any) => {
        const btn = (e.target as HTMLElement).closest('.accordion-action') as HTMLElement;
        if (!btn) return;

        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    }
  });
};
