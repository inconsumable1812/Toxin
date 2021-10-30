import './formElements.scss'
import '../../components/input/input'
import '../../components/dateDropdown/dateDropdown'
import '../../components/expandableCheckboxList/expandableCheckboxList'
import '../../components/rangeSlider/rangeSlider'
import '../../components/pagination/pagination'
import '../../components/likeButton/likeButton'
import { Dropdown } from '../../components/dropdown/dropdown'
import { DateDropdown } from '../../components/dateDropdown/dateDropdown'

const Dropdowns = document.querySelectorAll('.js-dropdown')
Dropdowns.forEach((dropdown) => new Dropdown(dropdown))

const DateDropdowns = document.querySelectorAll('.js-dateDropdown')
DateDropdowns.forEach((dropdown) => new DateDropdown(dropdown))
