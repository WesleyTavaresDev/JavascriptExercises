var randomColor = require('randomcolor');

  
function setColor() {

  const boxes = document.getElementsByName('box');
  
  const hue = document.querySelector(".colors");
  let colors = randomColor({hue: hue.value, luminosity: getLuminosityValue() ,count: boxes.length})

  for(let i in boxes) {
    boxes[i].style.backgroundColor = colors[i];
  }

  const finalColors = document.getElementById('finalcolors');
  finalColors.innerText = (`Colors: [${colors}]`);
}

function getLuminosityValue() {
  const luminosity = document.getElementById('value').value;

  return luminosity === "0" ? 'dark' : luminosity === "5" ? 'bright' : 'light';
}