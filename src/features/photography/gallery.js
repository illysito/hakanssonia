import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function gallery() {
  const imgContainers = document.querySelectorAll('.img-container')
  const imgs = document.querySelectorAll('.img')

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

  // PARALLAX
  imgContainers.forEach((cont) => {
    const randomAmp = 32
    const random = randomAmp * Math.random() - randomAmp / 2
    gsap.to(cont, {
      y: 120 + random,
      scrollTrigger: {
        trigger: cont,
        start: 'top 120%',
        end: 'bottom top',
        scrub: true,
      },
    })
  })

  // WINDOW EFFECT

  let mouseX = 0
  let mouseY = 0

  function windowEffect() {
    const normalizedX = gsap.utils.mapRange(0, window.innerWidth, -8, 8, mouseX)
    const normalizedY = gsap.utils.mapRange(
      0,
      window.innerHeight,
      -8,
      8,
      mouseY
    )
    imgs.forEach((img) => {
      gsap.to(img, {
        x: -normalizedX,
        y: -normalizedY,
        duration: 1.6,
        ease: 'power2.inOut',
      })
    })

    requestAnimationFrame(windowEffect)
  }
  windowEffect()

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })
}

export default gallery
