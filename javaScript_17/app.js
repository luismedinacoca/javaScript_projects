//abstract equality comparisson:
let mark = '50'

if(mark != 50){
    console.log('mark is not 50')    
}else{
    console.log('mark is 50')
}


//strictly equality comparison:
//change anotherMark from 50 to '50'
const anotherMark = '50'

if(anotherMark === 50){
    console.log('anotherMark is 50')    
}else{
    console.log('mark is NOT 50')
}

//check undefined
if(typeof mark !== 'undefined'){
    console.log(`the mark  is ${mark}`)
}else {
    console.log('The mark is undefined')
}

//greater than or equals
if(mark >= 50){
    console.log('You pass the test')
}else{
    console.log('You failed the test')
}
