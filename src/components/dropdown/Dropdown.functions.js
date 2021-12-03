import { CSS_EXPANDED_CLASS, EXPANDED_CLASS } from './Dropdown-const';

function index(number) {
  if (number === 1) {
    return 0;
  }
  // eslint-disable-next-line fsd/split-conditionals
  if (number === 2 || number === 3 || number === 4) {
    return 1;
  }
  return 2;
}

function checkForZero(number, arrayName) {
  if (number !== 0) {
    return `${number} ${arrayName[index(number)]}, `;
  }
  return '';
}

function checkEndingInRoomToInputs(bedrooms, beds, bathrooms) {
  const value = `${bedrooms}${beds}${bathrooms}`;
  if (value.slice(-2, -1) === ',') {
    return value.slice(0, -2);
  }
  return value;
}

function checkEndingInGuestToInputs(adult, baby) {
  const value = `${adult}${baby}`;
  if (value.slice(-2, -1) === ',') {
    return value.slice(0, -2);
  }
  return value;
}

function toggle(isExpanded, list) {
  if (isExpanded) {
    return list.classList.remove(CSS_EXPANDED_CLASS, EXPANDED_CLASS);
  }
  return list.classList.add(CSS_EXPANDED_CLASS, EXPANDED_CLASS);
}

function disabledMinusButtonIfLessUnit(count, button) {
  if (count < 1) {
    return button.classList.add('dropdown__counter-button-minus_disabled');
  }
  return null;
}

function enabledMinusButtonIfBiggerZero(count, button) {
  if (count > 0) {
    return button.classList.remove('dropdown__counter-button-minus_disabled');
  }
  return null;
}

function isGuestsAreNot(adult, children, baby) {
  return adult === 0 && children === 0 && baby === 0;
}

function hideClearButton(adult, children, baby, button) {
  if (isGuestsAreNot(adult, children, baby)) {
    button.classList.add('dropdown__clear-button_hidden');
  }
}

function isGuestsAre(adult, children, baby) {
  return adult > 0 || children > 0 || baby > 0;
}

function showClearButton(adult, children, baby, button) {
  if (isGuestsAre(adult, children, baby)) {
    button.classList.remove('dropdown__clear-button_hidden');
  }
}

function createNameOfRooms(number, arrayName) {
  if (number !== 0) {
    return `${number} ${arrayName[index(number)]}, `;
  }
  return '';
}

export {
  checkForZero,
  checkEndingInRoomToInputs,
  checkEndingInGuestToInputs,
  toggle,
  disabledMinusButtonIfLessUnit,
  showClearButton,
  enabledMinusButtonIfBiggerZero,
  hideClearButton,
  createNameOfRooms,
};
