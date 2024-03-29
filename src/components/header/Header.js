/* eslint-disable lines-between-class-members */
import { boundMethod } from 'autobind-decorator';

const BURGER_CLASS = 'js-header__burger';
const MENU_GROUP_CLASS = 'js-header__menu-group';
const SUB_MENU_CLASS = 'js-header__sub-menu';
const SUB_MENU_ICON_CLASS = 'js-header__sub-menu-icon';
const SUB_MENU_EXPANDED = 'js-header__sub-menu_expanded';
const CSS_SUB_MENU_EXPANDED = 'header__sub-menu_expanded';
const DROPDOWN_CLASS = 'js-header__dropdown';
const MENU_GROUP_EXPANDED = 'js-header__menu-group_expanded';
const CSS_MENU_GROUP_EXPANDED = 'header__menu-group_expanded';
const BURGER_ICON_CLASS = 'js-icon__material';

export default class Header {
  burger = null;
  menuGroup = null;
  subMenus = null;
  icon = null;

  constructor(header) {
    this.header = header;

    this.init();
  }

  findBurger() {
    this.burger = this.header.querySelector(`.${BURGER_CLASS}`);
  }

  findIcon() {
    this.icon = this.burger.querySelector(`.${BURGER_ICON_CLASS}`);
  }

  findMenuGroup() {
    this.menuGroup = this.header.querySelector(`.${MENU_GROUP_CLASS}`);
  }

  findSubMenus() {
    this.subMenus = this.header.querySelectorAll(`.${SUB_MENU_CLASS}`);
  }

  init() {
    this.findBurger();
    this.findMenuGroup();
    this.findSubMenus();
    this.findIcon();

    this.bindEventListeners();
  }

  bindEventListeners() {
    this.subMenus.forEach((subMenu) => {
      const subMenuIcon = subMenu.querySelector(`.${SUB_MENU_ICON_CLASS}`);
      subMenuIcon.addEventListener('click', this.subMenuCallback);
    });

    document.addEventListener('click', this.callbackOnDocument);
    this.burger.addEventListener('click', this.burgerCallback);
  }

  @boundMethod
  burgerCallback() {
    if (this.menuGroup.classList.contains(MENU_GROUP_EXPANDED)) {
      this.menuGroup.classList.remove(
        MENU_GROUP_EXPANDED,
        CSS_MENU_GROUP_EXPANDED
      );
      this.icon.textContent = 'menu';
    } else {
      this.menuGroup.classList.add(
        MENU_GROUP_EXPANDED,
        CSS_MENU_GROUP_EXPANDED
      );
      this.icon.textContent = 'close';
    }
  }

  hideSubmenus(event) {
    const subMenus = this.subMenus;
    const currentSubmenu = event.target.closest(`.${SUB_MENU_EXPANDED}`);

    subMenus.forEach((subMenu) =>
      subMenu.classList.remove(CSS_SUB_MENU_EXPANDED, SUB_MENU_EXPANDED)
    );
    if (currentSubmenu) {
      currentSubmenu.classList.add(CSS_SUB_MENU_EXPANDED, SUB_MENU_EXPANDED);
    }
  }

  subMenuCallback = (event) => {
    this.hideSubmenus(event);

    const subMenu = event.target.closest(`.${SUB_MENU_CLASS}`);
    if (subMenu.classList.contains(CSS_SUB_MENU_EXPANDED, SUB_MENU_EXPANDED)) {
      subMenu.classList.remove(CSS_SUB_MENU_EXPANDED, SUB_MENU_EXPANDED);
    } else {
      subMenu.classList.add(CSS_SUB_MENU_EXPANDED, SUB_MENU_EXPANDED);
    }
  };

  @boundMethod
  callbackOnDocument(event) {
    const anybodyIsExpanded = document.querySelectorAll(
      `.${SUB_MENU_EXPANDED}`
    );
    if (anybodyIsExpanded) {
      const subMenus = this.subMenus;
      const currentSubMenu = event.target.closest(`.${DROPDOWN_CLASS}`);
      const subMenuToggleIcon = event.target.closest(`.${SUB_MENU_ICON_CLASS}`);
      if (!currentSubMenu && !subMenuToggleIcon) {
        subMenus.forEach((subMenu) =>
          subMenu.classList.remove(CSS_SUB_MENU_EXPANDED, SUB_MENU_EXPANDED)
        );
      }
    }
  }
}
