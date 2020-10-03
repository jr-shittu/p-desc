// set over to false to create default
let over = false;

// set half of window width to middle
let middle = window.innerWidth / 2;

// search for main
let main = document.querySelector("#main");

// search for grid
let grid = document.querySelector(".grid");

// search for ltImg
let ltImg = document.querySelector("#ltImg");

// search for rtImg
let rtImg = document.querySelector("#rtImg");

// search for ltText
let ltText = document.querySelector("#ltText");

// search for rtText
let rtText = document.querySelector("#rtText");

// create mouseover event function for grid container
grid.onmouseover = function() {
    console.log("true");
    main.classList.add("hidden");
    over = true;
}

//create mouseout event for grid
grid.onmouseout = function() {
    console.log("false");
    main.classList.remove(".hidden");
    over = false;
};

document.onmousemove = ()=>{
    let x = event.clientX;
    if(over == true){
        if(x < middle){
            ltImg.classList.add("nowEvolve");
            ltText.classList.remove("hidden");
            rtImg.classList.remove("nowEvolve");
            rtText.classList.add("hidden");
        } else{
            ltImg.classList.remove("nowEvolve");
            ltText.classList.add("hidden");
            rtImg.classList.add("nowEvolve");
            rtText.classList.remove("hidden");
        }
    } else{
        ltImg.classList.remove("nowEvolve");
        ltText.classList.add("hidden");
        rtImg.classList.remove("nowEvolve");
        rtText.classList.add("hidden");
    }
};

