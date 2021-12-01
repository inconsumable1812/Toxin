import 'paginationjs';

const ALL_ITEMS = 180;

export default class PaginationLib {
  constructor($container, CURRENT_PAGE) {
    this.$container = $container;
    this.CURRENT_PAGE = CURRENT_PAGE;

    this.createPagination();
  }

  createPagination() {
    this.$container.pagination({
      dataSource: (done) => {
        const arrayOfItems = new Array(ALL_ITEMS).fill('').map((_, i) => i + 1);
        done(arrayOfItems);
      },
      pageSize: 12,
      pageRange: 1,
      autoHidePrevious: true,
      autoHideNext: true,
      showNavigator: true,
      prevText: '<span class="pagination__arrow-prev material-icons"></span>',
      nextText: '<span class="pagination__arrow-next material-icons"></span>',
      formatNavigator: `<span class="js-pagination__from"><%= currentPage %></span> &ndash; 
    <span class="js-pagination__to">12</span> из 100+ вариантов аренды <span class="${this.CURRENT_PAGE}"><%= currentPage %></span>`,
    });
  }
}
