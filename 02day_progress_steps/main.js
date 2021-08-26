////// select nodes //////
const buttons = document.querySelector('.btn-section')
const circles = document.querySelectorAll('.circle')
const progressLine = document.querySelector('.progress-line')
const btnNext = document.querySelector('#next')
const btnPrevious = document.querySelector('#previous')

let currentStep = 1

////// addEventListener //////
buttons.addEventListener('click', event => {
  const item = event.target

  if (item.id === 'next' && currentStep < circles.length) {
    currentStep++
    updateProgressStyle()
  } else if (item.id === 'previous' && currentStep > 1) {
    currentStep--
    updateProgressStyle()
  }
})

///// combine all functions related to style update /////
function updateProgressStyle () {
  updateCircleStyles()
  updateProgressLine()
  updateButtonStatus()
}

///// active/disable circle styles that showing the progress /////
function updateCircleStyles () {
  circles.forEach((circle, index) => {
    if (index < currentStep) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
}

////  push/withdraw the progress line ////
function updateProgressLine () {
  progressLine.style.width = (currentStep - 1) / (circles.length - 1) * 100 + '%'
}

///// active/disable buttons /////
function updateButtonStatus () {
  if (currentStep === 1) {
    btnPrevious.disabled = true
  } else if (currentStep === circles.length) {
    //btnNext.innerText = '送出'
    //btnNext.style.backgroundColor = 'rgb(40, 160, 255)'
    btnNext.classList.add('submit')
  } else {
    btnPrevious.disabled = false
    btnNext.disabled = false
    btnNext.classList.remove('submit')
  }
}
