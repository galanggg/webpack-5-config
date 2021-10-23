import './button-style.css'

class ButtonComponent {
  render() {
    const buttonClassProperties = 'button-primary'
    const button = document.createElement('button')
    button.classList.add(buttonClassProperties)
    button.innerHTML = 'Hi this is primary button'
    const body = document.querySelector('body')
    body.appendChild(button)
  }
}

export default ButtonComponent
