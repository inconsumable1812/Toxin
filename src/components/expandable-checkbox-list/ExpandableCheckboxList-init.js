import ExpandableCheckboxList from './ExpandableCheckboxList';

const expandableCheckboxLists = document.querySelectorAll(
  '.js-expandable-checkbox-list'
);
expandableCheckboxLists.forEach((list) => new ExpandableCheckboxList(list));
