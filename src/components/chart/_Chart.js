/* eslint-disable lines-between-class-members */
import Chart from 'chart.js/auto';

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
    this.myChart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        labels: ['Разочарован', 'Удовлетворительно', 'Хорошо', 'Великолепно'],
        datasets: [
          {
            label: '# of Votes',
            data: dataNumbers,
            backgroundColor: [
              this.gradientDisappoint,
              this.gradientAcceptable,
              this.gradientGood,
              this.gradientGreat,
            ],
            borderColor: [
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
            ],
            borderWidth: 2,
            hoverOffset: 0,
          },
        ],
      },
      options: {
        cutout: '89%',
        radius: '61',
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: -11,
            right: 0,
            top: 0,
            bottom: -8,
          },
        },
        plugins: {
          tooltip: {
            enabled: true,
          },
          legend: {
            position: 'right',
            align: 'end',
            reverse: true,
            labels: {
              color: 'rgba(31, 32, 65, 0,75)',
              usePointStyle: true,
              boxWidth: 8,
              font: {
                size: 14,
                lineHeight: 24,
                family: 'Montserrat',
              },
            },
          },
        },
      },
    });

    this.myChart.canvas.parentNode.style.height = '121px';
    setTimeout(() => {
      this.myChart.canvas.parentNode.style.width = '345px';
    }, 100);
  }
}
