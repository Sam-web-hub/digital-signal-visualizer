import utils, { getInputValue, randomIntFromRange } from './utils'


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

const HEIGHT = 300
const WIDTH = innerWidth

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

document.querySelector("body > input[type=submit]:nth-child(6)").onclick =()=> {  
BINARY =  getInputValue()
drawBoard()
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
  
  c.beginPath();
  c.moveTo(5, HEIGHT / 2)
  c.lineTo(WIDTH-5,HEIGHT / 2)
  c.lineWidth = 3
  c.stroke();
 
  c.beginPath();
  c.lineWidth = .5
  for (let i = 50; i <(50*BINARY.length)+50; i += 50) 
  {
  c.moveTo(i, 5);
  c.lineTo(i,HEIGHT -5);
  c.stroke();
 }
}

// Implementation
// let objects
function init() {
  drawBoard()
 
  }


// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  // objects.forEach(object => {
  //  object.update()
  // })
}

init()
// drawBoard()
// animate()
