// import gsap from 'gsap'

import revealLines from '../functions/revealLines'

function intro() {
  const descs = document.querySelectorAll('.desc-p')
  descs.forEach((c) => {
    revealLines(c)
  })
}

export default intro
