import './cards.scss'
import '../../components/roomSearch/roomSearch'
import '../../components/registrationForm/registrationForm'
import '../../components/bookingForm/bookingForm'
import '../../components/imageSlider/imageSlider'
import { DateDropdown } from '../../components/dateDropdown/dateDropdown'

const dateDropdowns = document.querySelectorAll('.js-dateDropdown')
const arrayOfDateDropdowns = [...dateDropdowns]
  .filter((dropdown) => !dropdown.closest('.js-bookingForm'))
  .filter((dropdown) => !dropdown.closest('.js-roomSearch'))
arrayOfDateDropdowns.forEach((dateDropdown) => new DateDropdown(dateDropdown))
