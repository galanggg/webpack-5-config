import Kiwi from './webpack.jpg'

export function addImage() {
  const image = document.createElement('img')
  image.src = Kiwi
  image.width = 300
  image.height = 200
  document.querySelector('body').appendChild(image)
}
