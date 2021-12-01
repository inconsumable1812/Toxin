import { boundMethod } from 'autobind-decorator';

const PREV_BUTTON_CLASS = 'js-image-slider__btn-prev';
const NEXT_BUTTON_CLASS = 'js-image-slider__btn-next';
const SLIDE_CLASS = 'js-image-slider__slide';
const DOT_CLASS = 'js-image-slider__dot';
const ACTIVE_SLIDE_CLASS = 'image-slider__slide_active';
const ACTIVE_DOT_CLASS = 'image-slider__dot_active';
const INTERVAL_CLASS = 'js-image-slider__interval';

export default class ImageSlider {
  constructor(slider) {
    this.slider = slider;
    this.prev = null;
    this.next = null;
    this.slides = null;
    this.dots = null;
    this.index = 0;

    this.init();
  }

  findPrevButton() {
    this.prev = this.slider.querySelector(`.${PREV_BUTTON_CLASS}`);
  }

  findNextButton() {
    this.next = this.slider.querySelector(`.${NEXT_BUTTON_CLASS}`);
  }

  findSlides() {
    this.slides = this.slider.querySelectorAll(`.${SLIDE_CLASS}`);
  }

  findDots() {
    this.dots = this.slider.querySelectorAll(`.${DOT_CLASS}`);
  }

  init() {
    this.findPrevButton();
    this.findNextButton();
    this.findSlides();
    this.findDots();

    this.initFirstSlide();
    this.bindEventListeners();
    this.isSetInterval();
  }

  initFirstSlide() {
    this.slides[this.index].classList.add(ACTIVE_SLIDE_CLASS);
    this.dots[this.index].classList.add(ACTIVE_DOT_CLASS);
  }

  initActiveSlide(index) {
    this.slides.forEach((slide) => slide.classList.remove(ACTIVE_SLIDE_CLASS));
    this.slides[index].classList.add(ACTIVE_SLIDE_CLASS);
  }

  initActiveDot(index) {
    this.dots.forEach((dot) => dot.classList.remove(ACTIVE_DOT_CLASS));
    this.dots[index].classList.add(ACTIVE_DOT_CLASS);
  }

  prepareCurrentSlide(index) {
    this.initActiveSlide(index);
    this.initActiveDot(index);
  }

  isSetInterval() {
    if (this.slider.classList.contains(INTERVAL_CLASS)) {
      setInterval(this.nextButtonCallback, 5000);
    }
  }

  bindEventListeners() {
    this.next.addEventListener('click', this.nextButtonCallback);
    this.prev.addEventListener('click', this.prevButtonCallback);
    this.dots.forEach((dot, index) =>
      dot.addEventListener('click', this.makeDotCallback(index))
    );
  }

  makeDotCallback = (index) => () => {
    this.dotCallback(index);
  };

  @boundMethod
  nextButtonCallback() {
    if (this.index === this.slides.length - 1) {
      this.index = 0;
      this.prepareCurrentSlide(this.index);
    } else {
      this.index += 1;
      this.prepareCurrentSlide(this.index);
    }
  }

  @boundMethod
  prevButtonCallback() {
    if (this.index === 0) {
      this.index = this.slides.length - 1;
      this.prepareCurrentSlide(this.index);
    } else {
      this.index -= 1;
      this.prepareCurrentSlide(this.index);
    }
  }

  @boundMethod
  dotCallback(index) {
    this.prepareCurrentSlide(index);
  }
}
