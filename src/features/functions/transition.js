import gsap from 'gsap'

function transition() {
  // gsap.set(overlay, {
  //   yPercent: -100,
  // })
  const overlay = document.querySelector('.overlay__section')
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
}

export default transition
