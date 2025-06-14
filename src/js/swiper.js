import Swiper from 'swiper';
import { Navigation, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';

let swiperInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 1439) return;

  swiperInstance = new Swiper('.about-swiper', {
    modules: [Navigation, EffectCards],
    effect: 'cards',
    grabCursor: true,
    loop: false,
    cardsEffect: {
      perSlideOffset: 12,
      perSlideRotate: 0,
      slideShadows: false,
    },
    navigation: {
      nextEl: '.custom-next',
    },
    on: {
      init() {
        bindCustomPagination();
        updateCustomPagination();
      },
      slideChange() {
        updateCustomPagination();
      },
    },
  });
});

function bindCustomPagination() {
  const items = document.querySelectorAll('.pagination-item');
  if (!swiperInstance) return;

  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      swiperInstance.slideTo(index);
    });
  });
}

function updateCustomPagination() {
  if (!swiperInstance) return;

  const items = document.querySelectorAll('.pagination-item');
  const activeIndex = swiperInstance.activeIndex;

  items.forEach((item, index) => {
    item.classList.toggle('active', index === activeIndex);
  });
}