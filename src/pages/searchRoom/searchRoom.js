import './searchRoom.scss'
import '../../components/dropdown/dropdown'
import '../../components/dateDropdown/dateDropdown'
import '../../components/expandableCheckboxList/expandableCheckboxList'
import '../../components/rangeSlider/rangeSlider'
import '../../components/pagination/pagination'
import '../../components/imageSlider/imageSlider'
import '../../components/header/header'

const openButton = document.querySelector('.searchRoom__button-open').querySelector('.button')
const closeButton = document.querySelector('.searchRoom__button-close')
const filter = document.querySelector('.searchRoom__filter')

openButton.addEventListener('click', () => {
  if (!filter.classList.contains('searchRoom__filter_expanded')) {
    filter.classList.add('searchRoom__filter_expanded')
  } else {
    filter.classList.remove('searchRoom__filter_expanded')
  }
})

closeButton.addEventListener('click', () => {
  filter.classList.remove('searchRoom__filter_expanded')
})
