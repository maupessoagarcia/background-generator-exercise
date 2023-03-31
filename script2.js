const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

let newColor1 = color1.value;
let newColor2 = color2.value;

color1.addEventListener("change", function () {
  newColor1 = color1.value;
  console.log(newColor1);
  cssChange();
});

color2.addEventListener("change", function () {
  newColor2 = color2.value;
  console.log(newColor2);
  cssChange();
});

// gradient.style.background = "linear-gradient(to right, black, white)";

const cssChange = () => {
  body.style.background =
    "linear-gradient(to right," + newColor1 + "," + newColor2 + ")";
};
