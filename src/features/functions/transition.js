import gsap from 'gsap'

function transition() {
  // gsap.set(overlay, {
  //   yPercent: -100,
  // })
  const overlay = document.querySelector('.overlay__section')
  // const overlayDots = document.querySelectorAll('.overlay-dot')
  const overlayDots = document.querySelectorAll('.overlay-dot-container')

  gsap.to(overlay, {
    delay: 0.2,
    yPercent: -100,
    duration: 1.8,
    ease: 'expo.inOut',
    onComplete: () => {
      gsap.set(overlay, {
        yPercent: 100,
      })
    },
  })
  gsap.to(overlayDots, {
    // delay: 0.2,
    y: -160,
    stagger: 0.1,
    duration: 1.8,
    ease: 'expo.inOut',
    onComplete: () => {
      gsap.set(overlayDots, {
        y: 0,
      })
    },
  })
}

export default transition
