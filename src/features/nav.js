import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function nav() {
  const nav = document.querySelector('.nav__section')
  const hero = document.querySelector('.hero__section')
  const headings = document.querySelectorAll('.nav-link')
  const logo = document.querySelector('.home-link')

  gsap.to(nav, {
    height: '10svh',
    ease: 'power2.out',
    scrollTrigger: {
      trigger: hero,
      start: 'bottom 95%',
      end: 'bottom 45%',
      scrub: 1,
      markers: false,
    },
  })

  function onHover(event) {
    const h = event.currentTarget.firstElementChild
    const h_2 = h.nextElementSibling
    gsap.to(h, {
      yPercent: -100,
      duration: 0.6,
      ease: 'power2.out',
    })
    gsap.to(h_2, {
      yPercent: -100,
      duration: 0.6,
      ease: 'power2.out',
    })
  }

  function onHoverOut(event) {
    const h = event.currentTarget.firstElementChild
    const h_2 = h.nextElementSibling
    gsap.to(h, {
      yPercent: 0,
      duration: 0.6,
      ease: 'power2.out',
    })
    gsap.to(h_2, {
      yPercent: 0,
      duration: 0.6,
      ease: 'power2.out',
    })
  }

  headings.forEach((heading) => {
    heading.addEventListener('mouseover', onHover)
    heading.addEventListener('mouseleave', onHoverOut)
  })
  logo.addEventListener('mouseover', () => {
    gsap.to(logo, {
      scale: 1.05,
      duration: 0.6,
      ease: 'power2.out',
    })
  })
  logo.addEventListener('mouseleave', () => {
    gsap.to(logo, {
      scale: 1.0,
      duration: 0.6,
      ease: 'power2.out',
    })
  })
}

export default nav
