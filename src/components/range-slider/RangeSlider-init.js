import RangeSlider from './RangeSlider';

const rangeSliders = document.querySelectorAll('.js-range-slider');
rangeSliders.forEach((slider) => new RangeSlider(slider));
