// Update Loop
import Ball from "./Ball.js"

const ball = new Ball(document.getElementById("ball"))

let lastTime
function update(time) {
    if(lastTime != null){
        const delta = time - lastTime
        ball.update(delta) 
        //Update code
    }
    
    lastTime = time
    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)