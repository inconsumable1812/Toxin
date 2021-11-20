import { DateDropdown } from '../../components/date-dropdown/dateDropdown';
import { Dropdown } from '../dropdown/dropdown';

const rooms = document.querySelectorAll('.js-room-search');
rooms.forEach((room) => {
  const dropdowns = room.querySelectorAll('.js-dropdown');
  dropdowns.forEach((dropdown) => new Dropdown(dropdown));

  const dateDropdowns = room.querySelectorAll('.js-date-dropdown');
  dateDropdowns.forEach((dateDropdown) => new DateDropdown(dateDropdown));
});
