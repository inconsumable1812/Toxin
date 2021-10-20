/* eslint-disable func-names */
import $ from 'jquery'
import 'air-datepicker'

const dateDropdownItems = document.querySelectorAll('.dateDropdown__item')

for (const dateDropdownItem of dateDropdownItems) {
  const dropdownBox = dateDropdownItem.querySelector('.dateDropdown__dropdownBox')
  const calendarContent =
    dateDropdownItem.parentElement.parentElement.querySelector('.js-calendar_content')

  dropdownBox.addEventListener('click', () => {
    if (calendarContent.classList.contains('js-calendar_content_expanded')) {
      calendarContent.classList.remove('js-calendar_content_expanded')
    } else {
      calendarContent.classList.add('js-calendar_content_expanded')
    }
  })
}

$('.dateDropdown_double').each(function () {
  const item = $(this)
  const dateFrom = item.find('[name=field-date-from]')
  const dateTo = item.find('[name=field-date-to]')

  item.find('.js-calendar_content').datepicker({
    clearButton: true,
    minDate: new Date(),
    navTitles: {
      days: 'MM <i>yyyy</i>'
    },
    range: 'true',
    multipleDatesSeparator: ' - ',
    prevHtml: '<span class="arrow_back material-icons">arrow_back</span>',
    nextHtml: '<span class="arrow_forward material-icons">arrow_forward</span>',

    onSelect: function (fd) {
      dateFrom.val(fd.split('-')[0])
      dateTo.val(fd.split('-')[1])
    }
  })

  // Экземпляр класса
  const datep = item.find('.js-calendar_content').data('datepicker')

  // Экземпляр кода календаря
  const datepEl = datep.$datepicker
  // Добавление кнопки
  const applyButton = $(
    `<span class="datepicker--button_apply" data-action="apply">Применить</span>`
  )

  applyButton.on('click', function () {
    let $isDatePicker = $(this).parents('.js-calendar_content')
    if (!$(this).parents().hasClass('disabled')) {
      $isDatePicker.removeClass('js-calendar_content_expanded')
    }
  })

  datepEl.find('.datepicker--buttons').append(applyButton)
})

$('.dateDropdown_single').each(function () {
  const item = $(this)
  const date = item.find('[name=date-filter]')

  item.find('.js-calendar_content').datepicker({
    clearButton: true,
    minDate: new Date(),
    navTitles: {
      days: 'MM <i>yyyy</i>'
    },
    range: 'true',
    multipleDatesSeparator: ' - ',
    prevHtml: '<span class="arrow_back material-icons">arrow_back</span>',
    nextHtml: '<span class="arrow_forward material-icons">arrow_forward</span>',

    onSelect: function (fd) {
      date.val(fd)
    }
  })

  // Экземпляр класса
  const datep = item.find('.js-calendar_content').data('datepicker')

  // Экземпляр кода календаря
  const datepEl = datep.$datepicker
  // Добавление кнопки
  const applyButton = $(
    `<span class="datepicker--button_apply" data-action="apply">Применить</span>`
  )

  applyButton.on('click', function () {
    let $isDatePicker = $(this).parents('.js-calendar_content')
    if (!$(this).parents().hasClass('disabled')) {
      $isDatePicker.removeClass('js-calendar_content_expanded')
    }
  })

  datepEl.find('.datepicker--buttons').append(applyButton)
})
