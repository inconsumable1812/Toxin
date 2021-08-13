import $ from 'jquery'
import 'air-datepicker'
const dateDropdownItems = document.querySelectorAll('.dateDropdown__item')

for (const dateDropdownItem of dateDropdownItems) {
  const dropdownBox = dateDropdownItem.querySelector('.dateDropdown__dropdownBox')
  const calendarContent = dateDropdownItem.parentElement.parentElement.querySelector('.js-calendar_content')

  console.log(dropdownBox)
  console.log(calendarContent)

  dropdownBox.addEventListener('click', () => {
    if (calendarContent.classList.contains('js-calendar_content_expanded')) {
      calendarContent.classList.remove('js-calendar_content_expanded')
    } else {
      calendarContent.classList.add('js-calendar_content_expanded')
    }
  })
}

$(function () {
  $('.js-calendar_content').datepicker({
    multipleDates: 2,
  })
})
