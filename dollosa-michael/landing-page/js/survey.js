
//survey
const submitSurvey = document.getElementById("submitSurvey")
const form = document.getElementById("survey-form")
const errMsg = document.getElementById("invalid-msg")
const filler = document.getElementById("filler")
const modalSurvey = document.querySelector(".success-modal")

submitSurvey.addEventListener('click', e => {

  if(!form.checkValidity()) {
    filler.style.display = "none"
    errMsg.style.display = "block"
  }
  
});

form.addEventListener('submit', e => {
  modalSurvey.removeAttribute("id")
  form.reset()
  e.preventDefault();
  
});
