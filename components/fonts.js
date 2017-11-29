const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=Lora'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const lora = new FontFaceObserver('Lora')

  lora.load().then(() => {
    document.documentElement.classList.add('loaded')
  })
}

export default Fonts