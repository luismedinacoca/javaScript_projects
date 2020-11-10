//FOR Loop:
for(let i = 0; i < 10; i++){
    if(i === 3){
        //console.log('****')
        continue;
    }

    if(i == 6){
        //console.log('break here!')
        break;
    }
    console.log(i);
}
console.log(' ')

console.log('While loop')
console.log('==========')
console.log(' ')
// WHILE loop
let i = 0
while(i < 10){
    console.log(i)
    i++;
}

// DO-WHILE loop
let j = 122
do{
    console.log(j)
    j++;
} while(j < 5)