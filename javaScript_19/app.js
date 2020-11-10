const fruit = 'apple'
switch (fruit){
    case "apple":
        console.log('red')
        break;
    case "orange":
        console.log('orange')
        break;
    case "banana":
        console.log('yellow')
        break;
    default:
        console.log('I don\'t know')  
        break;      
}

console.log("**************************")

let today = new Date().getDay()
today = new Date('02/11/2020').getDay()
switch(today){
    case 0:
        console.log('It\'s sunday')
        break;
    case 1:
        console.log('It\'s monday')
        break;
    case 2:
        console.log('It\'s tuesday')
        break;
    case 3:
        console.log('It\'s wednesday')
        break;
    case 4:
        console.log('It\'s thursday')
        break;
    case 5:
        console.log('It\'s friday')
        break;
    case 6:
        console.log('It\'s saturday')
        break;
    default:
        console.log('wrong day')
        break;
}