let hunger = 100;
let energy = 100;
let happiness = 100;


let statusScreen = document.getElementById("statusMessage");
let eatButton = document.getElementById("feed");
let sleepButton = document.getElementById("sleep");
let playButton = document.getElementById("play");
let hungerText = document.getElementById("hunger");
let energyText = document.getElementById("energy");
let happinessText = document.getElementById("happiness");


function updateStatus() {
    hungerText.innerText = "Honger: "+ hunger;
    energyText.innerText = "Energie: " + energy;
    happinessText.innerText = "Happiness: "+ happiness;

    if (hunger <= 0 && energy <= 0 && happiness <= 0) {
        statusScreen.innerText = "Je Tamagotchi is dood!";
        clearInterval(timer);
    } else {
        statusScreen.innerText = "Je Tamagotchi is gelukkig!";
    }
}

feed.addEventListener("click", () => {
    hunger = Math.min(hunger + 20, 100);
    updateStatus();
});

sleep.addEventListener("click", () => {
    energy = Math.min(energy + 20, 100);
    updateStatus();
});

play.addEventListener("click", () => {
    happiness = Math.min(happiness + 20, 100);
    updateStatus();
});

const timer = setInterval(() => {
    hunger = Math.max(hunger - 1, 0);
    energy = Math.max(energy - 1, 0);
    happiness = Math.max(happiness - 1, 0);
    updateStatus();
}, 1000);

updateStatus();

