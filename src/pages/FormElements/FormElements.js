import './formElements.scss'
import '../../components/input/input'
import '../../components/dropdown/dropdown'
import '../../components/dateDropdown/dateDropdown'
import '../../components/expandableCheckboxList/expandableCheckboxList'
import '../../components/rangeSlider/rangeSlider'
import '../../components/pagination/pagination'
import { LikeButton } from '../../components/likeButton/likeButton'

const LikeButtons = document.querySelectorAll('.js-likeButton')
LikeButtons.forEach((button) => new LikeButton(button))
