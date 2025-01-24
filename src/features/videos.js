import Player from '@vimeo/player'
import gsap from 'gsap'

function videos() {
  //controls
  const video_containers = document.querySelectorAll('.video-playback')
  const overlays = Array.from(document.querySelectorAll('.playback-overlay'))
  const play_buttons = document.querySelectorAll('.video-play-button')

  const sliders = document.querySelectorAll('.slider')
  const handles = document.querySelectorAll('.handle')

  let isDragging = false
  let currentHandle
  let currentSlider
  let currentSliderIndex

  console.log(sliders)

  // VIDEOS
  const sembrando_fuerza = document.getElementById('sembrando-fuerza')
  const abrapalabras = document.getElementById('abrapalabras')
  const autocuidados = document.getElementById('autocuidados')
  const karmala = document.getElementById('karmala')

  // PLAYERS FROM VIDEOS
  const sembrandoFuerza_player = new Player(sembrando_fuerza)
  const abrapalabras_player = new Player(abrapalabras)
  const autocuidados_player = new Player(autocuidados)
  const karmala_player = new Player(karmala)

  // PLAYERS ARRAY
  //prettier-ignore
  const players = [sembrandoFuerza_player, abrapalabras_player, autocuidados_player, karmala_player]

  // OVERLAYS
  video_containers.forEach((container, index) => {
    container.addEventListener('mouseover', () => {
      gsap.to(overlays[index], {
        opacity: 1,
        duration: 0.4,
      })
    })
    container.addEventListener('mouseleave', () => {
      gsap.to(overlays[index], {
        opacity: 0,
        duration: 0.4,
      })
    })
  })

  // CONTROLS ------------------------

  // PLAY BUTTON
  function playFromButton(event) {
    console.log('button!!!!')
    const currentButton = event.currentTarget
    const playButton = currentButton.firstElementChild
    const pauseButton = currentButton.lastElementChild
    const currentIndex = Array.from(play_buttons).indexOf(currentButton)
    const currentPlayer = players[currentIndex]
    console.log('currentIndex: ' + currentIndex)
    console.log('currentPlayer: ' + currentPlayer)

    currentPlayer.getPaused().then(function (paused) {
      if (paused) {
        currentPlayer.play()
        gsap.to(playButton, {
          opacity: 0,
          duration: 0.2,
        })
        gsap.to(pauseButton, {
          opacity: 1,
          duration: 0.2,
        })
      } else {
        currentPlayer.pause()
        gsap.to(playButton, {
          opacity: 1,
          duration: 0.2,
        })
        gsap.to(pauseButton, {
          opacity: 0,
          duration: 0.2,
        })
      }
    })
  }

  // SLIDERS
  function sliderHandler(event) {
    if (isDragging && currentHandle && currentSlider) {
      // obtengo el rectangulo del slider
      const sliderRect = currentSlider.getBoundingClientRect()
      const sliderWidth = sliderRect.width
      const handleRect = currentHandle.getBoundingClientRect()
      const currentPlayer = players[currentSliderIndex]
      // determino la x inicial (0) como la posición de mi ratón menos el borde del rectángulo
      let x = event.clientX - sliderRect.left
      x = Math.max(0, Math.min(x, sliderRect.width - handleRect.width))
      currentHandle.style.left = x + 'px'

      const sliderPercent = (x / sliderWidth) * 100
      console.log('slider percent: ' + sliderPercent)
      //prettier-ignore
      currentPlayer.getDuration().then((videoDuration) => {
        // Ensure seek time is within valid bounds
        console.log('video duration: ' + videoDuration)
        const seekTime = Math.min(videoDuration, (sliderPercent / 100) * videoDuration);
        console.log('seek time: ' + seekTime)
        currentPlayer.setCurrentTime(seekTime);
      })
    }
  }
  console.log(sliderHandler)

  // PLAY BUTTON EVENT LISTENER
  play_buttons.forEach((button) => {
    button.addEventListener('click', playFromButton)
    button.addEventListener('mouseover', (event) => {
      gsap.to(event.currentTarget, {
        backgroundColor: '#1a5a19',
        duration: 0.2,
      })
    })
    button.addEventListener('mouseleave', (event) => {
      gsap.to(event.currentTarget, {
        backgroundColor: '#0e0e0e',
        duration: 0.2,
      })
    })
  })

  // SLIDER EVENT LISTENER
  sliders.forEach((slider, i) => {
    const handle = handles[i]
    // cuando pincho en un handle, ya asociado a su slider, activo isDragging y meto en currentHandle y currentSlider los elementos q son
    handle.addEventListener('mousedown', (e) => {
      // console.log('mousedown')
      console.log(e)
      isDragging = true
      currentHandle = handle
      currentSlider = slider
      currentSliderIndex = i

      console.log(isDragging, currentHandle, currentSliderIndex, currentSlider)
    })
  })

  // Vuelvo al estado inicial cuando levanto el mouse
  document.addEventListener('mouseup', () => {
    isDragging = false
    currentHandle = null
    currentSlider = null
    currentSliderIndex = null
    // console.log(isDragging)
  })

  document.addEventListener('mousemove', sliderHandler)
}

export default videos
