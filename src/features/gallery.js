import gsap from 'gsap'

function gallery() {
  const categories = document.querySelectorAll('.category_title')
  //prettier-ignore
  const gallery_section = document.querySelector('.gallery__section')
  const galleries = Array.from(gallery_section.children)

  function showCategory(event) {
    const currentCategory = event.currentTarget
    const currentIndex = Array.from(categories).indexOf(currentCategory)

    categories.forEach((cat) => {
      gsap.to(cat, {
        opacity: 0.35,
        color: '#31200a',
      })
    })
    gsap.to(currentCategory, {
      opacity: 1,
      color: '#1a5a19',
    })

    galleries.forEach((gallery, index) => {
      if (index === currentIndex) {
        const gal_height = gallery.getBoundingClientRect().height
        gsap.set(gallery, {
          opacity: 1,
          pointerEvents: 'auto',
        })
        gsap.to(gallery_section, {
          height: gal_height,
        })
      } else {
        gsap.set(gallery, {
          opacity: 0,
          pointerEvents: 'none',
        })
      }
    })
  }

  categories.forEach((category) => {
    category.addEventListener('mouseover', showCategory)
  })
}

export default gallery
