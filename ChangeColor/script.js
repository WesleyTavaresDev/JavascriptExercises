var randomColor = require('randomcolor');

  
function setColor() {
  const hue = document.querySelector(".colors");

  let colors = randomColor({hue: hue.value, luminosity: luminosityValue() ,count: 3})
  
  const divLeft = document.getElementById('div-left')
  divLeft.style.backgroundColor = colors[0];
  
  const divCenter = document.getElementById('div-center');
  divCenter.style.backgroundColor = colors[1];

  const divRight = document.getElementById('div-right');
  divRight.style.backgroundColor = colors[2];

  const finalColors = document.getElementById('finalcolors');
  finalColors.innerText = (`Colors: [${colors}]`);
}


function luminosityValue() {
  const luminosity = document.getElementById('value').value;
  return luminosity === "0" ? 'dark' : luminosity === "5" ? 'bright' : 'light';

}