import gsap from 'gsap'
import SplitType from 'split-type'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

function heroIntro() {
  const nav = document.querySelector('.nav__section')
  const heading = document.querySelector('.hero__heading')
  const heading_2 = document.querySelector('.hero__heading-2')
  const hero_bg = document.querySelector('.hero__bg')
  const splitHeading = new SplitType(heading, {
    types: 'chars',
    tagName: 'span',
  })
  const splitHeading_2 = new SplitType(heading_2, {
    types: 'chars',
    tagName: 'span',
  })
  console.log('MANDATORY: ' + splitHeading_2)

  gsap.to(hero_bg, {
    scale: 1.1,
    duration: 2,
    ease: 'power2.out',
  })

  gsap.from(nav, {
    yPercent: -100,
    opacity: 0,
    ease: 'power2.inOut',
    duration: 1.5,
  })

  gsap.from(splitHeading.chars, {
    yPercent: 120,
    ease: 'power3.out',
    duration: 1.2,
    stagger: 0.04,
  })
}

export default heroIntro
