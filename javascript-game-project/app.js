let sBtn = document.getElementById("startBtn")

sBtn.addEventListener("click", function(){
    let differentColor = Math.floor(Math.random() * 5)
    block.style.backgroundColor = color[differentColor]
})