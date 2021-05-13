const modal = document.querySelector(".success-modal")
const submit = document.querySelector("#form")
const modalBtn = document.querySelector("#modal-btn")
const modalMsg = document.querySelector("#modal-message")

submit.addEventListener('submit', e => {
  let inputEmail = document.querySelector("#email").value
  // console.log(inputEmail)
  // console.log(modalMsg.innerHTML)
  modalMsg.innerHTML = `Thank you for subscribing to our newsletter. Kindly check your email <strong> ${inputEmail} </strong> for further updates.`
  modal.removeAttribute("id")
  submit.reset()
  e.preventDefault()
  
});

modalBtn.addEventListener('click', e => {
  modal.id = "modal"
});



// // Activity
// // With this quick review on the DOM, try it out on the Product Landing Page you just made!
// // Try the following:
// // Connect your page to a JS file using the script tag.
// // Select a single element.
// // Select multiple elements.
// // Modify your element's text.
// // Modify your element's styles.
// // Add a button and event listener for button clicks. 
// // Create a counter application.
// const multElements = document.getElementsByTagName("p");
// const button = document.querySelector("#submit")
// console.log(multElements)
// multElements[1].innerHTML = "Modified by Javascript"
// multElements[2].style.backgroundColor = "red";
// let counter = 0;
// const counterFn = () => {
//   counter++
//   for(let x = 0; x < 8; x++)
//   multElements[x].innerHTML = `${counter}`
// }
// button.addEventListener('click', counterFn)

