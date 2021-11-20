import { DateDropdown } from '../date-dropdown/dateDropdown';
import { Dropdown } from '../dropdown/dropdown';

const bookings = document.querySelectorAll('.js-booking-form');
bookings.forEach((booking) => {
  const Dropdowns = booking.querySelectorAll('.js-dropdown');
  Dropdowns.forEach((dropdown) => new Dropdown(dropdown));

  const dateDropdowns = booking.querySelectorAll('.js-dateDropdown');
  dateDropdowns.forEach((dateDropdown) => new DateDropdown(dateDropdown));
});
