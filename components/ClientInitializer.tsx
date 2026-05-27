'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import * as animations from '@/lib/scripts/animation';
import * as utils from '@/lib/scripts/utils';

export default function ClientInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let attempts = 0;
    const maxAttempts = 50; // 5 seconds max

    const initAll = () => {
      const runSafe = (name: string, fn: () => void) => {
        try {
          fn();
        } catch (error) {
          console.error(`Error during client initialization of ${name}:`, error);
        }
      };

      // Animation scripts
      runSafe('initAvatarAnimation', animations.initAvatarAnimation);
      runSafe('initCounterAnimation', animations.initCounterAnimation);
      runSafe('initElementsMoveUpOnScroll', animations.initElementsMoveUpOnScroll);
      runSafe('initHeaderAnimation', animations.initHeaderAnimation);
      runSafe('initMobileMenu', animations.initMobileMenu);
      runSafe('initRevealAnimation', animations.initRevealAnimation);
      runSafe('initSidebarAnimation', animations.initSidebarAnimation);
      runSafe('initSmoothScrolling', animations.initSmoothScrolling);
      runSafe('initTextReveal', animations.initTextReveal);

      // Utils scripts
      runSafe('initAboutVideo', utils.initAboutVideo);
      runSafe('initAccordions', utils.initAccordions);
      runSafe('initButtonAnimation', utils.initButtonAnimation);
      runSafe('initDividerExpand', utils.initDividerExpand);
      runSafe('initFooterYear', utils.initFooterYear);
      runSafe('initMarquee', utils.initMarquee);
      runSafe('initModal', utils.initModal);
      runSafe('initNavigationMenu', utils.initNavigationMenu);
      runSafe('initProgressiveBlurEffect', utils.initProgressiveBlurEffect);
    };

    const checkAndInit = () => {
      attempts++;
      // Check for main vendor scripts
      if (typeof window !== 'undefined' && (window as any).gsap) {
        initAll();
      } else if (attempts < maxAttempts) {
        timeoutId = setTimeout(checkAndInit, 100);
      } else {
        console.warn('GSAP not found after 5 seconds, initializing anyway...');
        initAll();
      }
    };

    checkAndInit();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}
