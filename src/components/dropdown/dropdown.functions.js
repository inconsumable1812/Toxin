function index(number) {
  if (number === 1) {
    return 0
  }
  if (number === 2 || number === 3 || number === 4) {
    return 1
  }
  return 2
}

function checkForZero(number, arrayName) {
  if (number !== 0) {
    return `${number} ${arrayName[index(number)]}, `
  }
  return ''
}

function init(dropdown) {
  if (dropdown.classList.contains('dropdown__box_rooms')) {
    return {
      dropdownButton: dropdown.querySelector('.dropdown__button'),
      dropdownList: dropdown.querySelector('.dropdown__list'),
      dropdownInput: dropdown.querySelector('.dropdown__input'),
      counterButtons: dropdown.querySelectorAll('.dropdown__counter-buttons')
    }
  }
  return {
    dropdownButton: dropdown.querySelector('.dropdown__button'),
    dropdownList: dropdown.querySelector('.dropdown__list'),
    dropdownInput: dropdown.querySelector('.dropdown__input'),
    counterButtons: dropdown.querySelectorAll('.dropdown__counter-buttons'),
    clearButton: dropdown.querySelector('.dropdown__clear-buttons'),
    applyButton: dropdown.querySelector('.dropdown__apply-buttons')
  }
}

function checkEndingInRoomToInputs(bedrooms, beds, bathrooms) {
  const value = `${bedrooms}${beds}${bathrooms}`
  if (value.slice(-2, -1) === ',') {
    return value.slice(0, -2)
  }
  return value
}

function checkEndingInGuestToInputs(adult, baby) {
  const value = `${adult}${baby}`
  if (value.slice(-2, -1) === ',') {
    return value.slice(0, -2)
  }
  return value
}

function toggle(isExpanded, dropdownList, dropdownInput) {
  if (isExpanded) {
    dropdownList.classList.remove('dropdown__list_expanded')
    dropdownInput.classList.remove('dropdown__input_hover')
  } else {
    dropdownList.classList.add('dropdown__list_expanded')
    dropdownInput.classList.add('dropdown__input_hover')
  }
}

export {
  checkForZero,
  init,
  checkEndingInRoomToInputs,
  checkEndingInGuestToInputs,
  toggle
}
