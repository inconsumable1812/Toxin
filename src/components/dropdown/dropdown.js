/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */

import {
  checkForZero,
  init,
  checkEndingInRoomToInputs,
  checkEndingInGuestToInputs,
  toggle
} from './dropdown.functions'

const dropdownOfRooms = document.querySelectorAll('.dropdown__box_rooms')
const dropdownOfGuests = document.querySelectorAll('.dropdown__box_guest')
const nameBedrooms = ['спальня', 'спальни', 'спален']
const nameBeds = ['кровать', 'кровати', 'кроватей']
const nameBathrooms = ['ванная комната', 'ванные комнаты', 'ванных комнат']
const nameAdult = ['гость', 'гостя', 'гостей']
const nameBaby = ['младенец', 'младенца', 'младенцев']

for (const dropdownOfRoom of dropdownOfRooms) {
  const initArray = init(dropdownOfRoom)
  let numberOfBedrooms
  let numberOfBeds
  let numberOfBathrooms
  let bedroomsToInput
  let bedToInput
  let bathroomsToInput

  numberOfBedrooms = +dropdownOfRoom.querySelector(
    '.dropdown__list-item_bedroom .dropdown__counter'
  ).textContent

  numberOfBeds = +dropdownOfRoom.querySelector(
    '.dropdown__list-item_bed .dropdown__counter'
  ).textContent

  numberOfBathrooms = +dropdownOfRoom.querySelector(
    '.dropdown__list-item_bathroom .dropdown__counter'
  ).textContent

  bedroomsToInput = checkForZero(numberOfBedrooms, nameBedrooms)
  bedToInput = checkForZero(numberOfBeds, nameBeds)
  bathroomsToInput = checkForZero(numberOfBathrooms, nameBathrooms)

  let roomsToInput = checkEndingInRoomToInputs(
    bedroomsToInput,
    bedToInput,
    bathroomsToInput
  )
  initArray.dropdownInput.placeholder = roomsToInput
  if (numberOfBedrooms === 0 && numberOfBeds === 0 && numberOfBathrooms === 0) {
    initArray.dropdownInput.placeholder = 'Количество комнат'
  }

  initArray.dropdownButton.addEventListener('click', () => {
    const isExpanded = initArray.dropdownList.classList.contains(
      'dropdown__list_expanded'
    )
    toggle(isExpanded, initArray.dropdownList, initArray.dropdownInput)
  })
  initArray.dropdownInput.addEventListener('click', () => {
    const isExpanded = initArray.dropdownList.classList.contains(
      'dropdown__list_expanded'
    )
    toggle(isExpanded, initArray.dropdownList, initArray.dropdownInput)
  })

  for (const counterButton of initArray.counterButtons) {
    const buttonsMinus = counterButton.querySelector(
      '.dropdown__counter-buttons_type_minus'
    )
    const buttonsPlus = counterButton.querySelector(
      '.dropdown__counter-buttons_type_plus'
    )
    const counter = counterButton.querySelector('.dropdown__counter')
    let counterInt = +counter.textContent
    const countName =
      counterButton.parentElement.querySelector('.dropdown__item-name').textContent

    buttonsMinus.addEventListener('click', () => {
      if (counterInt > 0) {
        counterInt -= 1
      }
      counter.textContent = `${counterInt}`
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
        default:
          break
      }

      bedroomsToInput = checkForZero(numberOfBedrooms, nameBedrooms)
      bedToInput = checkForZero(numberOfBeds, nameBeds)
      bathroomsToInput = checkForZero(numberOfBathrooms, nameBathrooms)
      roomsToInput = checkEndingInRoomToInputs(
        bedroomsToInput,
        bedToInput,
        bathroomsToInput
      )
      initArray.dropdownInput.placeholder = roomsToInput
      if (numberOfBedrooms === 0 && numberOfBeds === 0 && numberOfBathrooms === 0) {
        initArray.dropdownInput.placeholder = 'Количество комнат'
      }
    })
    buttonsPlus.addEventListener('click', () => {
      if (counterInt < 20) {
        counterInt += 1
      }
      counter.textContent = `${counterInt}`
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
        default:
          break
      }

      bedroomsToInput = checkForZero(numberOfBedrooms, nameBedrooms)
      bedToInput = checkForZero(numberOfBeds, nameBeds)
      bathroomsToInput = checkForZero(numberOfBathrooms, nameBathrooms)
      roomsToInput = checkEndingInRoomToInputs(
        bedroomsToInput,
        bedToInput,
        bathroomsToInput
      )
      initArray.dropdownInput.placeholder = roomsToInput
    })
  }
}

