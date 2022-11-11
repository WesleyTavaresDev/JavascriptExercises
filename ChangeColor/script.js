var randomColor = require('randomcolor');



function setColor() {
  let colors = randomColor({count: 3})
  const divLeft = document.getElementById('div-left')
  divLeft.style.backgroundColor = colors[0];
  divLeft.innerText = colors[0];

  const divCenter = document.getElementById('div-center');
  divCenter.style.backgroundColor = colors[1];
  divCenter.innerText = colors[1]

  const divRight = document.getElementById('div-right');
  divRight.style.backgroundColor = colors[2];
  divRight.innerText = colors[2]
}