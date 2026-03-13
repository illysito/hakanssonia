import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function gallery() {
  const imgContainers = document.querySelectorAll('.img-container')

  function markIfInViewport() {
    // OBSERVER
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.dataset.inViewport = entry.isIntersecting
            ? 'true'
            : 'false'
        })
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1, // counts as visible when 10% is inside viewport
      }
    )

    imgContainers.forEach((cont) => {
      cont.dataset.inViewport = 'false'
      observer.observe(cont)
    })
  }
  markIfInViewport()

  imgContainers.forEach((cont) => {
    const randomAmp = 4
    const random = randomAmp * Math.random() - randomAmp / 2
    gsap.to(cont, {
      y: 80 + random,
      scrollTrigger: {
        trigger: cont,
        start: 'top 120%',
        end: 'bottom top',
        scrub: true,
      },
    })
  })
}

export default gallery
