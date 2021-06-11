// refactor Store js code into  Class approach -> class MainStore
// extends MainStore Class capability to BookStore -> imagine  BookStore is intended only for books
// overall items should reflect in MainStore
// total earnings should reflect to MainStore class and also BookStore
//any addition or method to child must reflect on parent

//refactored Store in a way that it manipulates "item" instead of just Books

import { addMsg, restockMsg, sellMsg } from "./mixin.js"

class Store{
  constructor(name, list, earnings){
    this.name = name,
    this.list = list,
    this.earnings = earnings
    Object.assign(this, addMsg, restockMsg, sellMsg)
  }

  // findItem
  findItem(itemName, storeName){
    let { name, list, earnings} = this
    const item = list.find((item) => item.title === itemName && item.store === storeName);
    return item
  }

  //addItem fn
  addItem(title, quantity, value){
    let newItem = {store: this.name, title: title, quantity: quantity, value: value}
    this.list.push(newItem);
    addMsg(title, this.name)
    // console.log(`Added item ${title} to ${this.name}'s inventory`)
  }

  //restockItem
  restockItem(title, quantity) {
    //use findItem
    const item = this.findItem(title)
    if(!item) return console.log(`We don't have that item ${title} here at ${this.name}`)
    item.quantity += quantity
    restockMsg(title, quantity, this.name)
    // console.log(`Restocked ${title} by ${quantity} here at ${this.name}`);
  };

  //sellItem
  sellItem(itemTitle, itemQuantity) {
    const item = this.findItem(itemTitle)
    if(!item) return sellMsg.noItem(this.name)
    if(item.quantity < itemQuantity) return sellMsg.insufficientItem(item.title, item.quantity, this.name)
    item.quantity -= itemQuantity
    this.earnings += itemQuantity * item.value
    return sellMsg.success(item.title)
  };

  totalEarnings() {
    console.log(`${this.name} has earnings of ${this.earnings}`);
  };
  
  listInventory() {
    console.log(`${this.name}'s INVENTORY`)
    this.list.map((item) => {
      console.log(`${item.store}: ${item.title}, ${item.quantity}, ${item.value}`);
    });
  };
}

class Franchise extends Store{
  constructor(name, list, earnings, parentStore){
    super(name, list, earnings)
    this.parentStore = parentStore
  }

  // overwrite findItem of parent class
  findItem(itemName){
    let { name, list, earnings} = this
    const item = list.find((item) => item.title === itemName && item.store === name);
    return item
  }

  addItem(title, quantity, value){
    super.addItem(title, quantity, value)
    let newItem = {store: this.name, title: title, quantity: quantity, value: value}
    this.parentStore.list.push(newItem)
  }

  restockItem(itemTitle, itemQuantity){
    super.restockItem(itemTitle, itemQuantity)
    const item = this.parentStore.findItem(itemTitle, this.name)
    if(!item) return
    item.quantity += itemQuantity
  }

  sellItem(itemTitle, itemQuantity){
    super.sellItem(itemTitle, itemQuantity)
    const item = this.parentStore.findItem(itemTitle, this.name)
    if(!item) return
    if(item.quantity < itemQuantity) return
    item.quantity -= itemQuantity
    this.parentStore.earnings += itemQuantity * item.value
  }
}

//create instance of main store
let mainStore = new Store("Main Store", [], 0);
let bookStore = new Franchise("Book Store", [], 0, mainStore)
let laptopStore = new Franchise("Laptop Store", [], 0, mainStore)

//addbook
console.log("####ADD ITEMS####")
bookStore.addItem("Cinder", 10, 300);
bookStore.addItem("The Little Prince", 10, 300);
bookStore.addItem("Lord of the RIngs", 2, 500);
//addlaptop
laptopStore.addItem("Acer", 500, 30000)
laptopStore.addItem("Asus", 300, 50000)
//restock books
console.log("####RESTOCK ITEMS####")
bookStore.restockItem("Cinder", 5);
laptopStore.restockItem("Asus", 100)
// //restock book invalid
bookStore.restockItem("Harry Potter", 4);
laptopStore.restockItem("MSI", 100)
// sell books - happy path
console.log("####SELL ITEMS####")
bookStore.sellItem("Cinder", 1)
laptopStore.sellItem("Acer", 100)
//sell books - no book condition
bookStore.sellItem("Cinder123", 1)
laptopStore.sellItem("MSI", 100)
// //sell books - quantitiy insufficient
bookStore.sellItem("Cinder", 1000000)
laptopStore.sellItem("Acer", 1000000)
// //list earning
console.log("####LIST EARNINGS####")
bookStore.totalEarnings();
mainStore.totalEarnings();
laptopStore.totalEarnings();
//list inventory
console.log("####LIST INVENTORY####")
bookStore.listInventory();
laptopStore.listInventory();
mainStore.listInventory();


