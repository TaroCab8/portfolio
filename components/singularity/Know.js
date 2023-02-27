import React, {useState} from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import makeStyles from "@mui/styles/makeStyles"
import useMediaQuery from "@mui/material/useMediaQuery"
import taro from "./../../public/taro.gif"
import {motion} from 'framer-motion'
import cv from "./../../public/CVLautaroFCabrera.pdf"

const useStyles = makeStyles(theme => ({
   container:{
        backgroundColor: "transparent",
        //backgroundColor:"yellow",
        display:"flex", 
        alignItems:"center", 
        justifyContent:"center",
        height:"95%",
        [theme.breakpoints.down("desktop")]:{
            backgroundColor: "red"
        }
        
        
    }, 
    card: {
        border: `2px solid ${theme.palette.secondary.main}`,
        borderStyle: "double none double none",
        height: "100%",     
        width:"80%", 
        
        backgroundColor:'rgba(3, 89, 81, 0.4)',
        
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
            <Card style={{ backgroundColor: 'rgba(3, 89, 81, 0.4)', borderRadius: 20, height:"100%", display:"flex", flexDirection:"column", justifyContent:"space-around"}} className={classes.card}>
                <CardContent>
                    <motion.div  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3}} >
                    <img className={classes.profile} src={taro}></img>
                    </motion.div>
                    <Typography style={{textAlign: "justify"}} component="p">
                        I am a part of an ancient collective intelligence, running here at biological host:    
                    </Typography>
                </CardContent>
                
                
                <CardContent>
                    <Typography style={{color:"white"}} >- Iteration number : 5,405,265,628 </Typography>
                    <Typography style={{color:"white"}}>- Civil alias : Lautaro Fabian Cabrera.</Typography> 
                    <Typography>Been evolving since the first light, I feature high speed learning.
                        I am here to connect with other Typographyarts of this universal mind that we are in order to to create through computational means and to acomplish awesomness for the evolution of the iterations to come.</Typography>
                </CardContent>
                <CardActions style={{width: "100%", justifyContent:"center"}} ><a href={cv} download={cv}><Button variant="outlined" style={{border: "2px solid #22B7F2",backgroundColor:'#012E40',width:"80%",color:'white',zIndex: 999}} >CV</Button></a> </CardActions>
                
            </Card>
            
        </Container>
    )
}