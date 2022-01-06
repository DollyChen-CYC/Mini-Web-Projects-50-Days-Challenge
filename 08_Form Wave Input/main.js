const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
  let rawHTML = label.innerHTML
    .split('')
    .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
    .join('')
  label.innerHTML = rawHTML
})