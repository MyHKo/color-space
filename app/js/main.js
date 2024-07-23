'use strict'
import {setInitialPositions} from "./style.js"
import {generateBlack, generateRed, generateBlue, generateYellow} from "./colors.js";

function changeColor(circle){
    const color = circle.classList[1]

    switch(color){
        case "black":
            generateBlack(circle)
            break;
        case "red":
            generateRed(circle)
            break;
        case "blue":
            generateBlue(circle)
            break;
        case "yellow":
            generateYellow(circle)
            break;
    }
}
setInitialPositions();

document.addEventListener('click', (event) => {
    if(event.target.classList.contains('circle')){
        changeColor(event.target)
    }
})


