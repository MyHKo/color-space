'use strict'

let white;
let red;
let green;
let blue;
let stringColor
let hexStringColor


function generateBlack(circle){
    let stringColor;
    let hexStringColor

    white = Math.floor(Math.random() * 256);
    stringColor = `(${white},${white},${white})`
    hexStringColor = `#${colorToHex(white)}${colorToHex(white)}${colorToHex(white)}`

    paint(circle, stringColor, hexStringColor)
}

function generateRed(circle){
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 51);
    blue = Math.floor(Math.random() * 51);

    while(red - 50 < green || red - 50 < blue)
        red = Math.floor(Math.random() * 256);

    stringColor = `(${red},${green},${blue})`
    hexStringColor = `#${colorToHex(red)}${colorToHex(green)}${colorToHex(blue)}`

    paint(circle, stringColor, hexStringColor)
}

function generateBlue(circle){
    red = Math.floor(Math.random() * 150);
    green = Math.floor(Math.random() * 150);
    blue = Math.floor(Math.random() * 256);

    while(blue < green || blue - 100 < red)
        blue = Math.floor(Math.random() * 256);

    stringColor = `(${red},${green},${blue})`
    hexStringColor = `#${colorToHex(red)}${colorToHex(green)}${colorToHex(blue)}`

    paint(circle, stringColor, hexStringColor)
}

function generateYellow(circle){
    red = Math.floor(Math.random() * (256-200) + 200);
    green = Math.floor(Math.random() * (256 - 200) + 200);
    blue = Math.floor(Math.random() * 50);

    stringColor = `(${red},${green},${blue})`
    hexStringColor = `#${colorToHex(red)}${colorToHex(green)}${colorToHex(blue)}`

    paint(circle, stringColor, hexStringColor)
}

function paint(circle, rgb, hex){
    const labels = document.querySelectorAll(".label")

    circle.dataset.colorRgb = rgb
    circle.dataset.colorHex = hex

    circle.style.backgroundColor = 'rgb' + rgb
    labels[1].style.color = 'rgb' + rgb
    labels[0].style.color = 'rgb' + rgb

    labels[1].textContent = rgb
    labels[0].textContent = hex
}

function paintLabels(circle){
    const labels = document.querySelectorAll(".label")
    const rgb = circle.dataset.colorRgb
    const hex = circle.dataset.colorHex

    console.log(rgb)

    labels[1].style.color = 'rgb' + rgb
    labels[0].style.color = 'rgb' + rgb

    labels[1].textContent = rgb
    labels[0].textContent = hex
}

function colorToHex(color){
    color = color.toString(16).toUpperCase();
    if(color.length === 1){
        return '0' + color
    }
    return color
}

export {generateBlack, generateRed, generateBlue, generateYellow, paintLabels};