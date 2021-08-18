import noUiSlider from 'nouislider'

const rangeSliders = document.querySelectorAll('.rangeSlider')

for (const rangeSlider of rangeSliders) {
  const slider = rangeSlider.querySelector('.rangeSlider__slider')
  const inputMin = rangeSlider.querySelector('.rangeSlider__input_min')
  const inputMax = rangeSlider.querySelector('.rangeSlider__input_max')
  const min = +inputMin.value
  const max = +inputMax.value

  noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    range: {
      min: min,
      max: max,
    },
  })

  slider.noUiSlider.on('update', function (values, handle) {
    var value = values[handle]

    console.log(value)

    if (handle) {
      inputMax.value = `${Math.round(value).toLocaleString('ru-RU')}₽`
    } else {
      inputMin.value = `${Math.round(value).toLocaleString('ru-RU')}₽`
    }
  })

  inputMin.addEventListener('change', function () {
    slider.noUiSlider.set([this.value, null])
  })

  inputMax.addEventListener('change', function () {
    slider.noUiSlider.set([null, this.value])
  })
}
