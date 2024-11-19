let koek = document.getElementById("cookies")
let verify = document.getElementById("verify")
let age = document.getElementById("age")

function cookies() {
    //koek.style.display = "flex"
    if (koek.style.display === "none") {
        koek.style.display = "flex"  
    } else {
        koek.style.display = "none"
    }
}

document.getElementById('button').onclick = function() {
    if (age.value > 18 || age.value == 18) {
        window.open("https://www.amazon.nl/KEELYY-decoratief-beweegbare-gewrichten-themafeesten/dp/B0D77Q2DXZ/ref=sr_1_5?__mk_nl_NL=ÅMÅŽÕÑ&crid=W9HVR283DDU6&dib=eyJ2IjoiMSJ9.eTcpMedjO2tO_qMvDrrdAPr-BNKAvtaucjicgDnKRpC8D7DCa-DP9W3bSo8IC2MN28i0mawUkJd8Yi-F6SGsoYe7I0-0HZCG8M7FYKxZNZrgHi_t8jvgR9pJBwPIwmAEjYGvc4VDeLNDDRqVTwvVkarLuf3m5IHzNcYH6-lQ_tDCFcUN-Gi5jOFTVCLhndWVCntsy3ON1GVucGp_Es6oqxF0LgM9Tpc23J13bVwB-HC2zamJbmWlQTFJ3EFG8N69DzZwSRU8d1dBPvyl28Yk1oab3_QihNcxZpegSYhy3U8.98rJc3CqhFGdgaI2_EHr0xetfX59G9o3RLQVkemZyPk&dib_tag=se&keywords=skeleton&qid=1732021720&sprefix=skeleton%2Caps%2C79&sr=8-5&th=1")
    } else {
        window.open("./fout.html")
    }
 }