import React, {useEffect, useState,useRef} from "react"

import makeStyles from "@mui/styles/makeStyles"

const useStyles = makeStyles(theme => ({
    canvasStyle: {
        width: '50vh',
        height: '80vh'
    },
    colors: {
        main: theme.palette.primary.main
    }
        
}))

const CanvasSingular = props => {
    const canvasRef=useRef(null)
    const classes = useStyles()
    
    useEffect(() =>{
    const canvas= canvasRef.current
    const ctx = canvas.getContext("2d");


    canvas.width =  window.innerWidth / 2
    canvas.height =  window.innerHeight - window.innerHeight /3

    /*const grd= ctx.createLinearGradient(0,0,600,1)
    grd.addColorStop(1,"#3E1D64")
    grd.addColorStop(0,"#164068")
    ctx.fillStyle = "red"
    ctx.rect(0,0, canvas.width, canvas.height)
    ctx.fill()*/

/** hexagone maker
    const a = 2 * Math.PI / 6
    const r = {
       final: 50,
       salida: 200,
       linea: 150,
       shadow: 145,
       light: 50
   }
   
   function drawHexagon(x,y,radio, colorStroke) {
       ctx.beginPath();
       for(let i = 0; i < 6; i++){
           ctx.lineTo(x + radio * Math.cos(a * i), y + radio * Math.sin(a * i))
       }
       ctx.closePath()
       ctx.strokeStyle= colorStroke
       ctx.lineWidth = 3
       ctx.stroke()      
   }
*/   
/** CIRCLES */

//Light
ctx.beginPath()
ctx.arc(canvas.width /2, canvas.height/2, 120, 0, Math.PI * 2)
ctx.arc(canvas.width /2, canvas.height/2, 175,0, Math.PI * 2)
let radGradIn = ctx.createRadialGradient(canvas.width/2, canvas.height / 2 , 120, canvas.width/2, canvas.height / 2, 175)
radGradIn.addColorStop(1, 'rgba(1, 46, 64, 0.2)')
radGradIn.addColorStop(0, 'rgba(34, 183, 242, 0.4)')
ctx.fillStyle = radGradIn
ctx.fill()
ctx.closePath()
   

    
   function circleDraw(radio, color, grosor){
    ctx.beginPath()
    ctx.arc(canvas.width /2, canvas.height/2, radio, 0, Math.PI * 2)
    ctx.strokeStyle = color
    ctx.lineWidth = grosor
    ctx.stroke()
   }
   // outter circles
   circleDraw(200,'rgba(1, 46, 64, 1)',5)
   circleDraw(196,'rgba(1, 46, 64, 0.8)',5)
   circleDraw(192,'rgba(1, 46, 64, 0.6)',5)
   circleDraw(187,'rgba(1, 46, 64, 0.4)',5)

// end outter circles

//inner circles


ctx.beginPath()
   ctx.arc(canvas.width /2, canvas.height/2, 21, 0, Math.PI * 2)
   ctx.fillStyle ='black'
   ctx.fill()
   ctx.closePath()

circleDraw(60,'#035951',90)

   let radGradCenter = ctx.createRadialGradient(canvas.width/2, canvas.height / 2 , 60, canvas.width/2, canvas.height / 2, 2)
    radGradCenter.addColorStop(1, "black")
    radGradCenter.addColorStop(1, "#004B47")
    radGradCenter.addColorStop(0, '#035951')
    ctx.strokeStyle = radGradCenter
    ctx.stroke()

circleDraw(60,'#22B7F2',2)
circleDraw(100,'rgba(34, 183, 242, 1)',25)
circleDraw(150,'rgba(34, 183, 242, 1)',2)

   
//end inner circles 

/* Arc */
   //inner 5
   function arcos (radio, rad1, rad2, grosor) {
    ctx.beginPath()
   ctx.arc(canvas.width / 2, canvas.height / 2, radio, rad1* Math.PI, rad2 * Math.PI, false);
   ctx.lineWidth = grosor
   ctx.strokeStyle = "rgba(34, 183, 242, 1)"
   ctx.stroke()
   }
   arcos(120,1.15,1.35,2)
   arcos(120,1.55,1.75,2)
   arcos(120,1.95,0.15,2)
   arcos(120,0.35,0.55,2)
   arcos(120,0.75,0.95,2)

   //outter 

   arcos(160,1.15,1.35,4)
   arcos(160,1.38,1.53,4)
   arcos(160,1.55,1.75,4)
   arcos(160,1.78,1.93,4)
   arcos(160,1.95,0.15,4)
   arcos(160,0.18,0.33,4)
   arcos(160,0.35,0.55,4)
   arcos(160,0.58,0.73,4)
   arcos(160,0.75,0.95,4)
   arcos(160,0.93,1.13,4)
   
   /* End Arc */

    
    },[])

    return <canvas ref={canvasRef} {...props}/>
}

export default CanvasSingular