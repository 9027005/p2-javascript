let block = document.getElementById("block")
let width = window.innerWidth
let  positie = 0

const timer = setInterval(function(){
    positie += 20

    if (positie > width) {
        positie = 0
    }
    
    block.style.left = positie + "px"
},100)