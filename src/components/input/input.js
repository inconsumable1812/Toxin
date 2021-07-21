import IMask from 'imask'

/*const TextInput = function TextInput($element, options = {}) {
  this.init($element, options)
}

TextInput.prototype.init = function init($element, options) {
  this.$element = $element

  this.isData = Boolean(options.isData)
  if (this.isData === true) {
    this.createIMaskInstance()
  }
}

TextInput.prototype.createIMaskInstance = function createIMaskInstance() {
  this.IMaskInstance = IMask(this.$element.find('input').get(0), {
    mask: Date,
    lazy: false,
    overwrite: true,
    autofix: true,
    blocks: {
      d: {
        mask: IMask.MaskedRange,
        placeholderChar: 'Д',
        from: 1,
        to: 31,
        maxLength: 2,
      },
      m: {
        mask: IMask.MaskedRange,
        placeholderChar: 'М',
        from: 1,
        to: 12,
        maxLength: 2,
      },
      Y: {
        mask: IMask.MaskedRange,
        placeholderChar: 'Г',
        from: 1900,
        to: 2999,
        maxLength: 4,
      },
    },
  })
}

export default TextInput*/

var dateMask = IMask(document.getElementsByClassName('input-data'), {
  mask: Date,
  lazy: false,
  overwrite: true,
  autofix: true,
  blocks: {
    d: {
      mask: IMask.MaskedRange,
      placeholderChar: 'd',
      from: 1,
      to: 31,
      maxLength: 2,
    },
    m: {
      mask: IMask.MaskedRange,
      placeholderChar: 'm',
      from: 1,
      to: 12,
      maxLength: 2,
    },
    Y: {
      mask: IMask.MaskedRange,
      placeholderChar: 'y',
      from: 1900,
      to: 2999,
      maxLength: 4,
    },
  },
})
