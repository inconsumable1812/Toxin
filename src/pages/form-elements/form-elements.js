import '../../components/input/input';
import '../../components/expandable-checkbox-list/expandableCheckboxList';
import '../../components/range-slider/rangeSlider';
import '../../components/pagination/pagination';
import '../../components/like-button/likeButton';
import { DateDropdown } from '../../components/date-dropdown/dateDropdown';
import { Dropdown } from '../../components/dropdown/dropdown';
import './form-elements.scss';

const Dropdowns = document.querySelectorAll('.js-dropdown');
Dropdowns.forEach((dropdown) => new Dropdown(dropdown));

const DateDropdowns = document.querySelectorAll('.js-date-dropdown');
DateDropdowns.forEach((dropdown) => new DateDropdown(dropdown));