for (const dropdownOfGuest of dropdownOfGuests) {
  const initArray = init(dropdownOfGuest)
  let numberOfAdult
  let numberOfСhildren
  let numberOfBaby

  numberOfAdult = +dropdownOfGuest.querySelector(
    '.dropdown__list-item_adult .dropdown__counter'
  ).textContent

  numberOfСhildren = +dropdownOfGuest.querySelector(
    '.dropdown__list-item_children .dropdown__counter'
  ).textContent

  numberOfBaby = +dropdownOfGuest.querySelector(
    '.dropdown__list-item_baby .dropdown__counter'
  ).textContent
  if (
    initArray.clearButton &&
    numberOfAdult === 0 &&
    numberOfСhildren === 0 &&
    numberOfBaby === 0
  ) {
    initArray.clearButton.classList.add('dropdown__clear-buttons_hidden')
  }

  initArray.dropdownButton.addEventListener('click', () => {
    const isExpanded = initArray.dropdownList.classList.contains(
      'dropdown__list_expanded'
    )
    toggle(isExpanded, initArray.dropdownList, initArray.dropdownInput)
  })
  initArray.dropdownInput.addEventListener('click', () => {
    const isExpanded = initArray.dropdownList.classList.contains(
      'dropdown__list_expanded'
    )
    toggle(isExpanded, initArray.dropdownList, initArray.dropdownInput)
  })

  for (const counterButton of initArray.counterButtons) {
    const buttonsMinus = counterButton.querySelector(
      '.dropdown__counter-buttons_type_minus'
    )
    const buttonsPlus = counterButton.querySelector(
      '.dropdown__counter-buttons_type_plus'
    )
    const counter = counterButton.querySelector('.dropdown__counter')
    let counterInt = +counter.textContent
    const countName =
      counterButton.parentElement.querySelector('.dropdown__item-name').textContent

    buttonsMinus.addEventListener('click', () => {
      if (counterInt > 0) {
        counterInt -= 1
      }
      counter.textContent = `${counterInt}`
      if (counterInt === 0) {
        buttonsMinus.classList.add('dropdown__counter-buttons_type_minus_disabled')
      }
      switch (countName) {
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
        default:
          break
      }

      if (
        initArray.clearButton &&
        numberOfAdult === 0 &&
        numberOfСhildren === 0 &&
        numberOfBaby === 0
      ) {
        initArray.clearButton.classList.add('dropdown__clear-buttons_hidden')
      }
    })

    buttonsPlus.addEventListener('click', () => {
      if (counterInt < 20) {
        counterInt += 1
      }
      counter.textContent = `${counterInt}`
      if (counterInt > 0) {
        buttonsMinus.classList.remove('dropdown__counter-buttons_type_minus_disabled')
      }
      switch (countName) {
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
        default:
          break
      }

      if (initArray.clearButton.classList.contains('dropdown__clear-buttons_hidden')) {
        initArray.clearButton.classList.remove('dropdown__clear-buttons_hidden')
      }
    })

    initArray.clearButton.addEventListener('click', () => {
      initArray.dropdownInput.placeholder = `Сколько гостей`
      numberOfAdult = 0
      numberOfСhildren = 0
      numberOfBaby = 0
      counter.textContent = `0`
      counterInt = 0
      initArray.clearButton.classList.add('dropdown__clear-buttons_hidden')
    })

    initArray.applyButton.addEventListener('click', () => {
      const countGuests = numberOfAdult + numberOfСhildren
      const adultsToInput = checkForZero(countGuests, nameAdult)
      const babyToInput = checkForZero(numberOfBaby, nameBaby)
      const guestsToInput = checkEndingInGuestToInputs(adultsToInput, babyToInput)

      if (countGuests === 0 && numberOfBaby === 0) {
        initArray.dropdownInput.placeholder = `Сколько гостей`
      } else {
        initArray.dropdownInput.placeholder = guestsToInput
      }
      initArray.dropdownList.classList.remove('dropdown__list_expanded')
      initArray.dropdownInput.classList.remove('dropdown__input_hover')
    })
  }
}
