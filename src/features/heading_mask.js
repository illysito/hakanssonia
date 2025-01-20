import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function headingMask() {
  const heading = document.querySelector('.hero__heading')
  const heading_2 = document.querySelector('.hero__heading-2')
  const hero = document.querySelector('.hero__section')
  const hero_bg = document.querySelector('.hero__bg')

  gsap.to(hero_bg, {
    y: 200,
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom 5%',
      scrub: 1,
      markers: false,
    },
  })

  gsap.to(heading, {
    y: 180,
    opacity: 0,
    scale: 0.3,
    transformOrigin: 'bottom center',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom 30%',
      scrub: 1,
      markers: false,
    },
  })

  gsap.to(heading_2, {
    y: 180,
    opacity: 1,
    scale: 0.3,
    transformOrigin: 'bottom center',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom 30%',
      scrub: 1,
      markers: false,
    },
  })
}

export default headingMask
