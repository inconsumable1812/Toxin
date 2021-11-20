import '../../components/expandable-checkbox-list/expandableCheckboxList';
import '../../components/range-slider/rangeSlider';
import '../../components/pagination/pagination';
import '../../components/image-slider/imageSlider';
import '../../components/header/header';
import { DateDropdown } from '../../components/date-dropdown/dateDropdown';
import { Dropdown } from '../../components/dropdown/dropdown';
import './search-room.scss';

const Dropdowns = document.querySelectorAll('.js-dropdown');
Dropdowns.forEach((dropdown) => new Dropdown(dropdown));

const dateDropdowns = document.querySelectorAll('.js-date-dropdown');
dateDropdowns.forEach((dateDropdown) => new DateDropdown(dateDropdown));

const openButton = document
  .querySelector('.search-room__button-open')
  .querySelector('.button');
const closeButton = document.querySelector('.search-room__button-close');
const filter = document.querySelector('.search-room__filter');

const openButtonCallback = () => {
  if (!filter.classList.contains('search-room__filter_expanded')) {
    filter.classList.add('search-room__filter_expanded');
  } else {
    filter.classList.remove('search-room__filter_expanded');
  }
};
openButton.addEventListener('click', openButtonCallback);

const closeButtonCallback = () => {
  filter.classList.remove('search-room__filter_expanded');
};

closeButton.addEventListener('click', closeButtonCallback);
