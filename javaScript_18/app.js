//else if
let hour = 72
if(hour < 12){
    console.log('Good morning')
}else if(hour < 20){
    console.log('Good afternoon!')
} else{
    console.log('Good evening!!')
}

//logical operator
let mark = 85

// AND operator
if (mark > 80){
    console.log('Excellent!')
}else if(mark > 50 && mark <= 80){
    console.log('Good')
} else{
    console.log('Keep it up!')
}

// OR operator
let hora = 11
let isWeekend = true

if (hora < 10 || hora > 17 || isWeekend){
    console.log('The office is closed')
} else{
    console.log('The office is NOW open')
}


age = 20

//ternary operator
const drink = age < 18 ? "You CANNOT drink beer" : "You can drink beer!"
console.log(drink)
//one line
if(age < 18) console.log('***You cannot drink beer'); else console.log('***Now you can drink beer')