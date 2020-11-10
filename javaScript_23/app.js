const user = ['Alan', 'Peter', 'John']

//FOR loop
for(let i = 0; i < user.length; i++){
    console.log(user[i])
}
console.log('')

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
//FOR of
for(const day of weekDays){
    console.log(day)
}
console.log('')

weekDays.forEach(function(day, index){
    console.log(index, day)
});

console.log('')

const hiUsers = user.map(function(usuario, index){
    return `Hi, ${usuario}`
})

console.log(hiUsers) //with forEach ==> undefined
// app.js:26 (3) ["Hi, Alan", "Hi, Peter", "Hi, John"]

console.log('')

const person = {
    name: 'Luis',
    age: 43,
    title: 'QA Engineer',
    address: 'Godoy Cruz, Mendoza'
}

for (const key in person){
    console.log(`${key}: ${person[key]}`)
}