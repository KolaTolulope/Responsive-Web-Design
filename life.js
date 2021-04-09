const menu = document.querySelector('.hambuger')
const nav = document.querySelector('.nav-menu')

menu.addEventListener('click', (e) => {
  nav.classList.toggle('open')
  e.stopPropagation()
})
document.body.addEventListener('click', (e) => {
  nav.classList.remove('open')
  e.stopPropagation()
})
