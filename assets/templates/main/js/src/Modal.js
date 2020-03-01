export class Modal {
  constructor(name, onClose) {
    this.state = {
      isOpened: false,
    };

    this.name = name;
    this.onClose = onClose;

    this.init();
  }

  setState(patch) {
    const newState = Object.assign(this.state, patch);
    this.state = newState;
    this.render();
  }

  init() {
    this.elementWrapper = document.getElementById(`${this.name}-modal-wrapper`);
    this.elemenetCloseMenu = document.getElementById(`${this.name}-modal__close`);

    this.bindEvents();
  }

  bindEvents = () => {
    if (this.elemenetCloseMenu) {
      this.elemenetCloseMenu.addEventListener('click', () => {
        this.hide();
        if (this.onClose) {
          this.onClose(this.name);
        }
      });
    }
  }

  show() {
    this.setState({
      isOpened: true,
    });
  }

  hide() {
    this.setState({
      isOpened: false,
    });
  }

  render() {
    if (!this.elementWrapper) {
      console.log(`Modal ${this.name} does not exists`);

      return;
    }

    const { isOpened } = this.state;

    if (isOpened) {
      this.elementWrapper.classList.add(`${this.name}-modal-wrapper--opened`);
    } else {
      this.elementWrapper.classList.remove(`${this.name}-modal-wrapper--opened`);
    }
  }
}
