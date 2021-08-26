const searchBtn = document.querySelector('.btn')
const searchBox = document.querySelector('.search-box')
const searchSection = document.querySelector('.search-section')

searchBtn.addEventListener('click', () => {
  searchSection.classList.toggle('show-search-box')
  searchBox.focus()
})