/* eslint-disable func-names */
import $ from 'jquery'
import 'paginationjs'

$(function () {
  $('#pagination-container').pagination({
    dataSource: function (done) {
      var result = []
      for (let i = 1; i < 180; i += 1) {
        result.push(i)
      }
      done(result)
    },
    pageSize: 12,
    pageRange: 1,
    autoHidePrevious: true,
    autoHideNext: true,
    showNavigator: true,
    prevText: '<span class="pagination__arrow-prev material-icons"></span>',
    nextText: '<span class="pagination__arrow-next material-icons"></span>',
    formatNavigator: `<span class="js-pagination__from"><%= currentPage %></span> &ndash; 
  <span class="js-pagination__to">12</span> из 100+ вариантов аренды <span class="js-currentPage"><%= currentPage %></span>`
  })

  // Выбираем целевой элемент
  let target = document.querySelector('.pagination')

  // Конфигурация observer (за какими изменениями наблюдать)
  const config = {
    attributes: true,
    childList: true,
    subtree: true
  }

  // Колбэк-функция при срабатывании мутации
  const callback = function (mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const currentPage = +document.querySelector('.js-currentPage').textContent
        const textFrom = document.querySelector('.js-pagination__from')
        let textFromNumber = +textFrom.textContent
        const textTo = document.querySelector('.js-pagination__to')
        let textToNumber = +textTo.textContent
        textFromNumber = currentPage * 12 - 11
        textToNumber = currentPage * 12

        if (textToNumber !== +textTo.textContent) {
          textTo.textContent = `${textToNumber}`
        }
        if (textFromNumber !== +textFrom.textContent) {
          textFrom.textContent = `${textFromNumber}`
        }
      }
    }
  }

  // Создаём экземпляр наблюдателя с указанной функцией колбэка
  const observer = new MutationObserver(callback)

  // Начинаем наблюдение за настроенными изменениями целевого элемента
  observer.observe(target, config)
})
