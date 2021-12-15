import { boundMethod } from 'autobind-decorator';

import Slider from '../../libs/slider/Slider';

const SLIDER = 'js-range-slider__slider';
const MIN_INPUT = 'js-range-slider__input_min';
const MAX_INPUT = 'js-range-slider__input_max';

export default class RangeSlider {
  sliderContainer = null;

  minInput = null;

  maxInput = null;

  slider = null;

  constructor(root) {
    this.root = root;

    this.init();
  }

  findSliderContainer() {
    this.sliderContainer = this.root.querySelector(`.${SLIDER}`);
  }

  findMinInput() {
    this.minInput = this.root.querySelector(`.${MIN_INPUT}`);
  }

  findMaxInput() {
    this.maxInput = this.root.querySelector(`.${MAX_INPUT}`);
  }

  init() {
    this.findSliderContainer();
    this.findMinInput();
    this.findMaxInput();

    this.creatSlider();
    this.bindEventListeners();
  }

  creatSlider() {
    this.sliderInstance = new Slider({
      sliderContainer: this.sliderContainer,
      minInput: this.minInput,
      maxInput: this.maxInput,
    });
  }

  bindEventListeners() {
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
}
