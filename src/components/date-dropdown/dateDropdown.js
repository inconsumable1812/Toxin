import $ from 'jquery';
import 'air-datepicker';

function isClickBeyondBorderCalendar(event) {
  return (
    event.target.closest('.js-date-dropdown') === null &&
    event.target.closest('.datepicker--cell') === null &&
    event.target.closest('.datepicker--nav-action') === null &&
    event.target.closest('.datepicker--nav-title') === null
  );
}

export class DateDropdown {
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
      this.$dropdown.find('.js-date-dropdown__calendar_content').datepicker({
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

      this.$dropdown.find('.js-date-dropdown__calendar_content').datepicker({
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

    this.$datePicker = this.$dropdown.find(
      '.js-date-dropdown__calendar_content'
    );

    this.createApplyButton();
    this.bindEventListeners();
  }

  isTypeAreSingle() {
    return this.$dropdown.hasClass('js-date-dropdown_single');
  }

  findButtonContainer() {
    this.$buttonContainers = this.$dropdown.find('.datepicker--buttons');
  }

  findDropdownBoxes() {
    this.$dropdownBoxes = this.$dropdown.find(
      '.js-date-dropdown__dropdown-box'
    );
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
    this.$applyButton.on('click', this.applyButtonCallback.bind(this));
    this.findDropdownBoxes();
    this.$dropdownBoxes.each((_, dropdownBox) =>
      $(dropdownBox).on('click', this.toggleCallback.bind(this))
    );
    document.addEventListener('click', this.callbackOnDocument.bind(this));
  }

  applyButtonCallback() {
    this.$datePicker.removeClass('js-date-dropdown__calendar_content_expanded');
  }

  toggleCallback() {
    const listIsExpanded = this.$datePicker.hasClass(
      'js-date-dropdown__calendar_content_expanded'
    );
    const lists = document.querySelectorAll(
      '.js-date-dropdown__calendar_content'
    );
    const array = [...lists].filter((list) => !$(list).hasClass('disabled'));
    array.forEach((list) =>
      list.classList.remove('js-date-dropdown__calendar_content_expanded')
    );
    if (listIsExpanded) {
      this.$datePicker.removeClass(
        'js-date-dropdown__calendar_content_expanded'
      );
    } else {
      this.$datePicker.addClass('js-date-dropdown__calendar_content_expanded');
    }
  }

  callbackOnDocument(event) {
    const listIsExpanded = this.$datePicker.hasClass(
      'js-date-dropdown__calendar_content_expanded'
    );
    if (listIsExpanded) {
      if (isClickBeyondBorderCalendar(event)) {
        if (!this.$datePicker.hasClass('disabled'))
          this.$datePicker.removeClass(
            'js-date-dropdown__calendar_content_expanded'
          );
      }
    }
  }
}
