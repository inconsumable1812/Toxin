export class Header {
  constructor(header) {
    this.header = header;
    this.burger = null;
    this.menuGroup = null;
    this.subMenus = null;

    this.init();
  }

  findBurger() {
    this.burger = this.header.querySelector('.js-header__burger');
  }

  findMenuGroup() {
    this.menuGroup = this.header.querySelector('.js-header__menuGroup');
  }

  findSubMenus() {
    this.subMenus = this.header.querySelectorAll('.js-header__subMenu');
  }

  init() {
    this.findBurger();
    this.findMenuGroup();
    this.findSubMenus();

    this.bindEventListeners();
  }

  bindEventListeners() {
    this.subMenus.forEach((subMenu) => {
      const subMenuIcon = subMenu.querySelector('.js-header__subMenuIcon');
      subMenuIcon.addEventListener('click', this.subMenuCallback);
    });

    document.addEventListener('click', this.callbackOnDocument.bind(this));
    this.burger.addEventListener('click', this.burgerCallback.bind(this));
  }

  burgerCallback() {
    if (this.menuGroup.classList.contains('header__menuGroup_expanded')) {
      this.menuGroup.classList.remove('header__menuGroup_expanded');
      this.burger.textContent = 'menu';
    } else {
      this.menuGroup.classList.add('header__menuGroup_expanded');
      this.burger.textContent = 'close';
    }
  }

  subMenuCallback = (event) => {
    const subMenu = event.target.closest('.js-header__subMenu');
    if (subMenu.classList.contains('header__subMenu_expanded')) {
      subMenu.classList.remove('header__subMenu_expanded');
    } else {
      subMenu.classList.add('header__subMenu_expanded');
    }
  };

  callbackOnDocument(event) {
    const anybodyIsExpanded = document.querySelectorAll(
      '.header__subMenu_expanded'
    );
    if (anybodyIsExpanded) {
      const subMenus = this.subMenus;
      const currentSubMenu = event.target.closest('.header__dropdown');
      const subMenuToggleIcon = event.target.closest('.js-header__subMenuIcon');
      if (!currentSubMenu && !subMenuToggleIcon) {
        subMenus.forEach((subMenu) =>
          subMenu.classList.remove('header__subMenu_expanded')
        );
      }
    }
  }
}

const headers = document.querySelectorAll('.js-header');
headers.forEach((header) => new Header(header));
