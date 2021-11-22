import Pagination from './Pagination';

const paginations = document.querySelectorAll('.js-pagination');
paginations.forEach((pagination) => new Pagination(pagination));
