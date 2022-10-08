export default function fish() {
  const fish = document.querySelector('.fish'),
    fishContainer = document.querySelector('.fishContainer'),
    elRectTopGlobal = fish.getBoundingClientRect().top;

  const fishContainerHeight = fishContainer.offsetHeight;
  let pageScrollFromTop;
  let isAddedPageScrollFromTop = false;
  let x = 0;
  let y = 0;
  let isScale = false;
  let howMultyplyY = 4;
  const delay = 300;
  let oldPageScrollFromTop = 0;
  let diapazoneStart = 24;
  let diapazoneEnd = 48;

  const elRectTop = fish.getBoundingClientRect().top;
  window.addEventListener('scroll', () => {
    // ищем расстояние элемента от верхней границы экрана
    // const elRectTop = fish.getBoundingClientRect().top;
    // если мы будем ниже элемента на 300px, то он будет двигаться
    if (elRectTop - window.scrollY - window.innerHeight + delay < 0) {
      if (!isAddedPageScrollFromTop) {
        isAddedPageScrollFromTop = true;
        pageScrollFromTop = window.scrollY - 100;
      }

      if (window.scrollY - pageScrollFromTop < 100) {
        y = -45;
        x = 0;

        fish.style.transition = 'none';
        isScale = false;
        fish.style.transition = 'transform 0.25s linear';
      }

      if (window.scrollY - pageScrollFromTop >= 100 && window.scrollY - pageScrollFromTop < 300) {
        y = -35;
        x = 240;

        fish.style.transition = 'none';
        isScale = true;
        fish.style.transition = 'transform 0.25s linear';
      }

      if (window.scrollY - pageScrollFromTop >= 300 && window.scrollY - pageScrollFromTop < 600) {
        y = 180;
        x = -300;

        fish.style.transition = 'none';
        isScale = false;
        fish.style.transition = 'transform 0.25s linear';
      }

      if (window.scrollY - pageScrollFromTop >= 600 && window.scrollY - pageScrollFromTop < 900) {
        y = 380;
        x = 230;

        fish.style.transition = 'none';
        isScale = true;
        fish.style.transition = 'transform 0.25s linear';
      }

      if (window.scrollY - pageScrollFromTop >= 900 && window.scrollY - pageScrollFromTop < 1200) {
        y = 650;
        x = -320;

        fish.style.transition = 'none';
        isScale = false;
        fish.style.transition = 'transform 0.25s linear';
      }

      if (window.scrollY - pageScrollFromTop >= 1200 && window.scrollY - pageScrollFromTop < 1500) {
        y = 750;
        x = 0;

        fish.style.transition = 'none';
        isScale = true;
        fish.style.transition = 'transform 0.25s linear';
      }

      console.log(window.scrollY - pageScrollFromTop);

      oldPageScrollFromTop = window.scrollY;
    } else {
      x = 0;
      y = -45;

      fish.style.transition = 'none';
      isScale = false;
      fish.style.transition = 'transform 0.25s linear';
    }
    fish.style.transform = `translate(${x}px,${y}px) ${isScale ? 'scale(-1,1)' : ''}`;
  });
}

// скрипт не адаптивный и может ломаться. Значения transform зависят от ширины экрана

// /export default function fish() {
//   const fish = document.querySelector('.fish'),
//     fishContainer = document.querySelector('.fishContainer'),
//     elRectTopGlobal = fish.getBoundingClientRect().top;

//   const fishContainerHeight = fishContainer.offsetHeight;
//   let pageScrollFromTop;
//   let isAddedPageScrollFromTop = false;
//   let x = 0;
//   let isScale = false;
//   let howMultyplyY = 4;

//   window.addEventListener('scroll', () => {
//     // ищем расстояние элемента от верхней границы экрана
//     const elRectTop = fish.getBoundingClientRect().top;

//     // если мы будем ниже элемента на 300px, то он будет двигаться
//     if (elRectTop - window.innerHeight + 300 < 0) {
//       if (!isAddedPageScrollFromTop) {
//         isAddedPageScrollFromTop = true;
//         pageScrollFromTop = window.scrollY - 100;
//       }

//       // какая будет скорость спускания и поднятия рыбки

//       console.log(window.scrollY - pageScrollFromTop);

//       if (window.scrollY - pageScrollFromTop < 150) {
//         x = 45;
//       }

//       if (window.scrollY - pageScrollFromTop > 150 && window.scrollY - pageScrollFromTop < 250) {
//         howMultyplyY = 0.1;
//         x = 68;
//       }

//       if (window.scrollY - pageScrollFromTop > 250 && window.scrollY - pageScrollFromTop < 350) {
//         howMultyplyY = 0.5;
//         x = 40;
//       }

//       if (window.scrollY - pageScrollFromTop > 350 && window.scrollY - pageScrollFromTop < 450) {
//         howMultyplyY = 4;
//         x = 10;
//       }

//       if (window.scrollY - pageScrollFromTop > 450 && window.scrollY - pageScrollFromTop < 550) {
//         howMultyplyY = 2.5;
//         x = 20;
//       }

//       if (window.scrollY - pageScrollFromTop > 550 && window.scrollY - pageScrollFromTop < 650) {
//         howMultyplyY = 1.6;
//         x = 40;
//       }

//       if (window.scrollY - pageScrollFromTop > 550 && window.scrollY - pageScrollFromTop < 650) {
//         howMultyplyY = 4;
//         x = 65;
//       }

//       if (window.scrollY - pageScrollFromTop > 650 && window.scrollY - pageScrollFromTop < 750) {
//         howMultyplyY = 6;

//         x = 57;
//       }

//       if (window.scrollY - pageScrollFromTop > 750 && window.scrollY - pageScrollFromTop < 850) {
//         howMultyplyY = 10;

//         x = 30;
//       }

//       if (window.scrollY - pageScrollFromTop > 850 && window.scrollY - pageScrollFromTop < 950) {
//         x = 10;
//       }

//       if (window.scrollY - pageScrollFromTop > 950 && window.scrollY - pageScrollFromTop < 1050) {
//         x = 40;
//       }

//       // if (window.scrollY - pageScrollFromTop > 450 && window.scrollY - pageScrollFromTop < 550) {
//       //   x = 30;
//       // }

//       // if (window.scrollY - pageScrollFromTop > 550 && window.scrollY - pageScrollFromTop < 650) {
//       //   x = 60;
//       // }

//       // скрипт не адаптивный и может ломаться. Значения transform зависят от ширины экрана

//       fish.style.transform =
//         (elRectTop - window.innerHeight - 275) * -1 < fishContainerHeight
//           ? `translate(0px,${
//               (elRectTop - window.innerHeight + 350) * howMultyplyY * -1 < 20
//                 ? -58
//                 : (elRectTop - window.innerHeight + 350) * howMultyplyY * -1
//             }px)`
//           : `translate(0px,${fishContainerHeight - 200}px)}`;
//     }
//     fish.style.left = `${x}%`;
//   });
// }
