const counterButtons = document.querySelectorAll('.dropdown__counter-buttons')
const dropdownButtons = document.querySelectorAll('.dropdown__button')
const dropdownBoxes = document.querySelectorAll('.dropdown__box')
const nameBedrooms = ['спальня', 'спальни', 'спален']
const nameBeds = ['кровать', 'кровати', 'кроватей']
const nameBathrooms = ['ванная комната', 'ванных комнаты', 'ванных комнат']

for (const counterButton of counterButtons) {
  const buttonsMinus = counterButton.querySelector(
    '.dropdown__counter-buttons_type_minus'
  )
  const buttonsPlus = counterButton.querySelector(
    '.dropdown__counter-buttons_type_plus'
  )
  const counter = counterButton.querySelector('.dropdown__counter')
  let counterInt = parseInt(counter.innerHTML)

  buttonsMinus.addEventListener('click', () => {
    if (counterInt > 0) {
      counterInt = --counterInt
    }
    counter.innerHTML = `${counterInt}`
    if (counterInt === 0) {
      buttonsMinus.classList.add(
        'dropdown__counter-buttons_type_minus_disabled'
      )
    }
  })
  buttonsPlus.addEventListener('click', () => {
    if (counterInt < 20) {
      counterInt = ++counterInt
    }
    counter.innerHTML = `${counterInt}`
    if (counterInt > 0) {
      buttonsMinus.classList.remove(
        'dropdown__counter-buttons_type_minus_disabled'
      )
    }
  })
}

for (const dropdownBox of dropdownBoxes) {
  const dropdownButton = dropdownBox.querySelector('.dropdown__button')
  const dropdownList = dropdownBox.querySelector('.dropdown__list')
  const dropdownInput = dropdownBox.querySelector('.dropdown__input')
  const clearButton = dropdownBox.querySelector('.dropdown__clear-buttons')
  const applyButton = dropdownBox.querySelector('.dropdown__apply-buttons')

  dropdownButton.addEventListener('click', () => {
    if (dropdownList.classList.contains('dropdown__list_expanded')) {
      dropdownList.classList.remove('dropdown__list_expanded')
      dropdownInput.classList.remove('dropdown__input_hover')
    } else {
      dropdownList.classList.add('dropdown__list_expanded')
      dropdownInput.classList.add('dropdown__input_hover')
    }
  })

  // appleRooms(applyButton)
}

/*function appleRooms(button) {
  button.addEventListener('click', (event) => {
    console.log('button')
  })
}*/
