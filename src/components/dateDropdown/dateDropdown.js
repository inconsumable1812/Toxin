import $ from 'jquery'
import 'air-datepicker'

const dateDropdownItems = document.querySelectorAll('.dateDropdown__item')
const dateDropdownsDouble = document.querySelectorAll('.dateDropdown_double')
//const inputFrom = document.querySelectorAll('input[name="field-date-from"]')
//const inputTo = document.querySelectorAll('input[name="field-date-to"]')

for (const dateDropdownItem of dateDropdownItems) {
  const dropdownBox = dateDropdownItem.querySelector('.dateDropdown__dropdownBox')
  const calendarContent = dateDropdownItem.parentElement.parentElement.querySelector('.js-calendar_content')

  dropdownBox.addEventListener('click', () => {
    if (calendarContent.classList.contains('js-calendar_content_expanded')) {
      calendarContent.classList.remove('js-calendar_content_expanded')
    } else {
      calendarContent.classList.add('js-calendar_content_expanded')
    }
  })
}

for (const dateDropdownDouble of dateDropdownsDouble) {
  const inputFrom = dateDropdownDouble.querySelector('input[name="field-date-from"]')
  const inputTo = dateDropdownDouble.querySelector('input[name="field-date-to"]')
  if (dateDropdownDouble.id === 'first') {
    inputFrom.id = 'firstFrom'
    inputTo.id = 'firstTo'
  } else {
    inputFrom.id = 'secondFrom'
    inputTo.id = 'secondTo'
  }
}

$(function () {
  $('#first .js-calendar_content').datepicker({
    minDate: new Date(),
    navTitles: {
      days: 'MM <i>yyyy</i>',
    },
    range: 'true',
    multipleDatesSeparator: ' - ',
    clearButton: 'true',
    onSelect: function (fd, d, picker) {
      $('#firstFrom').val(fd.split('-')[0])
      $('#firstTo').val(fd.split('-')[1])
    },
  })
  $('#second .js-calendar_content').datepicker({
    minDate: new Date(),
    navTitles: {
      days: 'MM <i>yyyy</i>',
    },
    range: 'true',
    multipleDatesSeparator: ' - ',
    clearButton: 'true',
    onSelect: function (fd, d, picker) {
      $('#secondFrom').val(fd.split('-')[0])
      $('#secondTo').val(fd.split('-')[1])
    },
  })

  $('.dateDropdown_single .js-calendar_content').datepicker({
    minDate: new Date(),
    range: 'true',
    navTitles: {
      days: 'MM <i>yyyy</i>',
    },
    multipleDatesSeparator: ' - ',
    clearButton: 'true',
    onSelect: function (fd, d, picker) {
      $('input[name="date-filter"]').val(fd)
    },
  })

  addApplyButton()

  let $applyButton = $('[data-action="apply"]')
  $applyButton.on('click', hideDatePicker)

  function addApplyButton() {
    let $isPickerButtons = $('.datepicker--buttons')
    if ($isPickerButtons) {
      $isPickerButtons.append('<span class="datepicker--button_apply" data-action="apply">Применить</span>')
    }
  }

  function hideDatePicker() {
    let $isDatePicker = $('.dropdown__calendar_content')
    $isDatePicker.removeClass('js-calendar_content_expanded')
  }
})
