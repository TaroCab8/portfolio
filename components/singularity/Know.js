import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Card from "@mui/material/Card"
import makeStyles from "@mui/styles/makeStyles"

const useStyles = makeStyles(theme => ({
   container:{
        backgroundColor:"transparent",
        display:"flex", 
        alignItems:"flex-end", 
        justifyContent:"flex-end",
        height:"100%",
        marginBottom:"50px"
        
    }, 
    card: {
        border: `2px solid ${theme.palette.secondary.main}`,
        borderStyle: "double none double none",
        height: "60%", 
        width:"100%", 
        padding:"25px" 
    }
}))
export default function Contact() {
    const classes= useStyles()
    return (
        <Container  maxWidth={false} disableGutters className={classes.container}>
            <Card style={{backgroundColor:'rgba(3, 89, 81, 0.4)', borderRadius: 20}} className={classes.card}>
                <Typography  component="p">
                    Hi, I am a part of an ancient natural intelligence, currently running at: 
                    Biological host iteration number 5,405,265,628. Civil alias: Lautaro Fabian Cabrera.
                    Been evolving since the first light, I feature high speed learning.
                    I am here to connect with other parts of this universal mind that we are in order to to create through computational means and to acomplish awesomness for the evolution of the iterations to come.
                </Typography>
            </Card>
            
        </Container>
    )
}