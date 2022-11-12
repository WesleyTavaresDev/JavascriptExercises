var randomColor = require('randomcolor');

  
function setColor() {

  const boxes = document.getElementsByName('box');
  
  const hue = document.querySelector(".colors");
  let colors = randomColor({hue: hue.value, luminosity: luminosityValue() ,count: boxes.length})

  for(let i in boxes) {
    boxes[i].style.backgroundColor = colors[i];
  }

  const finalColors = document.getElementById('finalcolors');
  finalColors.innerText = (`Colors: [${colors}]`);
}

function luminosityValue() {
  const luminosity = document.getElementById('value').value;

  return luminosity === "0" ? 'dark' : luminosity === "5" ? 'bright' : 'light';
}