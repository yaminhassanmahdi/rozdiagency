export const initSidebarAnimation = () => {
  if (typeof window === 'undefined') return;

  const navHamburger = document.querySelector('.nav-hamburger') as HTMLElement;
  const navHamburgerClose = document.querySelector('.nav-hamburger-close') as HTMLElement;
  const sidebar = document.querySelector('.sidebar') as HTMLElement;

  if (navHamburger && sidebar) {
    navHamburger.addEventListener('click', () => {
      sidebar.classList.add('show-sidebar');
      document.body.classList.add('overflow-hidden');
    });
  }

  if (navHamburgerClose && sidebar) {
    navHamburgerClose.addEventListener('click', () => {
      sidebar.classList.remove('show-sidebar');
      document.body.classList.remove('overflow-hidden');
    });
  }
};
