function toggle(isExpanded, list) {
  if (isExpanded) {
    return list.classList.remove('expandableCheckboxList_expanded');
  }
  return list.classList.add('expandableCheckboxList_expanded');
}
class ExpandableCheckboxLists {
  constructor(checkbox) {
    this.checkbox = checkbox;
    this.isExpanded = this.checkbox.classList.contains('expandableCheckboxList_expanded');

    this.bindEventListeners();
  }

  CheckExpanded() {
    this.isExpanded = this.checkbox.classList.contains('expandableCheckboxList_expanded');
  }

  bindEventListeners() {
    const header = this.checkbox.querySelector('.js-expandableCheckboxList__header');
    header.addEventListener('click', this.toggleCallback.bind(this));
  }

  toggleCallback() {
    toggle(this.isExpanded, this.checkbox);
    this.CheckExpanded();
  }
}

const expandableCheckboxLists = document.querySelectorAll('.js-expandableCheckboxList');
expandableCheckboxLists.forEach((list) => new ExpandableCheckboxLists(list));
