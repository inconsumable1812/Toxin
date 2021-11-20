import {
  checkForZero,
  checkEndingInRoomToInputs,
  checkEndingInGuestToInputs,
  toggle,
  hideClearButton,
  disabledMinusButtonIfLessUnit,
  enabledMinusButtonIfBiggerZero,
  showClearButton,
  createNameOfRooms
} from './dropdown.functions';

const BEDROOMS = ['спальня', 'спальни', 'спален'];
const BEDS = ['кровать', 'кровати', 'кроватей'];
const BATHROOMS = ['ванная комната', 'ванные комнаты', 'ванных комнат'];
const ADULT = ['гость', 'гостя', 'гостей'];
const BABY = ['младенец', 'младенца', 'младенцев'];

export class Dropdown {
  constructor(dropdown) {
    this.dropdown = dropdown;
    this.countOfBedrooms = null;
    this.countOfBeds = null;
    this.countOfBathrooms = null;
    this.countOfAdult = null;
    this.countOfСhildren = null;
    this.countOfBaby = null;
    this.isTypeGuest = this.dropdownTypeIsGuest();
    this.applyButton = null;
    this.clearButton = null;
    this.input = null;
    this.box = null;
    this.list = null;

    this.init();
  }

  dropdownTypeIsGuest() {
    if (this.dropdown.classList.contains('dropdown__type_guest')) {
      return true;
    }
    return false;
  }

  initCountOfBedrooms() {
    this.countOfBedrooms = +this.dropdown.querySelector(
      '.js-dropdown__counter_bedroom'
    ).textContent;
  }

  initCountOfBeds() {
    this.countOfBeds = +this.dropdown.querySelector('.js-dropdown__counter_bed')
      .textContent;
  }

  initCountOfBathrooms() {
    this.countOfBathrooms = +this.dropdown.querySelector(
      '.js-dropdown__counter_bathroom'
    ).textContent;
  }

  initCountOfAdult() {
    this.countOfAdult = +this.dropdown.querySelector(
      '.js-dropdown__counter_adult'
    ).textContent;
  }

  initCountOfСhildren() {
    this.countOfСhildren = +this.dropdown.querySelector(
      '.js-dropdown__counter_children'
    ).textContent;
  }

  initCountOfBaby() {
    this.countOfBaby = +this.dropdown.querySelector(
      '.js-dropdown__counter_baby'
    ).textContent;
  }

  init() {
    this.input = this.dropdown.querySelector('.js-dropdown__input');
    this.box = this.dropdown.querySelector('.js-dropdown__box');
    this.list = this.dropdown.querySelector('.js-dropdown__list');
    if (this.isTypeGuest) {
      this.clearButton = this.dropdown.querySelector(
        '.js-dropdown__clear-buttons'
      );
      this.applyButton = this.dropdown.querySelector(
        '.js-dropdown__apply-buttons'
      );
      this.initCountOfAdult();
      this.initCountOfСhildren();
      this.initCountOfBaby();
      this.input.placeholder = this.sendingGuestsToInput();
      hideClearButton(
        this.countOfAdult,
        this.countOfСhildren,
        this.countOfBaby,
        this.clearButton
      );
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
      '.js-dropdown__counter-buttons_type_minus'
    );
    const plusButtons = this.dropdown.querySelectorAll(
      '.js-dropdown__counter-buttons_type_plus'
    );

    minusButtons.forEach((button) => {
      button.addEventListener('click', this.minusButtonCallback.bind(this));
    });

    plusButtons.forEach((button) => {
      button.addEventListener('click', this.plusButtonCallback.bind(this));
    });

    this.box.addEventListener('click', this.expandedCallback.bind(this));
    document.addEventListener('click', this.callbackOnDocument.bind(this));
    if (this.applyButton) {
      this.applyButton.addEventListener(
        'click',
        this.applyButtonCallback.bind(this)
      );
    }
    if (this.clearButton) {
      this.clearButton.addEventListener(
        'click',
        this.clearButtonCallback.bind(this)
      );
    }
  }

  callbackOnDocument(event) {
    const listIsExpanded = this.list.classList.contains(
      'dropdown__list_expanded'
    );
    if (listIsExpanded) {
      const lists = document.querySelectorAll('.js-dropdown__list');
      const currentBox = event.target.closest('.js-dropdown__box');
      const dateDropdown = event.target.closest('.js-dateDropdown');
      if (!currentBox || dateDropdown) {
        lists.forEach((list) =>
          list.classList.remove('dropdown__list_expanded')
        );
      }
    }
  }

  expandedCallback(event) {
    const target = event.target.closest('.js-dropdown__list');
    const listIsExpanded = this.list.classList.contains(
      'dropdown__list_expanded'
    );
    const lists = document.querySelectorAll('.js-dropdown__list');

    if (!target) {
      lists.forEach((list) => list.classList.remove('dropdown__list_expanded'));
      toggle(listIsExpanded, this.list, target);
    }
  }

