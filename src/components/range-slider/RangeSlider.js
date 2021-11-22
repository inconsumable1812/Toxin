import noUiSlider from 'nouislider';
import { boundMethod } from 'autobind-decorator';

const SLIDER = 'js-range-slider__slider';
const MIN_INPUT = 'js-range-slider__input_min';
const MAX_INPUT = 'range-slider__input_max';
export default class RangeSlider {
  constructor(root) {
    this.root = root;
    this.sliderContainer = null;
    this.minInput = null;
    this.maxInput = null;
    this.slider = null;

    this.init();
  }

  findSliderContainer() {
    this.sliderContainer = this.root.querySelector('.' + SLIDER);
  }

  findMinInput() {
    this.minInput = this.root.querySelector('.' + MIN_INPUT);
  }

  findMaxInput() {
    this.maxInput = this.root.querySelector('.' + MAX_INPUT);
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
        max: +this.maxInput.value,
      },
    });
  }

  bindEventListeners() {
    this.sliderContainer.noUiSlider.on('update', this.updateCallback);
    this.minInput.addEventListener('change', this.minInputCallback);
    this.maxInput.addEventListener('change', this.maxInputCallback);
  }

  @boundMethod
  minInputCallback() {
    const arrayOfValue = this.minInput.value.split('');
    const arrayOfValueNumber = arrayOfValue.filter((value) =>
      value.match(/[0-9]/)
    );
    this.sliderContainer.noUiSlider.set([arrayOfValueNumber.join(''), null]);
  }

  @boundMethod
  maxInputCallback() {
    const arrayOfValue = this.maxInput.value.split('');
    const arrayOfValueNumber = arrayOfValue.filter((value) =>
      value.match(/[0-9]/)
    );
    this.sliderContainer.noUiSlider.set([null, arrayOfValueNumber.join('')]);
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
