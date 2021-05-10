// Coding Challenge - Which of these values are falsy?
// Create an if-else statement that logs if the object property is true or false

 var user = {
     name: "Bruce",
     email: null,
     friends: ["Aflred", "Robin"],
     address: {
         street: "123 wayne manor",
         city: "Gotham"
     },
     id: 0,
     nickname: undefined
 }

 for (const [key, value] of Object.entries(user)) {
   console.log(key, value)
   !(value) ? console.log(`${key} is FALSY`) : console.log(`${key} is TRUTHY`)
 }

 