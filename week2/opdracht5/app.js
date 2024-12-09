
let listA = ["externe SSD","amazon fire stick","Philips Performer Compact 3000 Series XD3110/09","kaas schaaf","XREAL Air 2 Pro AR Glasses"]


//function lijst() {
    for (i = 0;i <= 4; i++) {
        let list = document.getElementById("lijst")
        list.innerHTML += listA[i] + "<br>"
    }
