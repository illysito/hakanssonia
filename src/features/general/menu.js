import gsap from 'gsap'

function menu(mainSection) {
  const menuSection = document.querySelectorAll('.menu__section')
  const burgerWrapper = document.querySelector('.nav-burger-wrapper')
  const lineOne = burgerWrapper.firstElementChild
  const lineTwo = burgerWrapper.lastElementChild
  const navHs = document.querySelectorAll('.nav-menu-h')
  const contactPs = document.querySelectorAll('.menu-contact-p')

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

  burgerWrapper.addEventListener('click', () => {
    animateBurger()
  })
}

export default menu
