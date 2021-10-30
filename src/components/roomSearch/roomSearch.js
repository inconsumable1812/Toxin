// import '../../components/dateDropdown/dateDropdown'
import { DateDropdown } from '../../components/dateDropdown/dateDropdown'
import { Dropdown } from '../dropdown/dropdown'

const rooms = document.querySelectorAll('.js-roomSearch')
rooms.forEach((room) => {
  const dropdowns = room.querySelectorAll('.js-dropdown')
  dropdowns.forEach((dropdown) => new Dropdown(dropdown))

  const dateDropdowns = room.querySelectorAll('.js-dateDropdown')
  dateDropdowns.forEach((dateDropdown) => new DateDropdown(dateDropdown))
})
