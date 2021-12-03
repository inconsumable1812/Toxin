import '../../components/expandable-checkbox-list/ExpandableCheckboxList-init';
import '../../components/range-slider/RangeSlider-init';
import '../../components/pagination/Pagination-init';
import '../../components/image-slider/ImageSlider-init';
import '../../components/header/Header-init';
import '../../components/date-dropdown/DateDropdown-init';
import '../../components/dropdown/Dropdown-init';
import './search-room.scss';

const BUTTON_OPEN = 'js-search-room__button-open';
const BUTTON = 'js-button';
const BUTTON_CLOSE = 'js-search-room__button-close';
const FILTER = 'js-search-room__filter';
const FILTER_EXPANDED = 'js-search-room__filter_expanded';
const CSS_FILTER_EXPANDED = 'search-room__filter_expanded';
const DATE_DROPDOWN_CLASS = 'js-date-dropdown';
const CELL_CLASS = 'datepicker--cell';
const NAV_ACTION_CLASS = 'datepicker--nav-action';
const NAV_TITLE_CLASS = 'datepicker--nav-title';

const openButton = document
  .querySelector(`.${BUTTON_OPEN}`)
  .querySelector(`.${BUTTON}`);
const closeButton = document.querySelector(`.${BUTTON_CLOSE}`);
const filter = document.querySelector(`.${FILTER}`);

const openButtonCallback = () => {
  if (!filter.classList.contains(FILTER_EXPANDED)) {
    filter.classList.add(CSS_FILTER_EXPANDED, FILTER_EXPANDED);
  } else {
    filter.classList.remove(CSS_FILTER_EXPANDED, FILTER_EXPANDED);
  }
};
openButton.addEventListener('click', openButtonCallback);

const closeButtonCallback = () => {
  filter.classList.remove(CSS_FILTER_EXPANDED, FILTER_EXPANDED);
};
closeButton.addEventListener('click', closeButtonCallback);

function isClickOnDocument(e, clickOnFilter, clickOnOpenButton) {
  return (
    !clickOnFilter &&
    clickOnOpenButton !== openButton &&
    e.target.closest(`.${DATE_DROPDOWN_CLASS}`) === null &&
    e.target.closest(`.${CELL_CLASS}`) === null &&
    e.target.closest(`.${NAV_ACTION_CLASS}`) === null &&
    e.target.closest(`.${NAV_TITLE_CLASS}`) === null
  );
}

const documentCallback = (e) => {
  const clickOnFilter = e.target.closest(`.${FILTER_EXPANDED}`);
  const clickOnOpenButton = e.target.closest(`.${BUTTON}`);

  if (isClickOnDocument(e, clickOnFilter, clickOnOpenButton)) {
    filter.classList.remove(CSS_FILTER_EXPANDED, FILTER_EXPANDED);
  }
};
document.addEventListener('click', documentCallback);
