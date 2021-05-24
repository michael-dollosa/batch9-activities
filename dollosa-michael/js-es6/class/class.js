class Player {
  constructor(name, country){
    this.name = name
    this.country = country
  }

  get introduction() {
    console.log(`${this.name} was born in ${this.country}`)
  }
}

class BasketballPLayer extends Player {
  constructor(name, country, age){
    super(name, country)
    this.age = age
  }

  get basketballPlayerIntro() {
    console.log(`${this.name} is ${this.age} years old and knows how to play Basketball`)
  }
}

//test for parent class
let player = new Player("Foo", "Bar")
player.introduction

//test for child class
let lebron = new BasketballPLayer("Foo2", "Bar2", "34")
lebron.introduction
lebron.basketballPlayerIntro