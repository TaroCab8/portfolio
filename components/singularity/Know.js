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
import text0s from "./../../public/text"


const useStyles = makeStyles(theme => ({
   container:{
        backgroundColor: "transparent",
        //backgroundColor:"yellow",
        display:"flex", 
        alignItems:"center", 
        justifyContent:"center",
        alignSelf:"center",
        height:"100%",
        padding:"25px",
        [theme.breakpoints.down("sm")]:{
            height:"80%"
         }
        
        
    }, 
    card: {
        border: `2px solid ${theme.palette.secondary.main}`,
        borderStyle: "double none double none",
        height: "100%",     
        width:"100%", 
        paddingTop:"10px",
        paddingBottom:"10px",
        
        backgroundColor:'rgba(3, 89, 81, 0.4)',
    
        
    }, 
    profile:{
        border: `2px solid ${theme.palette.secondary.main}`,
        float:"left", 
        marginRight:"10px", 
        marginBottom:"8px", 
        height:"100px"
    },
    typo:{
        lineHeight:1.1,
        color:"white",
        [theme.breakpoints.up("lg")]:{
            fontSize:"16px",
            lineHeight: 1.5
        }
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

    //let language= localStorage.getItem("Language")
    //console.log(`Know component says: Here Language is: ${language}`)
    
    return (
        <Container  maxWidth={false} disableGutters className={classes.container}>
            <Card style={{ backgroundColor: 'rgba(3, 89, 81, 0.4)', borderRadius: 20, height:"100%", display:"flex", flexDirection:"column", justifyContent:"spaceEvenly"}} className={classes.card}>
                <CardContent>
                    <motion.div  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3}} >
                    <img className={classes.profile} src={taro}></img>
                    </motion.div>
                    <Typography variant="body2" className={classes.typo}>{text0s.know.intro.francais}</Typography>
                    <br/>
                    <Typography variant="body2" className={classes.typo}>{text0s.know.middle.francais}</Typography>
                    <br/>
                    <Typography variant="body2" className={classes.typo}>{text0s.know.end.francais}</Typography>
                </CardContent>
                <CardActions style={{width: "90%", display:"flex", justifyContent:"center", alignItens:"center", paddingBottom:"10px"}} ><a href={cv} download={cv}><Button variant="outlined" style={{border: "2px solid #22B7F2",backgroundColor:'#012E40',width:"80%",color:'white',zIndex: 999}} >CV</Button></a> </CardActions>
                
            </Card>
            
        </Container>
    )
}