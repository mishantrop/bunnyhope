'use strict';

const sameHeight = (selector, minWidth = 576) => {
	// console.log('sameHeight');
	// console.log(selector);
	if (typeof selector === 'string' && selector.length > 0) {
		const windowWidth = window.innerWidth;
		const elements = document.querySelectorAll(selector);
		elements.forEach((e) => {
			e.style.height = 'auto';
		});
		if (windowWidth >= minWidth) {
			let maxHeight = 0;
			elements.forEach((e) => {
				maxHeight = e.offsetHeight > maxHeight ? e.offsetHeight : maxHeight;
			});
			if (maxHeight > 0) {
				elements.forEach((e, i) => {
					elements[i].style.height = `${maxHeight}px`;
				});
			}
		} else {
			elements.forEach((e, i) => {
				elements[i].style.height = 'auto';
			});
		}
	}
};

export {
  sameHeight,
};
