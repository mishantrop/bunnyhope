export const initSuperButton = () => {
  const buttons = document.querySelectorAll('[data-superbutton]');
  buttons.forEach((button) => {
    button.addEventListener('mousemove', (e) => {
      const x = e.pageX - e.target.offsetLeft;
      const y = e.pageY - e.target.offsetTop;
      e.target.style.setProperty('--x', `${x}px`);
      e.target.style.setProperty('--y', `${y - 60}px`);
    });
  });
};
