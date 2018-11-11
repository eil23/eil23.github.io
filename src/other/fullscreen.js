import css from './css'

const csses = {
  iframe: {
    position: 'fixed',
    margin: 0,
    'z-index': 10
  },

  close: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    opacity: 0,
    transition: 'opacity 500ms',
    'font-size': '2em',
    'z-index': 11
  }
}

const animation = {
  frames: ({ width, height, x, y }) => [
    { width: `${width}px`, left: `${x}px`, height: `${height}px`, top: `${y}px`, opacity: 0 },
    { width: '100vw', left: 0, height: `${height}px`, top: `${y}px`, opacity: 1 },
    { width: '100vw', left: 0, height: '100vh', top: 0, opacity: 1 }
  ],

  timing: (direction = 'normal', fill = 'none') => ({
    duration: 1000,
    easing: 'ease-in-out',
    direction: direction,
    fill: fill
  })
}

// This function needs renaming. It takes
export async function fullscreen (element, location) {
  const iframe = document.createElement('iframe')
  iframe.height = '100vh'
  iframe.width = '100vw'
  iframe.src = location

  const close = document.createElement('button')

  css(iframe).set(csses.iframe)
  css(close).set(csses.close)
  close.innerText = '✖'

  document.body.appendChild(iframe)
  document.body.appendChild(close)

  const frames = animation.frames(element.getBoundingClientRect())

  iframe.animate(frames, animation.timing('normal', 'forwards'))
    .finished.then(() => { close.style.opacity = 1 })

  return new Promise(resolve => {
    close.addEventListener('click', () => {
      document.body.removeChild(close)

      iframe.animate(frames, animation.timing('reverse'))
        .finished.then(() => {
          document.body.removeChild(iframe)
          resolve()
        })
    }, { once: true })
  })
}
