const sliders = document.querySelectorAll('.imageSlider')

for (slider of sliders) {
  const prev = slider.querySelector('.imageSlider__btn-prev')
  const next = slider.querySelector('.imageSlider__btn-next')
  const slides = slider.querySelectorAll('.imageSlider__slide')
  const dots = slider.querySelectorAll('.imageSlider__dot')

  let index = 0
  let isOneStart = true

  if (isOneStart) {
    slides[index].classList.add('imageSlider__slide_active')
    dots[index].classList.add('imageSlider__dot_active')
    isOneStart = false
  }

  const activeSlide = (n) => {
    for (slide of slides) {
      slide.classList.remove('imageSlider__slide_active')
    }
    slides[n].classList.add('imageSlider__slide_active')
  }

  const activeDot = (n) => {
    for (dot of dots) {
      dot.classList.remove('imageSlider__dot_active')
    }
    dots[n].classList.add('imageSlider__dot_active')
  }

  const prepareCurrentSlide = (ind) => {
    activeSlide(ind)
    activeDot(ind)
  }

  const nextSlide = () => {
    if (index === slides.length - 1) {
      index = 0
      prepareCurrentSlide(index)
    } else {
      index++
      prepareCurrentSlide(index)
    }
  }

  const prevSlide = () => {
    if (index === 0) {
      index = slides.length - 1
      prepareCurrentSlide(index)
    } else {
      index--
      prepareCurrentSlide(index)
    }
  }

  dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
      index = indexDot
      prepareCurrentSlide(index)
    })
  })

  next.addEventListener('click', nextSlide)
  prev.addEventListener('click', prevSlide)
}
