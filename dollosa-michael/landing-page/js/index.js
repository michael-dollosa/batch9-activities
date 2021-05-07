const modal = document.querySelector(".success-modal")
const submit = document.querySelector("#form")
const modalBtn = document.querySelector("#modal-btn")


submit.addEventListener('submit', e => {
  modal.removeAttribute("id")
  submit.reset()
  e.preventDefault()
  
});

modalBtn.addEventListener('click', e => {
  modal.id = "modal"
});

