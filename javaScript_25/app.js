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

// redirect
// window.location.href = "https://www.google.com"

// reload
// window.location.reload()

// history: locahost >> yahoo >> copiar el link localhost >> execute
//http://127.0.0.1:5500/javaScript_25/index.html
// window.history.go(-1)

//Navigator object
val = window.navigator;
console.log('window.navigator;', val)
val = window.navigator.appName;
console.log('window.navigator.appName;', val)
val = window.navigator.appVersion;
console.log('window.navigator.appVersion;', val)
val = window.navigator.userAgent;
console.log('window.navigator.userAgent;', val)
val = window.navigator.platform;
console.log('window.navigator.platform;', val)
val = window.navigator.vendor;
console.log('window.navigator.vendor;', val)
val = window.navigator.language;
console.log('window.navigator.language;', val)