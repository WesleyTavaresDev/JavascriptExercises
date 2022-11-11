var randomColor = require('randomcolor');

function setColor() {
  document.getElementById('div-left').style.backgroundColor = randomColor();
  document.getElementById('div-center').style.backgroundColor = randomColor();
  document.getElementById('div-right').style.backgroundColor = randomColor();
  
}