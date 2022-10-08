function bubbles() {
  const bubbles = document.querySelectorAll('.bubbles');

  const removeToTop = () => {
    setTimeout(() => {
      bubbles.forEach((bubble) => {
        bubble.classList.remove('bubbles--to-top');
      });

      addActiveClass();
    }, 2500);
  };

  const removeOpacity = () => {
    setTimeout(() => {
      bubbles.forEach((bubble) => {
        bubble.classList.remove('bubbles--opacity');
      });

      removeToTop();
    }, 1700);
  };

  const addActiveClass = () => {
    setTimeout(() => {
      bubbles.forEach((bubble) => {
        bubble.classList.add('bubbles--to-top');
        bubble.classList.add('bubbles--opacity');
      });

      removeOpacity();
    }, 8000);
  };

  addActiveClass();
}

export default bubbles;
