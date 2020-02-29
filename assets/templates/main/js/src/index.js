// import Animate from 'animate.js';
import { initBackToTopScroll } from './backtotop';
import { initYandexMap } from './yandexMap';
import { Modal } from './Modal';
import { Navigation } from './navigation';
import { initSuperButton } from './superbutton';
import { tns } from "tiny-slider/src/tiny-slider.module"
import { LuminousGallery } from 'luminous-lightbox';
import quasiform from 'quasiform';

const init = () => {
  console.log('%c Создание пиздатых сайтов — quasi-art.ru', 'background-color: #000; color: #fff;');

  const navigation = new Navigation();
  initBackToTopScroll();
  initIndexGallerySlider();
  initIndexGalleryMobileSlider();
  initIndexTeamSlider();
  initIndexTestimonialsSlider();
  initIndexReservationSlider();

  if (document.querySelectorAll('#index-feedback__form-wrapper')) {
    const feedbackForm = new quasiform({
      selector: '#index-feedback__form-wrapper',
    });
  }

  initSuperButton();
  initIndexGalleryLightbox();

  // const animate = new Animate({
  //   offset: [0.01, 0.5],
  //   delay: 0,
  //   target: '[data-animate]',
  //   onScroll: true,
  //   onLoad: true,
  // });
  // animate.init();
  initLazyBackgrouns();
  initYandexMap('index-map-93', [ 55.780598, 37.715462 ], 'Москва, ул. Большая Семёновская, дом 42');
  initYandexMap('index-map-95', [ 55.8276949, 37.4485724 ], 'Москва, дом 24, БЦ «Смольный» 24, 3 этаж');
  initModals();
}

const initLazyBackgrouns = () => {
  const attributeName = 'data-lazy-background';
  const lazyBackgroundsBlocks = document.querySelectorAll(`[${attributeName}]`);
  lazyBackgroundsBlocks.forEach((element) => {
    element.style.backgroundImage = `url('${element.getAttribute(attributeName)}')`;
  });
}

const initModals = () => {
  initModal('recall');
  initModal('reservation', true);
}

const initModal = (name) => {
  const modal = new Modal(name, (modalName) => {
    const form = document.querySelector(`.${modalName}__form`);
    const errors = document.querySelector(`.${modalName}-errors`);
    const messages = document.querySelector(`.${modalName}-messages`);
    if (form) {
      form.style.display = 'block';
      errors.style.display = 'none';
      messages.style.display = 'none';
    }
  });
  const form = new quasiform({
    hideFormOnSuccess: true,
    selector: `#${name}__form-wrapper`,
  });
  const triggers = document.querySelectorAll(`[data-trigger="${name}"]`);
  if (triggers.length > 0) {
    triggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        modal.show();
      });
    });
  }
}

const initIndexGalleryLightbox = () => {
  const options = {
    arrowNavigation: true,
  };
  new LuminousGallery(document.querySelectorAll('[data-lightbox="index-gallery-item"]'), options);
};

const initIndexGallerySlider = () => {
  const id = 'tns-slider';
  if (document.querySelectorAll(`#${id}`).length === 0) {
    console.log(`Slider #${id} does not exists`);
    return;
  }
  const slider = tns({
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayButton: false,
    autoplayButtonOutput: false,
    container: `#${id}`,
    controls: true,
    controlsText: ['', ''],
    items: 1,
    mouseDrag: false,
    nav: false,
    responsive: {
      600: {
        edgePadding: 20,
        gutter: 20,
        items: 2,
      },
      768: {
        gutter: 3,
      },
      1024: {
        items: 4,
      },
    },
    slideBy: 'page',
    speed: 400,
  });
}

const initIndexGalleryMobileSlider = () => {
  const id = 'tns-slider--mobile';
  if (document.querySelectorAll(`#${id}`).length === 0) {
    console.log(`Slider #${id} does not exists`);
    return;
  }
  const slider = tns({
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayButton: false,
    autoplayButtonOutput: false,
    container: `#${id}`,
    controls: true,
    controlsText: ['', ''],
    items: 1,
    mouseDrag: false,
    nav: false,
    responsive: {
      600: {
        edgePadding: 20,
        gutter: 20,
        items: 2,
      },
      768: {
        gutter: 3,
      },
      1024: {
        items: 4,
      },
    },
    slideBy: 'page',
    speed: 400,
  });
}

const initIndexTeamSlider = () => {
  const id = 'tns-slider-team';
  if (document.querySelectorAll(`#${id}`).length === 0) {
    console.log(`Slider #${id} does not exists`);
    return;
  }
  const slider = tns({
    autoplay: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    container: `#${id}`,
    controls: true,
    controlsText: ['', ''],
    items: 1,
    mouseDrag: true,
    nav: false,
    responsive: {
      768: {
        edgePadding: 20,
        gutter: 20,
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
    slideBy: 'page',
    speed: 400,
  });
}

const initIndexTestimonialsSlider = () => {
  const id = 'tns-slider-testimonials';
  if (document.querySelectorAll(`#${id}`).length === 0) {
    console.log(`Slider #${id} does not exists`);
    return;
  }
  const slider = tns({
    autoplay: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    container: `#${id}`,
    controls: true,
    controlsText: ['', ''],
    items: 1,
    mouseDrag: true,
    nav: false,
    slideBy: 'page',
    speed: 400,
  });
}

const initIndexReservationSlider = () => {
  const id = 'index-reservation-slider';
  if (document.querySelectorAll(`#${id}`).length === 0) {
    console.log(`Slider #${id} does not exists`);
    return;
  }
  const slider = tns({
    autoplay: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    container: `#${id}`,
    controls: true,
    controlsText: ['', ''],
    items: 1,
    mouseDrag: true,
    nav: true,
    slideBy: 'page',
    speed: 400,
  });
}

if (document.readyState === 'complete' || document.readyState !== 'loading') {
  console.log('developed by quasi-art.ru');
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}
