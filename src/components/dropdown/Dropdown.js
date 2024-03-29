/* eslint-disable lines-between-class-members */
import { boundMethod } from 'autobind-decorator';

import {
  checkForZero,
  checkEndingInRoomToInputs,
  checkEndingInGuestToInputs,
  toggle,
  hideClearButton,
  disabledMinusButtonIfLessUnit,
  enabledMinusButtonIfBiggerZero,
  showClearButton,
  createNameOfRooms,
  disabledPlusButtonIfBiggerUnit,
  enabledPlusButtonIfLessUnit,
} from './Dropdown.functions';
import {
  GUEST_CLASS,
  BEDROOM_CLASS,
  BED_CLASS,
  BATHROOM_CLASS,
  ADULT_CLASS,
  CHILDREN_CLASS,
  BABY_CLASS,
  INPUT_CLASS,
  BOX_CLASS,
  LIST_CLASS,
  CLEAR_BUTTON_CLASS,
  APPLY_BUTTON_CLASS,
  MINUS_BUTTON_CLASS,
  PLUS_BUTTON_CLASS,
  EXPANDED_CLASS,
  DATE_DROPDOWN_CLASS,
  CSS_EXPANDED_CLASS,
  LIST_ITEM_CLASS,
  COUNTER_CLASS,
  ADULT_ITEM_CLASS,
  CHILDREN_ITEM_CLASS,
  BABY_ITEM_CLASS,
  BEDROOM_ITEM_CLASS,
  BED_ITEM_CLASS,
  BEDROOMS,
  BEDS,
  BATHROOMS,
  ADULT,
  BABY,
  CLEAR_BUTTON_HIDE,
} from './Dropdown-const';

export default class Dropdown {
  countOfBedrooms = null;
  countOfBeds = null;
  countOfBathrooms = null;
  countOfAdult = null;
  countOfChildren = null;
  countOfBaby = null;
  applyButton = null;
  clearButton = null;
  input = null;
  box = null;
  list = null;

  constructor(dropdown) {
    this.dropdown = dropdown;
    this.isTypeGuest = this.dropdownTypeIsGuest();

    this.init();
  }

  dropdownTypeIsGuest() {
    if (this.dropdown.classList.contains(GUEST_CLASS)) {
      return true;
    }
    return false;
  }

  initCountOfBedrooms() {
    this.countOfBedrooms = +this.dropdown.querySelector(`.${BEDROOM_CLASS}`)
      .textContent;
  }

  initCountOfBeds() {
    this.countOfBeds = +this.dropdown.querySelector(`.${BED_CLASS}`)
      .textContent;
  }

  initCountOfBathrooms() {
    this.countOfBathrooms = +this.dropdown.querySelector(`.${BATHROOM_CLASS}`)
      .textContent;
  }

  initCountOfAdult() {
    this.countOfAdult = +this.dropdown.querySelector(`.${ADULT_CLASS}`)
      .textContent;
  }

  initCountOfChildren() {
    this.countOfChildren = +this.dropdown.querySelector(`.${CHILDREN_CLASS}`)
      .textContent;
  }

  initCountOfBaby() {
    this.countOfBaby = +this.dropdown.querySelector(`.${BABY_CLASS}`)
      .textContent;
  }

  init() {
    this.input = this.dropdown.querySelector(`.${INPUT_CLASS}`);
    this.box = this.dropdown.querySelector(`.${BOX_CLASS}`);
    this.list = this.dropdown.querySelector(`.${LIST_CLASS}`);
    if (this.isTypeGuest) {
      this.clearButton = this.dropdown.querySelector(`.${CLEAR_BUTTON_CLASS}`);
      this.applyButton = this.dropdown.querySelector(`.${APPLY_BUTTON_CLASS}`);
      this.initCountOfAdult();
      this.initCountOfChildren();
      this.initCountOfBaby();
      this.input.placeholder = this.sendingGuestsToInput();
      hideClearButton({
        adult: this.countOfAdult,
        children: this.countOfChildren,
        baby: this.countOfBaby,
        button: this.clearButton,
      });
    } else {
      this.initCountOfBedrooms();
      this.initCountOfBeds();
      this.initCountOfBathrooms();
      this.input.placeholder = this.sendingRoomsToInput();
    }

    this.bindEventListeners();
  }

