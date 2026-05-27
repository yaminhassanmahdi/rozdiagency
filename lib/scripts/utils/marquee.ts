export const initMarquee = () => {
  if (typeof window === 'undefined' || !(window as any).InfiniteMarquee) return;
  const InfiniteMarquee = (window as any).InfiniteMarquee;

  const animation = {
    infiniteLeft() {
      if (document.querySelector('.logos-marquee-container')) {
        new InfiniteMarquee({
          element: '.logos-marquee-container',
          speed: 55000,
          smoothEdges: true,
          direction: 'left',
          gap: '32px',
          duplicateCount: 1,
          mobileSettings: {
            direction: 'top',
            speed: 50000,
          },
        });
      }
    },

    infiniteRight() {
      if (document.querySelector('.logos-right-marquee-container')) {
        new InfiniteMarquee({
          element: '.logos-right-marquee-container',
          speed: 55000,
          smoothEdges: true,
          direction: 'right',
          gap: '32px',
          duplicateCount: 1,
          mobileSettings: {
            direction: 'right',
            speed: 50000,
          },
        });
      }
    },

    initHover() {
      if (document.querySelector('.cards-marquee-container')) {
        new InfiniteMarquee({
          element: '.cards-marquee-container',
          speed: 140000,
          smoothEdges: true,
          direction: 'left',
          gap: '32px',
          pauseOnHover: true,
        });
      }
    },

    initHoverRight() {
      if (document.querySelector('.cards-right-marquee-container')) {
        new InfiniteMarquee({
          element: '.cards-right-marquee-container',
          speed: 140000,
          smoothEdges: true,
          direction: 'right',
          gap: '32px',
          pauseOnHover: true,
        });
      }
    },
    infiniteTop() {
      if (document.querySelector('.top-marquee-container')) {
        new InfiniteMarquee({
          element: '.top-marquee-container',
          speed: 40000,
          smoothEdges: true,
          direction: 'top',
          gap: '32px',
          pauseOnHover: true,
          duplicateCount: 0,
          mobileSettings: {
            direction: 'top',
            speed: 50000,
          },
        });
      }
    },

    infiniteBottom() {
      if (document.querySelector('.bottom-marquee-container')) {
        new InfiniteMarquee({
          element: '.bottom-marquee-container',
          speed: 40000,
          smoothEdges: true,
          direction: 'bottom',
          pauseOnHover: true,
          gap: '32px',
          duplicateCount: 0,
          mobileSettings: {
            direction: 'bottom',
            speed: 50000,
          },
        });
      }
    },
  };

  // Initialize all
  animation.infiniteLeft();
  animation.infiniteRight();
  animation.initHover();
  animation.initHoverRight();
  animation.infiniteTop();
  animation.infiniteBottom();
};
