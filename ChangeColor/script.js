var randomColor = require('randomcolor');

function setColor() {
  document.getElementById('div-left').style.color = randomColor();
  document.getElementById('div-center').style.color = randomColor();
  document.getElementById('div-right').style.color = randomColor();
  
}