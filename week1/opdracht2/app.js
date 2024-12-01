let output = document.getElementById("output")
let input = document.getElementById("input")
let shop = []



function add_product() {
    product = input.value
    shop.push(product)
    output.innerText = shop.join(", ")
}