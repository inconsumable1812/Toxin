import './formElements.scss'
import '../../components/input/input'
import '../../components/dateDropdown/dateDropdown'
import '../../components/expandableCheckboxList/expandableCheckboxList'
import '../../components/rangeSlider/rangeSlider'
import '../../components/pagination/pagination'
import { LikeButton } from '../../components/likeButton/likeButton'
import { Dropdown } from '../../components/dropdown/dropdown'

const LikeButtons = document.querySelectorAll('.js-likeButton')
LikeButtons.forEach((button) => new LikeButton(button))

const Dropdowns = document.querySelectorAll('.js-dropdown')
Dropdowns.forEach((dropdown) => new Dropdown(dropdown))
