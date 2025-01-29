let sBtn = document.getElementById("startBtn")
let gameArea = document.getElementById("gameArea")
const char = document.getElementById("char")
let ghost1 = document.getElementById("ghost1")
let ghost2 = document.getElementById("ghost2")
let ghost3 = document.getElementById("ghost3")
let score = document.getElementById("score")

let scoreCounter = 0
let countScore = false
let lost = false

let rX = 150
let bX = 60
let pX = 35
let rY = -30
let bY = 50
let pY = -30
let ghosts1 = false
let ghosts2 = false
let ghosts3 = false

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

let pipe1 = document.getElementById("pipe1")
let pipe2 = document.getElementById("pipe2")
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
            char.style.display = "none"
            ghost1.style.display = "none"
            ghost2.style.display = "none"
            ghost3.style.display = "none"
            lvl.style.display = "none"
            score.style.display = "none"
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
    pipe1.style.display = "flex"
    pipe2.style.display = "flex"
    score.style.display = "flex"
    gameStart = false
    level = true
    buttons()
    ghosts1 = true
    countScore = true
    lost = false
}
function level2() {
    lvl.style.display = "flex"
    char.style.display = "flex"
    pipe1.style.display = "flex"
    pipe2.style.display = "flex"
    score.style.display = "flex"
    gameStart = false
    level = true
    buttons()
    ghosts2 = true
    countScore = true
    lost = false
}
function level3() {
    lvl.style.display = "flex"
    char.style.display = "flex"
    pipe1.style.display = "flex"
    pipe2.style.display = "flex"
    score.style.display = "flex"
    gameStart = false
    level = true
    buttons()
    ghosts3 = true
    countScore = true
    lost = false
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
        if (charRect.left < boxA.right && charRect.right > boxA.right) {
            left = false;
        }
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
        if (charRect.top < boxE.bottom && charRect.bottom > boxE.bottom) {
            up = false;
        }
        if(charRect.right > boxE.left && charRect.left < boxE.left) {
            right = false
        }
    }
    if (
        charRect.left < boxF.right &&
        charRect.right > boxF.left &&
        charRect.top < boxF.bottom &&
        charRect.bottom > boxF.top
    ) {
        if (charRect.bottom > boxF.top && charRect.top < boxF.top) {
            down = false;
        }
        if(charRect.right > boxF.left && charRect.left < boxF.left) {
            right = false
        }
    }
    if (
        charRect.left < boxG.right &&
        charRect.right > boxG.left &&
        charRect.top < boxG.bottom &&
        charRect.bottom > boxG.top
    ) {
        if (charRect.left < boxG.right && charRect.right > boxG.right) {
            left = false;
        }
        if (charRect.top < boxG.bottom && charRect.bottom > boxG.bottom) {
            up = false;
            
        }
        if (charRect.bottom > boxG.top && charRect.top < boxG.top) {
            down = false;
        }
    }
    if (
        charRect.left < boxH.right &&
        charRect.right > boxH.left &&
        charRect.top < boxH.bottom &&
        charRect.bottom > boxH.top
    ) {
        if (charRect.left < boxH.right && charRect.right > boxH.right) {
            left = false;
        }
        if (charRect.top < boxH.bottom && charRect.bottom > boxH.bottom) {
            up = false;
            
        }
        if (charRect.bottom > boxH.top && charRect.top < boxH.top) {
            down = false;
        }
        if(charRect.right > boxH.left && charRect.left < boxH.left) {
            right = false
        }
    }
    if (
        charRect.left < boxI.right &&
        charRect.right > boxI.left &&
        charRect.top < boxI.bottom &&
        charRect.bottom > boxI.top
    ) {
        if (charRect.left < boxI.right && charRect.right > boxI.right) {
            left = false;
        }
        if (charRect.top < boxI.bottom && charRect.bottom > boxI.bottom) {
            up = false;
            
        }
        if (charRect.bottom > boxI.top && charRect.top < boxI.top) {
            down = false;
        }
        if(charRect.right > boxI.left && charRect.left < boxI.left) {
            right = false
        }
    }
    if (
        charRect.left < boxJ.right &&
        charRect.right > boxJ.left &&
        charRect.top < boxJ.bottom &&
        charRect.bottom > boxJ.top
    ) {
        if (charRect.left < boxJ.right && charRect.right > boxJ.right) {
            left = false;
        }
        if (charRect.top < boxJ.bottom && charRect.bottom > boxJ.bottom) {
            up = false;
            
        }
        if (charRect.bottom > boxJ.top && charRect.top < boxJ.top) {
            down = false;
        }
        if(charRect.right > boxJ.left && charRect.left < boxJ.left) {
            right = false
        }
    }
    if (
        charRect.left < boxK.right &&
        charRect.right > boxK.left &&
        charRect.top < boxK.bottom &&
        charRect.bottom > boxK.top
    ) {
        if (charRect.left < boxK.right && charRect.right > boxK.right) {
            left = false;
        }
        if (charRect.top < boxK.bottom && charRect.bottom > boxK.bottom) {
            up = false;
            
        }
        if (charRect.bottom > boxK.top && charRect.top < boxK.top) {
            down = false;
        }
        if(charRect.right > boxK.left && charRect.left < boxK.left) {
            right = false
        }
    }
    if (
        charRect.left < boxL.right &&
        charRect.right > boxL.left &&
        charRect.top < boxL.bottom &&
        charRect.bottom > boxL.top
    ) {
        if (charRect.left < boxL.right && charRect.right > boxL.right) {
            left = false;
        }
        if (charRect.top < boxL.bottom && charRect.bottom > boxL.bottom) {
            up = false;
            
        }
        if (charRect.bottom > boxL.top && charRect.top < boxL.top) {
            down = false;
        }
        if(charRect.right > boxL.left && charRect.left < boxL.left) {
            right = false
        }
    }
    if (
        charRect.left < boxM.right &&
        charRect.right > boxM.left &&
        charRect.top < boxM.bottom &&
        charRect.bottom > boxM.top
    ) {
        if (charRect.left < boxM.right && charRect.right > boxM.right) {
            left = false;
        }
        if (charRect.top < boxM.bottom && charRect.bottom > boxM.bottom) {
            up = false;
            
        }
        if (charRect.bottom > boxM.top && charRect.top < boxM.top) {
            down = false;
        }
        if(charRect.right > boxM.left && charRect.left < boxM.left) {
            right = false
        }
    }
    if (
        charRect.left < boxN.right &&
        charRect.right > boxN.left &&
        charRect.top < boxN.bottom &&
        charRect.bottom > boxN.top
    ) {
        if (charRect.left < boxN.right && charRect.right > boxN.right) {
            left = false;
        }
        if (charRect.top < boxN.bottom && charRect.bottom > boxN.bottom) {
            up = false;
            
        }
        if (charRect.bottom > boxN.top && charRect.top < boxN.top) {
            down = false;
        }
        if(charRect.right > boxN.left && charRect.left < boxN.left) {
            right = false
        }
    }
    if (
        charRect.left < boxO.right &&
        charRect.right > boxO.left &&
        charRect.top < boxO.bottom &&
        charRect.bottom > boxO.top
    ) {
        if (charRect.left < boxO.right && charRect.right > boxO.right) {
            left = false;
        }
        if (charRect.top < boxO.bottom && charRect.bottom > boxO.bottom) {
            up = false;
            
        }
        if (charRect.bottom > boxO.top && charRect.top < boxO.top) {
            down = false;
        }
        if(charRect.right > boxO.left && charRect.left < boxO.left) {
            right = false
        }
    }
    if (
        charRect.left < boxP.right &&
        charRect.right > boxP.left &&
        charRect.top < boxP.bottom &&
        charRect.bottom > boxP.top
    ) {
        if (charRect.left < boxP.right && charRect.right > boxP.right) {
            left = false;
        }
        if (charRect.top < boxP.bottom && charRect.bottom > boxP.bottom) {
            up = false;
            
        }
        if (charRect.bottom > boxP.top && charRect.top < boxP.top) {
            down = false;
        }
        if(charRect.right > boxP.left && charRect.left < boxP.left) {
            right = false
        }
    }
    if (
        charRect.left < boxQ.right &&
        charRect.right > boxQ.left &&
        charRect.top < boxQ.bottom &&
        charRect.bottom > boxQ.top
    ) {
        if (charRect.left < boxQ.right && charRect.right > boxQ.right) {
            left = false;
        }
        if (charRect.top < boxQ.bottom && charRect.bottom > boxQ.bottom) {
            up = false;
            
        }
        if (charRect.bottom > boxQ.top && charRect.top < boxQ.top) {
            down = false;
        }
        if(charRect.right > boxQ.left && charRect.left < boxQ.left) {
            right = false
        }
    }
    if (
        charRect.left < boxR.right &&
        charRect.right > boxR.left &&
        charRect.top < boxR.bottom &&
        charRect.bottom > boxR.top
    ) {
        if (charRect.left < boxR.right && charRect.right > boxR.right) {
            left = false;
        }
        if (charRect.top < boxR.bottom && charRect.bottom > boxR.bottom) {
            up = false;
            
        }
        if (charRect.bottom > boxR.top && charRect.top < boxR.top) {
            down = false;
        }
        if(charRect.right > boxR.left && charRect.left < boxR.left) {
            right = false
        }
    }
    if (
        charRect.left < boxS.right &&
        charRect.right > boxS.left &&
        charRect.top < boxS.bottom &&
        charRect.bottom > boxS.top
    ) {
        if (charRect.left < boxS.right && charRect.right > boxS.right) {
            left = false;
        }
        if (charRect.top < boxS.bottom && charRect.bottom > boxS.bottom) {
            up = false;
            
        }
        if (charRect.bottom > boxS.top && charRect.top < boxS.top) {
            down = false;
        }
        if(charRect.right > boxS.left && charRect.left < boxS.left) {
            right = false
        }
    }
    if (
        charRect.left < boxT.right &&
        charRect.right > boxT.left &&
        charRect.top < boxT.bottom &&
        charRect.bottom > boxT.top
    ) {
        if (charRect.left < boxT.right && charRect.right > boxT.right) {
            left = false;
        }
        if (charRect.top < boxT.bottom && charRect.bottom > boxT.bottom) {
            up = false;
            
        }
        if (charRect.bottom > boxT.top && charRect.top < boxT.top) {
            down = false;
        }
        if(charRect.right > boxT.left && charRect.left < boxT.left) {
            right = false
        }
    }
}

