const likeButtons = document.querySelectorAll('.likeButton')

for (const likeButton of likeButtons) {
  const button = likeButton.querySelector('.likeButton__button')
  const icon = likeButton.querySelector('.likeButton__icon')
  const count = likeButton.querySelector('.likeButton__count')
  let countInt = +count.innerHTML

  button.addEventListener('click', () => {
    if (button.classList.contains('likeButton__button_pressed')) {
      button.classList.remove('likeButton__button_pressed')
      icon.classList.remove('likeButton__icon_pressed')
      count.classList.remove('likeButton__count_pressed')
      countInt -= 1
    } else {
      button.classList.add('likeButton__button_pressed')
      icon.classList.add('likeButton__icon_pressed')
      count.classList.add('likeButton__count_pressed')
      countInt += 1
    }
    count.innerHTML = `${countInt}`
  })
}
