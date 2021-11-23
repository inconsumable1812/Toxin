import $ from 'jquery';
import { boundMethod } from 'autobind-decorator';

import Datepicker from '../../libs/datepicker/Datepicker';

const CONTENT_CLASS = 'js-date-dropdown__calendar_content';
const SINGLE_CLASS = 'js-date-dropdown_single';
const BOX_CLASS = 'js-date-dropdown__dropdown-box';
const EXPANDED_CLASS = 'js-date-dropdown__calendar_content_expanded';
const CSS_EXPANDED_CLASS = 'date-dropdown__calendar_content_expanded';

export default class DateDropdown {
  constructor(dropdown) {
    this.$dropdown = $(dropdown);
    this.$buttonContainers = null;
    this.$applyButton = null;
    this.$dropdownBoxes = null;
    this.$datePicker = null;

    this.init();
  }

  init() {
    if (this.isTypeAreSingle()) {
      const $date = this.$dropdown.find('[name=date-filter]');
      this.datepickerInstance = new Datepicker(
        CONTENT_CLASS,
        this.$dropdown,
        $date
      );
    } else {
      const $dateFrom = this.$dropdown.find('[name=field-date-from]');
      const $dateTo = this.$dropdown.find('[name=field-date-to]');

      this.datepickerInstance = new Datepicker(
        CONTENT_CLASS,
        this.$dropdown,
        $dateFrom,
        $dateTo
      );
    }

    this.$datePicker = this.$dropdown.find(`.${CONTENT_CLASS}`);

    this.createApplyButton();
    this.bindEventListeners();
  }

  isTypeAreSingle() {
    return this.$dropdown.hasClass(SINGLE_CLASS);
  }

  findButtonContainer() {
    this.$buttonContainers = this.$dropdown.find('.datepicker--buttons');
  }

  findDropdownBoxes() {
    this.$dropdownBoxes = this.$dropdown.find(`.${BOX_CLASS}`);
  }

  createApplyButton() {
    this.findButtonContainer();
    const applyButton = `<span class="datepicker--button_apply" data-action="apply">Применить</span>`;
    this.$buttonContainers.append(applyButton);
    this.$applyButton = this.$buttonContainers.find(
      '.datepicker--button_apply'
    );
  }

  bindEventListeners() {
    this.$applyButton.on('click', this.applyButtonCallback);
    this.findDropdownBoxes();
    this.$dropdownBoxes.each((_, dropdownBox) =>
      $(dropdownBox).on('click', this.toggleCallback)
    );
    document.addEventListener('click', this.callbackOnDocument);
  }

  @boundMethod
  applyButtonCallback() {
    this.$datePicker[0].classList.remove(EXPANDED_CLASS, CSS_EXPANDED_CLASS);
  }

  @boundMethod
  toggleCallback() {
    const listIsExpanded = this.$datePicker.hasClass(EXPANDED_CLASS);
    const lists = document.querySelectorAll(`.${CONTENT_CLASS}`);
    const array = [...lists].filter((list) => !$(list).hasClass('disabled'));
    array.forEach((list) => list.classList.remove(EXPANDED_CLASS));
    if (listIsExpanded) {
      this.$datePicker[0].classList.remove(EXPANDED_CLASS, CSS_EXPANDED_CLASS);
    } else {
      this.$datePicker[0].classList.add(EXPANDED_CLASS, CSS_EXPANDED_CLASS);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  isClickBeyondBorderCalendar(event, listIsExpanded, isDisabled) {
    return (
      event.target.closest('.js-date-dropdown') === null &&
      event.target.closest('.datepicker--cell') === null &&
      event.target.closest('.datepicker--nav-action') === null &&
      event.target.closest('.datepicker--nav-title') === null &&
      listIsExpanded &&
      !isDisabled
    );
  }

  @boundMethod
  callbackOnDocument(event) {
    const listIsExpanded = this.$datePicker.hasClass(EXPANDED_CLASS);
    const isDisabled = this.$datePicker.hasClass('disabled');

    if (this.isClickBeyondBorderCalendar(event, listIsExpanded, isDisabled)) {
      this.$datePicker[0].classList.remove(EXPANDED_CLASS, CSS_EXPANDED_CLASS);
    }
  }
}
