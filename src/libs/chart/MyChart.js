import Chart from 'chart.js/auto';

function setBackgroundColor(currentIndex) {
  switch (currentIndex) {
    case 0:
      return 'linear-gradient(180deg, rgba(144, 144, 144, 1), rgba(61, 73, 117, 1))';
    case 1:
      return 'linear-gradient(180deg,  rgba(188, 156, 255, 1), rgba(139, 164, 249, 1))';
    case 2:
      return 'linear-gradient(180deg,  rgba(111, 207, 151, 1), rgba(102, 210, 234, 1))';
    case 3:
      return 'linear-gradient(180deg,  rgba(255, 227, 156, 1), rgba(255, 186, 156, 1))';
    default:
      return 'none';
  }
}

export default class MyChart {
  constructor(
    ctx,
    dataNumbers,
    gradientDisappoint,
    gradientAcceptable,
    gradientGood,
    gradientGreat
  ) {
    this.ctx = ctx;
    this.dataNumbers = dataNumbers;
    this.gradientDisappoint = gradientDisappoint;
    this.gradientAcceptable = gradientAcceptable;
    this.gradientGood = gradientGood;
    this.gradientGreat = gradientGreat;

    this.createChart();
  }

  createChart() {
    this.myChart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        labels: ['Разочарован', 'Удовлетворительно', 'Хорошо', 'Великолепно'],
        datasets: [
          {
            label: '# of Votes',
            data: this.dataNumbers,
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
            borderWidth: [2, 2, 2, 2],
            hoverBorderWidth: 4,
            hoverBorderColor: [
              this.gradientDisappoint,
              this.gradientAcceptable,
              this.gradientGood,
              this.gradientGreat,
            ],
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
            bottom: -1,
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
            onHover: (event, legendItem, legend) => {
              // eslint-disable-next-line no-underscore-dangle
              const data = legend.chart.config._config.data.datasets[0].data;
              const currentIndex = legendItem.index;
              const chartID = legend.chart.id;
              const HTMLNumbers =
                document.querySelectorAll('.js-chart__number');
              const HTMLNumbersContainers =
                document.querySelectorAll('.js-chart__sum');
              const currentHTMLNumber = HTMLNumbers[chartID];
              const currentNumber = data[currentIndex];
              const currentHTMLNumberContainer = HTMLNumbersContainers[chartID];

              currentHTMLNumberContainer.style.color = 'transparent';
              currentHTMLNumberContainer.style.backgroundImage =
                setBackgroundColor(currentIndex);
              currentHTMLNumber.textContent = currentNumber;
              document.body.style.cursor = 'pointer';
            },
            onClick: false,
            onLeave: (event, legendItem, legend) => {
              // eslint-disable-next-line no-underscore-dangle
              const data = legend.chart.config._config.data.datasets[0].data;
              const sum = data.reduce((a, b) => {
                return a + b;
              });
              const chartID = legend.chart.id;
              const HTMLNumbers =
                document.querySelectorAll('.js-chart__number');
              const HTMLNumbersContainers =
                document.querySelectorAll('.js-chart__sum');
              const currentHTMLNumber = HTMLNumbers[chartID];
              const currentHTMLNumberContainer = HTMLNumbersContainers[chartID];

              currentHTMLNumberContainer.style.color = '#bc9cff';
              currentHTMLNumberContainer.style.backgroundImage = 'none';
              currentHTMLNumber.textContent = sum;
              document.body.style.cursor = 'default';
            },
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

    this.myChart.canvas.parentNode.style.height = '132px';
    setTimeout(() => {
      this.myChart.canvas.parentNode.style.width = '345px';
    }, 100);
  }
}
