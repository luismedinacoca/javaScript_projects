const sum = function (x = 1, y = 2){
    return x + y
}

console.log('sum(2, 3) = ', sum(2, 3))
console.log('sum() = ', sum())

// IIFE -Immediately Invoked Function Expression

console.log('outside and before the IIFE', 3)

var num = 90
// esta function no anda  <==================
//(function() {
    //var num = 3;
    //console.log(num)
//});
console.log(' ')

console.log('outside the IIFE: ', num)


const person = {
    hello: function () {
        console.log('Hello everybody!')
    },

    age: function(age){
        console.log(`I'm ${age} years old`)
    }
}

person.laugh = function() {
    console.log('ha hah ha...')
}

person.hello()
person.age(23)
person.laugh()