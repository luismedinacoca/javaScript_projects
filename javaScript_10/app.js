let x = 20
let y = x
console.log(x, y)
x = 30
console.log(x, y)
// only x changed


let a = {value: 20}
let b = a
console.log(a, b)
a.value = 30
console.log(a, b)
//both have changed