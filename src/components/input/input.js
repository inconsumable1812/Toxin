import IMask from 'imask';

const inputElement = document.querySelector('.input-data'); // ищем наш  input
const maskOptions = {
  // создаем объект параметров
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
      maxLength: 2
    },
    m: {
      mask: IMask.MaskedRange,
      placeholderChar: 'М',
      from: 1,
      to: 12,
      maxLength: 2
    },
    Y: {
      mask: IMask.MaskedRange,
      placeholderChar: 'Г',
      from: 1900,
      to: 2999,
      maxLength: 4
    }
  }
};
IMask(inputElement, maskOptions); // запускаем плагин с переданными параметрами
