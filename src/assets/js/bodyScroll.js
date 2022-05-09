const body = document.body

const lockBody = () => {
  body.classList.add('scroll-lock')
}
const unlockBody = () => {
  body.classList.remove('scroll-lock')
}

export {lockBody, unlockBody}
