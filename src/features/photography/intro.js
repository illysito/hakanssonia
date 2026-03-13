import gsap from 'gsap'

import revealLines from '../functions/revealLines'

gsap.registerPlugin(ScrollTrigger)

function intro() {
  const categories = document.querySelectorAll('.cat-h')
  categories.forEach((c) => {
    revealLines(c)
  })
}

export default intro
