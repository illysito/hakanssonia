import gsap from 'gsap'

// import revealLines from '../functions/revealLines'

// gsap.registerPlugin(ScrollTrigger)

function ui() {
  // DOM
  const gallerySection = document.querySelector('.gallery__section-new')
  const overlays = document.querySelectorAll('.img-overlay')
  const imgContainers = document.querySelectorAll('.img-container')
  const categoryHeaders = [...document.querySelectorAll('.cat-h')]
  const lines = [...document.querySelectorAll('.cat-line')]
  const descs = [...document.querySelectorAll('.desc-wrapper')]

  // HIDE AND SHOW IMAGES ON CATEGORY CHANGE
  function animateImages(index) {
    console.log(index)
    // hide img behind overlays
    const tl = gsap.timeline()

    const afterCoverIn = () => {
      // do something with imgs

      gsap.delayedCall(0.2, () => {
        tl.to(overlays, {
          yPercent: 100,
          duration: 1.8,
          ease: 'expo.inOut',
          onComplete: () => {
            gsap.set(overlays, {
              yPercent: -100,
            })
          },
        })
          .to(
            imgContainers,
            {
              opacity: 1,
              duration: 1.8,
              ease: 'expo.inOut',
            },
            '<'
          )
          .to(
            gallerySection,
            {
              y: 0,
              duration: 1.2,
              ease: 'power2.out',
            },
            '<0.6'
          )
      })
    }

    tl.to(gallerySection, {
      y: 20,
      duration: 1.2,
      ease: 'power2.out',
    })
      .to(
        imgContainers,
        {
          opacity: 0,
          duration: 1.8,
          ease: 'expo.inOut',
        },
        '<'
      )
      .to(
        overlays,
        {
          yPercent: 0,
          duration: 1.8,
          ease: 'expo.inOut',
          onComplete: afterCoverIn,
        },
        '<'
      )
  }

  // MANAGE CATEGORIES
  gsap.set(categoryHeaders[0], {
    fontVariationSettings: '"wght" 400',
    opacity: 1,
  })
  function animateCategories(index) {
    categoryHeaders.forEach((h, i) => {
      if (i != index) {
        gsap.to(h, {
          fontVariationSettings: '"wght" 200',
          duration: 0.6,
          opacity: 0.6,
        })
      } else {
        gsap.to(h, {
          fontVariationSettings: '"wght" 400',
          duration: 0.6,
          opacity: 1,
        })
      }
    })
  }

  // ANIMATE LINES
  function animateLines(index) {
    lines.forEach((l, i) => {
      if (i != index) {
        gsap.to(l, {
          width: 0,
          duration: 2,
          ease: 'expo.inOut',
        })
      } else {
        gsap.to(l, {
          delay: 1.2,
          width: '100%',
          duration: 2,
          ease: 'expo.inOut',
        })
      }
    })
  }

  // ANIMATE DESCRIPTIONS
  gsap.set(descs[0], {
    opacity: 1,
  })
  function animateDescriptions(index) {
    descs.forEach((d, i) => {
      if (i != index) {
        gsap.to(d, {
          opacity: 0,
          duration: 1.2,
          ease: 'expo.inOut',
        })
      } else {
        gsap.to(d, {
          delay: 2,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.inOut',
        })
      }
    })
  }

  // LISTENERS
  categoryHeaders.forEach((h, index) => {
    h.addEventListener('click', () => {
      animateLines(index)
      animateDescriptions(index)
      animateCategories(index)
      animateImages(index)
    })
  })
}

export default ui
