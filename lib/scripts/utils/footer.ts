export const initFooterYear = () => {
  if (typeof window === 'undefined') return;

  const footerYearElements = document.querySelectorAll('[data-footer-year]');

  if (footerYearElements.length > 0) {
    const currentYear = new Date().getFullYear();
    footerYearElements.forEach((element) => {
      element.textContent = currentYear.toString();
    });
  }
};
