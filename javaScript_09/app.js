//primitive
let item
//undefined

//string
item = 'hello'

//number
item = 15

//boolean
item = false

//null  ==> object
item = null

//symbol
item  = Symbol()

//Reference type

// array  ===> object
item = [1, 2, 3, 4]

item = {
    name: 'Louis',
    age: 43
}

//date  ===> object
item = new Date()

console.log('type', typeof item)