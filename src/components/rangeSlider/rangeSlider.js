/* eslint-disable func-names */
import noUiSlider from 'nouislider';

class RangeSlider {
  constructor(root) {
    this.root = root;
    this.sliderContainer = null;
    this.minInput = null;
    this.maxInput = null;
    this.slider = null;

    this.init();
  }

  findSliderContainer() {
    this.sliderContainer = this.root.querySelector('.rangeSlider__slider');
  }

  findMinInput() {
    this.minInput = this.root.querySelector('.rangeSlider__input_min');
  }

  findMaxInput() {
    this.maxInput = this.root.querySelector('.rangeSlider__input_max');
  }

  init() {
    this.findSliderContainer();
    this.findMinInput();
    this.findMaxInput();

    this.creatSlider();
    this.bindEventListeners();
  }

  creatSlider() {
    noUiSlider.create(this.sliderContainer, {
      start: [5000, 10000],
      connect: true,
      range: {
        min: +this.minInput.value,
        max: +this.maxInput.value
      }
    });
  }

  bindEventListeners() {
    this.sliderContainer.noUiSlider.on('update', this.updateCallback.bind(this));
    this.minInput.addEventListener('change', this.minInputCallback.bind(this));
    this.maxInput.addEventListener('change', this.maxInputCallback.bind(this));
  }

  minInputCallback() {
    const arrayOfValue = this.minInput.value.split('');
    const arrayOfValueNumber = arrayOfValue.filter((value) => value.match(/[0-9]/));
    this.sliderContainer.noUiSlider.set([arrayOfValueNumber.join(''), null]);
  }

  maxInputCallback() {
    const arrayOfValue = this.maxInput.value.split('');
    const arrayOfValueNumber = arrayOfValue.filter((value) => value.match(/[0-9]/));
    this.sliderContainer.noUiSlider.set([null, arrayOfValueNumber.join('')]);
  }

  updateCallback(values, handle) {
    let value = values[handle];

    if (handle === 1) {
      this.maxInput.value = `${Math.round(value).toLocaleString('ru-RU')}₽`;
    } else {
      this.minInput.value = `${Math.round(value).toLocaleString('ru-RU')}₽`;
    }
  }
}

const rangeSliders = document.querySelectorAll('.rangeSlider');
rangeSliders.forEach((slider) => new RangeSlider(slider));
