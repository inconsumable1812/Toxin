import { boundMethod } from 'autobind-decorator';

const EXPANDED_CLASS = 'js-expandable-checkbox-list_expanded';
const CSS_EXPANDED_CLASS = 'expandable-checkbox-list_expanded';
const HEADER_CLASS = 'js-expandable-checkbox-list__header';

export default class ExpandableCheckboxList {
  constructor(checkbox) {
    this.checkbox = checkbox;
    this.isExpanded = this.checkbox.classList.contains(EXPANDED_CLASS);

    this.bindEventListeners();
  }

  CheckExpanded() {
    this.isExpanded = this.checkbox.classList.contains(EXPANDED_CLASS);
  }

  bindEventListeners() {
    const header = this.checkbox.querySelector(`.${HEADER_CLASS}`);
    header.addEventListener('click', this.toggleCallback);
  }

  // eslint-disable-next-line class-methods-use-this
  toggle(isExpanded, list) {
    if (isExpanded) {
      return list.classList.remove(CSS_EXPANDED_CLASS, EXPANDED_CLASS);
    }
    return list.classList.add(CSS_EXPANDED_CLASS, EXPANDED_CLASS);
  }

  @boundMethod
  toggleCallback() {
    this.toggle(this.isExpanded, this.checkbox);
    this.CheckExpanded();
  }
}
