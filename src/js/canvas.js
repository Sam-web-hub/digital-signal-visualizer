import utils, { getInputValue, randomIntFromRange } from './utils'
import formulas, { uniPolarNRZ , NRZI } from './formulas'
// import style, {addStyle, style} from './style'

// addStyle();
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

const HEIGHT = 300
let WIDTH = innerWidth

let BINARY = "";
canvas.width = WIDTH
canvas.height = HEIGHT

const mouse = {
  x: WIDTH / 2,
  y: HEIGHT / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = WIDTH
  canvas.height = HEIGHT

  init()
})

document.getElementById("button").onclick =()=> {  
BINARY =  getInputValue()
if(((50*BINARY.length)+50)>WIDTH){
WIDTH=(50*BINARY.length)+100
}
init()
  };  

// Objects
class Object {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.draw()
  }
}

function drawBoard() {
  c.clearRect(0, 0, canvas.width, canvas.height)
  c.beginPath(); 
  c.moveTo(5,5);
  c.lineTo(WIDTH-5,5)
  c.lineTo(WIDTH-5,HEIGHT - 5)
  c.lineTo(WIDTH-5,HEIGHT-5)
  c.lineTo(5,HEIGHT-5)
  c.lineTo(5,5)
  c.stroke();
  c.closePath()

  c.beginPath();
  c.moveTo(5, HEIGHT / 2)
  c.lineTo(WIDTH-5,HEIGHT / 2)
  c.setLineDash([10, 5])
  c.lineWidth = 2
  c.stroke();
   c.closePath()

  
  for (let i = 50,j=0; i <=(50*BINARY.length)+50; i += 50,j++) 
  {
    c.beginPath();
  c.lineWidth = .5
  c.setLineDash([0, 0])
  c.moveTo(i, 5);
  c.lineTo(i,HEIGHT -5);
  c.stroke();
  c.closePath()
  drawNumbers(i,j)
 }

 c.beginPath();
 c.moveTo(5, (HEIGHT / 2 )+50)
 c.lineTo(WIDTH-5,(HEIGHT / 2 )+50)
 c.setLineDash([10, 5])
 c.lineWidth = 2
 c.stroke();
  c.closePath()


  c.beginPath();
  c.moveTo(5, (HEIGHT / 2 )-50)
  c.lineTo(WIDTH-5,(HEIGHT / 2 ) - 50)
  c.setLineDash([10, 5])
  c.lineWidth = 2
  c.stroke();
   c.closePath()


}

function drawNumbers(i,j){
   
  c.font = 'bold 20px sans-serif';
  if(j<BINARY.length)
  c.fillText(BINARY.charAt(j)+"", i+25, 30)
}



function init() {
  canvas.width = WIDTH
  drawBoard()
 NRZI(c,BINARY,HEIGHT,WIDTH)
  }


// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)

}

init()
// drawBoard()
// animate()
