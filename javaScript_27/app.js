let doc
doc = document
doc = document.all[1]
doc = document.head
doc = document.body
doc = document.doctype
doc = document.domain
doc = document.URL
doc = document.characterSet
doc = document.contentType
doc = document.links
// doc = document.links[1].classList
// doc = document.links[0].className
doc = document.images
doc = document.scripts
let scripts = document.scripts
let scriptArrays = Array.from(scripts)
scriptArrays.forEach(function(script, index) {
    console.log(index + script.getAttribute('src'))
})

console.log(doc)