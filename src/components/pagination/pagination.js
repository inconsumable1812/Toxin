import $ from 'jquery'
import 'paginationjs'

$(function () {
  $('#pagination-container').pagination({
    dataSource: function (done) {
      var result = []
      for (var i = 1; i < 180; i++) {
        result.push(i)
      }
      done(result)
    },
    pageSize: 12,
    autoHidePrevious: true,
    autoHideNext: true,
    showNavigator: true,
    prevText: '<span class="pagination__arrow-prev"></span>',
    nextText: '<span class="pagination__arrow-next"></span>',
    formatNavigator: `<span class="js-pagination__from"><%= currentPage %></span> &ndash; 
  <span class="js-pagination__to">12</span> из 100+ вариантов аренды`,
  })

  // Выбираем целевой элемент
  var target = document.querySelector('.pagination')

  // Конфигурация observer (за какими изменениями наблюдать)
  const config = {
    //attributes: true,
    childList: true,
    subtree: true,
  }

  // Колбэк-функция при срабатывании мутации
  const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        //console.log('A child node has been added or removed.')
        const textFromNumber = +document.querySelector('.js-pagination__from').innerHTML
        const textTo = document.querySelector('.js-pagination__to')
        let textToNumber = +textTo.innerHTML
        textToNumber = textFromNumber * 12
        if (textToNumber !== +textTo.innerHTML) {
          textTo.innerHTML = `${textToNumber}`
        }
        console.log(textFromNumber)
        console.log(textToNumber)
      } else if (mutation.type === 'attributes') {
        //console.log('The ' + mutation.attributeName + ' attribute was modified.')
      }
    }
  }

  // Создаём экземпляр наблюдателя с указанной функцией колбэка
  const observer = new MutationObserver(callback)

  // Начинаем наблюдение за настроенными изменениями целевого элемента
  observer.observe(target, config)
})
