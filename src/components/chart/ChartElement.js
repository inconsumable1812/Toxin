/* eslint-disable lines-between-class-members */
import MyChart from '../../libs/chart/MyChart';

const dataNumbers = [0, 65, 65, 130];

export default class ChartElement {
  ctx = null;
  gradientGreat = null;
  gradientGood = null;
  gradientAcceptable = null;
  gradientDisappoint = null;
  AllNumberSumHTMLs = null;
  dataSum = 0;

  constructor(chartContainer) {
    this.chartContainer = chartContainer;

    this.init();
  }

  init() {
    this.ctx = this.chartContainer.getContext('2d');
    this.initGradient();
    this.sendDataToHTML();
    this.createChart();
  }

  initGradient() {
    this.gradientGreat = this.ctx.createLinearGradient(0, 0, 0, 135);
    this.gradientGood = this.ctx.createLinearGradient(0, 0, 0, 130);
    this.gradientAcceptable = this.ctx.createLinearGradient(0, 0, 0, 130);
    this.gradientDisappoint = this.ctx.createLinearGradient(0, 0, 0, 135);

    this.gradientGreat.addColorStop(0.2, 'rgba(255, 227, 156, 1)');
    this.gradientGreat.addColorStop(1, 'rgba(255, 186, 156, 1)');
    this.gradientGood.addColorStop(0.5, 'rgba(111, 207, 151, 1)');
    this.gradientGood.addColorStop(1, 'rgba(102, 210, 234, 1)');
    this.gradientAcceptable.addColorStop(0.5, 'rgba(188, 156, 255, 1)');
    this.gradientAcceptable.addColorStop(1, 'rgba(139, 164, 249, 1)');
    this.gradientDisappoint.addColorStop(0.5, 'rgba(144, 144, 144, 1)');
    this.gradientDisappoint.addColorStop(1, 'rgba(61, 73, 117, 1)');
  }

  findSumHTMLContainer() {
    this.AllNumberSumHTMLs = document.querySelectorAll('.js-chart__number');
  }

  sendDataToHTML() {
    this.findSumHTMLContainer();

    dataNumbers.forEach((number) => {
      this.dataSum += number;
    });

    this.AllNumberSumHTMLs.forEach((AllNumberSumHTML) => {
      // eslint-disable-next-line no-param-reassign
      AllNumberSumHTML.textContent = this.dataSum;
    });
  }

  createChart() {
    this.myChart = new MyChart(
      this.ctx,
      dataNumbers,
      this.gradientDisappoint,
      this.gradientAcceptable,
      this.gradientGood,
      this.gradientGreat
    );
  }
}
