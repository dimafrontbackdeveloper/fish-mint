import bubbles from './bubbles';
import swimmingFish from './swimmingFish';
import line from './line';
import fishes from './fishes';

// после перезагрузки страницы проскролить на самый верх
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

line();
bubbles();
swimmingFish();
fishes();
