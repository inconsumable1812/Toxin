import Chart from 'chart.js/auto';

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
