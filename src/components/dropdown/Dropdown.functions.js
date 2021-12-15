import {
  CSS_EXPANDED_CLASS,
  EXPANDED_CLASS,
  CLEAR_BUTTON_HIDE,
  MINUS_BUTTON_DISABLED,
  PLUS_BUTTON_DISABLED,
} from './Dropdown-const';

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
    return button.classList.add(MINUS_BUTTON_DISABLED);
  }
  return null;
}

function disabledPlusButtonIfBiggerUnit(count, button) {
  if (count >= 20) {
    return button.classList.add(PLUS_BUTTON_DISABLED);
  }
  return null;
}

function enabledPlusButtonIfLessUnit(count, button) {
  if (count < 20) {
    return button.classList.remove(PLUS_BUTTON_DISABLED);
  }
  return null;
}

function enabledMinusButtonIfBiggerZero(count, button) {
  if (count > 0) {
    return button.classList.remove(MINUS_BUTTON_DISABLED);
  }
  return null;
}

function isGuestsAreNot(adult, children, baby) {
  return adult === 0 && children === 0 && baby === 0;
}

function hideClearButton(adult, children, baby, button) {
  if (isGuestsAreNot(adult, children, baby)) {
    button.classList.add(CLEAR_BUTTON_HIDE);
  }
}

function isGuestsAre(adult, children, baby) {
  return adult > 0 || children > 0 || baby > 0;
}

function showClearButton(adult, children, baby, button) {
  if (isGuestsAre(adult, children, baby)) {
    button.classList.remove(CLEAR_BUTTON_HIDE);
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
  disabledPlusButtonIfBiggerUnit,
  enabledPlusButtonIfLessUnit,
};
