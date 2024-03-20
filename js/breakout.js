rulesBtn = document.getElementById('rules-btn')
rules = document.getElementById('rules')
closeBtn = document.getElementById('close-btn')
canvas = document.getelementById('canvas')
ctx = canvas.getContext('2d')

// Create ball properties
ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 4,
    dx: 4;
    dy: -4;
}

// Create Paddle Properties
paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height - 20,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0;
}

// Draw ball on canvas
function drawBall() {
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, 50, 0, Math.PI * 2, true);
    ctx.fillStyle = '#0095599'
    ctx.fill()
    ctx.closePath()
}

drawBall()

// Rules open and close event handlers.
rulesBtn.addEventListener('click', () => {
    rulesBtn.classList.toggle('show')
})
closeBtn.addEventListener('click', () => {
    rules.classList.remove('show')
})
