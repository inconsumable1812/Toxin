import $ from 'jquery';
import 'paginationjs';

const CURRENT_PAGE = 'js-current-page';
const FROM = 'js-pagination__from';
const TO = 'js-pagination__to';

export default class Pagination {
  constructor(paginationContainer) {
    this.$paginationContainer = $(paginationContainer);

    this.init();
  }

  init() {
    this.$paginationContainer.pagination({
      dataSource: (done) => {
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
    <span class="js-pagination__to">12</span> из 100+ вариантов аренды <span class="${CURRENT_PAGE}"><%= currentPage %></span>`,
    });

    this.bindEventListeners();
  }

  // eslint-disable-next-line class-methods-use-this
  observerCallback() {
    const currentPage = document.querySelector(`.${CURRENT_PAGE}`).textContent;
    const currentPageNumber = +currentPage;
    const textFrom = document.querySelector(`.${FROM}`);
    let textFromNumber = +textFrom.textContent;
    const textTo = document.querySelector(`.${TO}`);
    let textToNumber = +textTo.textContent;
    textFromNumber = currentPageNumber * 12 - 11;
    textToNumber = currentPageNumber * 12;

    if (textToNumber !== +textTo.textContent) {
      textTo.textContent = `${textToNumber}`;
    }
    if (textFromNumber !== +textFrom.textContent) {
      textFrom.textContent = `${textFromNumber}`;
    }
  }

  bindEventListeners() {
    const config = {
      childList: true,
      subtree: true,
    };

    const observer = new MutationObserver(this.observerCallback);
    observer.observe(this.$paginationContainer[0], config);
  }
}
