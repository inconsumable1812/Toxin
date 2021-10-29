const PRESSED_CLASS = 'likeButton_pressed'

export class LikeButton {
  constructor(button) {
    this.count = null
    this.bindEventListeners(button)
  }

  bindEventListeners(button) {
    button.addEventListener('click', this.buttonClick)
  }

  buttonClick(event) {
    const buttonNode = event.currentTarget
    const countNode = buttonNode.querySelector('.likeButton__count')
    this.count = +countNode.textContent

    if (buttonNode.classList.contains(PRESSED_CLASS)) {
      buttonNode.classList.remove('likeButton_pressed')
      this.count -= 1
    } else {
      buttonNode.classList.add('likeButton_pressed')
      this.count += 1
    }
    countNode.textContent = this.count
  }
}
