//outer width abd height
let oh = window.outerHeight
let ow = window.outerWidth

console.log('outerheight is: ', oh)
console.log('outerwidth is: ', ow)

//inner width and height
let ih = window.innerHeight
let iw = window.innerWidth

console.log('innerheight is: ', ih)
console.log('innerwidth is: ', iw)

//scroll points
let sy = window.scrollY
let sx = window.scrollX
console.log(sx, sy)

//location object
let val
val = window.location
console.log('location: ', val)
val = window.location.hostname
console.log('hostname location: ', val)
val = window.location.port
console.log('port location: ',val)
val = window.location.href
console.log('link location: ',val)

//redirect
//window.location.href = "http://www.google.com"

//reload
window.location.reload()