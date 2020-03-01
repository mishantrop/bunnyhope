export const isElements = (items) => {
  return NodeList.prototype.isPrototypeOf(items);
};

export const isObject = (variable) => {
  return typeof variable === 'object' && variable !== null;
};

export const isMobileExtra = () => window.innerWidth <= 600;

export const isMobile = () => window.innerWidth <= 765;

export const isTablet = () => window.innerWidth <= 1024 && !isMobile();

export const isWide = () => window.innerWidth > 1025;

export const inViewport = (element) => {
  const rect = element.getBoundingClientRect();
  const html = document.documentElement;

  return (
    rect.top >= 0
    && rect.left >= 0
    && rect.bottom <= (window.innerHeight || html.clientHeight)
    && rect.right <= (window.innerWidth || html.clientWidth)
  );
};
