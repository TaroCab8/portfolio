import React, {useRef, useState,useEffect} from 'react'
import personaje from "./../../public/gameImg/personaje.png"
import map from "./../../public/gameImg/map.png"
import {Redirect} from 'react-router-dom'

const CanvasGame = props => {
  const canvasRef= useRef(null)
  const [portal4, setPortal4] = useState(false)
  const [portal3, setPortal3] = useState(false)
  const [portal2, setPortal2] = useState(false)
  const [portal1, setPortal1] = useState(false)


  const playerSprite = new Image();
  playerSprite.src = personaje;
  const background = new Image();
  background.src = map;
  
  const rectangles = [
    {
       x:40,
       y:220,
       w:110,
       h:120
     },
     {
       x:322,
       y:340,
       w:128,
       h:70,
     },
     {
       x:35,
       y:440,
       w:110,
       h:100,
     },
     {
       x:580,
       y:410,
       w:240,
       h:180,
     },
     {
       x:660,
       y:230,
       w:150,
       h:80,
     },
     {
       x:0,
       y:600,
       w:340,
       h:200,
     },
     {
       x:470,
       y:590,
       w:340,
       h:210,
     },
     {
       x:200,
       y:180,
       w:135,
       h:50,
     },
     {
       x:450,
       y:180,
       w:135,
       h:50,
     },
     {
       x:270,
       y:540,
       w:60,
       h:70,
     },
     {
       x:470,
       y:540,
       w:60,
       h:70,
     },

   ]
  
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 800;
    let colisioned = {
      up: false,
      down: false,
      right: false,
      left: false
    }
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
      if (keys[38] && player.y > 140 && colisioned.up == false) {
        player.y -= player.speed;
        player.frameY = 3;
        player.moving = true;
      }
      if (keys[37] && player.x > 0 && colisioned.left == false) {
        player.x -= player.speed;
        player.frameY = 1;
        player.moving = true;
      }
      if (keys[40] && player.y < 625 && colisioned.down == false) {
        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
      }
      if (keys[39] && player.x < 750 && colisioned.right == false) {
        player.x += player.speed;
        player.frameY = 2;
        player.moving = true;
      }
    }
       
    const handlePlayerFrame = () => {
      if (player.frameX < 3 && player.moving === true) player.frameX++;
      else player.frameX = 0;
    }
    
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

        let collisions = rectangles.map(r => {
          return !(player.x > r.x + r.w || player.x + player.width < r.x|| player.y > r.y + r.h || player.y + player.height   < r.y)}).filter(a => a == true)

      movePlayer();
        
        if(collisions.includes(true) && keys[38]) {
          colisioned.up = true
        } else colisioned.up = false
        
        if(collisions.includes(true) && keys[37]){
          colisioned.left = true
        } else colisioned.left = false

        
        if(collisions.includes(true) && keys[39]){
          colisioned.right= true
        } else colisioned.right= false
        
        if(collisions.includes(true) && keys[40]){
          colisioned.down = true
        } else colisioned.down = false 


      }
      
      if(player.x === 362 && player.y === 141){
        console.log("redirecting")
        setPortal4(true)
      }
      
        
      handlePlayerFrame() 
      
    }

    
    
    
    startAnimating(24)
    
  },[])
  
  if(portal4){
    return (<Redirect to={"/quest"}/>)
  }
  return <canvas ref={canvasRef} {...props}/>  
}

export default CanvasGame
