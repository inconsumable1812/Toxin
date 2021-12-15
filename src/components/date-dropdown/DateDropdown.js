import $ from 'jquery';
import { boundMethod } from 'autobind-decorator';

import Datepicker from '../../libs/datepicker/Datepicker';

const CONTENT_CLASS = 'js-date-dropdown__calendar_content';
const SINGLE_CLASS = 'js-date-dropdown_single';
const BOX_CLASS = 'js-date-dropdown__dropdown-box';
const EXPANDED_CLASS = 'js-date-dropdown__calendar_content_expanded';
const CSS_EXPANDED_CLASS = 'date-dropdown__calendar_content_expanded';
const DATE_DROPDOWN_CLASS = 'js-date-dropdown';
const CELL_CLASS = 'datepicker--cell';
const NAV_ACTION_CLASS = 'datepicker--nav-action';
const NAV_TITLE_CLASS = 'datepicker--nav-title';
const DISABLED_CLASS = 'js-date-dropdown__calendar_disabled';
const APPLY_BUTTON_CLASS = 'js-datepicker--button_apply';

export default class DateDropdown {
  $applyButton = null;

  $dropdownBoxes = null;

  $datePicker = null;

  constructor(dropdown) {
    this.$dropdown = $(dropdown);

    this.init();
  }

  init() {
    if (this.isTypeAreSingle()) {
      const $date = this.$dropdown.find('[name=date-filter]');
      this.datepickerInstance = new Datepicker({
        containerClass: CONTENT_CLASS,
        $dropdown: this.$dropdown,
        $dateFrom: $date,
      });
    } else {
      const $dateFrom = this.$dropdown.find('[name=field-date-from]');
      const $dateTo = this.$dropdown.find('[name=field-date-to]');

      this.datepickerInstance = new Datepicker({
        containerClass: CONTENT_CLASS,
        $dropdown: this.$dropdown,
        $dateFrom,
        $dateTo,
      });
    }

    this.$datePicker = this.$dropdown.find(`.${CONTENT_CLASS}`);

    this.bindEventListeners();
  }

  isTypeAreSingle() {
    return this.$dropdown.hasClass(SINGLE_CLASS);
  }

  findDropdownBoxes() {
    this.$dropdownBoxes = this.$dropdown.find(`.${BOX_CLASS}`);
  }

  bindEventListeners() {
    this.$applyButton = this.$dropdown.find(`.${APPLY_BUTTON_CLASS}`);
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
    const lists = document.querySelectorAll(`.${EXPANDED_CLASS}`);
    const array = [...lists].filter(
      (list) => !$(list).hasClass(DISABLED_CLASS)
    );
    array.forEach((list) =>
      list.classList.remove(EXPANDED_CLASS, CSS_EXPANDED_CLASS)
    );
    if (listIsExpanded) {
      this.$datePicker[0].classList.remove(EXPANDED_CLASS, CSS_EXPANDED_CLASS);
    } else {
      this.$datePicker[0].classList.add(EXPANDED_CLASS, CSS_EXPANDED_CLASS);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  isClickBeyondBorderCalendar(event, listIsExpanded, isDisabled) {
    return (
      event.target.closest(`.${DATE_DROPDOWN_CLASS}`) === null &&
      event.target.closest(`.${CELL_CLASS}`) === null &&
      event.target.closest(`.${NAV_ACTION_CLASS}`) === null &&
      event.target.closest(`.${NAV_TITLE_CLASS}`) === null &&
      listIsExpanded &&
      !isDisabled
    );
  }

  @boundMethod
  callbackOnDocument(event) {
    const listIsExpanded = this.$datePicker.hasClass(EXPANDED_CLASS);
    const isDisabled = this.$datePicker.hasClass(DISABLED_CLASS);

    if (this.isClickBeyondBorderCalendar(event, listIsExpanded, isDisabled)) {
      this.$datePicker[0].classList.remove(EXPANDED_CLASS, CSS_EXPANDED_CLASS);
    }
  }
}
