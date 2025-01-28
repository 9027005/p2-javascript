let block = document.getElementById('block');
let positie = 0;
let verical = 0

window.addEventListener('keydown', function(e){
    console.log(e)
    if(e.key == "d"){
        positie += 20;
        block.style.left = positie + 'px';
    }
    if(e.key == "w"){
        verical -= 20;
        block.style.top = verical + 'px';
    }
    if(e.key == "a"){
        positie -= 20;
        block.style.left = positie + 'px';
    }
    if(e.key == "s"){
        verical += 20;
        block.style.top = verical + 'px';
    }
})