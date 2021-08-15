import $ from 'jquery'
import 'air-datepicker'

const dateDropdownItems = document.querySelectorAll('.dateDropdown__item')
const dateDropdownsDouble = document.querySelectorAll('.dateDropdown__group_double')
//const inputFrom = document.querySelectorAll('input[name="field-date-from"]')
//const inputTo = document.querySelectorAll('input[name="field-date-to"]')
const applyButton = document.createElement('div')
applyButton.classList.add('dropdown__apply-buttons')

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

$(function () {
  $('.dateDropdown_double .js-calendar_content').datepicker({
    minDate: new Date(),
    navTitles: {
      days: 'MM <i>yyyy</i>',
    },
    range: 'true',
    multipleDatesSeparator: ' - ',
    clearButton: 'true',
    onSelect: function (fd, d, picker) {
      $('input[name="field-date-from"]').val(fd.split('-')[0])
      $('input[name="field-date-to"]').val(fd.split('-')[1])
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

  let $isPickerButtons = $('.date-picker').find('.datepicker--buttons')
  if ($isPickerButtons) {
    $isPickerButtons.append(applyButton)
  }

  addApplyButton()

  let $applyButton = $('[data-action="apply"]')
  $applyButton.on('click', hideDatePicker)

  function addApplyButton() {
    let $isPickerButtons = $('.datepicker--buttons')
    if ($isPickerButtons) {
      $isPickerButtons.append('<span class="datepicker--button" data-action="apply">Применить</span>')
    }
  }

  function hideDatePicker() {
    let $isDatePicker = $('.dropdown__calendar_content')
    $isDatePicker.removeClass('js-calendar_content_expanded')
  }

  /*$('.dateDropdown_double .js-calendar_content').each(function() {
    console.log($(this))
    $(this).datepicker({
      multipleDates: 2,
      minDate: new Date(),
      range: 'true',
      multipleDatesSeparator: ' - ',
      clearButton: 'true',
      onSelect: function (fd, d, picker) {
        $('input[name="field-date-from"]').val(fd.split('-')[0])
        $('input[name="field-date-to"]').val(fd.split('-')[1])
      },
    })
  })*/
})

/*$(function () {
    addApplyButton()

    let $applyButton = $('[data-action="apply"]')
    $applyButton.on('click', hideDatePicker)
  })
  function addApplyButton() {
    let $isPickerButtons = $('.date-picker').find('.datepicker--buttons')
    if ($isPickerButtons) {
      $isPickerButtons.append('<span class="datepicker--button" data-action="apply">Применить</span>')
    }
  }

  function hideDatePicker() {
    let $isDatePicker = $('.dropdown-date__date-picker')
    $isDatePicker.css('display', 'none')
  }*/
