import Player from '@vimeo/player'
import gsap from 'gsap'

function videos() {
  //controls
  const video_containers = document.querySelectorAll('.video-playback')
  const overlays = Array.from(document.querySelectorAll('.playback-overlay'))
  const play_buttons = document.querySelectorAll('.video-play-button')

  const sembrando_fuerza = document.getElementById('sembrando-fuerza')
  const sembrando_fuerza_2 = document.getElementById('sembrando-fuerza-2')
  const sembrandoFuerza_player = new Player(sembrando_fuerza)
  const sembrandoFuerza_player_2 = new Player(sembrando_fuerza_2)

  const players = [sembrandoFuerza_player, sembrandoFuerza_player_2]

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

  // CONTROLS
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
}

export default videos
