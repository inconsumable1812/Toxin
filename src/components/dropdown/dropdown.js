/*const buttonsMinus = document.querySelectorAll(
  '.dropdown__counter-buttons_type_minus'
)
const buttonsPlus = document.querySelectorAll(
  '.dropdown__counter-buttons_type_plus'
)

for (const buttonMinus of buttonsMinus) {
  buttonMinus.addEventListener('click', () => console.log('минус'))
}*/

const counterButtons = document.querySelectorAll('.dropdown__counter-buttons')
for (const counterButton of counterButtons) {
  const buttonsMinus = counterButton.querySelector(
    '.dropdown__counter-buttons_type_minus'
  )
  const buttonsPlus = counterButton.querySelector(
    '.dropdown__counter-buttons_type_plus'
  )
  const counter = counterButton.querySelector('.dropdown__counter')
  console.log(counter)
}

function solutionCount() {}
