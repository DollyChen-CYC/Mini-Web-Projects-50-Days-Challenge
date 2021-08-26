const container = document.querySelector('.container')
const panels = document.querySelectorAll('.panel')

container.addEventListener('click', event => {
  const targetItem = event.target

  if (targetItem.classList.contains("panel")) {
    removeActiveClass()
    targetItem.classList.add('active')
  }
})

function removeActiveClass () {
  panels.forEach(panel => panel.classList.remove('active'))
}

