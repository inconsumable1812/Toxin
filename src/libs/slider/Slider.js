import noUiSlider from 'nouislider';
import { boundMethod } from 'autobind-decorator';

export default class Slider {
  constructor(sliderContainer, minInput, maxInput) {
    this.sliderContainer = sliderContainer;
    this.minInput = minInput;
    this.maxInput = maxInput;

    this.init();
  }

  init() {
    this.createSlider();
    this.bindEventListeners();
  }

  createSlider() {
    noUiSlider.create(this.sliderContainer, {
      start: [5000, 10000],
      connect: true,
      range: {
        min: +this.minInput.value,
        max: +this.maxInput.value,
      },
    });
  }

  bindEventListeners() {
    this.sliderContainer.noUiSlider.on('update', this.updateCallback);
  }

  @boundMethod
  updateCallback(values, handle) {
    let value = values[handle];

    if (handle === 1) {
      this.maxInput.value = `${Math.round(value).toLocaleString('ru-RU')}₽`;
    } else {
      this.minInput.value = `${Math.round(value).toLocaleString('ru-RU')}₽`;
    }
  }
}
