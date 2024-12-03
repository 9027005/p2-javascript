let tien = 10
let tafelVtien = []
let output = document.getElementById("prdct")

//for (i = 0; i <=10; i++) { let product = i*tien; tafelVtien.push(i +"x"+tien + '='+ product)}
//document.getElementById("prdct").innerHTML = tafelVtien.join("<br>")


function tafel_van() {
    //console.log(num1)
    let input = document.getElementById("input").value
    for (i = 0; i <=10; i++) { 
        output.innerHTML +=  i + " x " + input + " = " + i * input + "<br>";
    }
}
console.log(input.value)
