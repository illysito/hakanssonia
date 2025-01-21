import gallery from './features/gallery'
import headingMask from './features/heading_mask'
import heroIntro from './features/hero_intro'
import nav from './features/nav'

import './styles/style.css'

console.log('Yeka!')

function runHomeFunctions() {
  heroIntro()
  headingMask()
}

function runGalleryFunctions() {
  gallery()
}

if (document.body.classList.contains('body__home')) runHomeFunctions()
if (document.body.classList.contains('body__fotografia')) runGalleryFunctions()

nav()
