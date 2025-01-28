let sBtn = document.getElementById("startBtn")
let gameArea = document.getElementById("gameArea")
let gameStart = false
let started = false
let heightS = 10
let widthS = 30
let marginS = 35
let r = 35
let g = 64
let b = 153
let radius = 10

let a = 0
let easyBtn = document.getElementById("easy")
let medBtn = document.getElementById("medium")
let hardBtn = document.getElementById("hard")
let lvls = document.getElementById("lvls")
let choice = ""


window.addEventListener('keypress', function(e){
    console.log(e.code)
    if(e.code == "Space" && !gameStart && !started) {
        console.log("het werkt")
        sBtn.innerText = ""
        screenGrow()
        gameStart = true
        started = true
    }
})

function screenGrow() {
    for(let i=1; i<=20;i++){
        setTimeout(function(){
            heightS += 3
            widthS += 2
            marginS -= 1
            radius -= 0.5
            r -= 1.75
            g -= 3.2
            b -= 7.65
            sBtn.style.height = heightS + "vh"
            sBtn.style.width = widthS + "vw"
            sBtn.style.marginLeft = marginS + "vw"
            sBtn.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
            sBtn.style.borderRadius = radius + "px"
            console.log(marginS)
            if (i == 20) {
                buttons()
            }
        },i*100)
    }
}

function buttons() {
    if(gameStart) {
        for(i = 0; i < 10; i++) {
            setTimeout(function(){
                a += 0.1
                easyBtn.style.backgroundColor = "rgba(10, 200, 100, " + a + ")"
                medBtn.style.backgroundColor = "rgba(10, 200, 100, " + a + ")"
                hardBtn.style.backgroundColor = "rgba(10, 200, 100, " + a + ")"
            },i*100)
            easyBtn.style.display = "flex"
            medBtn.style.display = "flex"
            hardBtn.style.display = "flex"
        }
        if(i == 10) {
            easyBtn.innerText = "1"
            medBtn.innerText = "2"
            hardBtn.innerText = "3"
        }
    } else {
        easyBtn.innerText = ""
        medBtn.innerText = ""
        hardBtn.innerText = ""
        easyBtn.style.display = "none"
        medBtn.style.display = "none"
        hardBtn.style.display = "none"
        easyBtn.style.backgroundColor = "rgba(10, 200, 100, " + 1 + ")"
        medBtn.style.backgroundColor = "rgba(10, 200, 100, " + 1 + ")"
        hardBtn.style.backgroundColor = "rgba(10, 200, 100, " + 1 + ")"
    }
}

const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    choice = e.target.id;
    console.log(choice)
    if(choice == "easy") {
        level1()
    }

}))

function level1() {
    document.getElementById("lvl1").style.display = "flex"
    gameStart = false
    console.log("hoera")
    buttons()
}