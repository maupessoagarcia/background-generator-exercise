const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
var css = document.querySelector("h3");

const cssChange = () => {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background;
};

// let newColor1 = color1.value;
// let newColor2 = color2.value;

color1.addEventListener("input", cssChange);

color2.addEventListener("input", cssChange);

// gradient.style.background = "linear-gradient(to right, black, white)";
