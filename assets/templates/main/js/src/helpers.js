const isElements = (items) => {
  return NodeList.prototype.isPrototypeOf(items);
};

const isObject = (variable) => {
  return typeof variable === 'object' && variable !== null;
};

const isMobileExtra = () => {
	return window.innerWidth <= 600;
};

const isMobile = () => {
	return window.innerWidth <= 765;
};

const isTablet = () => {
	return window.innerWidth <= 1024 && !isMobile();
};

const isWide = () => {
	return window.innerWidth > 1025;
};

const inViewport = (element) => {
  const rect = element.getBoundingClientRect();
  const html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
};

export {
  inViewport,
  isElements,
  isMobile,
  isMobileExtra,
  isObject,
  isTablet,
  isWide,
};
