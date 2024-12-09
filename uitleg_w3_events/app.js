let btn = document.getElementById("btn")
let output = document.getElementById("output")

btn.addEventListener("click", function(){
    console.log("temp")
    output.innerText = "geklikt op de knop"
})
window.addEventListener("keydown", function(e){
    if (e.key == "d") {
        output.innerText = "ik ga naar rechts"
        console.log("ik ga naar rechts")
    }
    if (e.key == "a") {
        output.innerText = "ik ga naar links"
        console.log("ik ga naar links")
    }
    if (e.key == "w") {
        output.innerText = "ik ga naar voor"
        console.log("ik ga naar voor")
    }
    if (e.key == "s") {
        output.innerText = "ik ga naar achter"
        console.log("ik ga naar achter")
    }
})