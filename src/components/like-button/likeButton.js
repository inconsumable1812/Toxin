const PRESSED_CLASS = 'like-button_pressed';

class LikeButton {
  constructor(button) {
    this.count = null;
    this.bindEventListeners(button);
  }

  bindEventListeners(button) {
    button.addEventListener('click', this.buttonClick);
  }

  buttonClick(event) {
    const buttonNode = event.currentTarget;
    const countNode = buttonNode.querySelector('.like-button__count');
    this.count = +countNode.textContent;

    if (buttonNode.classList.contains(PRESSED_CLASS)) {
      buttonNode.classList.remove('like-button_pressed');
      this.count -= 1;
    } else {
      buttonNode.classList.add('like-button_pressed');
      this.count += 1;
    }
    countNode.textContent = this.count;
  }
}

const buttons = document.querySelectorAll('.js-like-button');
buttons.forEach((button) => new LikeButton(button));
