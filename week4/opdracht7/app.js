let block = document.getElementById("block")
let width = window.innerWidth
let positie = 0
let color = ["red","blue","yellow","green"]

const timer = setInterval(function(){
    positie += 20

    if (positie > width) {
        positie = 0
    }
    
    block.style.left = positie + "px"
},1000)

block.addEventListener("click", function(){
    let differentColor = Math.floor(Math.random() * 5)
    block.style.backgroundColor = color[differentColor]
})