  bindEventListeners() {
    const minusButtons = this.dropdown.querySelectorAll(
      `.${MINUS_BUTTON_CLASS}`
    );
    const plusButtons = this.dropdown.querySelectorAll(`.${PLUS_BUTTON_CLASS}`);

    minusButtons.forEach((button) => {
      button.addEventListener('click', this.minusButtonCallback);
    });

    plusButtons.forEach((button) => {
      button.addEventListener('click', this.plusButtonCallback);
    });

    this.box.addEventListener('click', this.expandedCallback);
    document.addEventListener('click', this.callbackOnDocument);
    if (this.applyButton) {
      this.applyButton.addEventListener('click', this.applyButtonCallback);
    }
    if (this.clearButton) {
      this.clearButton.addEventListener('click', this.clearButtonCallback);
    }
  }

  @boundMethod
  callbackOnDocument(event) {
    const listIsExpanded = this.list.classList.contains(EXPANDED_CLASS);
    if (listIsExpanded) {
      const lists = document.querySelectorAll(`.${LIST_CLASS}`);
      const currentBox = event.target.closest(`.${BOX_CLASS}`);
      const dateDropdown = event.target.closest(`.${DATE_DROPDOWN_CLASS}`);
      if (!currentBox || dateDropdown) {
        lists.forEach((list) =>
          list.classList.remove(EXPANDED_CLASS, CSS_EXPANDED_CLASS)
        );
      }
    }
  }

  @boundMethod
  expandedCallback(event) {
    const target = event.target.closest(`.${LIST_CLASS}`);
    const listIsExpanded = this.list.classList.contains(EXPANDED_CLASS);
    const lists = document.querySelectorAll(`.${LIST_CLASS}`);

    if (!target) {
      lists.forEach((list) =>
        list.classList.remove(EXPANDED_CLASS, CSS_EXPANDED_CLASS)
      );
      toggle(listIsExpanded, this.list, target);
    }
  }

  @boundMethod
  minusButtonCallback(event) {
    const itemNameNode = event.target.closest(`.${LIST_ITEM_CLASS}`);
    const button = itemNameNode.querySelector(`.${MINUS_BUTTON_CLASS}`);
    const itemCount = itemNameNode.querySelector(`.${COUNTER_CLASS}`);
    const plusButton = itemNameNode.querySelector(`.${PLUS_BUTTON_CLASS}`);

    if (this.isTypeGuest) {
      if (itemNameNode.classList.contains(ADULT_ITEM_CLASS)) {
        this.countOfAdult -= 1;
        itemCount.textContent = this.countOfAdult;
        disabledMinusButtonIfLessUnit(this.countOfAdult, button);
        enabledPlusButtonIfLessUnit(this.countOfAdult, plusButton);
      } else if (itemNameNode.classList.contains(CHILDREN_ITEM_CLASS)) {
        this.countOfChildren -= 1;
        itemCount.textContent = this.countOfChildren;
        disabledMinusButtonIfLessUnit(this.countOfChildren, button);
        enabledPlusButtonIfLessUnit(this.countOfChildren, plusButton);
      } else if (itemNameNode.classList.contains(BABY_ITEM_CLASS)) {
        this.countOfBaby -= 1;
        itemCount.textContent = this.countOfBaby;
        disabledMinusButtonIfLessUnit(this.countOfBaby, button);
        enabledPlusButtonIfLessUnit(this.countOfBaby, plusButton);
      }
      hideClearButton({
        adult: this.countOfAdult,
        children: this.countOfChildren,
        baby: this.countOfBaby,
        button: this.clearButton,
      });

      this.input.placeholder = this.sendingGuestsToInput();
    } else {
      if (itemNameNode.classList.contains(BEDROOM_ITEM_CLASS)) {
        this.countOfBedrooms -= 1;
        itemCount.textContent = this.countOfBedrooms;
        disabledMinusButtonIfLessUnit(this.countOfBedrooms, button);
        enabledPlusButtonIfLessUnit(this.countOfBedrooms, plusButton);
      } else if (itemNameNode.classList.contains(BED_ITEM_CLASS)) {
        this.countOfBeds -= 1;
        itemCount.textContent = this.countOfBeds;
        disabledMinusButtonIfLessUnit(this.countOfBeds, button);
        enabledPlusButtonIfLessUnit(this.countOfBeds, plusButton);
      } else {
        this.countOfBathrooms -= 1;
        itemCount.textContent = this.countOfBathrooms;
        disabledMinusButtonIfLessUnit(this.countOfBathrooms, button);
        enabledPlusButtonIfLessUnit(this.countOfBathrooms, plusButton);
      }
      this.input.placeholder = this.sendingRoomsToInput();
    }
  }

