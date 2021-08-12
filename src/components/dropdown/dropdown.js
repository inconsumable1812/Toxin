//const counterButtons = document.querySelectorAll('.dropdown__counter-buttons')
const dropdownButtons = document.querySelectorAll('.dropdown__button')
const dropdownBoxes = document.querySelectorAll('.dropdown__box')
const nameBedrooms = ['спальня', 'спальни', 'спален']
const nameBeds = ['кровать', 'кровати', 'кроватей']
const nameBathrooms = ['ванная комната', 'ванные комнаты', 'ванных комнат']

for (const dropdownBox of dropdownBoxes) {
  const dropdownButton = dropdownBox.querySelector('.dropdown__button')
  const dropdownList = dropdownBox.querySelector('.dropdown__list')
  const dropdownInput = dropdownBox.querySelector('.dropdown__input')
  const clearButton = dropdownBox.querySelector('.dropdown__clear-buttons')
  const applyButton = dropdownBox.querySelector('.dropdown__apply-buttons')
  const counterButtons = dropdownBox.querySelectorAll('.dropdown__counter-buttons')
  let numberOfBedrooms = dropdownBox.querySelector('.dropdown__list-item_bedroom') ? +dropdownBox.querySelector('.dropdown__list-item_bedroom .dropdown__counter').innerHTML : ''
  let numberOfBeds = dropdownBox.querySelector('.dropdown__list-item_bed') ? +dropdownBox.querySelector('.dropdown__list-item_bed .dropdown__counter').innerHTML : ''
  let numberOfBathrooms = dropdownBox.querySelector('.dropdown__list-item_bathroom') ? +dropdownBox.querySelector('.dropdown__list-item_bathroom .dropdown__counter').innerHTML : ''

  let outBedrooms = `${numberOfBedrooms} ${nameBedrooms[index(numberOfBedrooms)]}`
  if (numberOfBedrooms === 0) {
    outBedrooms = ''
  }
  let outBed = `${numberOfBeds} ${nameBeds[index(numberOfBeds)]}`
  if (numberOfBeds === 0) {
    outBed = ''
  }
  let outBathrooms = `${numberOfBathrooms} ${nameBathrooms[index(numberOfBathrooms)]}`
  if (numberOfBathrooms === 0) {
    outBathrooms = ''
  }
  dropdownInput.placeholder = `${outBedrooms} ${outBed} ${outBathrooms}`
  if (numberOfBedrooms === 0 && numberOfBeds === 0 && numberOfBathrooms === 0) {
    dropdownInput.placeholder = 'Количество комнат'
  }

  dropdownButton.addEventListener('click', () => {
    if (dropdownList.classList.contains('dropdown__list_expanded')) {
      dropdownList.classList.remove('dropdown__list_expanded')
      dropdownInput.classList.remove('dropdown__input_hover')
    } else {
      dropdownList.classList.add('dropdown__list_expanded')
      dropdownInput.classList.add('dropdown__input_hover')
    }
  })

  for (const counterButton of counterButtons) {
    const buttonsMinus = counterButton.querySelector('.dropdown__counter-buttons_type_minus')
    const buttonsPlus = counterButton.querySelector('.dropdown__counter-buttons_type_plus')
    const counter = counterButton.querySelector('.dropdown__counter')
    let counterInt = parseInt(counter.innerHTML)
    const countName = counterButton.parentElement.querySelector('.dropdown__item-name').innerHTML

    buttonsMinus.addEventListener('click', () => {
      if (counterInt > 0) {
        counterInt = --counterInt
      }
      counter.innerHTML = `${counterInt}`
      if (counterInt === 0) {
        buttonsMinus.classList.add('dropdown__counter-buttons_type_minus_disabled')
      }
      switch (countName) {
        case 'спальни':
          numberOfBedrooms = counterInt
          break
        case 'кровати': {
          numberOfBeds = counterInt
          break
        }
        case 'ванные комнаты': {
          numberOfBathrooms = counterInt
          break
        }
      }
      let outBedrooms = `${numberOfBedrooms} ${nameBedrooms[index(numberOfBedrooms)]}`
      if (numberOfBedrooms === 0) {
        outBedrooms = ''
      }
      let outBed = `${numberOfBeds} ${nameBeds[index(numberOfBeds)]}`
      if (numberOfBeds === 0) {
        outBed = ''
      }
      let outBathrooms = `${numberOfBathrooms} ${nameBathrooms[index(numberOfBathrooms)]}`
      if (numberOfBathrooms === 0) {
        outBathrooms = ''
      }
      dropdownInput.placeholder = `${outBedrooms} ${outBed} ${outBathrooms}`
      if (numberOfBedrooms === 0 && numberOfBeds === 0 && numberOfBathrooms === 0) {
        dropdownInput.placeholder = 'Количество комнат'
      }
    })
    buttonsPlus.addEventListener('click', () => {
      if (counterInt < 20) {
        counterInt = ++counterInt
      }
      counter.innerHTML = `${counterInt}`
      if (counterInt > 0) {
        buttonsMinus.classList.remove('dropdown__counter-buttons_type_minus_disabled')
      }
      switch (countName) {
        case 'спальни':
          numberOfBedrooms = counterInt
          break
        case 'кровати': {
          numberOfBeds = counterInt
          break
        }
        case 'ванные комнаты': {
          numberOfBathrooms = counterInt
          break
        }
      }

      let outBedrooms = `${numberOfBedrooms} ${nameBedrooms[index(numberOfBedrooms)]}`
      if (numberOfBedrooms === 0) {
        outBedrooms = ''
      }
      let outBed = `${numberOfBeds} ${nameBeds[index(numberOfBeds)]}`
      if (numberOfBeds === 0) {
        outBed = ''
      }
      let outBathrooms = `${numberOfBathrooms} ${nameBathrooms[index(numberOfBathrooms)]}`
      if (numberOfBathrooms === 0) {
        outBathrooms = ''
      }
      dropdownInput.placeholder = `${outBedrooms} ${outBed} ${outBathrooms}`
    })
  }
}

function index(number) {
  if (number === 1) {
    return 0
  } else if (number === 2 || number === 3 || number === 4) {
    return 1
  } else {
    return 2
  }
}
