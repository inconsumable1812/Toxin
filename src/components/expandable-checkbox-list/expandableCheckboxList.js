function toggle(isExpanded, list) {
  if (isExpanded) {
    return list.classList.remove('expandable-checkbox-list_expanded');
  }
  return list.classList.add('expandable-checkbox-list_expanded');
}
class ExpandableCheckboxLists {
  constructor(checkbox) {
    this.checkbox = checkbox;
    this.isExpanded = this.checkbox.classList.contains(
      'expandable-checkbox-list_expanded'
    );

    this.bindEventListeners();
  }

  CheckExpanded() {
    this.isExpanded = this.checkbox.classList.contains(
      'expandable-checkbox-list_expanded'
    );
  }

  bindEventListeners() {
    const header = this.checkbox.querySelector(
      '.js-expandable-checkbox-list__header'
    );
    header.addEventListener('click', this.toggleCallback.bind(this));
  }

  toggleCallback() {
    toggle(this.isExpanded, this.checkbox);
    this.CheckExpanded();
  }
}

const expandableCheckboxLists = document.querySelectorAll(
  '.js-expandable-checkbox-list'
);
expandableCheckboxLists.forEach((list) => new ExpandableCheckboxLists(list));
