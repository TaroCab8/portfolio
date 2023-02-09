import React, {useEffect, useRef} from "react"

import {makeStyles} from "@mui/styles"

const useStyles = makeStyles(theme => ({
    canvasStyle: {
        width: '100vw',
        height: '100vh'
    }
        
}))

const CanvasSingular = props => {
    const canvasRef=useRef(null)
    const classes = useStyles()
    const colors={
        verde:"rgba(24,68,53,1)",
        rojo:"rgba(124,29,6,1)",
        dorado:"rgba(110,92,20,0.7)",
        azulcito:"rgba(22,64,104,1)",
        violeta:"rgba(62,29,100,1)"
        
    }
    useEffect(() =>{
    const canvas= canvasRef.current
    const ctx = canvas.getContext("2d");

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    const grd= ctx.createLinearGradient(0,0,600,1)
    grd.addColorStop(1,"#3E1D64")
    grd.addColorStop(0,"#164068")
    ctx.fillStyle = grd
    ctx.fillRect(0,0, canvas.width, canvas.height)

/** hexagone maker */
    const a = 2 * Math.PI / 6
    const r = {
       final: 50,
       salida: 200,
       linea: 150,
       shadow: 145,
       light: 50
   }
   function drawHexagon(x,y,radio, color, colorStroke) {
       ctx.beginPath();
       for(let i = 0; i < 6; i++){
           ctx.lineTo(x + radio * Math.cos(a * i), y + radio * Math.sin(a * i))
       }
       ctx.closePath()
       ctx.strokeStyle= colorStroke
       ctx.stroke()
       ctx.fillStyle= color
       ctx.fill();
   }
    // 11- hexagono final
    
    drawHexagon(r.final, r.final, r.final, colors.verde,"rgba(166,125,75,1)") 
 
   for(let y = r.final; y < canvas.height; y++){
       drawHexagon(r.final, y, r.final, colors.verde, "rgba(166,125,75,1)")
   }
    
    },[])

    return <canvas ref={canvasRef} {...props}/>
}

export default CanvasSingular