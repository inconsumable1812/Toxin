import './landingPage.scss'
import '../../components/header/header'
import '../../components/dateDropdown/dateDropdown'
import '../../components/imageSlider/imageSlider'
import { Dropdown } from '../../components/dropdown/dropdown'

const Dropdowns = document.querySelectorAll('.js-dropdown')
Dropdowns.forEach((dropdown) => new Dropdown(dropdown))