  minusButtonCallback(event) {
    const itemNameNode = event.target.closest('.js-dropdown__list-item');
    const button = itemNameNode.querySelector(
      '.js-dropdown__counter-buttons_type_minus'
    );
    const itemCount = itemNameNode.querySelector('.js-dropdown__counter');

    if (this.isTypeGuest) {
      if (itemNameNode.classList.contains('js-dropdown__list-item_adult')) {
        this.countOfAdult -= 1;
        itemCount.textContent = this.countOfAdult;
        disabledMinusButtonIfLessUnit(this.countOfAdult, button);
      } else if (
        itemNameNode.classList.contains('js-dropdown__list-item_children')
      ) {
        this.countOfСhildren -= 1;
        itemCount.textContent = this.countOfСhildren;
        disabledMinusButtonIfLessUnit(this.countOfСhildren, button);
      } else if (
        itemNameNode.classList.contains('js-dropdown__list-item_baby')
      ) {
        this.countOfBaby -= 1;
        itemCount.textContent = this.countOfBaby;
        disabledMinusButtonIfLessUnit(this.countOfBaby, button);
      }
      hideClearButton(
        this.countOfAdult,
        this.countOfСhildren,
        this.countOfBaby,
        this.clearButton
      );

      this.input.placeholder = this.sendingGuestsToInput();
    } else {
      if (itemNameNode.classList.contains('js-dropdown__list-item_bedroom')) {
        this.countOfBedrooms -= 1;
        itemCount.textContent = this.countOfBedrooms;
        disabledMinusButtonIfLessUnit(this.countOfBedrooms, button);
      } else if (
        itemNameNode.classList.contains('js-dropdown__list-item_bed')
      ) {
        this.countOfBeds -= 1;
        itemCount.textContent = this.countOfBeds;
        disabledMinusButtonIfLessUnit(this.countOfBeds, button);
      } else {
        this.countOfBathrooms -= 1;
        itemCount.textContent = this.countOfBathrooms;
        disabledMinusButtonIfLessUnit(this.countOfBathrooms, button);
      }
      this.input.placeholder = this.sendingRoomsToInput();
    }
  }

  plusButtonCallback(event) {
    const itemNameNode = event.target.closest('.js-dropdown__list-item');
    const minusButton = itemNameNode.querySelector(
      '.js-dropdown__counter-buttons_type_minus'
    );
    const itemCount = itemNameNode.querySelector('.js-dropdown__counter');

    if (this.isTypeGuest) {
      if (itemNameNode.classList.contains('js-dropdown__list-item_adult')) {
        this.countOfAdult += 1;
        itemCount.textContent = this.countOfAdult;
        enabledMinusButtonIfBiggerZero(this.countOfAdult, minusButton);
      } else if (
        itemNameNode.classList.contains('js-dropdown__list-item_children')
      ) {
        this.countOfСhildren += 1;
        itemCount.textContent = this.countOfСhildren;
        enabledMinusButtonIfBiggerZero(this.countOfСhildren, minusButton);
      } else if (
        itemNameNode.classList.contains('js-dropdown__list-item_baby')
      ) {
        this.countOfBaby += 1;
        itemCount.textContent = this.countOfBaby;
        enabledMinusButtonIfBiggerZero(this.countOfBaby, minusButton);
      }
      showClearButton(
        this.countOfAdult,
        this.countOfСhildren,
        this.countOfBaby,
        this.clearButton
      );

      this.input.placeholder = this.sendingGuestsToInput();
    } else {
      if (itemNameNode.classList.contains('js-dropdown__list-item_bedroom')) {
        this.countOfBedrooms += 1;
        itemCount.textContent = this.countOfBedrooms;
        enabledMinusButtonIfBiggerZero(this.countOfBedrooms, minusButton);
      } else if (
        itemNameNode.classList.contains('js-dropdown__list-item_bed')
      ) {
        this.countOfBeds += 1;
        itemCount.textContent = this.countOfBeds;
        enabledMinusButtonIfBiggerZero(this.countOfBeds, minusButton);
      } else {
        this.countOfBathrooms += 1;
        itemCount.textContent = this.countOfBathrooms;
        enabledMinusButtonIfBiggerZero(this.countOfBathrooms, minusButton);
      }
      this.input.placeholder = this.sendingRoomsToInput();
    }
  }

  sendingRoomsToInput() {
    const nameOfBedrooms = createNameOfRooms(this.countOfBedrooms, BEDROOMS);
    const nameOfBeds = createNameOfRooms(this.countOfBeds, BEDS);
    const nameOfBathrooms = createNameOfRooms(this.countOfBathrooms, BATHROOMS);
    const nameOfRooms = checkEndingInRoomToInputs(
      nameOfBedrooms,
      nameOfBeds,
      nameOfBathrooms
    );
    if (nameOfRooms === '') {
      return 'Количество комнат';
    }
    return `${nameOfRooms}`;
  }

  sendingGuestsToInput() {
    const adultAndChildren = this.countOfAdult + this.countOfСhildren;
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

  applyButtonCallback() {
    this.list.classList.remove('dropdown__list_expanded');
  }

  clearButtonCallback() {
    const itemCounts = this.dropdown.querySelectorAll('.js-dropdown__counter');
    this.countOfAdult = 0;
    this.countOfСhildren = 0;
    this.countOfBaby = 0;
    // eslint-disable-next-line
    itemCounts.forEach((itemCount) => (itemCount.textContent = '0'));
    this.input.placeholder = 'Сколько гостей';
    this.clearButton.classList.add('dropdown__clear-buttons_hidden');
  }
}
