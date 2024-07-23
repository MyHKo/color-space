'use strict'

function generateBlack(circle){
    const labels = document.querySelectorAll(".label")
    let newColor;
    let hexColor;
    let stringColor;
    let hexStringColor

    newColor = Math.floor(Math.random() * 256);
    hexColor = colorToHex(newColor)
    stringColor = `(${newColor},${newColor},${newColor})`
    hexStringColor = `#${hexColor}${hexColor}${hexColor}`

    paint(circle, stringColor,hexColor)
}

function generateRed(circle){
    const labels = document.querySelectorAll(".label")
    let red;
    let green;
    let blue;
    let stringColor
    let hexStringColor

    red  = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 51);
    blue = Math.floor(Math.random() * 51);

    stringColor = `(${red},${green},${blue})`
    hexStringColor = `#${colorToHex(red)}${colorToHex(green)}${colorToHex(blue)}`

    paint(circle, stringColor, hexStringColor)

}

function paint(circle, rgb, hex){
    const labels = document.querySelectorAll(".label")

    circle.style.backgroundColor = 'rgb' + rgb
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

export {generateBlack}