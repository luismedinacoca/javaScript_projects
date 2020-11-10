//alert
window.alert('hello')

//prompt
const name = prompt('what is your name? ')
alert(`Hello ${name}`)


//confirm
if (confirm('Are you sure to delete? ')){
    alert('file was deleted!')
} else {
    alert('nothing was deleted...')
}