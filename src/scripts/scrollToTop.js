export default function () {
  const arrow = document.querySelector('.scroll')

  window.addEventListener('scroll', () => {
    let height = window.innerHeight / 2
    if (window.scrollY >= height) {
      arrow.classList.add('scroll-display')
    } else if (window.scrollY < height) {
      arrow.classList.remove('scroll-display')
    }
  })

  arrow.addEventListener('click', () => {
    window.scrollTo(0, 0)
  })

}