class ImageSlider {
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
    this.prev = this.slider.querySelector('.js-imageSlider__btn-prev');
  }

  findNextButton() {
    this.next = this.slider.querySelector('.js-imageSlider__btn-next');
  }

  findSlides() {
    this.slides = this.slider.querySelectorAll('.js-imageSlider__slide');
  }

  findDots() {
    this.dots = this.slider.querySelectorAll('.js-imageSlider__dot');
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
    this.slides[this.index].classList.add('imageSlider__slide_active');
    this.dots[this.index].classList.add('imageSlider__dot_active');
  }

  initActiveSlide(index) {
    this.slides.forEach((slide) =>
      slide.classList.remove('imageSlider__slide_active')
    );
    this.slides[index].classList.add('imageSlider__slide_active');
  }

  initActiveDot(index) {
    this.dots.forEach((dot) => dot.classList.remove('imageSlider__dot_active'));
    this.dots[index].classList.add('imageSlider__dot_active');
  }

  prepareCurrentSlide(index) {
    this.initActiveSlide(index);
    this.initActiveDot(index);
  }

  isSetInterval() {
    if (this.slider.classList.contains('imageSlider__interval')) {
      setInterval(this.nextButtonCallback.bind(this), 5000);
    }
  }

  bindEventListeners() {
    this.next.addEventListener('click', this.nextButtonCallback.bind(this));
    this.prev.addEventListener('click', this.prevButtonCallback.bind(this));
    this.dots.forEach((dot, index) =>
      dot.addEventListener('click', this.dotCallback.bind(this, index))
    );
  }

  nextButtonCallback() {
    if (this.index === this.slides.length - 1) {
      this.index = 0;
      this.prepareCurrentSlide(this.index);
    } else {
      this.index += 1;
      this.prepareCurrentSlide(this.index);
    }
  }

  prevButtonCallback() {
    if (this.index === 0) {
      this.index = this.slides.length - 1;
      this.prepareCurrentSlide(this.index);
    } else {
      this.index -= 1;
      this.prepareCurrentSlide(this.index);
    }
  }

  dotCallback(index) {
    this.prepareCurrentSlide(index);
  }
}

const sliders = document.querySelectorAll('.js-imageSlider');
sliders.forEach((slide) => new ImageSlider(slide));
