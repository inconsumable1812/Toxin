import './cards.scss'
import '../../components/roomSearch/roomSearch'
// import '../../components/registrationForm/registrationForm'
// import '../../components/bookingForm/bookingForm'
import '../../components/imageSlider/imageSlider'
import { Dropdown } from '../../components/dropdown/dropdown'

const Dropdowns = document.querySelectorAll('.js-dropdown')
Dropdowns.forEach((dropdown) => new Dropdown(dropdown))
