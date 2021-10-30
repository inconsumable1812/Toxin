import '../../components/dateDropdown/dateDropdown'
import { Dropdown } from '../dropdown/dropdown'

const bookings = document.querySelectorAll('.js-bookingForm')
bookings.forEach((booking) => {
  const Dropdowns = booking.querySelectorAll('.js-dropdown')
  Dropdowns.forEach((dropdown) => new Dropdown(dropdown))
})
