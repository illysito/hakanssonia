import menu from './features/general/menu'
import gallery from './features/photography/gallery'
import ui from './features/photography/ui'

import './styles/style.css'

console.log('Sonia 2026')

const gallerySection = document.querySelector('.gallery__section-new')

menu(gallerySection)
ui()
gallery()
