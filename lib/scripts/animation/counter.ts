export const initCounterAnimation = () => {
  if (typeof window === 'undefined' || !(window as any).NumberAnimation) return;
  const NumberAnimation = (window as any).NumberAnimation;

  // Create Intersection Observer for number animations
  const numberObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const {
            number: numberStr,
            speed: speedStr,
            interval: intervalStr,
            rooms: roomsStr,
            heightSpace: dataSpace,
          } = element.dataset;
          const number = parseInt(numberStr || '0', 10);
          const speed = parseInt(speedStr || '800', 10);
          const interval = parseInt(intervalStr || '150', 10);
          const rooms = parseInt(roomsStr || '2', 10);

          // Only animate if not already animated
          if (!element.classList.contains('animated')) {
            element.classList.add('animated');

            NumberAnimation(element, {
              number: number,
              speed: speed,
              interval: interval,
              rooms: rooms,
              dataSpace: dataSpace, // Pass the data-space attribute
              fontStyle: {
                'font-size': 'inherit',
                color: 'inherit',
              },
            });
          }
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  // Observe number elements
  const numberElements = document.querySelectorAll('[data-counter]');
  numberElements.forEach((element) => {
    numberObserver.observe(element);
  });
};
