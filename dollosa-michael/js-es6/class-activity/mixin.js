// - create a mixin file that can be imported by other js files
// - this mixin file can show messages of
//   - add
//   - sell
//   - restock
//   - errors
//   - etc
// - this mixin file can find specific item of the store

const addMsg = (title, name) => {
  console.log(`Added item ${title} to ${name}'s inventory`)
}

const restockMsg = (title, quantity, name) => {
  console.log(`Restocked ${title} by ${quantity} here at ${name}`);
}

const sellMsg = {
  noItem(name){
    console.log(`We don't sell that item here at ${name}`)
  },
  insufficientItem(title, quantity, name){
    console.log(`${title} has only ${quantity} left here at ${name}`)
  },
  success(title){
    console.log(`Sold ${title} successfully`)
  }
}
export { addMsg, restockMsg, sellMsg }