export default class Ball {
    constructor(ballElem) {
        this.ballElem = ballElem
        this.reset()
    }

    get x(){
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
    }

    set x(value){
    this.ballElem.style.setProperty("--x", value)
    }

    get y(){
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))
    }

    set y(value){
        this.ballElem.style.setProperty("--y", value)
    }

    reset(){
        this.x = 50
        this.y = 50
        this.direction = { x: 0}
        while (
            Math.abs(this.direction.x) <= 0.2 || 
            Math.abs(this.direction.x) >= 0.9
        ) {
            const heading = randomNumberBetween(0, 2 * Math.PI)
            this.direction = { x: Math.cos(heading), y: Math.sin(heading)}
        }
        this.velocity = INITIAL_VELOCITY
    }

    update(delta, paddleRects) {
    this.x += this.direction.x * this.velocity * delta
    this.y += this.direction.y * this.velocity * delta
    this.velocity += VELOCITY_INCREASE * delta
    const rect = this.rect()
    // checks if ball is off top or bottom of the screen.
    if (rect.bottom >= window.innerHeight || rect.top <= 0) {
        this.direction.y *= -1
    }
    // checks if any of our rectangles(rect) had a collision with the ball.
    if (paddleRects.some(r => isCollision(r, rect))) {
        this.direction.x *= -1
    }
    }
}

function randomNumberBetween(min, max){
    return Math.random() * (max - min) + min
}