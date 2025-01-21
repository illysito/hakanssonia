import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function footer() {
  const links = document.querySelectorAll('.footer-link')
  const illy_link = document.querySelector('.illy-link')
  const final_section = document.querySelector('.final__section')
  const footer = document.querySelector('.footer__section')

  if (final_section) {
    console.log('footer should be animating')
    gsap.to(footer, {
      y: '0',
      duration: 0.8,
      scrollTrigger: {
        trigger: final_section,
        start: 'top 30%',
        end: 'top top',
        markers: false,
      },
    })
  }

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

  links.forEach((link) => {
    link.addEventListener('mouseover', onHover)
    link.addEventListener('mouseleave', onHoverOut)
  })

  illy_link.addEventListener('mouseover', () => {
    gsap.to(illy_link, {
      fontVariationSettings: `'wght' 300`,
      duration: 0.6,
      ease: 'power2.out',
    })
  })
  illy_link.addEventListener('mouseleave', () => {
    gsap.to(illy_link, {
      fontVariationSettings: `'wght' 600`,
      duration: 0.6,
      ease: 'power2.out',
    })
  })
}

export default footer
