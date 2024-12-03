let tien = 10
let tafelVtien = []

//for (i = 0; i <=10; i++) { let product = i*tien; tafelVtien.push(i +"x"+tien + '='+ product)}
//document.getElementById("prdct").innerHTML = tafelVtien.join("<br>")

let input = document.getElementById("btn")
let inputVar = input.value


function tafel_van(num1) {
    //console.log(num1)
    //num1 = input.value
    for (i = 0; i <=10; i++) { 
        
        let product = i*num1; 
        tafelVtien.push(i +"x"+num1 + '='+ product)
    }
}
tafel_van(input.value)

document.getElementById("prdct").innerHTML = tafelVtien.join("<br>")