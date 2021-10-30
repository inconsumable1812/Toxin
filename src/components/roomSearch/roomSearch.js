import '../../components/dateDropdown/dateDropdown'
import { Dropdown } from '../dropdown/dropdown'

const rooms = document.querySelectorAll('.js-roomSearch')
rooms.forEach((room) => {
  const Dropdowns = room.querySelectorAll('.js-dropdown')
  Dropdowns.forEach((dropdown) => new Dropdown(dropdown))
})
