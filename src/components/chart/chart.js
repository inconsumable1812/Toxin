import Chart from 'chart.js/auto'

var ctx = document.querySelector('.chart__item').getContext('2d')
var gradientGreat = ctx.createLinearGradient(0, 0, 0, 135)
var gradientGood = ctx.createLinearGradient(0, 0, 0, 130)
var gradientAcceptable = ctx.createLinearGradient(0, 0, 0, 130)
var gradientDisappoint = ctx.createLinearGradient(0, 0, 0, 135)
let dataNumber = [0, 65, 65, 130]

let dataSum = 0
const sumHTML = document.querySelector('.chart__number')

for (let i = 0; i < dataNumber.length; i++) {
  dataSum += dataNumber[i]
}
sumHTML.innerHTML = dataSum

gradientGreat.addColorStop(0.2, 'rgba(255, 227, 156, 1)')
gradientGreat.addColorStop(1, 'rgba(255, 186, 156, 1)')
gradientGood.addColorStop(0.5, 'rgba(111, 207, 151, 1)')
gradientGood.addColorStop(1, 'rgba(102, 210, 234, 1)')
gradientAcceptable.addColorStop(0.5, 'rgba(188, 156, 255, 1)')
gradientAcceptable.addColorStop(1, 'rgba(139, 164, 249, 1)')
gradientDisappoint.addColorStop(0.5, 'rgba(144, 144, 144, 1)')
gradientDisappoint.addColorStop(1, 'rgba(61, 73, 117, 1)')

var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Разочарован', 'Удовлетворительно', 'Хорошо', 'Великолепно'],
    datasets: [
      {
        label: '# of Votes',
        data: dataNumber,
        backgroundColor: [gradientDisappoint, gradientAcceptable, gradientGood, gradientGreat],
        borderColor: ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 1)'],
        borderWidth: 2,
        hoverOffset: 0,
      },
    ],
  },
  options: {
    cutout: '90%',
    //responsive: true,
    radius: '60',
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: -40,
        right: 0,
        top: 0,
        bottom: -8,
      },
    },
    plugins: {
      legend: {
        position: 'right',
        align: 'end',
        reverse: true,
        labels: {
          color: 'rgba(31, 32, 65, 0,75)',
          usePointStyle: true,
          boxWidth: 8,
          /*backdropPadding: {
            x: 0,
            y: 0,
          },*/
          font: {
            size: 14,
            lineHeight: 24,
            family: 'Montserrat',
          },
        },
      },
    },
  },
})
