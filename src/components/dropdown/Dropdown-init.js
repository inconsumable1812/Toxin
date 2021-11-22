import Dropdown from './Dropdown';

const Dropdowns = document.querySelectorAll('.js-dropdown');
Dropdowns.forEach((dropdown) => new Dropdown(dropdown));
