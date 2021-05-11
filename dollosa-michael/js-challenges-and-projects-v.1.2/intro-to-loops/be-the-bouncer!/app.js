const nightClubRegister = [
    {
        name: 'Tony',
        lastname: 'Stark',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Harry',
        lastname: 'Potter',
        age: 16,
        gender: 'male'
    },
    {
        name: 'Hermione',
        lastname: 'Granger',
        age: 17,
        gender: 'female'
    },
    {
        name: 'Steve',
        lastname: 'Rogers',
        age: 62,
        gender: 'male'
    }
]


for(let x = 0; x < nightClubRegister.length; x++) {
    let prefix = "Mr."
    let name = nightClubRegister[x].lastname
    let age = nightClubRegister[x].age
    if(nightClubRegister[x].gender === "female") {
        prefix = "Mrs."
    }
    age > 18 ? console.log(`Hi ${prefix} ${name}, Pasok`) : console.log(`Hi ${prefix} ${name}, Bawal`)
}
