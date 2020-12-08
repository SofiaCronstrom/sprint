let sax = document.getElementById("img2");
let clickedBottle = false
let bottle = document.getElementById("img1");
let glue = document.getElementById("img3");
document.getElementById("switch").addEventListener("click", changeImg);

sax.addEventListener("click", saxMove);
function saxMove(){
    sax.classList.add("imgSprint");
}
function changeImg(){

    if (clickedBottle == false){ 
        bottle.style.display = "block";
        glue.style.display = "none";
        clickedBottle = true;
    } else if (clickedBottle){ 
        bottle.style.display = "none";
        glue.style.display = "block";
        clickedBottle = false;
    }
    
}