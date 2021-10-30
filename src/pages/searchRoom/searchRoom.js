import './searchRoom.scss'
import { DateDropdown } from '../../components/dateDropdown/dateDropdown'
import '../../components/expandableCheckboxList/expandableCheckboxList'
import '../../components/rangeSlider/rangeSlider'
import '../../components/pagination/pagination'
import '../../components/imageSlider/imageSlider'
import '../../components/header/header'
import { Dropdown } from '../../components/dropdown/dropdown'

const Dropdowns = document.querySelectorAll('.js-dropdown')
Dropdowns.forEach((dropdown) => new Dropdown(dropdown))

const dateDropdowns = document.querySelectorAll('.js-dateDropdown')
dateDropdowns.forEach((dateDropdown) => new DateDropdown(dateDropdown))

const openButton = document
  .querySelector('.searchRoom__button-open')
  .querySelector('.button')
const closeButton = document.querySelector('.searchRoom__button-close')
const filter = document.querySelector('.searchRoom__filter')

const openButtonCallback = () => {
  if (!filter.classList.contains('searchRoom__filter_expanded')) {
    filter.classList.add('searchRoom__filter_expanded')
  } else {
    filter.classList.remove('searchRoom__filter_expanded')
  }
}
openButton.addEventListener('click', openButtonCallback)

const closeButtonCallback = () => {
  filter.classList.remove('searchRoom__filter_expanded')
}

closeButton.addEventListener('click', closeButtonCallback)
