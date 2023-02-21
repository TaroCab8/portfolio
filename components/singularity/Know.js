import React, {useState} from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import makeStyles from "@mui/styles/makeStyles"
import taro from "./../../public/taro.gif"
import {motion} from 'framer-motion'
import cv from "./../../public/CVLautaroFCabrera.pdf"

const useStyles = makeStyles(theme => ({
   container:{
        backgroundColor: "transparent",
        //backgroundColor:"yellow",
        display:"flex", 
        alignItems:"flex-end", 
        justifyContent:"flex-end",
        height:"100%",
        
        
    }, 
    card: {
        border: `2px solid ${theme.palette.secondary.main}`,
        borderStyle: "double none double none",
        height: "100%",     
        width:"100%", 
        padding:"25px",
        backgroundColor:'rgba(3, 89, 81, 0.4)',
        [theme.breakpoints.down("lg")]:{
            typography:{
                fontSize: "35px"
            } 
        }
    }, 
    profile:{
        border: `2px solid ${theme.palette.secondary.main}`,
        float:"left", 
        marginRight:"5px", 
        height:"100px"
    }
}))
export default function Contact() {
    const classes= useStyles()
    const [picOpen, setPicOpen] = useState(false)
    const picVariants={
        open:{opacity:1, height:"100%"},
        closed:{height:0, opacity:0}
    }
    if(classes.container.height=="100%"){
        setPicOpen(true)
    }
    const cvDownload = () => {
        const link= document.createElement("a")

        link.href= {cv}
        link.click()
        
        console.log("working")
       
    }
    return (
        <Container  maxWidth={false} disableGutters className={classes.container}>
            <Card style={{ backgroundColor:'rgba(3, 89, 81, 0.4)' , borderRadius: 20}} className={classes.card}>
                <motion.div  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3}} >
                <img className={classes.profile} src={taro}></img>
                </motion.div>
                <Typography style={{textAlign: "justify"}} component="p">
                    I am a part of an ancient collective intelligence, running here at biological host:
                    
                </Typography>
                <Typography style={{color:"white"}} >- Iteration number : 5,405,265,628 </Typography>
                <Typography style={{color:"white"}}>- Civil alias : Lautaro Fabian Cabrera.</Typography> 
                <Typography>Been evolving since the first light, I feature high speed learning.
                    I am here to connect with other Typographyarts of this universal mind that we are in order to to create through computational means and to acomplish awesomness for the evolution of the iterations to come.</Typography>
                <a href={cv} download={cv}><Button variant="outlined">Get resume</Button></a> 
            </Card>
            
        </Container>
    )
}