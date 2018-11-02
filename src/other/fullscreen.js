import css from './css'

const csses = {
  clone: {
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
export async function fullscreen (element) {
  const clone = element.cloneNode(true)
  const close = document.createElement('button')

  css(clone).set(csses.clone)
  css(close).set(csses.close)
  close.innerText = '✖'

  document.body.appendChild(clone)
  document.body.appendChild(close)

  const frames = animation.frames(element.getBoundingClientRect())

  clone.animate(frames, animation.timing('normal', 'forwards'))
    .finished.then(() => { close.style.opacity = 1 })

  return new Promise(resolve => {
    close.addEventListener('click', () => {
      document.body.removeChild(close)

      clone.animate(frames, animation.timing('reverse'))
        .finished.then(() => {
          document.body.removeChild(clone)
          resolve()
        })
    }, { once: true })
  })
}
