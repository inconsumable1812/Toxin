import ChartElement from './_Chart';

const charts = document.querySelectorAll('.js-chart__item');
charts.forEach((chart) => new ChartElement(chart));
