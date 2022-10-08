export default function line() {
  const lines = document.querySelectorAll('.about__line');

  let arithmeticSignFirst = '-'; // если -, то полоса движеться влево, если +, то вправо
  let arithmeticSignSecond = '+'; // если -, то полоса движеться влево, если +, то вправо
  let lineWidthFirst; // ширина всей линии
  let lineWidthSecond; // ширина всей линии

  // изначально задаем, чтобы полоса двигалась влево
  lines.forEach((line, ind) => {
    const multiply =
      window.innerWidth > 1024
        ? 300
        : window.innerWidth <= 1024 && window.innerWidth > 768
        ? 200
        : 145;

    if (ind === 0) {
      lineWidthFirst = (line.children.length + 1) * multiply - window.innerWidth;
      line.style.transform = `translate(${arithmeticSignFirst}${lineWidthFirst}px,0)`;
    }

    if (ind === 1) {
      lineWidthSecond = (line.children.length + 1) * multiply - window.innerWidth;
      line.style.transform = `translate(${100}px,0)`;
    }
  });

  // в зависимости от знака, полоса будет двигатся или влево, или вправо
  setInterval(() => {
    if (arithmeticSignFirst === '+') {
      arithmeticSignFirst = '-';
    } else {
      arithmeticSignFirst = '+';
    }

    if (arithmeticSignSecond === '+') {
      arithmeticSignSecond = '-';
    } else {
      arithmeticSignSecond = '+';
    }

    lines.forEach((line, ind) => {
      if (ind === 0) {
        if (arithmeticSignFirst === '+') {
          line.style.transform = `translate(${100}px,0)`;
        } else {
          line.style.transform = `translate(${arithmeticSignFirst}${lineWidthFirst}px,0)`;
        }
      }

      if (ind === 1) {
        if (arithmeticSignSecond === '+') {
          line.style.transform = `translate(${100}px,0)`;
        } else {
          line.style.transform = `translate(${arithmeticSignSecond}${lineWidthSecond}px,0)`;
        }
      }
    });
  }, 9000);
}
