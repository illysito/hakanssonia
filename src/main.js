import './styles/style.css'

console.log('Sonia 2026')

async function runHomeFunctions() {
  const { default: transition } = await import(
    './features/functions/transition'
  )
  const { default: menu } = await import('./features/general/menu')

  // const contactGallery = document.querySelector('.contact-gallery__section')
  // const toAnimateOnMenu = [contactGallery, contactSection]
  transition()
  menu() // in params we put the section to animate down by some pixels
}

async function runPhotographyFunctions() {
  const { default: menu } = await import('./features/general/menu')
  const { default: gallery } = await import('./features/photography/gallery')
  const { default: ui } = await import('./features/photography/ui')
  const { default: transition } = await import(
    './features/functions/transition'
  )

  transition()
  const gallerySection = document.querySelector('.gallery__section-new')
  menu(gallerySection) // in params we put the section to animate down by some pixels
  ui()
  gallery()
}

async function runFilmFunctions() {
  const { default: menu } = await import('./features/general/menu')
  const { default: transition } = await import(
    './features/functions/transition'
  )

  transition()
  const filmSection = document.querySelector('.video__section-new')
  menu(filmSection) // in params we put the section to animate down by some pixels
}

async function runContactFunctions() {
  const { default: menu } = await import('./features/general/menu')
  const { default: transition } = await import(
    './features/functions/transition'
  )

  transition()
  const contactSection = document.querySelector('.contact__section')
  // const contactGallery = document.querySelector('.contact-gallery__section')
  // const toAnimateOnMenu = [contactGallery, contactSection]
  menu(contactSection) // in params we put the section to animate down by some pixels
}

if (document.body.classList.contains('body__home')) runHomeFunctions()
if (document.body.classList.contains('body__fotografia'))
  runPhotographyFunctions()
if (document.body.classList.contains('body__film')) runFilmFunctions()
if (document.body.classList.contains('body__contact')) runContactFunctions()
