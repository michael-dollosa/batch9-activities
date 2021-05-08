const modal = document.querySelector(".success-modal")
const submit = document.querySelector("#form")
const modalBtn = document.querySelector("#modal-btn")
const modalMsg = document.querySelector("#modal-message")

submit.addEventListener('submit', e => {
  let inputEmail = document.querySelector("#email").value
  console.log(inputEmail)
  console.log(modalMsg.innerHTML)
  modalMsg.innerHTML = `Thank you for subscribing to our newsletter. Kindly check your email <strong> ${inputEmail} </strong> for further updates.`
  modal.removeAttribute("id")
  submit.reset()
  e.preventDefault()
  
});

modalBtn.addEventListener('click', e => {
  modal.id = "modal"
});

