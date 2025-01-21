import footer from './features/footer'
import gallery from './features/gallery'
import headingMask from './features/heading_mask'
import heroIntro from './features/hero_intro'
import nav from './features/nav'
import videos from './features/videos'

import './styles/style.css'

console.log('Yeka!')

function runHomeFunctions() {
  heroIntro()
  headingMask()
}

function runGalleryFunctions() {
  gallery()
}

function runVideoFunctions() {
  videos()
}

if (document.body.classList.contains('body__home')) runHomeFunctions()
if (document.body.classList.contains('body__fotografia')) runGalleryFunctions()
if (document.body.classList.contains('body__video')) runVideoFunctions()

nav()
footer()
