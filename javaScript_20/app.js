//function declaration

function user(name, age){
    //setting defaulted values in a if loop
    if(typeof name === 'undefined'){
        name = 'John Doe'
    }
    if(typeof age === 'undefined'){
        age = 20
    }
    return `Hello, my name is ${name}. I am ${age} years old`
}

//console.log(user('Carmen', 30))
console.log(user())

//defaulted value in declaration
function candidate(name = 'Jane Doe', list = 0){
    return `Hello, my name is ${name}. I am for party ${list}`
}

console.log(candidate())

