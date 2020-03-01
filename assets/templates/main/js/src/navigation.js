import 'whatwg-fetch';
import { isTablet } from './helpers';
import { scrollTo } from './scrollto';

export class Navigation {
  constructor() {
    this.state = {
      expanded: false,
      screen: 'desktop', // Разметка: mobile, tablet, desktop
    };

    this.body = false;
    this.links = false;
    this.menu = false;
    this.triggerMenu = false;

    this.init();
  }

  setState(patch) {
    const newState = Object.assign(this.state, patch);
    this.state = newState;
    this.render();
  }

  init() {
    this.body = document.querySelector('body');
    this.closeMenu = document.getElementById('header-navigation-close');
    this.headerNavigation = document.getElementById('header-navigation');
    this.menu = document.querySelector('.header__navigation') || false;
    this.triggerMenu = document.getElementById('header-navigation-toggler');
    // Основное содержимое страницы (шапка, содержмое и подвал)
    // Блюрится при открытии меню
    this.mainContent = document.getElementById('main-content');

    this.bindEvents();
  }

  bindEvents = () => {
    const {
      expanded,
    } = this.state;

    window.addEventListener('resize', () => {
      this.render();
    });

    if (this.triggerMenu) {
      this.triggerMenu.addEventListener('click', () => {
        this.setState({
          expanded: !expanded,
        });
      });
    }

    if (this.closeMenu) {
      this.closeMenu.addEventListener('click', () => {
        this.setState({
          expanded: false,
        });
      });
    }

    if (this.headerNavigation) {
      this.headerNavigation.addEventListener('touchmove', (e) => {
        e.preventDefault();
      }, false);
    }

    const pageLinks = document.querySelectorAll('[data-scrollto]');

    [].forEach.call(pageLinks, (el) => {
      el.addEventListener('click', (e) => {
        const target = document.querySelector(el.getAttribute('data-scrollto'));
        if (target) {
          this.setState({
            expanded: false,
          });
          scrollTo(target, 500);
          e.preventDefault();
        }
      });
    });
  }

  render() {
    const {
      expanded,
    } = this.state;

    if (expanded) {
      this.headerNavigation.classList.add('header-navigation--expanded');
    } else {
      this.headerNavigation.classList.remove('header-navigation--expanded');
    }

    // Блюр основного контента при раскрытии меню
    if (this.mainContent) {
      if (expanded && isTablet()) {
        this.mainContent.classList.add('main-content--blur');
      } else {
        this.mainContent.classList.remove('main-content--blur');
      }
    }

    if (this.headerNavigation) {
      this.headerNavigation.classList.remove('header-navigation--hidden');
    }
  }
}
