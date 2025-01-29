let sBtn = document.getElementById("startBtn")
let gameArea = document.getElementById("gameArea")
const char = document.getElementById("char")
let lvl = document.getElementById("lvl1")
let gameStart = false
let started = false
let heightS = 10
let widthS = 30
let marginS = 35
let r = 35
let g = 64
let b = 153
let radius = 10
let level = false

let up = false
let down = false
let left = false
let right = false
let x = 35
let y = 50

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

    if(e.code == "KeyW" && level) {
        up = true
        down = false
        left = false
        right = false
    }
    if(e.code == "KeyS" && level) {
        up = false
        down = true
        left = false
        right = false
    }
    if(e.code == "KeyA" && level) {
        up = false
        down = false
        left = true
        right = false
    }
    if(e.code == "KeyD" && level) {
        up = false
        down = false
        left = false
        right = true
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
    } else if(choice == "medium") {
        level2()
    } else if(choice == "hard") {
        level3()
    }
}))

function level1() {
    lvl.style.display = "flex"
    char.style.display = "flex"
    gameStart = false
    level = true
    buttons()
}
function level2() {
    lvl.style.display = "flex"
    char.style.display = "flex"
    gameStart = false
    level = true
    buttons()
}
function level3() {
    lvl.style.display = "flex"
    char.style.display = "flex"
    gameStart = false
    level = true
    buttons()
}

const timer = setInterval(() => {
    if (up) {
        y -= 0.5
        char.style.top = y + "vh"
    } else if(down) {
        y += 0.5
        char.style.top = y + "vh"
    }
    if (left) {
        x -= 0.5
        char.style.left = x + "vh"
    } else if(right) {
        x += 0.5
        char.style.left = x + "vh"
    }
    
}, 50);

let box1 = document.getElementById("obstacle1-1")
let box2 = document.getElementById("obstacle1-2")
let box3 = document.getElementById("obstacle1-3")
let box4 = document.getElementById("obstacle1-4")
let box5 = document.getElementById("obstacle1-5")
let box6 = document.getElementById("obstacle1-6")
let box7 = document.getElementById("obstacle2-1")
let box8 = document.getElementById("obstacle2-2")
let box9 = document.getElementById("obstacle2-3")
let box10 = document.getElementById("obstacle2-4")
let box11 = document.getElementById("obstacle2-5")
let box12 = document.getElementById("obstacle2-6")
let box13 = document.getElementById("obstacle2-7")
let box14 = document.getElementById("obstacle2-8")
let box15 = document.getElementById("obstacle2-9")
let box16 = document.getElementById("obstacle2-10")
let box17 = document.getElementById("obstacle2-11")
let box18 = document.getElementById("obstacle2-12")
let box19 = document.getElementById("obstacle2-13")
let box20 = document.getElementById("obstacle2-14")


setInterval(Collide, 10)
function Collide() {
    let charRect = char.getBoundingClientRect();
    let boxA = box1.getBoundingClientRect();
    let boxB = box2.getBoundingClientRect();
    let boxC = box3.getBoundingClientRect();
    let boxD = box4.getBoundingClientRect();
    let boxE = box5.getBoundingClientRect();
    let boxF = box6.getBoundingClientRect();
    let boxG = box7.getBoundingClientRect();
    let boxH = box8.getBoundingClientRect();
    let boxI = box9.getBoundingClientRect();
    let boxJ = box10.getBoundingClientRect();
    let boxK = box11.getBoundingClientRect();
    let boxL = box12.getBoundingClientRect();
    let boxM = box13.getBoundingClientRect();
    let boxN = box14.getBoundingClientRect();
    let boxO = box15.getBoundingClientRect();
    let boxP = box16.getBoundingClientRect();
    let boxQ = box17.getBoundingClientRect();
    let boxR = box18.getBoundingClientRect();
    let boxS = box19.getBoundingClientRect();
    let boxT = box20.getBoundingClientRect();

    // Controleer of er een botsing is
    if (
        charRect.left < boxA.right &&
        charRect.right > boxA.left &&
        charRect.top < boxA.bottom &&
        charRect.bottom > boxA.top
    ) {
        // Controleer of de botsing van rechts komt
        if (charRect.left < boxA.right && charRect.right > boxA.right) {
            left = false;
        }

        // Controleer of de botsing van onder komt
        if (charRect.top < boxA.bottom && charRect.bottom > boxA.bottom) {
            up = false;
            
        }
    }
    if (
        charRect.left < boxB.right &&
        charRect.right > boxB.left &&
        charRect.top < boxB.bottom &&
        charRect.bottom > boxB.top
    ) {
        if (charRect.left < boxB.right && charRect.right > boxB.right) {
            left = false;
        }

        // Controleer of de botsing van boven komt
        if (charRect.bottom > boxB.top && charRect.top < boxB.top) {
            down = false;
            
        }
    }
    if (
        charRect.left < boxC.right &&
        charRect.right > boxC.left &&
        charRect.top < boxC.bottom &&
        charRect.bottom > boxC.top
    ) {

        // Controleer of de botsing van onder komt
        if (charRect.top < boxC.bottom && charRect.bottom > boxC.bottom) {
            up = false;
            
        }
    }
    if (
        charRect.left < boxD.right &&
        charRect.right > boxD.left &&
        charRect.top < boxD.bottom &&
        charRect.bottom > boxD.top
    ) {

        // Controleer of de botsing van boven komt
        if (charRect.bottom > boxD.top && charRect.top < boxD.top) {
            down = false;
            
        }
    }
    if (
        charRect.left < boxE.right &&
        charRect.right > boxE.left &&
        charRect.top < boxE.bottom &&
        charRect.bottom > boxE.top
    ) {

        // Controleer of de botsing van boven komt
        if (charRect.bottom > boxE.top && charRect.top < boxE.top) {
            down = false;
            
        }
    }
}