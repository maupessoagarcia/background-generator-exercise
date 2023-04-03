function cssChange() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function randomize() {
  let n1 = Math.trunc(Math.random() * 256);
  let n2 = Math.trunc(Math.random() * 256);
  let n3 = Math.trunc(Math.random() * 256);

  return `#${componentToHex(n1)}${componentToHex(n2)}${componentToHex(n3)}`;
}

//https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

function randomBackground() {
  console.log(color1.value);
  color1.value = randomize();
  console.log(color1.value);
  color2.value = randomize();
  cssChange();
}

const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
var css = document.querySelector("h3");
const button = document.querySelector(".btn");

body.style.background =
  "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
css.textContent = body.style.background;
// let newColor1 = color1.value;
// let newColor2 = color2.value;

color1.addEventListener("input", cssChange);

color2.addEventListener("input", cssChange);

button.addEventListener("click", randomBackground);

// gradient.style.background = "linear-gradient(to right, black, white)";
