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

          // console.log(entry)
        })
      },
      {
        root: null, // viewport
        rootMargin: '80px',
        threshold: 0.0, // counts as visible when 10% is inside viewport
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
    const randomAmp = 52
    const random = randomAmp * Math.random() - randomAmp / 2
    const img = cont.firstElementChild.firstElementChild
    const overlay = img.nextElementSibling
    gsap.to(overlay, {
      yPercent: 100,
      ease: 'expo.inOut',
      duration: 1.2,
      scrollTrigger: {
        trigger: cont,
        start: 'top 90%',
        // end: 'top 80%',
        // scrub: true,
      },
    })
    gsap.to(cont, {
      y: 160 + random,
      scrollTrigger: {
        trigger: cont,
        start: 'top 120%',
        end: 'bottom top',
        scrub: true,
      },
    })
    gsap.to(img, {
      scale: 1.02,
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
  const windowAmp = 12

  function windowEffect() {
    const normalizedX = gsap.utils.mapRange(
      0,
      window.innerWidth,
      -windowAmp,
      windowAmp,
      mouseX
    )
    const normalizedY = gsap.utils.mapRange(
      0,
      window.innerHeight,
      -windowAmp,
      windowAmp,
      mouseY
    )
    imgs.forEach((img) => {
      const wrapper = img.parentElement
      const cont = wrapper.parentElement
      if (cont.dataset.inViewport !== 'true') {
        // console.log('ciao')
        return
      }
      // const randomAmp = 2
      const random = 1
      // gsap.quickTo(img, {
      //   x: -normalizedX,
      //   y: -normalizedY,
      //   duration: 1.6,
      //   // ease: 'power2.inOut',
      // })
      const xTo = gsap.quickTo(img, 'x', { duration: 1.6 })
      const yTo = gsap.quickTo(img, 'y', { duration: 1.6 })

      xTo(-normalizedX * random)
      yTo(-normalizedY * random)
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
