import $ from 'jquery';
import PaginationLib from '../../libs/pagination/PaginationLib';

const CURRENT_PAGE = 'js-current-page';
const FROM = 'js-pagination__from';
const TO = 'js-pagination__to';
const countOnPage = 12;

export default class Pagination {
  constructor(paginationContainer) {
    this.$paginationContainer = $(paginationContainer);

    this.init();
  }

  init() {
    this.paginationInstance = new PaginationLib(
      this.$paginationContainer,
      CURRENT_PAGE
    );

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
    textFromNumber = currentPageNumber * countOnPage - (countOnPage - 1);
    textToNumber = currentPageNumber * countOnPage;

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
