export const scrollTo = (target, duration) => {
  const startingY = window.pageYOffset;
  const diff = target.offsetTop - startingY;
  let start = 0;
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) {
      start = timestamp;
    }
    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);
    window.scrollTo(0, startingY + diff * percent);
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
};
