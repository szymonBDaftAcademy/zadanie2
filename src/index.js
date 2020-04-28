import './styles/style.sass'
import scroll from './scripts/scrollToTop'
import expand from './scripts/allProducts'
import year from './scripts/currentYear'

document.addEventListener('DOMContentLoaded', () => {
  scroll()
  expand()
  year()
})