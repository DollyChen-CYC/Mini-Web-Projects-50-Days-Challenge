const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const headline = document.querySelector('.headline')

// 設定初始值
let load = 0

// 設定 trigger function 的 time interval
let makeItBlur = setInterval(blurring, 35)

// ---- Functions ---- //
function blurring() {
  load++
  if (load > 99) {
    clearInterval(makeItBlur)
  }
  // DOM manipulation
  loadText.innerText = `${load} %`
  loadText.style.opacity = scaleNumbers(load, 0, 100, 1, 0)
  headline.style.opacity = scaleNumbers(load, 0, 100, 0, 1)
  headline.style.fontSize = `${scaleNumbers(load, 0, 100, 0, 60)}px`
  bg.style.filter = `blur(${scaleNumbers(load, 0, 100, 5, 0 )}px)`
}

function scaleNumbers(num, inputMin, inputMax, outputMin, outputMax) {
  return ((num - inputMin) * (outputMax - outputMin)) / (inputMax - inputMin) + outputMin
}

