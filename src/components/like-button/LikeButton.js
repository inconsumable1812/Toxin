import { boundMethod } from 'autobind-decorator';

const PRESSED_CLASS = 'like-button_pressed';
const JS_PRESSED_CLASS = 'js-like-button_pressed';
const COUNT_CLASS = 'js-like-button__count';
const ICON_CLASS = 'js-icon__material';

export default class LikeButton {
  constructor(button) {
    this.count = null;
    this.bindEventListeners(button);
  }

  bindEventListeners(button) {
    button.addEventListener('click', this.buttonClick);
  }

  @boundMethod
  buttonClick(event) {
    const buttonNode = event.currentTarget;
    const countNode = buttonNode.querySelector(`.${COUNT_CLASS}`);
    const icon = buttonNode.querySelector(`.${ICON_CLASS}`);
    this.count = +countNode.textContent;

    if (buttonNode.classList.contains(JS_PRESSED_CLASS)) {
      buttonNode.classList.remove(PRESSED_CLASS, JS_PRESSED_CLASS);
      this.count -= 1;
      icon.textContent = 'favorite_border';
    } else {
      buttonNode.classList.add(PRESSED_CLASS, JS_PRESSED_CLASS);
      this.count += 1;
      icon.textContent = 'favorite';
    }
    countNode.textContent = this.count;
  }
}
