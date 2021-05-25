// const findUserData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = true
//       if(data) {
//         resolve({
//           firstName: "John",
//           age: "18",
//           email: "john.doe@foobar.com"
//         })
//       } else {
//         reject("You have an error")
//       }
//     }, 3000);
//   })
// }

const findUserData = () => new Promise((resolve, reject) => {
  const data = false
  if(data) {
    resolve({
      firstName: "John",
      age: "18",
      email: "john.doe@foobar.com"
    })
  } else {
    reject("You have an error")
  }
})


findUserData()
.then((res) => console.log(res))
.catch((err) => console.log(err))