setInterval(pipes, 10);
function pipes() {
    let charRect = char.getBoundingClientRect();
    let p1 = pipe1.getBoundingClientRect();
    let p2 = pipe2.getBoundingClientRect();
    if(charRect.left < p1.right && charRect.right < p1.right) {
        x = 172
    }
    if(charRect.right > p2.left && charRect.left > p2.left) {
        x = 35
    }
}

const ghostTime = setInterval(() => {
    if(ghosts1) {
        ghosts2 = false
        ghosts3 = false

        ghost1.style.display = "flex"

        let charRect = char.getBoundingClientRect()
        let g1 = ghost1.getBoundingClientRect()

        if(g1.right < charRect.right) {
            rX += 0.3
        } else if(g1.right > charRect.right) {
            rX -= 0.3
        }
        if (g1.top > charRect.top) {
            rY -= 0.3
        } else if(g1.top < charRect.top) {
            rY += 0.3
        }

        ghost1.style.marginLeft = rX + "vh"
        ghost1.style.marginTop = rY + "vh"
    }
    if(ghosts2) {
        ghosts1 = false
        ghosts3 = false
        ghost1.style.display = "flex"
        ghost2.style.display = "flex"

        let charRect = char.getBoundingClientRect()
        let g1 = ghost1.getBoundingClientRect()
        let g2 = ghost2.getBoundingClientRect()

        if(g1.right < charRect.right) {
            rX += 0.3
        } else if(g1.right > charRect.right) {
            rX -= 0.3
        }
        if (g1.top > charRect.top) {
            rY -= 0.3
        } else if(g1.top < charRect.top) {
            rY += 0.3
        }
        if(g2.right < charRect.right) {
            bX += 0.2
        } else if(g2.right > charRect.right) {
            bX -= 0.2
        }
        if (g2.top > charRect.top) {
            bY -= 0.2
        } else if(g2.top < charRect.top) {
            bY += 0.2
        }

        ghost1.style.marginLeft = rX + "vh"
        ghost1.style.marginTop = rY + "vh"
        ghost2.style.marginLeft = bX + "vh"
        ghost2.style.marginTop = bY + "vh"
    }
    if(ghosts3) {
        ghosts1 = false
        ghosts2 = false
        ghost1.style.display = "flex"
        ghost2.style.display = "flex"
        ghost3.style.display = "flex"

        let charRect = char.getBoundingClientRect()
        let g1 = ghost1.getBoundingClientRect()
        let g2 = ghost2.getBoundingClientRect()
        let g3 = ghost3.getBoundingClientRect()

        if(g1.right < charRect.right) {
            rX += 0.3
        } else if(g1.right > charRect.right) {
            rX -= 0.3
        }
        if (g1.top > charRect.top) {
            rY -= 0.3
        } else if(g1.top < charRect.top) {
            rY += 0.3
        }
        if(g2.right < charRect.right) {
            bX += 0.2
        } else if(g2.right > charRect.right) {
            bX -= 0.2
        }
        if (g2.top > charRect.top) {
            bY -= 0.2
        } else if(g2.top < charRect.top) {
            bY += 0.2
        }
        if(g3.right < charRect.right) {
            pX += 0.05
        } else if(g3.right > charRect.right) {
            pX -= 0.05
        }
        if (g3.top > charRect.top) {
            pY -= 0.05
        } else if(g3.top < charRect.top) {
            pY += 0.05
        }

        ghost1.style.marginLeft = rX + "vh"
        ghost1.style.marginTop = rY + "vh"
        ghost2.style.marginLeft = bX + "vh"
        ghost2.style.marginTop = bY + "vh"
        ghost3.style.marginLeft = pX + "vh"
        ghost3.style.marginTop = pY + "vh"
    }
    
}, 50);

setInterval(points, 1000);
function points() {
    if(countScore) {
        scoreCounter += 50
    }
    score.innerText = "TIME: " + scoreCounter
}

setInterval(lose, 10);
function lose() {
    let charRect = char.getBoundingClientRect()
    let g1 = ghost1.getBoundingClientRect()
    let g2 = ghost2.getBoundingClientRect()
    let g3 = ghost3.getBoundingClientRect()

    if (
        charRect.left < g1.right &&
        charRect.right > g1.left &&
        charRect.top < g1.bottom &&
        charRect.bottom > g1.top
    ) {
        if (charRect.left < g1.right && charRect.right > g1.right) {
            lost = true
        }
        if (charRect.top < g1.bottom && charRect.bottom > g1.bottom) {
            lost = true
            
        }
        if (charRect.bottom > g1.top && charRect.top < g1.top) {
            lost = true
        }
        if(charRect.right > g1.left && charRect.left < g1.left) {
            lost = true
        }
    }
    if(lost) {
        window.location.reload()
    }
}