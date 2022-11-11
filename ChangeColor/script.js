var randomColor = require('randomcolor');



function setColor() {
  const hue = document.querySelector(".colors");
  const lumi = document.getElementById('value');

  let luminosityValue = () => {
    switch (lumi.value) {
      case  "0":
        return 'dark';
      case "5":
        return 'bright'
      case  "10":
        return 'light'
    }
  }

  let colors = randomColor({hue: hue.value, luminosity: luminosityValue(),count: 3})

  const divLeft = document.getElementById('div-left')
  divLeft.style.backgroundColor = colors[0];

  const divCenter = document.getElementById('div-center');
  divCenter.style.backgroundColor = colors[1];

  const divRight = document.getElementById('div-right');
  divRight.style.backgroundColor = colors[2];
}