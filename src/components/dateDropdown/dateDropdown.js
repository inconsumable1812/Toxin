import $ from 'jquery'
import 'air-datepicker'

export class DateDropdown {
  constructor(dropdown) {
    this.$dropdown = $(dropdown)
    this.$buttonContainers = null
    this.$applyButton = null
    this.$dropdownBoxes = null
    this.$datePicker = null

    this.init()
  }

  init() {
    if (this.isTypeAreSingle()) {
      const $date = this.$dropdown.find('[name=date-filter]')
      this.$dropdown.find('.js-calendar_content').datepicker({
        clearButton: true,
        minDate: new Date(),
        navTitles: {
          days: 'MM <i>yyyy</i>'
        },
        range: 'true',
        multipleDatesSeparator: ' - ',
        prevHtml: '<span class="arrow_back material-icons">arrow_back</span>',
        nextHtml: '<span class="arrow_forward material-icons">arrow_forward</span>',

        onSelect(fd) {
          $date.val(fd)
        }
      })
    } else {
      const dateFrom = this.$dropdown.find('[name=field-date-from]')
      const dateTo = this.$dropdown.find('[name=field-date-to]')

      this.$dropdown.find('.js-calendar_content').datepicker({
        clearButton: true,
        minDate: new Date(),
        navTitles: {
          days: 'MM <i>yyyy</i>'
        },
        range: 'true',
        multipleDatesSeparator: ' - ',
        prevHtml: '<span class="arrow_back material-icons">arrow_back</span>',
        nextHtml: '<span class="arrow_forward material-icons">arrow_forward</span>',

        onSelect(fd) {
          dateFrom.val(fd.split('-')[0])
          dateTo.val(fd.split('-')[1])
        }
      })
    }

    this.$datePicker = this.$dropdown.find('.js-calendar_content')

    this.createApplyButton()
    this.bindEventListeners()
  }

  isTypeAreSingle() {
    return this.$dropdown.hasClass('js-dateDropdown_single')
  }

  findButtonContainer() {
    this.$buttonContainers = this.$dropdown.find('.datepicker--buttons')
  }

  findDropdownBoxes() {
    this.$dropdownBoxes = this.$dropdown.find('.js-dateDropdown__dropdownBox')
  }

  createApplyButton() {
    this.findButtonContainer()
    const applyButton = `<span class="datepicker--button_apply" data-action="apply">Применить</span>`
    this.$buttonContainers.append(applyButton)
    this.$applyButton = this.$buttonContainers.find('.datepicker--button_apply')
  }

  bindEventListeners() {
    this.$applyButton.on('click', this.applyButtonCallback.bind(this))
    this.findDropdownBoxes()
    this.$dropdownBoxes.each((_, dropdownBox) =>
      $(dropdownBox).on('click', this.toggleCallback.bind(this))
    )
  }

  applyButtonCallback() {
    this.$datePicker.removeClass('js-calendar_content_expanded')
  }

  toggleCallback() {
    this.$datePicker.toggleClass('js-calendar_content_expanded')
  }
}
