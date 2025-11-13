let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    
    let randomColor = getRandomGradient();
    let colorInfo = document.querySelector(".color-info");
    colorInfo.innerText = randomColor;
  
    let box = document.querySelector(".box");
   box.style.background =randomColor;
})


function getrandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    return  `rgb(${red}, ${green}, ${blue})`
}


function getRandomGradient() {
    let c1 = getrandomColor();
    let c2 = getrandomColor();
    return `linear-gradient(to right, ${c1}, ${c2})`;
}

