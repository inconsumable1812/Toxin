import 'air-datepicker';

const CELL_CLASS = 'datepicker--cell';
const BUTTONS_CLASS = 'datepicker--buttons';
const NAV_ACTION_CLASS = 'datepicker--nav-action';
const NAV_TITLE_CLASS = 'datepicker--nav-title';

export default class Datepicker {
  $buttonContainers = null;

  constructor({ containerClass, $dropdown, $dateFrom, $dateTo = null }) {
    this.containerClass = containerClass;
    this.$dropdown = $dropdown;
    this.$dateFrom = $dateFrom;
    this.$dateTo = $dateTo;

    this.createDatepicker();
    this.createApplyButton();
  }

  static isShouldCloseWhenClick(event) {
    return (
      event.target.closest(`.${CELL_CLASS}`) === null &&
      event.target.closest(`.${NAV_ACTION_CLASS}`) === null &&
      event.target.closest(`.${NAV_TITLE_CLASS}`) === null
    );
  }

  createDatepicker() {
    const $dateFrom = this.$dateFrom;
    const $dateTo = this.$dateTo;
    this.$dt = this.$dropdown.find(`.${this.containerClass}`).datepicker({
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
        if ($dateTo) {
          $dateFrom.val(fd.split('-')[0]);
          $dateTo.val(fd.split('-')[1]);
        } else {
          $dateFrom.val(fd);
        }
      },
    });

    return this.$dt;
  }

  findButtonContainer() {
    this.$buttonContainers = this.$dropdown.find(`.${BUTTONS_CLASS}`);
  }

  createApplyButton() {
    this.findButtonContainer();
    const applyButton = `<span class="datepicker--button_apply js-datepicker--button_apply" data-action="apply">Применить</span>`;
    this.$buttonContainers.append(applyButton);
  }
}
