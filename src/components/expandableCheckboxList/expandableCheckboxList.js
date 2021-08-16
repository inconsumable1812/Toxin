const expandableCheckboxLists = document.querySelectorAll('.expandableCheckboxList__header')

for (const expandableCheckboxList of expandableCheckboxLists) {
  const CheckboxList = expandableCheckboxList.parentElement.querySelector('.expandableCheckboxList__list')
  const button = expandableCheckboxList.querySelector('.expandableCheckboxList__toggle-button')

  expandableCheckboxList.addEventListener('click', () => {
    if (CheckboxList.classList.contains('expandableCheckboxList__list_expanded')) {
      CheckboxList.classList.remove('expandableCheckboxList__list_expanded')
      button.classList.remove('expandableCheckboxList__toggle-button_expanded')
    } else {
      CheckboxList.classList.add('expandableCheckboxList__list_expanded')
      button.classList.add('expandableCheckboxList__toggle-button_expanded')
    }
  })
}
