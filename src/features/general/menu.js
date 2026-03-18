import gsap from 'gsap'

function menu(mainSection) {
  const menuSection = document.querySelectorAll('.menu__section')
  const burgerWrapper = document.querySelector('.nav-burger-wrapper')
  const lineOne = burgerWrapper.firstElementChild
  const lineTwo = burgerWrapper.lastElementChild
  const navHs = document.querySelectorAll('.nav-menu-h')
  const contactPs = document.querySelectorAll('.menu-contact-p')
  const homeLink = document.querySelector('.home-link')
  const links = document.querySelectorAll('.nav-menu-link')
  // const homeLink = document.querySelector('.home-link')
  const linkDots = document.querySelectorAll('.nav-menu-dot')
  const overlay = document.querySelector('.overlay__section')

  let dotPositions = []
  function computeDotPositions() {
    linkDots.forEach((d) => {
      const rect = d.getBoundingClientRect()
      const left = rect.left
      dotPositions.push(left)
    })
    // console.log(dotPositions)
  }
  computeDotPositions()

  let isClicked = false

  function menuIn() {
    gsap.to(mainSection, {
      y: 12,
      duration: 0.8,
    })
    gsap.to(menuSection, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.inOut',
    })
    gsap.to(navHs, {
      delay: 0.6,
      yPercent: -100,
      stagger: 0.1,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    gsap.to(contactPs, {
      delay: 0.8,
      yPercent: -100,
      duration: 1.2,
      ease: 'power2.inOut',
    })
  }

  function menuOut() {
    gsap.to(contactPs, {
      yPercent: 0,
      duration: 0.8,
      ease: 'power2.inOut',
    })
    gsap.to(navHs, {
      yPercent: 0,
      stagger: 0.075,
      duration: 0.8,
      ease: 'power2.inOut',
    })
    gsap.to(menuSection, {
      delay: 0.6,
      yPercent: 0,
      duration: 1.8,
      ease: 'expo.inOut',
    })
    gsap.to(mainSection, {
      delay: 1.4,
      y: 0,
      duration: 0.8,
    })
    gsap.to(linkDots, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
    })
  }

  function animateBurger() {
    if (!isClicked) {
      gsap.to(lineOne, {
        width: 32,
        y: 2.5,
        rotate: -45,
        duration: 0.6,
        ease: 'power2.inOut',
      })
      gsap.to(lineTwo, {
        width: 32,
        y: -2.5,
        rotate: 225,
        duration: 1.2,
        ease: 'power2.inOut',
      })
      menuIn()
    } else {
      gsap.to(lineOne, {
        width: 40,
        y: 0,
        rotate: 180,
        duration: 0.6,
        ease: 'power2.inOut',
      })
      gsap.to(lineTwo, {
        width: 40,
        y: 0,
        rotate: 0,
        duration: 1.2,
        ease: 'power2.inOut',
      })
      menuOut()
    }
    isClicked = !isClicked
  }

  function transition(link) {
    gsap.to(overlay, {
      delay: 0.2,
      yPercent: 0,
      duration: 1.8,
      ease: 'expo.inOut',
      onComplete: () => {
        window.location.href = link
      },
    })
    console.log(link)
  }

  burgerWrapper.addEventListener('click', () => {
    animateBurger()
  })

  links.forEach((l, index) => {
    const linkH = l.firstElementChild
    l.addEventListener('mouseenter', () => {
      gsap.to(linkH, {
        opacity: 0.6,
        duration: 0,
      })
      gsap.to(linkDots[0], {
        opacity: 1,
        x: dotPositions[index] - dotPositions[0],
        duration: 0.8,
        ease: 'power3.inOut',
      })
    })
    l.addEventListener('mouseleave', () => {
      gsap.to(linkH, {
        opacity: 1,
        duration: 0,
      })
    })
    l.addEventListener('click', (e) => {
      e.preventDefault()
      const link = l.href
      animateBurger()
      transition(link)
    })
  })

  homeLink.addEventListener('click', (e) => {
    e.preventDefault()
    const link = homeLink.href
    // animateBurger()
    transition(link)
  })

  window.addEventListener('resize', () => {
    dotPositions = []
    computeDotPositions()
  })
}

export default menu
