import getBodyScrollTop from './getBodyScrollTop';

export default function fishes() {
  const fishes = document.querySelectorAll('.fishes');

  window.addEventListener('scroll', () => {
    fishes.forEach((el, ind) => {
      // ищем расстояние элемента от верхней границы экрана
      const elRectTop = el.getBoundingClientRect().top;

      // если мы будем ниже элемента на 300px, то он будет двигаться
      if (elRectTop - window.innerHeight + 300 < 0) {
        el.style.transform = `translate(${ind % 2 === 0 ? '-' : '+'}${
          (elRectTop - window.innerHeight + 300) * -1 * 2
        }px,0)`;
      }
    });
  });
}
