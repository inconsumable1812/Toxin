import 'paginationjs';

export default class PaginationLib {
  constructor($container, CURRENT_PAGE) {
    this.$container = $container;
    this.CURRENT_PAGE = CURRENT_PAGE;

    this.createPagination();
  }

  createPagination() {
    this.$container.pagination({
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
    <span class="js-pagination__to">12</span> из 100+ вариантов аренды <span class="${this.CURRENT_PAGE}"><%= currentPage %></span>`,
    });
  }
}
