let mandje = []

mandje.push("Bananen")
mandje.push("Whiskey")
mandje.push("Chips")
mandje.push("Bonen")
mandje.push("Aardappelen")

document.getElementById("opdr1").innerText = "Er zitten " + mandje.length + " producten in uw winkelmand";

document.getElementById("opdr2").innerText = "Uw producten zijn:" + mandje.toString();

document.getElementById("opdr3").innerText = mandje[4] + " staat op de vierde plek in uw mandje"

mandje[1] = "Bier"
document.getElementById("opdr4").innerText = "Uw producten zijn:" + mandje.toString();

document.getElementById("opdr5").innerText = "Uw producten zijn:" + mandje.toString();
function product_toevoegen() {
    mandje.push("Chocolade")
    document.getElementById("opdr5").innerText = "Uw producten zijn:" + mandje.toString();
}

if (mandje.length > 1) {
    document.getElementById("opdr6").innerText = "U kunt boodschappen doen.";
} else {
    document.getElementById("opdr6").innerText = "U heeft niks om te kopen.";
}

if (mandje[4]== "Drop") {
    document.getElementById("opdr7").innerText = mandje.toString();
} else {
    document.getElementById("opdr7").innerText = "U heeft geen drop.";
}

document.getElementById("opdr8").innerText = mandje.join(", ")

document.getElementById("opdr9a").innerText = mandje.join(", ")
mandje.splice(0,2)
document.getElementById("opdr9b").innerText = mandje.join(", ")

mandje.sort()
document.getElementById("opdr10").innerText = mandje.join(", ")