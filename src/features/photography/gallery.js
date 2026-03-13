import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function gallery() {
  const imgContainers = document.querySelectorAll('.img-container')

  imgContainers.forEach((cont) => {
    const randomAmp = 4
    const random = randomAmp * Math.random() - randomAmp / 2
    gsap.to(cont, {
      y: -200 + random,
      scrollTrigger: {
        trigger: cont,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      },
    })
  })
}

export default gallery
