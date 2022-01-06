// --------- element node selection -------- //
const leftBox = document.querySelector('.left')
const rightBox = document.querySelector('.right')
const container = document.querySelector('.container')

// --------- add Event Listener to the split-boxes -------- //
leftBox.addEventListener('mouseenter', event => {
  leftBox.classList.remove('inactive')
  leftBox.classList.add('mouse-hover')

  rightBox.classList.add('inactive')
  rightBox.classList.remove('mouse-hover')
})

rightBox.addEventListener('mouseenter', event => {
  rightBox.classList.remove('inactive')
  rightBox.classList.add('mouse-hover')

  leftBox.classList.add('inactive')
  leftBox.classList.remove('mouse-hover')
})

// --------- add Event Listener to the container -------- //
container.addEventListener('mouseleave', event => {
  const boxes = document.querySelectorAll('.split-box')
  boxes.forEach(box => {
    box.classList.remove('inactive')
    box.classList.remove('mouse-hover')
  })
})
