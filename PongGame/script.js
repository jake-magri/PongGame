// Update Loop
import Ball from "./Ball.js"

const ball = new Ball(document.getElementById("ball"))

let lastTime
function update(time) {
    if(lastTime != null){
        const delta = time - lastTime
        ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()]) 
        computerPaddle.update(delta, ball.y)
        const hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"))

        document.documentElement.style.setProperty("--hue", hue + delta * 0.01)

        if(isLose()) handleLose()
    }
    
    lastTime = time
    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)