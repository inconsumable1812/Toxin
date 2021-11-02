/* eslint-disable func-names */
import $ from 'jquery';
import 'paginationjs';

function observerCallback() {
  const currentPage = +document.querySelector('.js-currentPage').textContent;
  const textFrom = document.querySelector('.js-pagination__from');
  let textFromNumber = +textFrom.textContent;
  const textTo = document.querySelector('.js-pagination__to');
  let textToNumber = +textTo.textContent;
  textFromNumber = currentPage * 12 - 11;
  textToNumber = currentPage * 12;

  if (textToNumber !== +textTo.textContent) {
    textTo.textContent = `${textToNumber}`;
  }
  if (textFromNumber !== +textFrom.textContent) {
    textFrom.textContent = `${textFromNumber}`;
  }
}

class Pagination {
  constructor(paginationContainer) {
    this.$paginationContainer = $(paginationContainer);

    this.init();
  }

  init() {
    this.$paginationContainer.pagination({
      dataSource: function (done) {
        var result = [];
        for (let i = 1; i < 180; i += 1) {
          result.push(i);
        }
        done(result);
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
    });

    this.bindEventListeners();
  }

  bindEventListeners() {
    const config = {
      childList: true,
      subtree: true
    };

    const observer = new MutationObserver(observerCallback);
    observer.observe(this.$paginationContainer[0], config);
  }
}

const paginations = document.querySelectorAll('.js-pagination');
paginations.forEach((pagination) => new Pagination(pagination));
