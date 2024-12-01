let output = document.getElementById("output")
let nbr = []

//for (let i = 0; i <= 100; i++) { nbr.push(i); output.innerText = nbr.join(", ")}
for (let i = 100; i >= 0; i--) { nbr.push(i); output.innerText = nbr.join(", ")}