var justiceLeague = [
    {name: "Superman", superpower: "Super strength"}, 
    {name: "Batman", superpower: "Super rich"},
    {name: "Wonder Woman", superpower: "Super lasso"}, 
    {name: "The Flash", superpower: "Super speed"}, 
    {name: "Green Lantern", superpower: "Super ring"}
]

const header = document.querySelector("#league")


for(let x = 0; x < justiceLeague.length; x++) {
    const list = document.createElement("li")
    hero = justiceLeague[x]
    list.textContent = `${hero.name}: ${hero.superpower}`
    header.append(list)
}


//event listener
const item = document.getElementsByTagName("LI")

for(let i = 0; i < item.length; i++){
    console.log(item[0])
    item[i].addEventListener('mouseover', () => {
        console.log("li mouseover clicked")
    })
    item[i].addEventListener('mouseout', () => {
        console.log("li mouseout clicked")
    })
}


document.body.addEventListener('click', () => {
    console.log("body clicked")
})
