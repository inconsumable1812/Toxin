import { boundMethod } from 'autobind-decorator';

const PRESSED_CLASS = 'like-button_pressed';
const JS_PRESSED_CLASS = 'js-like-button_pressed';
const COUNT_CLASS = 'js-like-button__count';

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
    const countNode = buttonNode.querySelector('.' + COUNT_CLASS);
    this.count = +countNode.textContent;

    if (buttonNode.classList.contains(JS_PRESSED_CLASS)) {
      buttonNode.classList.remove(PRESSED_CLASS, JS_PRESSED_CLASS);
      this.count -= 1;
    } else {
      buttonNode.classList.add(PRESSED_CLASS, JS_PRESSED_CLASS);
      this.count += 1;
    }
    countNode.textContent = this.count;
  }
}
