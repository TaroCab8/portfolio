import React from 'react'

export default function Fondo() {
    
    const matrix=[]

    for(let y = 0; y < window.innerHeight; y++){
        
        for(let x=0; x< window.innerWidth; x++){
            
            matrix.push(x,y)
                
            }
              
        }
    console.log(matrix)    
    return(
        <div>
            hola  
        </div>
    )
}

// en una matrix de y * x donde y es menor a height y X menor  a width, return a div de cierto ancho por tal alto.