
//survey
const name = document.getElementById("name");
const submitSurvey = document.getElementById("submitSurvey")
const form = document.getElementById("survey-form")
const errMsg = document.getElementById("invalid-msg")
const successMsg = document.getElementById("success-msg")
const filler = document.getElementById("filler")


submitSurvey.addEventListener('click', e => {

  if(!form.checkValidity()) {
    filler.style.display = "none"
    errMsg.style.display = "block"
  }
  
});

form.addEventListener('submit', e => {
  console.log("clicked submit fn")
  modal.removeAttribute("id")
  e.preventDefault();
  
});

// modalBtn.addEventListener('click', e => {
//   modal.id = "modal"
// });