import $ from 'jquery';
import 'air-datepicker';
import { boundMethod } from 'autobind-decorator';

const CONTENT_CLASS = 'js-date-dropdown__calendar_content';
const SINGLE_CLASS = 'js-date-dropdown_single';
const BOX_CLASS = 'js-date-dropdown__dropdown-box';
const EXPANDED_CLASS = 'js-date-dropdown__calendar_content_expanded';

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
      this.$dropdown.find(`.${CONTENT_CLASS}`).datepicker({
        clearButton: true,
        minDate: new Date(),
        navTitles: {
          days: 'MM <i>yyyy</i>',
        },
        range: 'true',
        multipleDatesSeparator: ' - ',
        prevHtml: '<span class="arrow_back material-icons">arrow_back</span>',
        nextHtml:
          '<span class="arrow_forward material-icons">arrow_forward</span>',

        onSelect(fd) {
          $date.val(fd);
        },
      });
    } else {
      const dateFrom = this.$dropdown.find('[name=field-date-from]');
      const dateTo = this.$dropdown.find('[name=field-date-to]');

      this.$dropdown.find(`.${CONTENT_CLASS}`).datepicker({
        clearButton: true,
        minDate: new Date(),
        navTitles: {
          days: 'MM <i>yyyy</i>',
        },
        range: 'true',
        multipleDatesSeparator: ' - ',
        prevHtml: '<span class="arrow_back material-icons">arrow_back</span>',
        nextHtml:
          '<span class="arrow_forward material-icons">arrow_forward</span>',

        onSelect(fd) {
          dateFrom.val(fd.split('-')[0]);
          dateTo.val(fd.split('-')[1]);
        },
      });
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
    this.$datePicker.removeClass(EXPANDED_CLASS);
  }

  @boundMethod
  toggleCallback() {
    const listIsExpanded = this.$datePicker.hasClass(EXPANDED_CLASS);
    const lists = document.querySelectorAll(`.${CONTENT_CLASS}`);
    const array = [...lists].filter((list) => !$(list).hasClass('disabled'));
    array.forEach((list) => list.classList.remove(EXPANDED_CLASS));
    if (listIsExpanded) {
      this.$datePicker.removeClass(EXPANDED_CLASS);
    } else {
      this.$datePicker.addClass(EXPANDED_CLASS);
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
      this.$datePicker.removeClass(EXPANDED_CLASS);
    }
  }
}
