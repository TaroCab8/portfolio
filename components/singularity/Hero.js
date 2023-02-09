import React from "react"
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

export default function Hero() {
    return(
        <Container style={{height:"970px", display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column",backgroundColor: "lightCoral" }}>
            
                <Typography variant="h3" style={{fontFamily:"Roboto", color:"white"}}>Hola</Typography>
                <Typography variant="h5" style={{fontFamily:"Roboto",color:"white"}}>Vengo a programar</Typography>
           
        </Container>
        
    )
}