  @boundMethod
  plusButtonCallback(event) {
    const itemNameNode = event.target.closest(`.${LIST_ITEM_CLASS}`);
    const minusButton = itemNameNode.querySelector(`.${MINUS_BUTTON_CLASS}`);
    const itemCount = itemNameNode.querySelector(`.${COUNTER_CLASS}`);
    const plusButton = itemNameNode.querySelector(`.${PLUS_BUTTON_CLASS}`);

    if (this.isTypeGuest) {
      if (itemNameNode.classList.contains(ADULT_ITEM_CLASS)) {
        this.countOfAdult += 1;
        itemCount.textContent = this.countOfAdult;
        enabledMinusButtonIfBiggerZero(this.countOfAdult, minusButton);
        disabledPlusButtonIfBiggerUnit(this.countOfAdult, plusButton);
      } else if (itemNameNode.classList.contains(CHILDREN_ITEM_CLASS)) {
        this.countOfChildren += 1;
        itemCount.textContent = this.countOfChildren;
        enabledMinusButtonIfBiggerZero(this.countOfChildren, minusButton);
        disabledPlusButtonIfBiggerUnit(this.countOfChildren, plusButton);
      } else if (itemNameNode.classList.contains(BABY_ITEM_CLASS)) {
        this.countOfBaby += 1;
        itemCount.textContent = this.countOfBaby;
        enabledMinusButtonIfBiggerZero(this.countOfBaby, minusButton);
        disabledPlusButtonIfBiggerUnit(this.countOfBaby, plusButton);
      }
      showClearButton({
        adult: this.countOfAdult,
        children: this.countOfChildren,
        baby: this.countOfBaby,
        button: this.clearButton,
      });

      this.input.placeholder = this.sendingGuestsToInput();
    } else {
      if (itemNameNode.classList.contains(BEDROOM_ITEM_CLASS)) {
        this.countOfBedrooms += 1;
        itemCount.textContent = this.countOfBedrooms;
        enabledMinusButtonIfBiggerZero(this.countOfBedrooms, minusButton);
        disabledPlusButtonIfBiggerUnit(this.countOfBedrooms, plusButton);
      } else if (itemNameNode.classList.contains(BED_ITEM_CLASS)) {
        this.countOfBeds += 1;
        itemCount.textContent = this.countOfBeds;
        enabledMinusButtonIfBiggerZero(this.countOfBeds, minusButton);
        disabledPlusButtonIfBiggerUnit(this.countOfBeds, plusButton);
      } else {
        this.countOfBathrooms += 1;
        itemCount.textContent = this.countOfBathrooms;
        enabledMinusButtonIfBiggerZero(this.countOfBathrooms, minusButton);
        disabledPlusButtonIfBiggerUnit(this.countOfBathrooms, plusButton);
      }
      this.input.placeholder = this.sendingRoomsToInput();
    }
  }

  sendingRoomsToInput() {
    const nameOfBedrooms = createNameOfRooms(this.countOfBedrooms, BEDROOMS);
    const nameOfBeds = createNameOfRooms(this.countOfBeds, BEDS);
    const nameOfBathrooms = createNameOfRooms(this.countOfBathrooms, BATHROOMS);
    const nameOfRooms = checkEndingInRoomToInputs({
      bedrooms: nameOfBedrooms,
      beds: nameOfBeds,
      bathrooms: nameOfBathrooms,
    });
    if (nameOfRooms === '') {
      return 'Количество комнат';
    }
    return `${nameOfRooms}`;
  }

  sendingGuestsToInput() {
    const adultAndChildren = this.countOfAdult + this.countOfChildren;
    const nameOfAdultAndChildren = checkForZero(adultAndChildren, ADULT);
    const nameOfBaby = checkForZero(this.countOfBaby, BABY);
    const nameOfGuests = checkEndingInGuestToInputs(
      nameOfAdultAndChildren,
      nameOfBaby
    );
    if (nameOfGuests === '') {
      return 'Сколько гостей';
    }
    return nameOfGuests;
  }

  @boundMethod
  applyButtonCallback() {
    this.list.classList.remove(CSS_EXPANDED_CLASS, EXPANDED_CLASS);
  }

  @boundMethod
  clearButtonCallback() {
    const itemCounts = this.dropdown.querySelectorAll(`.${COUNTER_CLASS}`);
    this.countOfAdult = 0;
    this.countOfChildren = 0;
    this.countOfBaby = 0;
    // eslint-disable-next-line
    itemCounts.forEach((itemCount) => (itemCount.textContent = '0'));
    this.input.placeholder = 'Сколько гостей';
    this.clearButton.classList.add(CLEAR_BUTTON_HIDE);
  }
}
