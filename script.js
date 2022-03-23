const Modal = {
  open() {
    document.querySelector('.modal-overlay').classList.add('active')
  },
  exit() {
    document.querySelector('.modal-overlay').classList.remove('active')
  }
}
