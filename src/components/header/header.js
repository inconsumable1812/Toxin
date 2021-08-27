const headers = document.querySelectorAll('.header')

for (header of headers) {
  const burger = header.querySelector('.header__burger')
  const menuGroup = header.querySelector('.header__menuGroup')
  const subMenus = header.querySelectorAll('.header__subMenu')

  for (subMenu of subMenus) {
    const subMenuGroup = subMenu.querySelector('.header__dropdown')
    const subMenuIcon = subMenu.querySelector('.header__subMenuIcon')

    subMenuIcon.addEventListener('click', () => {
      if (!subMenuGroup.classList.contains('header__dropdown_expanded')) {
        subMenuGroup.classList.add('header__dropdown_expanded')
        subMenuIcon.classList.add('header__subMenuIcon_expanded')
      } else {
        subMenuGroup.classList.remove('header__dropdown_expanded')
        subMenuIcon.classList.remove('header__subMenuIcon_expanded')
      }
    })
  }

  burger.addEventListener('click', () => {
    if (!menuGroup.classList.contains('header__menuGroup_expanded')) {
      menuGroup.classList.add('header__menuGroup_expanded')
      burger.innerHTML = 'close'
    } else {
      menuGroup.classList.remove('header__menuGroup_expanded')
      burger.innerHTML = 'menu'
    }
  })
}
