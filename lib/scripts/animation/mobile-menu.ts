class MobileMenuAccordion {
  private defaultOpenMenu: string;
  private toggleButtons: NodeListOf<HTMLElement> | null = null;
  private submenus: NodeListOf<HTMLElement> | null = null;
  private arrows: NodeListOf<HTMLElement> | null = null;
  private sidebar: HTMLElement | null = null;

  constructor(options: { defaultOpenMenu?: string } = {}) {
    this.defaultOpenMenu = options.defaultOpenMenu || 'company';
    this.onSubmenuLinkClick = this.onSubmenuLinkClick.bind(this);
    this.init();
  }

  init() {
    this.bindEvents();
  }

  clearToggleSelected() {
    if (!this.toggleButtons) return;
    this.toggleButtons.forEach((btn) => btn.removeAttribute('data-selected'));
  }

  setToggleSelected(button: HTMLElement) {
    this.clearToggleSelected();
    if (button) {
      button.setAttribute('data-selected', 'true');
    }
  }

  clearLinkSelected() {
    if (!this.sidebar) return;
    this.sidebar.querySelectorAll('.mobile-submenu a').forEach((a) => a.removeAttribute('data-selected'));
  }

  syncLinkSelectedFromPath() {
    if (!this.sidebar) return;
    this.clearLinkSelected();
    const segments = window.location.pathname.split('/').filter(Boolean);
    const current = segments.length ? segments[segments.length - 1] : 'index.html';

    this.sidebar.querySelectorAll('.mobile-submenu a').forEach((a) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const file = href.replace(/^\.\//, '').split(/[?#]/)[0];
      if (file === current) {
        a.setAttribute('data-selected', 'true');
      }
    });
  }

  onSubmenuLinkClick(e: MouseEvent) {
    const link = (e.target as HTMLElement).closest?.('.mobile-submenu a');
    if (!link || !this.sidebar?.contains(link)) {
      return;
    }
    this.clearLinkSelected();
    link.setAttribute('data-selected', 'true');
  }

  bindEvents() {
    this.toggleButtons = document.querySelectorAll('.mobile-menu-toggle[data-menu]');

    if (this.toggleButtons.length === 0) {
      return;
    }

    this.sidebar = this.toggleButtons[0].closest('aside.sidebar') as HTMLElement;
    if (this.sidebar && !this.sidebar.dataset.submenuLinkDelegate) {
      this.sidebar.dataset.submenuLinkDelegate = 'true';
      this.sidebar.addEventListener('click', this.onSubmenuLinkClick as any);
    }

    this.submenus = document.querySelectorAll('.mobile-submenu[data-submenu]');
    this.arrows = document.querySelectorAll('.mobile-menu-toggle .menu-arrow');

    this.setDefaultState();

    this.toggleButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const menuId = button.getAttribute('data-menu');
        if (menuId) this.toggleMenu(menuId);
      });
    });
  }

  setDefaultState() {
    this.clearToggleSelected();

    if (this.submenus) {
      this.submenus.forEach((submenu) => {
        submenu.classList.add('hidden');
        submenu.classList.remove('block');
      });
    }

    if (this.arrows) {
      this.arrows.forEach((arrow) => {
        arrow.classList.remove('rotate-90');
      });
    }

    if (this.defaultOpenMenu) {
      const defaultSubmenu = document.querySelector(
        `.mobile-submenu[data-submenu="${this.defaultOpenMenu}"]`
      );
      const defaultButton = document.querySelector(
        `.mobile-menu-toggle[data-menu="${this.defaultOpenMenu}"]`
      ) as HTMLElement;
      const defaultArrow = defaultButton?.querySelector('.menu-arrow');

      if (defaultSubmenu) {
        defaultSubmenu.classList.remove('hidden');
        defaultSubmenu.classList.add('block');
      }

      if (defaultArrow) {
        defaultArrow.classList.add('rotate-90');
      }

      if (defaultButton) {
        this.setToggleSelected(defaultButton);
      }
    }

    this.syncLinkSelectedFromPath();
  }

  toggleMenu(menuId: string) {
    const submenu = document.querySelector(`.mobile-submenu[data-submenu="${menuId}"]`);
    const button = document.querySelector(`.mobile-menu-toggle[data-menu="${menuId}"]`) as HTMLElement;
    const arrow = button?.querySelector('.menu-arrow');

    if (!submenu || !button) {
      return;
    }

    const isCurrentlyOpen =
      submenu.classList.contains('block') && !submenu.classList.contains('hidden');

    this.closeAllMenus();

    if (isCurrentlyOpen) {
      submenu.classList.add('hidden');
      submenu.classList.remove('block');
      if (arrow) {
        arrow.classList.remove('rotate-90');
      }
      this.clearToggleSelected();
    } else {
      submenu.classList.remove('hidden');
      submenu.classList.add('block');
      if (arrow) {
        arrow.classList.add('rotate-90');
      }
      this.setToggleSelected(button);
    }
  }

  closeAllMenus() {
    if (this.submenus) {
      this.submenus.forEach((submenu) => {
        submenu.classList.add('hidden');
        submenu.classList.remove('block');
      });
    }

    if (this.arrows) {
      this.arrows.forEach((arrow) => {
        arrow.classList.remove('rotate-90');
      });
    }

    this.clearToggleSelected();
  }

  reinit() {
    this.bindEvents();
  }
}

export const initMobileMenu = () => {
  if (typeof window === 'undefined') return;
  const mobileMenuExists = document.querySelector('.mobile-menu-toggle[data-menu]');

  if (mobileMenuExists) {
    (window as any).mobileMenuAccordion = new MobileMenuAccordion({
      defaultOpenMenu: 'company',
    });
  }
};
