// refactor Store js code into  Class approach
// extends Store Class capability to Book
// extends Store Class capability to Laptops
// total earnings should reflect to Store class

//refactored Store in a way that it manipulates "item" instead of just Books
class Store{
  constructor(name, list, earnings){
    this.name = name,
    this.list = list,
    this.earnings = earnings
  }

  // findItem
  findItem(itemName){
    //destructure this (optional)
    let { name, list, earnings} = this
    //find specified item
    const item = list.find((item) => item.title === itemName);
    return item
  }

  //addItem fn
  addItem(title, quantity, value){
    let newItem = {title: title, quantity: quantity, value: value}
    this.list.push(newItem);
    console.log(`Added item ${title} to ${this.name}'s inventory`)
  }

  //can be improved by setting conditio if item type is book or laptop
  restockItem(title, quantity) {
    //use findItem
    const item = this.findItem(title)
    if(!item) return console.log(`We don't have that item ${title} here at ${this.name}`)
    item.quantity += quantity
    console.log(`Restocked ${title} by ${quantity} here at ${this.name}`);
  };

  //sellItem - //can be improved by setting conditio if item type is book or laptop
  sellItem(itemTitle, itemQuantity) {
    //use findItem method
    const item = this.findItem(itemTitle)
    //return invalid early if no book found
    if(!item) return console.log(`We don't sell that item here at ${this.name}`)
    //destructure item
    let {title, quantity, value} = item
    //return invalid early if quantity is insufficients
    if(quantity < itemQuantity) return console.log(`${title} has only ${quantity} left here at ${this.name}`)
    //main logic for sell
    quantity -= itemQuantity
    this.earnings = itemQuantity * value
    return console.log(`Sold ${title} successfully`)
  };

  collectFranchiseEarnings(specificStoreEarnings) {
    this.earnings += specificStoreEarnings
  }

  totalEarnings() {
    console.log(`${this.name} has earnings of ${this.earnings}`);
  };
  
  listInventory() {
    this.list.map((book) => {
      console.log(`${book.title}, ${book.quantity}, ${book.value}`);
    });
  };
}

class Book extends Store{
  constructor(name, list, earnings){
    super(name, list, earnings)
  }

}

class Laptop extends Store{
  constructor(name, list, earnings){
    super(name, list, earnings)
  }
}

//create instance of main store
let mainStore = new Store("Main Store", [], 0);
let bookStore = new Book("Book Store", [], 0)
let laptopStore = new Laptop("Laptop Store", [], 0)

//addbook
bookStore.addItem("Cinder", 10, 300);
bookStore.addItem("The Little Prince", 10, 300);
bookStore.addItem("Lord of the RIngs", 2, 500);
//add item invalidate
bookStore.addItem("Food","Lord of the RIngs", 2, 500);
// //add laptops
laptopStore.addItem("Acer", 10, 30000);
laptopStore.addItem("MSI", 10, 30000);
laptopStore.addItem("Asus", 2, 150000);
//sell books - happy path
bookStore.sellItem("Cinder", 1)
//sell laptop - happy path
laptopStore.sellItem("Acer", 1)
//sell books - no book condition
bookStore.sellItem("Cinder123", 1)
//sell books - quantitiy insufficient
bookStore.sellItem("Cinder", 1000000)
//restock books
bookStore.restockItem("Cinder", 5);
//restock book invalid
bookStore.restockItem("Harry Potter", 4);
//update earning of main store
mainStore.collectFranchiseEarnings(bookStore.earnings)
mainStore.collectFranchiseEarnings(laptopStore.earnings)
//list earning
bookStore.totalEarnings();
laptopStore.totalEarnings();
mainStore.totalEarnings();
//list inventory
bookStore.listInventory();
laptopStore.listInventory();


