import DateDropdown from './DateDropdown';

const DateDropdowns = document.querySelectorAll('.js-date-dropdown');
DateDropdowns.forEach((dropdown) => new DateDropdown(dropdown));
