const dropdownButtons = document.querySelectorAll('.dropdown__button')
const dropdownBoxes = document.querySelectorAll('.dropdown__box')
const nameBedrooms = ['спальня', 'спальни', 'спален']
const nameBeds = ['кровать', 'кровати', 'кроватей']
const nameBathrooms = ['ванная комната', 'ванные комнаты', 'ванных комнат']
const nameAdult = ['гость', 'гостя', 'гостей']
const nameBaby = ['младенец', 'младенца', 'младенцев']

for (const dropdownBox of dropdownBoxes) {
  const dropdownButton = dropdownBox.querySelector('.dropdown__button')
  const dropdownList = dropdownBox.querySelector('.dropdown__list')
  const dropdownInput = dropdownBox.querySelector('.dropdown__input')
  const clearButton = dropdownBox.querySelector('.dropdown__clear-buttons')
  const applyButton = dropdownBox.querySelector('.dropdown__apply-buttons')
  const counterButtons = dropdownBox.querySelectorAll('.dropdown__counter-buttons')
  const calendar = dropdownBox.parentElement.querySelector('.dropdown__box_date')

  let numberOfBedrooms = dropdownBox.querySelector('.dropdown__list-item_bedroom')
    ? +dropdownBox.querySelector('.dropdown__list-item_bedroom .dropdown__counter').innerHTML
    : ''
  let numberOfBeds = dropdownBox.querySelector('.dropdown__list-item_bed')
    ? +dropdownBox.querySelector('.dropdown__list-item_bed .dropdown__counter').innerHTML
    : ''
  let numberOfBathrooms = dropdownBox.querySelector('.dropdown__list-item_bathroom')
    ? +dropdownBox.querySelector('.dropdown__list-item_bathroom .dropdown__counter').innerHTML
    : ''
  let numberOfAdult = dropdownBox.querySelector('.dropdown__list-item_adult')
    ? +dropdownBox.querySelector('.dropdown__list-item_adult .dropdown__counter').innerHTML
    : ''
  let numberOfСhildren = dropdownBox.querySelector('.dropdown__list-item_children')
    ? +dropdownBox.querySelector('.dropdown__list-item_children .dropdown__counter').innerHTML
    : ''
  let numberOfBaby = dropdownBox.querySelector('.dropdown__list-item_baby')
    ? +dropdownBox.querySelector('.dropdown__list-item_baby .dropdown__counter').innerHTML
    : ''

  let outBedrooms = `${numberOfBedrooms} ${nameBedrooms[index(numberOfBedrooms)]}, `
  if (numberOfBedrooms === 0) {
    outBedrooms = ''
  }
  let outBed = `${numberOfBeds} ${nameBeds[index(numberOfBeds)]}, `
  if (numberOfBeds === 0) {
    outBed = ''
  }
  let outBathrooms = `${numberOfBathrooms} ${nameBathrooms[index(numberOfBathrooms)]}, `
  if (numberOfBathrooms === 0) {
    outBathrooms = ''
  }
  let outRooms = `${outBedrooms}${outBed}${outBathrooms}`
  if (outRooms.slice(-2, -1) === ',') {
    outRooms = outRooms.slice(0, -2)
  }
  if (dropdownInput.classList.contains('dropdown__input_rooms')) {
    dropdownInput.placeholder = outRooms
    if (numberOfBedrooms === 0 && numberOfBeds === 0 && numberOfBathrooms === 0) {
      dropdownInput.placeholder = 'Количество комнат'
    }
  }
  if (clearButton && numberOfAdult === 0 && numberOfСhildren === 0 && numberOfBaby === 0) {
    clearButton.classList.add('dropdown__clear-buttons_hidden')
  }

  dropdownButton.addEventListener('click', () => {
    if (!calendar) {
      if (dropdownList.classList.contains('dropdown__list_expanded')) {
        dropdownList.classList.remove('dropdown__list_expanded')
        dropdownInput.classList.remove('dropdown__input_hover')
      } else {
        dropdownList.classList.add('dropdown__list_expanded')
        dropdownInput.classList.add('dropdown__input_hover')
      }
    }
  })
  dropdownInput.addEventListener('click', () => {
    if (!calendar) {
      if (dropdownList.classList.contains('dropdown__list_expanded')) {
        dropdownList.classList.remove('dropdown__list_expanded')
        dropdownInput.classList.remove('dropdown__input_hover')
      } else {
        dropdownList.classList.add('dropdown__list_expanded')
        dropdownInput.classList.add('dropdown__input_hover')
      }
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
        case 'взрослые': {
          numberOfAdult = counterInt
          break
        }
        case 'дети': {
          numberOfСhildren = counterInt
          break
        }
        case 'младенцы': {
          numberOfBaby = counterInt
          break
        }
      }

      let outBedrooms = `${numberOfBedrooms} ${nameBedrooms[index(numberOfBedrooms)]}, `
      if (numberOfBedrooms === 0) {
        outBedrooms = ''
      }
      let outBed = `${numberOfBeds} ${nameBeds[index(numberOfBeds)]}, `
      if (numberOfBeds === 0) {
        outBed = ''
      }
      let outBathrooms = `${numberOfBathrooms} ${nameBathrooms[index(numberOfBathrooms)]}, `
      if (numberOfBathrooms === 0) {
        outBathrooms = ''
      }
      let outRooms = `${outBedrooms}${outBed}${outBathrooms}`
      if (outRooms.slice(-2, -1) === ',') {
        outRooms = outRooms.slice(0, -2)
      }
      if (dropdownInput.classList.contains('dropdown__input_rooms')) {
        dropdownInput.placeholder = outRooms
        if (numberOfBedrooms === 0 && numberOfBeds === 0 && numberOfBathrooms === 0) {
          dropdownInput.placeholder = 'Количество комнат'
        }
      }
      if (clearButton && numberOfAdult === 0 && numberOfСhildren === 0 && numberOfBaby === 0) {
        clearButton.classList.add('dropdown__clear-buttons_hidden')
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
        case 'взрослые': {
          numberOfAdult = counterInt
          break
        }
        case 'дети': {
          numberOfСhildren = counterInt
          break
        }
        case 'младенцы': {
          numberOfBaby = counterInt
          break
        }
      }

      let outBedrooms = `${numberOfBedrooms} ${nameBedrooms[index(numberOfBedrooms)]}, `
      if (numberOfBedrooms === 0) {
        outBedrooms = ''
      }
      let outBed = `${numberOfBeds} ${nameBeds[index(numberOfBeds)]}, `
      if (numberOfBeds === 0) {
        outBed = ''
      }
      let outBathrooms = `${numberOfBathrooms} ${nameBathrooms[index(numberOfBathrooms)]}, `
      if (numberOfBathrooms === 0) {
        outBathrooms = ''
      }
      let outRooms = `${outBedrooms}${outBed}${outBathrooms}`
      if (outRooms.slice(-2, -1) === ',') {
        outRooms = outRooms.slice(0, -2)
      }
      if (dropdownInput.classList.contains('dropdown__input_rooms')) {
        dropdownInput.placeholder = outRooms
      }
      if (clearButton && clearButton.classList.contains('dropdown__clear-buttons_hidden')) {
        clearButton.classList.remove('dropdown__clear-buttons_hidden')
      }
    })
    if (clearButton) {
      clearButton.addEventListener('click', () => {
        if (dropdownInput.classList.contains('dropdown__input_guest')) {
          dropdownInput.placeholder = `Сколько гостей`
          numberOfAdult = 0
          numberOfСhildren = 0
          numberOfBaby = 0
          counter.innerHTML = `0`
          counterInt = 0
          clearButton.classList.add('dropdown__clear-buttons_hidden')
        }
      })
    }
  }

  if (applyButton) {
    applyButton.addEventListener('click', () => {
      let countGuests = numberOfAdult + numberOfСhildren
      let outGuests = `${countGuests} ${nameAdult[index(countGuests)]}`
      if (countGuests === 0) {
        outGuests = ''
      }
      let outBaby = `${numberOfBaby} ${nameBaby[index(numberOfBaby)]}`
      if (numberOfBaby === 0) {
        outBaby = ''
      }
      if (dropdownInput.classList.contains('dropdown__input_guest')) {
        if (countGuests === 0 && numberOfBaby === 0) {
          dropdownInput.placeholder = `Сколько гостей`
        } else {
          dropdownInput.placeholder = `${outGuests} ${outBaby}`
        }
        dropdownList.classList.remove('dropdown__list_expanded')
        dropdownInput.classList.remove('dropdown__input_hover')
      }
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
