import React, {useRef, useEffect} from 'react'
import personaje from "./../../public/gameImg/chewie.png"
import map from "./../../public/gameImg/map.png"

const CanvasGame = props => {
  const canvasRef= useRef(null)

  const playerSprite = new Image();
  playerSprite.src = personaje;
  const background = new Image();
  background.src = map;
  
  
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 800;

    const keys = [];
  
    const player = {
      x: 380,
      y: 600,
      width: 40,
      height: 72,
      frameX: 0,
      frameY: 0,
      speed: 9,
      moving: false
    };
    const drawSprite = (img, sX, sY, sW, sH, dX, dY, dW, dH) => {
      ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }
  
   
    
    window.addEventListener("keydown", function(e) {
      keys[e.keyCode] = true;
      player.moving = true;
    });
    
    window.addEventListener("keyup", function(e) {
      delete keys[e.keyCode];
      player.moving = false;
    });

    const movePlayer = () => {
      if (keys[38] && player.y > 100) {
        player.y -= player.speed;
        player.frameY = 3;
        player.moving = true;
      }
      if (keys[37] && player.x > 0) {
        player.x -= player.speed;
        player.frameY = 1;
        player.moving = true;
      }
      if (keys[40] && player.y < 750) {
        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
      }
      if (keys[39] && player.x < 750) {
        player.x += player.speed;
        player.frameY = 2;
        player.moving = true;
      }
    }
    
    const handlePlayerFrame = () => {
      if (player.frameX < 3 && player.moving === true) player.frameX++;
      else player.frameX = 0;
    }
    /*function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        drawSprite(
          playerSprite,
          player.width * player.frameX,
          player.height * player.frameY,
          player.width,
          player.height,
          player.x,
          player.y,
          player.width,
          player.height
        );
        movePlayer();
        handlePlayerFrame();
        requestAnimationFrame(animate);
      }
      
      animate();*/
    
    let fps, fpsInterval, startTime, now, then, elapsed;
    
    const startAnimating = (fps) => {
      fpsInterval = 1000 / fps;
      then = Date.now();
      startTime = then;
      animate();
    }
    const animate = () => {
      requestAnimationFrame(animate);
      now = Date.now();
      elapsed = now - then;
      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        drawSprite(
          playerSprite,
          player.width * player.frameX,
          player.height * player.frameY,
          player.width,
          player.height,
          player.x,
          player.y,
          player.width,
          player.height
        );
        movePlayer();
        handlePlayerFrame();
      }
    }
    
    startAnimating(24)
  },[])

  return <canvas ref={canvasRef} {...props}/>

  
  
  
  
  
}


export default CanvasGame
