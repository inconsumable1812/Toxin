import '../../components/dateDropdown/dateDropdown'
import { Dropdown } from '../dropdown/dropdown'

const Dropdowns = document.querySelectorAll('.js-dropdown')
Dropdowns.forEach((dropdown) => new Dropdown(dropdown))
