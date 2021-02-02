let container = document.querySelector('.container')
let paintArea = document.createElement('div')
let colorButton = document.querySelector('button')
var col = 'yellow'
var res = 'resInn'
var colArr = ['#FF6347', '#FFA500', '#FFFF00']

/*var size = document.getElementById('slider').value 
console.log(size)

function findValue() {
    var x = document.getElementById('slider').value 
    console.log(x)
}
*/
function makeRows(x) {
    console.log(x)
    reset()
    container.style.setProperty('--grid-rows', x);
    container.style.setProperty('--grid-cols', x);
    for (c = 0; c < (x * x); c++) {
      let cell = document.createElement("div");
      cell.style.cssText = 'border: solid 1px #F5F5DC';
      container.appendChild(cell).className = "grid-item";
    };
  };
  
  makeRows(3);

function reset() {
    let pixels = container.querySelectorAll('div')
    pixels.forEach(pixel => pixel.remove())
}

function colorSet() {
    let coloredCells = container.querySelectorAll('div')
      coloredCells.forEach(coloredCell => coloredCell.setAttribute('style', 'background: black'))
    }

function colorChoice(el) {
    console.log(el.className);
   switch(el.className) {
      case "grey": col = 'grey'
      break
      case "black": col = 'black'
      break
      case "eraser": col = '#FFFFF0'
      break
      case "rainbow": col = 'green'
    }} 

/*
var pixs = container.querySelectorAll('div')
pixs.forEach(pix => pix.addEventListener('mouseover', colorSet))
*/
container.addEventListener('mouseover', function (e) {
  if (e.target.matches('.grid-item')) {
    e.target.style.backgroundColor = col;
  }
});

 function clearAll () {
  let pixels = container.querySelectorAll('div')
  pixels.forEach(pixel => pixel.style.backgroundColor = '#FFFFF0')
 }

