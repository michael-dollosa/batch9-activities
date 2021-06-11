function store(name, list, earnings) {
    this.name = name,
    this.list = list,
    this.earnings = earnings
}

//create instance of store
let sampleStore = new store("Hello World", [], 0)

store.prototype.addBook = function(title, quantity, value){
  let book = {title, quantity, value}
  this.list.push(book)
}   
  
store.prototype.restockBook = function(title, quantity){
  this.list.forEach(book => {
    if(book.title === title){
      book.quantity += quantity
      console.log(`Restocked ${book.title}. Quantity now is ${book.quantity}`)
    }
  })
}
  
store.prototype.sellBook = function(title, quantity){
  let check = this.list.find(data => data.title === title)
  if(check){
    // console.log("find check",check)
    if(check.quantity >= quantity ){
      check.quantity -= quantity
      console.log(`Sold ${quantity} ${check.title}. Current quantity now is ${check.quantity}`)
      this.earnings = quantity * check.value
    }else{
      console.log(`Only ${check.quantity} stocks left for ${check.title} book`) 
    }
  }
  else{
    console.log(`Out of stock for ${title}`)
  }
}

store.prototype.totalEarnings = function(){
  console.log(`${this.name} earnings: ${this.earnings}`)
}
  
store.prototype.listInvetory = function(){
  this.list.forEach(book => {
    console.log(`
      Title: ${book.title},
      Quantity: ${book.quantity},
      Value: ${book.value}
    `)
  })
}



//test
sampleStore.addBook("sample",2,1)
sampleStore.addBook("sample2",23,21)
sampleStore.addBook("sample3",13,21)
sampleStore.restockBook("hello", 1)
sampleStore.restockBook("sample", 100)
//normal sell
sampleStore.sellBook("sample", 90)
//stock is less than required
sampleStore.sellBook("sample3", 15)
//out of stock
sampleStore.sellBook("Out of Stock Sample", 15)
sampleStore.totalEarnings()
sampleStore.listInvetory()