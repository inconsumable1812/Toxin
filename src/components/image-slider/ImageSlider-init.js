import ImageSlider from './ImageSlider';

const sliders = document.querySelectorAll('.js-image-slider');
sliders.forEach((slider) => new ImageSlider(slider));
