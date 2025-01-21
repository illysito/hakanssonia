import gsap from 'gsap'

function gallery() {
  const categories = document.querySelectorAll('.category_title')
  //prettier-ignore
  const galleries = Array.from(document.querySelector('.gallery__section').children)

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
        gsap.to(gallery, {
          opacity: 1,
          pointerEvents: 'auto',
          duration: 0.2,
        })
      } else {
        gsap.to(gallery, {
          opacity: 0,
          pointerEvents: 'none',
          duration: 0.2,
        })
      }
    })
  }

  categories.forEach((category) => {
    category.addEventListener('mouseover', showCategory)
  })
}

export default gallery
